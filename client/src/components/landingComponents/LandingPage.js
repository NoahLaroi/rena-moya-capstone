import Hero from "./Hero"
import Models from "./Models"
import Scheduler from "./Scheduler"
import '../../styles/App.scss'
import BigScreenLandingPage from "./BigScreenLandingPage"
export default function LandingPage () {
    return (
        <section className='landingPage'>
        <BigScreenLandingPage/>
        <Hero/>
        <div className="landingPageContentContainer">
        <Scheduler/>
        <Models/>
        </div>
        </section>
    )
}