import Head from 'next/head'
function Login() {
    return (
        <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Login - Deep Server | Deepak Rajan @ 2022</title>
                <link rel="icon" href="/favicon-2.png" />
            </Head>

      <main className='text-white flex flex-col items-center justify-center'>
        <img className="" src="/images/rick.jpg" className='w-20'></img>
        <form>

        <input type='password' className='bg-black p-1  text-white border rounded text-center m-5 focus:border-rose-500' placeholder='password' />

        </form>

      </main>

    </div>
    )
}

export default Login