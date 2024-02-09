export default function Header() {
  return (
    <div>
      <div className=" inset-0 z-50 bg-gray-50">
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
          <div className="relative mx-auto my-12">
            <div className="inline-block">
              <svg className="animate-spin h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                </circle>
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="main-nav">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="lg:flex lg:justify-between">
              <div className="flex justify-between">
                <div className="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">Buildify
                </div>

                <div className="flex flex-row items-center py-4 lg:py-0">
                  <div className="relative text-gray-900 hover:text-black block lg:hidden">
                    <button type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                      <span className="sr-only">Mobile menu</span>
                      <svg className="open h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="close bi bi-x-lg h-8 w-8" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fillRule="evenodd"
                          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">

                <ul
                  className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
                  <li className="relative hover:text-black">
                    <a className="active block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="#hero">Home</a>
                  </li>
                  <li className="relative hover:text-black">
                    <a className="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#services">What
                      we do</a>
                  </li>
                  <li className="relative hover:text-black">
                    <a className="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#portfolio">Our
                      works</a>
                  </li>

                  <li className="relative hover:text-black">
                    <a className="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#team">Team</a>
                  </li>
                  <li className="relative hover:text-black">
                    <a className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}