import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

export default function Produtos({ slug, categories, balance }) {
  if (categories.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Wallet ID - Criptomoeda</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
          <div className="container px-5 ">
              <div className="box-border border-b-4 border-yellow-200 px-10 py-2">
                <span className={`text-xl font-semibold uppercase text-gray-500`} >{slug}</span> 
              </div>
            </div>
          <div className="container">
            <ul className="px-5 mb-20">
            { categories.map((category, index) => {
              if(category.get_balance_total != "0"){
                return (
                <li key={index} x-for="item in items" className="rounded-lg shadow-md border border-gray-100 mt-5">
                <div className="grid grid-flow-col grid-rows-1 grid-cols-4">
                  <div className="flex flex-wrap content-center justify-center col-span-2">              
                    <p className="text-sm font-semibold uppercase text-gray-800">
                    {category.name}
                    </p>
                  </div>
                  <div className={`text-base uppercase text-gray-500 p-8 col-span-2 text-right`} >
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
    return (
    <h1>Carregando...</h1>)
  }
}

export async function getServerSideProps({ params }) {
  const slug = params.slug
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
      slug,
      categories,
      balance
    }, // will be passed to the page component as props
  }
}