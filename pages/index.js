import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Deep Server | Deepak Rajan @ 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-white flex flex-col items-center justify-center'>
        <p>
        Hello, welcome to the deep-server
        </p>
        <img src="/images/rick.jpg" className='w-20'></img>
      </main>

    </div>
  )
}
