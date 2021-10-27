import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header';

export default function Retiradas({ categories, balance }) {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Wallet ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Retiradas"/>
      <main className="flex flex-col items-center justify-around w-full flex-1 text-center ">
        <div className="flex flex-col items-center p-3 w-full">
          <label className="w-full mb-2 text-left">
            <span className="text-sm text-gray-700">Selecione a conta</span>
            <select className="form-select px-4 py-2 rounded w-full">
              <optgroup label="Criptomoeda">
                <option value="">Bitcoin</option>
                <option value="">Etherium</option>
              </optgroup> 
              <optgroup label="Conta digital">
                <option value="">Nubank</option>
              </optgroup>
            </select>
          </label>
          <label className="w-full mb-2 text-left">
            <span className="text-sm text-gray-700">Mês de entrada</span>
            <select className="form-select px-4 py-2 rounded w-full ">
              <option value="">Janeiro</option>
              <option value="">Fevereiro</option>
              <option value="">Março</option>
              <option value="">Abril</option>
              <option value="">Maio</option>
              <option value="">Junho</option>
              <option value="">Julho</option>
              <option value="">Agosto</option>
              <option value="">Setembro</option>
              <option value="">Outubro</option>
              <option value="">Novembro</option>
              <option value="">Dezembro</option>
            </select>
          </label>
          <label className="w-full mb-2 text-left">
            <span className="text-sm text-gray-700">Ano atual</span>
            <input name="year" type="number" value="2021" maxLength="4" className="form-input px-4 py-2 rounded w-full" />
          </label>

          <label className="w-full mb-2 text-left">
            <span className="text-sm text-gray-700">Retiradas da conta</span>
            <input name="value_in_cents" type="number" className="form-input px-4 py-2 rounded w-full" />
          </label>
          <label className="w-full mb-2 text-left">
            <span className="text-sm text-gray-700">Retiradas da conta</span>
            <textarea className="form-input px-4 py-2 rounded w-full" name="" id=""></textarea>
          </label>
          <button type="submit" className="flex justify-center mt-2 py-3 bg-red-600 text-gray-50 w-full rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="uppercase">retirar</span>
          </button>
        </div>

      </main>
    </div>
  )
 
}

