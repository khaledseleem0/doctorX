import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomeLayout from '../components/home/HomeLayout'

export default function Home() {
  return (
<>
<Head>
    <title>Doctor X || health is care </title>
    <meta name="description" content="we work to make you life more as possible" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
<>
<Navbar/>
  <div className='clear'> </div>
    <HomeLayout/>
    </>
</>

  )
}
