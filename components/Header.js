import { useRouter } from 'next/router'
const Header = ({title}) => {
  const router = useRouter()
  return(
    <div className="flex flex-row w-full p-3 mt-5">
      <div className="">
        <button onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>
      <div className="ml-5">
        <span className={`text-xl font-semibold uppercase text-gray-500`} >{title}</span>
      </div>
    </div>
  )
}
export default Header;