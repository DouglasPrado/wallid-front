import Head from 'next/head'

export default function Home({ balance, accounts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Wallet ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
        <div className="flex items-stretch">
          <div className="box-border h-52 w-52 rounded-full shadow-md py-20 border-4 border-gray-50">
            <span className="text-2xl font-semibold uppercase text-gray-500">{balance.balance}</span> <br/>
            <span className="text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <a href="" className="m-1">
                 somente para visualizar
                </a> 
              </div>  
            </span> 
          </div>
        </div>
        <div class="container">
          <ul className="px-5 overflow-auto h-96">
          { accounts.map((account) => (
            <li x-for="item in items" class="rounded-lg shadow-md border border-gray-50 mt-5">
            <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
              <div className="flex flex-wrap content-center justify-center">
                <p className="text-lime-600 dark:text-lime-400 text-xs sm:text-base lg:text-sm xl:text-base font-semibold uppercase text-gray-600">
                  {account.name}
                </p>
                
              </div>
              <div className="text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base uppercase text-xl text-gray-500 p-8 col-span-2">
                {account.balance}
              </div>
            </div>
          </li>
          ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/accounts");
  // const accounts = await res.json();
  const accounts = [
    {
      name: "Staking",
      balance: "R$ 1.000,00"
    },
    {
      name: "Conta Digital",
      balance: "R$ 10.000,00"
    },
    {
      name: "Binance",
      balance: "U$ 4.000,00"
    },
    {
      name: "Bitcoin",
      balance: "U$ 40.000,00"
    },
    {
      name: "Renda Fixa",
      balance: "U$ 4.000,00"
    },
    {
      name: "Renda Fixa",
      balance: "U$ 4.000,00"
    },
    {
      name: "Renda Fixa",
      balance: "U$ 4.000,00"
    },
    {
      name: "Renda Fixa",
      balance: "U$ 4.000,00"
    },

  ];

  const balance = {
    balance: "R$ 11.000,00"
  }
  return {
    props: {
      balance,
      accounts,
    },
  };
}