import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { experiences, site, skillGroups } from './data/site'
import { projects } from './data/projects'

function App() {
  return (
    <div className="min-h-svh">
      <Nav name={site.name} />
      <main>
        <Hero
          name={site.name}
          role={site.role}
          roleHighlight={site.roleHighlight}
          tagline={site.tagline}
        />
        <About bio={site.bio} location={site.location} availability={site.availability} />
        <Experience blocks={experiences} />
        <Skills groups={skillGroups} />
        <Projects items={projects} />
        <Contact
          email={site.email}
          linkedinUrl={site.linkedinUrl}
          githubUrl={site.githubUrl}
          whatsappUrl={site.whatsappUrl}
          whatsappLabel={site.whatsappLabel}
        />
      </main>
      <Footer name={site.name} githubUrl={site.githubUrl} whatsappUrl={site.whatsappUrl} />
    </div>
  )
}

export default App
