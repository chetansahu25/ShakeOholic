import { Camera, Home, Menu } from "lucide-react"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ml-20 mr-20 mt-5 ">
      <div className="logo">
        <img src="vite.svg" width='50px' alt="hello" />
      </div>
      <ul className=" flex gap-3 justify-center items-center">
        <li className="flex gap-1 items-center"><Home color="pink" /> Home </li>
        <li className="flex gap-1 items-center"><Menu />Menu</li>
        <li className="flex gap-1 items-center"><Camera fill="pink" />About Us</li>
      </ul>
      <div className="search">
        <form action="#" method="post">
        <input className="outline-none border-2 rounded-md border-pink-400 pl-3 pr-3 pt-1 pb-1" type="text" id="search" name="search" placeholder="Search Menu items" autoComplete="off" />
        </form>

      </div>
    </nav>
  )
}

export default Navbar