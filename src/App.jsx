import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  { title: 'Nex-Zen', meta: 'Modern digital experience', description: 'A sharp, responsive product experience with bold visual direction.', tech: ['React', 'Next.js', 'UI/UX'], image: '/assets/project-shop.svg', preview: 'https://nex-zen.vercel.app/', url: 'https://nex-zen.vercel.app/', color: 'coral' },
  { title: 'Mahakaal Tours & Travels', meta: 'Travel and booking website', description: 'A polished travel platform for discovering Ayodhya and Mahakaal tours.', tech: ['React', 'Next.js', 'Tailwind CSS'], image: 'https://mahakaltourstravel.in/public/light-hero.webp', preview: 'https://mahakaltourstravel.in/', url: 'https://mahakaltourstravel.in/', color: 'blue' },
  { title: 'Adhikar AI', meta: 'Interactive web project', description: 'An intelligent, expressive interface built around a clear digital journey.', tech: ['AI', 'JavaScript', 'Interface'], image: '/assets/project-dashboard.svg', url: 'https://project-z1e1d.vercel.app/', color: 'yellow' },
  { title: 'Vandna Computer', meta: 'Business website experience', description: 'A trustworthy web presence for a local technology and education brand.', tech: ['HTML', 'CSS', 'Responsive'], image: '/assets/project-ai.svg', preview: 'https://vandna-computer.vercel.app/', url: 'https://vandna-computer.vercel.app/', color: 'green' },
]

const certificates = [
  { title: 'Google Agentic AI', meta: 'AI certification · Devesh Kumar', file: '/assets/Ai_Devesh_Certified.pdf', accent: 'violet' },
  { title: 'Mind Installers Hackathon 4.0', meta: 'Certificate of Excellence · Devesh Kumar', file: '/assets/Devesh_hackAITD.pdf', accent: 'orange' },
  { title: 'Fresher Party', meta: 'Participation certificate · Devesh Kumar', file: '/assets/Devesh fresher party.pdf', accent: 'blue' },
  { title: 'Bug Bash', meta: 'Hackathon certificate · Devesh Kumar', file: '/assets/Bug%20Bash.pdf', accent: 'green' },
  { title: 'Code Quest', meta: 'Competition certificate · Devesh Kumar', file: '/assets/Code%20QUest.pdf', accent: 'violet' },
  { title: 'Devcation Delhi', meta: 'Developer event certificate · Devesh Kumar', file: '/assets/Devcation%20Delhi.pdf', accent: 'orange' },
  { title: 'Hack AIDT', meta: 'Hackathon certificate · Devesh Kumar', file: '/assets/Hack%20AIDT.pdf', accent: 'blue' },
  { title: 'Hack Devengers', meta: 'Hackathon certificate · Devesh Kumar', file: '/assets/Hack%20Devengers.pdf', accent: 'green' },
  { title: 'OOSC 4.0 Hackathon', meta: 'Hackathon certificate · Devesh Kumar', file: '/assets/OOSC%204.0%20Hackathon.pdf', accent: 'violet' },
  { title: 'Tagline Challenge', meta: 'Challenge certificate · Devesh Kumar', file: '/assets/Tagline%20Challenge.pdf', accent: 'orange' },
]

const achievements = [
  { title: 'Mind Installers Hackathon 4.0', award: 'Certificate of Excellence', date: 'April 15-16, 2026', organization: 'IIMT Colleges, Greater Noida | National-level', detail: 'Outstanding leadership & execution — Team Syntrix', accent: 'orange' },
  { title: 'Google Agentic Premier League', award: 'Participant', organization: 'Google Developer Groups', detail: 'Participated in an agentic AI challenge focused on practical problem-solving.', accent: 'violet' },
  { title: 'Medha Group Of Foundation Workshops', award: 'Workshop Participant', organization: 'Medha Group Of Foundation', detail: 'Participated in foundation workshops focused on learning, collaboration, and growth.', accent: 'blue' },
]

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Next.js', 'Responsive UI', 'UI/UX', 'Figma', 'Bootstrap', 'APIs', 'Git & GitHub', 'Animation', 'Performance']

