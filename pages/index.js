import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Deep Server | Deepak Rajan @ 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-white'>
        <p>
        Hello, welcome to the deep-server
        </p>
      </main>

    </div>
  )
}
