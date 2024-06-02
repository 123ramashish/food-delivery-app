import { Navbar, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <Navbar fluid rounded className="shadow-sm ">
        <Navbar.Brand
          as={Link}
          href="/"
          className="flex flex-col items-center ml-9 mb-2 "
        >
          <img
            src="https://banner2.cleanpng.com/20180712/kpa/kisspng-drawing-photography-logo-rumah-makan-5b46fe792d7883.7297506715313793211863.jpg"
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="Restaurant Logo"
          />
          <span className="self-center whitespace-nowrap text-sm  dark:text-white font-serif">
            Tasty Treat
          </span>
        </Navbar.Brand>

        <div className=" inline-flex gap-4 text-sm items-center ml-2 md:order-2 ">
          <Link to={"/cart"}>
            <FaShoppingCart />
          </Link>
          <Link to={"/signin"}>
            <FaRegUser />
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/food">Food</Navbar.Link>
          <Navbar.Link href="/cart">Cart</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