const skillGroups = [
  ['Programming', ['JavaScript', 'Python', 'PHP', 'Java', 'C', 'SQL']],
  ['Web Development', ['HTML5', 'CSS3', 'React', 'Next.js', 'Node.js', 'REST APIs']],
  ['Design & Product', ['Figma', 'UI/UX', 'Responsive Design', 'Wireframing', 'Design Systems']],
  ['Tools & DevOps', ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'APIs']],
  ['Exploring', ['AI Products', 'Agentic AI', 'Animation', 'Performance', 'Full Stack MERN']],
]

const journey = [
  ['2024 - present', 'Diploma in Information Technology', 'Hewett Polytechnic, Lucknow, Uttar Pradesh', 'Building the foundation across software, web technologies, and product thinking.'],
  ['Next chapter', 'PHP Technology', 'Softflew Technologies', 'Learning PHP through practical development work and real-world technical workflows.'],
  ['Then', 'Hackathon Builder', 'Hackathons & team challenges', 'Started playing hackathons, turning ideas into working products under time pressure.'],
  ['Now', 'Learning more technologies', 'React · Next.js · APIs · UI/UX', 'Expanding across modern web systems, animation, product thinking, and interface craft.'],
  ['In progress', 'Full Stack MERN', 'Infoseek Technology', 'Deepening MongoDB, Express, React, and Node.js into a complete full-stack practice.'],
]

function App() {
  const [route, setRoute] = useState(window.location.pathname || '/')
  const [intro, setIntro] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname || '/')
    const move = (event) => setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY, visible: true }))
    window.addEventListener('popstate', onPopState)
    window.addEventListener('pointermove', move)
    const timer = window.setTimeout(() => setIntro(false), 1550)
    return () => { window.removeEventListener('popstate', onPopState); window.removeEventListener('pointermove', move); window.clearTimeout(timer) }
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      {intro && <div className="intro-screen"><div className="intro-name"><span>D</span><span>E</span><span>V</span></div><p>Devesh Kumar / portfolio</p></div>}
      <Header navigate={navigate} />
      {route === '/projects' ? <ProjectsPage setCursor={setCursor} /> : route === '/achievements' ? <AchievementsPage /> : route === '/about' ? <AboutPage navigate={navigate} /> : route === '/skills' ? <SkillsPage /> : route === '/contact' ? <ContactPage /> : <HomePage navigate={navigate} setCursor={setCursor} />}
      <Footer navigate={navigate} />
      <div className={`cursor-orbit ${cursor.visible ? 'cursor-visible' : ''} ${cursor.active ? 'cursor-project' : ''}`} style={{ left: cursor.x, top: cursor.y }} aria-hidden="true"><span /></div>
      <div className="cursor-label" style={{ left: cursor.x, top: cursor.y, opacity: cursor.active ? 1 : 0 }}>open project ↗</div>
    </main>
  )
}

function Header({ navigate }) {
  return <header className="site-header"><button className="brand" onClick={() => navigate('/')} aria-label="Go home"><b>D</b><b>E</b><b>V</b><i>.</i></button><nav><button onClick={() => navigate('/')}>work</button><button onClick={() => navigate('/about')}>about</button><button onClick={() => navigate('/skills')}>skills</button><button onClick={() => navigate('/projects')}>projects</button><button onClick={() => navigate('/achievements')}>achievements</button><button onClick={() => navigate('/contact')}>contact</button></nav><div className="linkedin-wrap"><a className="linkedin-button" href="https://www.linkedin.com/in/deveshkumar226022/" target="_blank" rel="noreferrer" aria-label="Devesh Kumar on LinkedIn">in</a><a className="linkedin-popover" href="https://www.linkedin.com/in/deveshkumar226022/" target="_blank" rel="noreferrer"><img src="/assets/DevPp.jpeg" alt="Devesh Kumar" /><strong>Devesh Kumar</strong><span>Product Builder · Creative Technologist</span><b>Connect on LinkedIn <i>↗</i></b></a></div></header>
}

