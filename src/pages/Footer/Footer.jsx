
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
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
    
    
<footer class="bg-white rounded-lg shadow  mt-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="/" class="flex items-center mb-4 sm:mb-0">
                <img src="/resources/Logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            {menus.map((menu,index)=>(
          <li key={index} className="block py-2 pl-3 pr-4 text-neutral-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">
          <NavLink  key={index} to={menu.link} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 mr-4 hover:underline md:mr-6 " : "text-neutral-950 mr-4 hover:underline md:mr-6 "}>{menu.name}</NavLink>
          </li>
        ))}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="#" class="hover:underline">Firoz™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer