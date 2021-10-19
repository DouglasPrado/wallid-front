import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home({ categories, balance }) {
  const [blur, setBlur] = useState(`blur`)
  const navigations = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>,
      title: 'Minha conta'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>,
      title: 'Aportes'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>,
      title: 'Retiradas'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>,
      title: 'Projeção'
    }
  ]
  const clickBlur = useCallback(() => {
    if(!blur) {
      setBlur('blur-lg')
    }else{
      setBlur(null)
    }
  },[blur])

  if (categories.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Wallet ID</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
          <div className="flex items-stretch">
            <div className="box-border h-52 w-52 rounded-full shadow-lg py-20 border-4 border-gray-500 m-10">
              <span className={`text-2xl font-semibold uppercase text-gray-500 ${blur}`} >{balance.total}</span> <br/>
              <span className="text-sm text-gray-500 px-2">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <button onClick={() => clickBlur()} className="m-1">
                  exibir valores
                  </button> 
                </div>  
              </span> 
            </div>
          </div>
          <div className="container">
            <ul className="px-5 mb-20">
            { categories.map((category, index) => {
              if(category.get_balance_total != "0"){
                return (
                  <a href={`/produtos/${category.id}`}>
                    <li key={index} x-for="item in items" className="rounded-lg shadow-md border border-gray-100 mt-5">
                    <div className="grid grid-flow-col grid-rows-1 grid-cols-4">
                      <div className="flex flex-wrap content-center justify-center col-span-2">              
                        <p className="text-sm font-semibold uppercase text-gray-600">
                        {category.name}
                        </p>
                      </div>
                      <div className={`text-base uppercase text-gray-500 p-8 ${blur} col-span-2 text-right`} >
                      { category.get_balance_total }
                      </div>
                    </div>
                  </li>
                </a>)
              }}
            )}
            </ul>
          </div>
          <div className="container">
            <Navbar navigations={navigations}/>
          </div>
        </main>
      </div>
    )
  }else{
    return (<h1>Carregando...</h1>)
  }
}

export async function getServerSideProps(context) {
  const fetchCategories = await fetch("https://wallid.herokuapp.com/api/categories/?format=json") 
  const categories = await fetchCategories.json()
  console.log(categories)
  if (!categories) {
    return {
      notFound: true,
    }
  }
  const fetchBalance = await fetch("https://wallid.herokuapp.com/api/balance/?format=json") 
  const { balance } = await fetchBalance.json()
  if (!balance) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      categories,
      balance
    }, // will be passed to the page component as props
  }
}