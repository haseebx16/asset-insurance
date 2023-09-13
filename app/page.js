import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Services from "./components/Services"

export default function Home() {
  return (
    <>
      <section>
        <Nav/>
      </section>
      <section>
        <Hero/>
      </section>
      <section>
        <Stats/>
      </section>
      <section>
        <Business/>
      </section>
      <section className="justify-center items-center">
        <Services/>
      </section>
    </>
  )
}
