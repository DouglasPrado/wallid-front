import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Balance from '../components/Balance'

export default function Home({ categories, balance }) {
  const [blur, setBlur] = useState(null)
  const clickBlur = useCallback(() => {
    if(!blur) {
      setBlur('blur-sm')
    }else{
      setBlur(null)
    }
  },[blur])

  if (categories.length > 0) {
    return (
      <div className="">
        <Head>
          <title>Wallet ID</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full">
          <Balance balance={balance} blur={() => clickBlur()} cssblur={blur}/>
          <div className="h-96 overflow-auto hide-scroll-bar ">
            <ul className="mx-3">
            { categories.map((category, index) => {
              if(category.get_balance_total != null){
                return (
                  <a key={index} href={`/produtos/${category.id}`} >
                    <li x-for="item in items" className="rounded-lg shadow border border-gray-50 h-20 my-5">
                      <div className="flex justify-between items-center h-full">
                        <div className="text-sm font-regular uppercase text-gray-500 pl-5">
                          {category.name}
                        </div>
                        <div className={`text-sm font-light text-gray-400 pr-5 ${blur}`}>
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