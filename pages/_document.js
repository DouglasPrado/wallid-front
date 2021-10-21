import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const navigations = [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>,
        title: 'Minha conta',
        link: '/'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>,
        title: 'Aportes',
        link: '/aportes'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>,
        title: 'Retiradas',
        link: '/retiradas'
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>,
        title: 'Projeção',
        link: '/projecao'
      }
    ]
    return (
      <Html>
        <Head />
        <body>  
          <Main />
          <div className="flex flex-col w-full">
            <div className="">
              <h1 className="m-3 text-base uppercase text-gray-600">Acesso rápido</h1>
              <Navbar navigations={navigations}/>
            </div>
          </div>
          

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument