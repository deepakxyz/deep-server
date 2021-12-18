import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
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
