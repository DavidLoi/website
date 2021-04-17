import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Hobbies from '../components/Hobbies'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObjThree} />
          <Hobbies />
          <Footer />
        </>
    )
}

export default Home;