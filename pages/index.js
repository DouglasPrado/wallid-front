import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Balance from '../components/Balance'

export default function Home({ categories, balance }) {
  const [blur, setBlur] = useState(`blur`)
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
          <Balance balance={balance} blur={() => clickBlur()}/>
          <div className="container">
            <ul className="px-5">
            { categories.map((category, index) => {
              if(category.get_balance_total != null){
                return (
                  <a href={`/produtos/${category.id}`}>
                    <li key={index} x-for="item in items" className="rounded-lg shadow-md border border-gray-100 mt-5 h-20">
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