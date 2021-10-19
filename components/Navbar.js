
const Navbar = ({navigations}) => {
  return (
    <>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-3 md:ml-3 ml-3 ">
          {navigations.map(navigation => (
            <a href={navigation.link} >
              <div class="inline-block px-3">
              <div class="w-32 h-24 max-w-xs overflow-hidden rounded-lg shadow-md border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="grid m-3 ">
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