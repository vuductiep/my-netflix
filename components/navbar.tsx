import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from 'react-icons/bs'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  return ( 
    <nav className="w-full fixed z-40">
      <div
        className="px-4 md:px-16 flex flex-row items-center transition duration-500 bg-zinc-500 bg-opacity-90"
      >
        <img src="/images/logo.png" alt="" className="h-4 lg:h-7" />
        <div
          className="flex-row ml-8 gap-7 hidden lg:flex"
        >
          <NavbarItem label="Home"/>
          <NavbarItem label="Series"/>
          <NavbarItem label="Films"/>
          <NavbarItem label="News & Popular"/>
          <NavbarItem label="My List"/>
          <NavbarItem label="Browse by languages" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className='text-white transition' />
          <MobileMenu visible={showMobileMenu}/>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;