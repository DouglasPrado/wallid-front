
const Navbar = ({navigations}) => {
  return (
    <>
      <div className="inset-x-0 bottom-0 fixed bg-white">
        <h1 className="m-3 text-sm uppercase text-gray-600">Acesso rápido</h1>  
        <div className="overflow-x-scroll hide-scroll-bar ">
          <div className="flex flex-nowrap">
            {navigations.map(navigation => (
              <a href={navigation.link} >
                <div className="inline-block px-3">
                <div className="w-32 h-18 max-w-xs overflow-hidden rounded-lg shadow-md border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mb-3">
                  <div className="grid m-3">
                    <div className="col-span-3 mb-5">
                      {navigation.icon}
                    </div>
                    <div className="">
                      <h1 className="text-sm text-left font-light uppercase text-gray-500">{navigation.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            ))}   
          </div>
        </div>
      </div>
      <style>{`
        .hide-scroll-bar {
          -ms-overflow-style: none!important;
          scrollbar-width: none!important;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none!important;
        }
    `}</style>
  </>
  );
}

export default Navbar;