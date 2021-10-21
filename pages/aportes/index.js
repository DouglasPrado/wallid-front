import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header';

export default function Aportes({ categories, balance }) {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Wallet ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Aportes" />
      <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
        <h1>Aportes</h1>
      </main>
    </div>
  )
 
}

