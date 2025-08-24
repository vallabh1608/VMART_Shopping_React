import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import WomenCollections from '../components/WomenCollections'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../data'
const Mainpage = () => {
  const [GentsFashion, setGentsFashion] = useState(Gents);
  const [LadiesFashion, setLadiesFashion] = useState(Ladies);
  return (
    <div>
        <Header />
        <Banner />
        <Collections GentsFashion = {GentsFashion}/>
        <WomenCollections LadiesFashion = {LadiesFashion}/>
        <Footer />
    </div>
  )
}

export default Mainpage
