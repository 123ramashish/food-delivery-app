import { Dropdown } from "flowbite-react";
import {
  HiCog,
  HiCurrencyDollar,
  HiLogin,
  HiLogout,
  HiViewGrid,
} from "react-icons/hi";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <div className="flex flex-col ">
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          bonnie@flowbite.com
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <Link
          to={"/signin"}
          className="flex items-center gap-2 hover:text-green-300"
        >
          {" "}
          <HiLogin />
          Signin/Signup
        </Link>
        <Link
          to={"/newfood"}
          className="flex items-center gap-2 hover:text-yellow-500"
        >
          <FaBowlFood />
          Add Food
        </Link>
        <hr />
        <Link className="flex items-center gap-2 hover:text-red-400">
          <HiLogout />
          Sign out
        </Link>
      </div>
    </div>
  );
}