function HomePage({ navigate, setCursor }) {
  return <>
    <section className="hero" id="top">
      <div className="hero-top"><span><i /> Independent digital builder</span><span>Lucknow, India <b>·</b> Available for opportunities</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-eyebrow">DE V E S H&nbsp; K U M A R <span> / 2026</span></p>
          <h1><span>I build</span><em>useful things.</em></h1>
          <p className="hero-description">Digital products with a sharp eye for detail, a curious mind, and code that brings good ideas to life.</p>
          <div className="hero-actions"><button className="hero-primary" onClick={() => navigate('/projects')}>Explore my work <span>↗</span></button><button className="hero-secondary" onClick={() => navigate('/about')}>A little about me <span>↓</span></button></div>
          <div className="hero-facts"><div><strong>04</strong><span>live projects</span></div><i /><div><strong>12<span>+</span></strong><span>tools in my kit</span></div><i /><div><strong>01</strong><span>very curious mind</span></div></div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/assets/Devesh.jpeg" alt="Devesh Kumar outside his college" /><span className="portrait-index">DK — 01</span><span className="portrait-caption">Currently making<br /><b>the internet useful.</b></span></div>
          <div className="portrait-seal"><span>IDEAS<br />INTO<br />IMPACT</span><b>✳</b></div>
          <span className="portrait-side-note">DESIGN / BUILD / REPEAT</span>
        </div>
      </div>
      <div className="hero-bottom"><span className="hero-scroll"><i /> Scroll to explore</span><div className="hero-capabilities"><span>PRODUCT THINKING</span><i /> <span>INTERFACES</span><i /> <span>FRONT-END</span><i /> <span>GOOD DETAILS</span></div><span className="hero-location">26°50&apos; N&nbsp; 80°56&apos; E</span></div>
    </section>
    <section className="horizontal-statement point-of-view"><div className="point-heading"><span className="section-kicker">(01) the point of view</span><span>BUILT FOR PEOPLE, NOT JUST SCREENS</span></div><div className="statement-inner point-copy"><p>I build <mark>real-world products</mark>, not just projects.<em>From the first spark to the system underneath, I care about every detail people can feel.</em></p><span className="point-arrow">↘</span></div><div className="statement-footer"><span>Devesh Kumar / product builder</span><span>✳</span></div></section>
    <section className="home-work section-wrap"><div className="section-kicker">(02) selected work</div><div className="showcase-heading"><h2>Real projects<br /><em>made with care.</em></h2><button className="text-link" onClick={() => navigate('/projects')}>View all projects <span>↗</span></button></div><div className="project-grid">{projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} setCursor={setCursor} />)}</div></section>
    <section className="home-cta"><p>Have an idea in mind?</p><button onClick={() => navigate('/contact')}>Let&apos;s build something <span>↗</span></button></section>
  </>
}

function ProjectsPage({ setCursor }) {
  return <section className="page section-wrap"><PageIntro number="01" title={<>all<br /><em>projects.</em></>} copy="A collection of live websites, experiments, and digital experiences built by Devesh." /><div className="project-grid project-archive">{projects.map((project) => <ProjectCard key={project.title} project={project} setCursor={setCursor} />)}</div></section>
}

function ProjectCard({ project, setCursor }) {
  return <article className={`project-card showcase-card ${project.color}`} onMouseEnter={() => setCursor((current) => ({ ...current, active: true }))} onMouseLeave={() => setCursor((current) => ({ ...current, active: false }))}><div className="project-image"><img className="project-artwork" src={project.image} alt={`${project.title} interface`} onError={(event) => { event.currentTarget.src = '/assets/project-ai.svg' }} />{project.preview && <iframe src={project.preview} title={`${project.title} live preview`} loading="lazy" tabIndex="-1" />}<a className="project-open" href={project.url} target="_blank" rel="noreferrer"><span>CASE<br />STUDY</span><b>↗</b></a></div><div className="project-body"><div className="project-label"><div><h3>{project.title}</h3><p>{project.description}</p></div><span>↗</span></div><div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div></article>
}

