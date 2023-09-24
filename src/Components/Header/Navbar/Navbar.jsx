import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const menus=[{
    name:"Home",
    link:"/"
  },
  {
    name:"Donation",
    link:"/donation"
  },
  {
    name:"Statistics",
    link:"/statistics"
  }
]
  return (
    
<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <img src="/Resources/Logo.png" className="h-10 mr-3" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-950 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-neutral-950 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
        {menus.map((menu,index)=>(
          <li kay={index} className="block py-2 pl-3 pr-4 text-neutral-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">
          <NavLink to={menu.link} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500" : "text-neutral-950"}>{menu.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar