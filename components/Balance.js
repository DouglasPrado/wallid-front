const Balance = ({balance, blur}) => {
  return(
    <div className="flex items-stretch">
      <div className="box-border h-52 w-52 rounded-full shadow-lg py-20 border-4 border-gray-100 m-10">
        <span className={`text-2xl font-semibold uppercase text-gray-500 ${blur}`} >{balance.total}</span> <br/>
        <span className="text-sm text-gray-500 px-2">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <button onClick={() => blur()} className="m-1">
            exibir valores
            </button> 
          </div>  
        </span> 
      </div>
    </div>
  )
}
export default Balance;