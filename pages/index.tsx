import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Bank from './Bank'
import Cleaning from './Cleaning'
import Images from './Images'
import NavBar from './NavBar'
import Offers from './Offers'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shopping</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      
      
      
      
      <div className="bg-white">
        <NavBar /> 
         <br />
        
        <Images />
        <br />
        <br />
        <Bank />
        <br />
        <Offers />
        <br />
        <Cleaning />
        <br />

      </div>




    </div>
  )
}

export default Home
