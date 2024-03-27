import React,{useState} from 'react'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WomenColl from '../components/WomenColl'
import { Gents } from '../data'
import { Ladies } from '../data'


const Mainpage = () => {

  const [men,setMen]= useState(Gents)
  console.log(Gents)

  const [women, setWomen]= useState(Ladies)
  console.log(Ladies)
  return (
    <div>
        <Header />
        <Banner/>
        <Collections men={men}/>
        <WomenColl women={women}/>
        <Footer/>
        
    </div>
  )
}

export default Mainpage