function AboutPage({ navigate }) {
  return <section className="page section-wrap"><PageIntro number="02" title={<>about<br /><em>Devesh.</em></>} copy="A product builder, creative technologist, and problem solver who turns practical ideas into polished digital systems." /><div className="about-layout"><div className="about-photo"><img src="/assets/Devesh.jpeg" alt="Devesh Kumar at Amity University" /></div><div className="about-copy"><p>I&apos;m Devesh Kumar. I work across interfaces, product thinking, systems, and the details that make digital experiences feel finished.</p><p>My work sits between design and engineering: useful ideas, clear structure, expressive visuals, and reliable execution.</p><button className="text-link" onClick={() => navigate('/contact')}>Work with me <span>↗</span></button></div></div><ReadmePanel /><div className="skills-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
}

function SkillsPage() {
  const services = [
    ['Web & App Development', 'Responsive, production-ready websites and web applications for real people and real businesses.', 'Nex-Zen, Vandna Computer'],
    ['UI/UX & Design Systems', 'Clear interface direction, responsive layouts, thoughtful flows, and visual details that feel intentional.', 'Portfolio systems, dashboards, client work'],
    ['AI & Product Exploration', 'Turning ambitious product ideas into expressive prototypes, useful interfaces, and practical digital systems.', 'Adhikar AI, product experiments'],
    ['Technical Consulting', 'Choosing the right structure, tools, and interaction model to move an idea from rough concept to useful product.', 'Architecture, performance, delivery'],
  ]
  return <section className="page section-wrap services-page"><PageIntro number="05" title={<>technical<br /><em>skills.</em></>} copy="The tools, systems, and habits I use to turn practical ideas into useful digital products." /><div className="skills-technical"><div className="skills-technical-heading"><span className="section-kicker">(01) technical arsenal</span><h2>Tools for<br /><em>building.</em></h2></div><div className="skills-groups">{skillGroups.map(([title, items]) => <article key={title}><h3>{title}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div><h2 className="services-title">What I can help build</h2><div className="services-grid">{services.map(([title, description, proof], index) => <article className={`service-panel service-${index + 1}`} key={title}><h3>{title}</h3><p>{description}</p><strong>Proof:</strong><small>{proof}</small></article>)}</div><div className="learning-journey"><div className="journey-heading"><span className="section-kicker">(02) education &amp; experience</span><h2>Learning by<br /><em>building.</em></h2></div><div className="journey-list">{journey.map((item, index) => <JourneyItem key={item[1]} item={item} index={index} />)}</div></div></section>
}

function JourneyItem({ item, index }) {
  const itemRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 })
    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [])

  return <article ref={itemRef} className={`journey-item ${visible ? 'journey-visible' : ''}`} style={{ '--journey-delay': `${index * 90}ms` }}><time>{item[0]}</time><div><h3>{item[1]}</h3><strong>{item[2]}</strong><p>{item[3]}</p></div></article>
}

function ReadmePanel() {
  return <section className="readme-panel"><div className="readme-top"><span className="readme-dots"><i /><i /><i /></span><small>README.md</small><a href="https://github.com/Devdk123/Devdk123" target="_blank" rel="noreferrer">open on GitHub ↗</a></div><div className="readme-content"><div className="readme-avatar"><img src="/assets/DevStyle.jpeg" alt="Devesh Kumar profile" /></div><div><span className="readme-code"># hello, i&apos;m Devesh Kumar</span><h3>I build real-world products,<br /><em>not just projects.</em></h3><p>Focused on solving practical problems using clean tech and scalable systems.</p><div className="readme-tags"><span>React</span><span>Next.js</span><span>Node.js</span><span>Figma</span><span>GitHub</span></div></div></div><div className="readme-projects"><span>featured in README</span><b>Adhikar AI</b><b>NexZen</b><b>Vandna Computer</b><b>Ayodhya Tours</b></div></section>
}

