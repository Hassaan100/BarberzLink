import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import { Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function MobileMenu() {
  return (
    <div className=" flex justify-between items-center px-7 lg:hidden ">
      <img src={logo} alt="" width={80} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-8! w-8! text-white!" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className=" bg-black ">
          <ul className=" flex flex-col text-[15px] gap-10 text-white font-semibold  items-start p-5  lg:flex">
            <Link to="/">
              {" "}
              <li
                className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-amber-400
  before:transition-all before:duration-300 
  hover:before:w-full"
              >
                Home
              </li>{" "}
            </Link>

            <Link to="services">
              {" "}
              <li
                className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-amber-400
  before:transition-all before:duration-300 
  hover:before:w-full"
              >
                Services
              </li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li
                className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-amber-400
  before:transition-all before:duration-300 
  hover:before:w-full"
              >
                About
              </li>{" "}
            </Link>
            <li
              className="relative  cursor-pointer 
  before:content-[''] before:absolute before:left-0 before:-bottom-1 
  before:h-0.5 before:w-0   before:bg-amber-400
  before:transition-all before:duration-300 
  hover:before:w-full"
            >
              Support
            </li>
            <li className=" cursor-pointer font-normal bg-linear-to-r from-amber-400 to-amber-600  text-white shadow-[0_4px_15px_#ff007a4d] p-3 rounded-full px-10">
              Get Started
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
