import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

export default function Home() {
  const [ categories, setCategories ] = useState([])
  const [ balance, setBalance ] = useState({})
  const [blur, setBlur] = useState(`blur`)
  useEffect(() => {
    fetch("https://wallid.herokuapp.com/api/balance/?format=json")
      .then(res => res.json())
      .then(({ balance }) => {
        setBalance(balance)
      })
      .catch(function(error) {  
        console.log('Request failed', error)  
      });
    fetch("https://wallid.herokuapp.com/api/categories/?format=json")
      .then(res => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(function(error) {  
        console.log('Request failed', error)  
      });
  }, [])

  const clickBlur = useCallback(() => {
    if(!blur) {
      setBlur('blur')
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
            <div className="box-border h-52 w-52 rounded-full shadow-lg py-20 border-4 border-indigo-500 m-10">
              <span className={`text-2xl font-semibold uppercase text-gray-500 ${blur}`} >{balance.total}</span> <br/>
              <span className="text-sm text-gray-500">
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
                <li key={index} x-for="item in items" className="rounded-lg shadow-md border border-gray-50 mt-5">
                <div className="grid grid-flow-col grid-rows-1 grid-cols-3">
                  <div className="flex flex-wrap content-center justify-center">
                    <p className="text-gray-800 dark:text-gray-400 text-xs sm:text-base lg:text-sm xl:text-base font-semibold uppercase text-gray-800">
                      {category.name}
                    </p>
                  </div>
                  <div className={`text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base uppercase text-xl text-gray-500 p-8 col-span-2 ${blur}`} >
                  { category.get_balance_total }
                  </div>
                </div>
              </li>)
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

