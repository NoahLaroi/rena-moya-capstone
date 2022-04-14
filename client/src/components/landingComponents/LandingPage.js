import Hero from "./Hero"
import Models from "./Models"
import Scheduler from "./Scheduler"
import '../../styles/App.scss'
export default function LandingPage () {
    return (
        <>
        <Hero/>
        <div className="landingPageContentContainer">
        <Scheduler/>
        <Models/>
        </div>
        </>
    )
}