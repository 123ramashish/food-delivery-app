import { Navbar, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="shadow-sm sticky top-0 w-full overflow-y-hidden z-50"
      >
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
            <FaShoppingCart className="hover:text-red-500" />
          </Link>
          <Link to={"/signin"}>
            <FaRegUser className="hover:text-red-500" />
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/" className="navbarlink">
            Home
          </Navbar.Link>
          <Navbar.Link href="/food" className="navbarlink">
            Food
          </Navbar.Link>
          <Navbar.Link href="/cart" className="navbarlink">
            Cart
          </Navbar.Link>
          <Navbar.Link href="/contact" className="navbarlink">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
