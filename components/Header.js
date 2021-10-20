import { useRouter } from 'next/router'
const Header = ({title}) => {
  const router = useRouter()
  return(
    <div className="grid grid-flow-col grid-rows-1 grid-cols-12">
      <div className="col-span-1">
        <button onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>
      <div className="col-span-11">
        <span className={`text-xl font-semibold uppercase text-gray-500`} >{title}</span>
      </div>
    </div>
  )
}
export default Header;