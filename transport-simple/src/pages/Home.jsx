import Navbar from "../components/Navbar"
import { SectionOne } from "../components/Homepage/SectionOne"
import { SectionTwo } from "../components/Homepage/SectionTwo"
import { SectionThree } from "../components/Homepage/SectionThree"
import { SectionFour } from "../components/Homepage/SectionFour"
import { SectionFive } from "../components/Homepage/SectionFive"


export const Home = () => {


    return (
        <>
            <Navbar />
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
        </>
    )
}