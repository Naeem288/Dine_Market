import Link from "next/link";
import Image from "next/image";
import logo from "@/logo/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { Input } from "components/ui/input";
export const Header = () => {
  return (
    <div className=" flex justify-between items-center py-6 px-24">
      {/* logo */}
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="Dine Market" />
        </Link>
      </div>
      {/* Routes */}
      <div className="flex gap-x-10 text-lg font-semibold">
        <Link href={"/category/female"} className="hover:font-bold">
          Female
        </Link>
        <Link href={"/category/male"} className="hover:font-bold">
          Male
        </Link>
        <Link href={"/category/kids"} className="hover:font-bold">
          Kids
        </Link>
        <Link href={"/products"} className="hover:font-bold">
          All Products
        </Link>
      </div>
      {/* Search bar */}
      <div className="relative flex justify-center items-center w-80 ">
        <span className="absolute left-1 mt-0.5">
          <SearchIcon className="  text-slate-500" />
        </span>
        <Input
          className=" px-7 h-6 hover:border-black"
          type="search"
          placeholder="What you looking for"
        />
      </div>
      {/* add to cart */}
      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
        <ShoppingCart />
      </div>
    </div>
  );
};
