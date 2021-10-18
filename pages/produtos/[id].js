import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Produtos({ category, categories }) {
  const router = useRouter()

  if (categories.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Wallet ID - Criptomoeda</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
          <div className="container">
              <div className="grid grid-flow-col grid-rows-1 grid-cols-3 my-5">
                <div className="px-5">
                  <button onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                </div>
                <span className={`text-xl font-semibold uppercase text-gray-500`} >{category.name}</span>
              </div>
              <span className={`text-base font-light text-gray-500`} >{category.get_balance_total}</span> 
            </div>
          <div className="container">
            <ul className="px-5 mb-20">
            { categories.map((categor, index) => {
              if(categor.balance != "0"){
                return (
                <li key={index} x-for="item in items" className="rounded-lg shadow-md border border-gray-100 mt-5">
                <div className="grid grid-flow-col grid-rows-1 grid-cols-4">
                  <div className="flex flex-wrap content-center justify-center col-span-2">              
                    <p className="text-sm font-semibold uppercase text-gray-800">
                    {categor.name}
                    </p>
                  </div>
                  <div className={`text-base uppercase text-gray-500 p-8 col-span-2 text-right`} >
                  { categor.balance }
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
    return (
    <h1>Carregando...</h1>)
  }
}

export async function getServerSideProps({ params }) {
  const id = params.id
  const fetchCategory = await fetch(`https://wallid.herokuapp.com/api/categories/${id}?format=json`) 
  const category = await fetchCategory.json()
  if (!category) {
    return {
      notFound: true,
    }
  }

  const fetchCategoryAccounts = await fetch(`https://wallid.herokuapp.com/api/categories/${id}/accounts?format=json`) 
  const categories = await fetchCategoryAccounts.json()
  if (!categories) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
      categories,
    }, // will be passed to the page component as props
  }
}