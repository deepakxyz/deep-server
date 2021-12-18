import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Deep Server | Deepak Rajan @ 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-white flex flex-col items-center justify-center'>
        <p>
        Hello,
        </p>
        <img src="/images/rick.jpg" className='w-20'></img>
        {/* <Image src={"/images/rick.jpg"} width="100" height="170" className='w-20 h-400'/> */}
      </main>

    </div>
  )
}