function AchievementsPage() {
  return <section className="page section-wrap"><PageIntro number="03" title={<>awards &amp;<br /><em>achievements.</em></>} copy="A verified track record of participation, recognition, and the work behind the work." /><div className="achievement-list">{achievements.map((achievement) => <article className={`achievement-card ${achievement.accent}`} key={achievement.title}><div className="achievement-card-top"><h2>{achievement.title}</h2>{achievement.date && <time>{achievement.date}</time>}</div><h3>🏅 {achievement.award}</h3><p><strong>Organization:</strong> {achievement.organization}</p><p><strong>Detail:</strong> {achievement.detail}</p></article>)}</div><div className="certificate-heading"><span className="section-kicker">(04) verified documents</span><h2>Certificates<br /><em>&amp; proof.</em></h2></div><div className="certificate-grid">{certificates.map((certificate) => <article className="certificate-card" key={certificate.title}><a className={`certificate-preview ${certificate.accent}`} href={certificate.file} target="_blank" rel="noreferrer"><span className="certificate-seal">✦</span><small>Devesh Kumar</small><strong>{certificate.title}</strong><em>view certificate ↗</em></a><h3>{certificate.title}</h3><p>{certificate.meta}</p></article>)}</div></section>
}

function ContactPage() {
  return <section className="page contact-page section-wrap"><PageIntro number="04" title={<>let&apos;s build<br /><em>something.</em></>} copy="Open to meaningful projects, collaborations, and opportunities to create standout digital work." /><div className="contact-actions"><a className="contact-action primary" href="mailto:devguptadk123@gmail.com?subject=Project%20enquiry%20for%20Devesh">send me an email <span>↗</span></a><a className="contact-action" href="https://www.linkedin.com/in/deveshkumar226022/" target="_blank" rel="noreferrer">message on LinkedIn <span>↗</span></a></div><div className="contact-details"><div><small>email</small><p>devguptadk123@gmail.com</p></div><div><small>phone</small><p>+91 9839450586</p></div><div><small>social</small><p><a href="https://instagram.com/dev_decoder">Instagram ↗</a> <a href="https://github.com/Devdk123">GitHub ↗</a></p></div></div></section>
}

function PageIntro({ number, title, copy }) {
  return <div className="page-intro"><div className="section-kicker">({number}) Devesh Kumar / portfolio</div><h1>{title}</h1><p>{copy}</p><span className="intro-sticker">✳</span></div>
}

function Footer({ navigate }) {
  return <footer className="footer section-wrap"><div className="footer-grid"><div className="footer-intro"><span className="footer-pill">open to<br />opportunities</span><h2>let&apos;s build<br />something.</h2></div><div className="footer-column"><small>sitemap</small><button onClick={() => navigate('/projects')}>featured projects</button><button onClick={() => navigate('/skills')}>my services</button><button onClick={() => navigate('/achievements')}>certificates &amp; achievements</button><button onClick={() => navigate('/contact')}>contact me</button></div><div className="footer-column office-column"><small>office</small><strong>based in<br />Lucknow,<br />Uttar Pradesh</strong><a href="https://www.google.com/maps/search/Lucknow,+Uttar+Pradesh" target="_blank" rel="noreferrer">Google Maps ↗</a></div><div className="footer-column contact-column"><small>contact</small><a className="footer-email" href="mailto:devguptadk123@gmail.com">devguptadk123@gmail.com</a><a className="footer-message" href="https://www.linkedin.com/in/deveshkumar226022/" target="_blank" rel="noreferrer">message on LinkedIn<sup>*</sup></a><span className="response-note">* response time: faster than my next deploy.</span><div className="footer-socials"><a className="social-link linkedin-social" href="https://www.linkedin.com/in/deveshkumar226022/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a><a className="social-link instagram-social" href="https://instagram.com/dev_decoder" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a><a className="social-link github-social" href="https://github.com/Devdk123" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a></div></div></div><div className="footer-name">DEVESH<span>© 2026</span></div></footer>
}

export default App