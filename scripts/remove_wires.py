#!/usr/bin/env python3
"""Remove cable clutter — color-based wires on light wall; minimal manual regions."""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

import cv2
import numpy as np


def build_mask(img: np.ndarray) -> np.ndarray:
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    L = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[:, :, 0].astype(np.int16)

    y_idx = np.arange(h, dtype=np.int32)[:, None]
    x_idx = np.arange(w, dtype=np.int32)[None, :]

    # LCD + light bar only (leave bezel gutters for vertical cables)
    lcd = (
        (x_idx >= int(w * 0.292))
        & (x_idx <= int(w * 0.708))
        & (y_idx >= int(h * 0.078))
        & (y_idx <= int(h * 0.505))
    )
    lightbar = (
        (x_idx >= int(w * 0.26))
        & (x_idx <= int(w * 0.74))
        & (y_idx >= int(h * 0.038))
        & (y_idx <= int(h * 0.112))
    )
    exclude_panel = lcd | lightbar

    dark = gray < 86
    wallish = (L >= 136) & (L <= 248)

    m = (wallish & dark & (~exclude_panel)).astype(np.uint8) * 255

    desk_left = (
        (y_idx >= int(h * 0.38))
        & (y_idx <= int(h * 0.84))
        & (x_idx <= int(w * 0.46))
        & (~exclude_panel)
    )
    desk_right = (
        (y_idx >= int(h * 0.44))
        & (y_idx <= int(h * 0.72))
        & (x_idx >= int(w * 0.805))
        & (x_idx <= int(w * 0.995))
        & (~exclude_panel)
    )
    desk_cables = ((gray < 76) & (desk_left | desk_right)).astype(np.uint8) * 255

    # Maço na mesa — baixo contraste com o tampo escuro (sem teste de luminância da parede)
    bl_box = (
        (y_idx >= int(h * 0.56))
        & (y_idx <= int(h * 0.94))
        & (x_idx <= int(w * 0.30))
        & (~exclude_panel)
    )
    desk_dense = ((gray < 68) & bl_box).astype(np.uint8) * 255

    mask = cv2.bitwise_or(cv2.bitwise_or(m, desk_cables), desk_dense)

    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, k, iterations=2)
    mask = cv2.dilate(mask, k, iterations=2)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    filtered = np.zeros_like(mask)
    for c in contours:
        a = cv2.contourArea(c)
        if 24 < a < 90000:
            cv2.drawContours(filtered, [c], -1, 255, -1)
    mask = filtered

    subject = np.zeros((h, w), dtype=np.uint8)
    cv2.ellipse(
        subject,
        (int(w * 0.5), int(h * 0.52)),
        (int(w * 0.135), int(h * 0.43)),
        0,
        0,
        360,
        255,
        thickness=-1,
    )
    mask = cv2.bitwise_and(mask, cv2.bitwise_not(subject))
    return mask


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    assets = root / "src" / "assets"
    dst = assets / "maicon-portrait.png"
    bak = dst.with_suffix(dst.suffix + ".bak")

    src = bak if bak.is_file() else dst
    img = cv2.imread(str(src), cv2.IMREAD_COLOR)
    if img is None:
        print("Failed to read", src, file=sys.stderr)
        return 1

    mask = build_mask(img)
    out = cv2.inpaint(img, mask, inpaintRadius=3, flags=cv2.INPAINT_TELEA)

    if not bak.is_file() and dst.exists():
        shutil.copy2(dst, bak)

    cv2.imwrite(str(dst), out, [cv2.IMWRITE_PNG_COMPRESSION, 3])
    print("Wrote", dst)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
