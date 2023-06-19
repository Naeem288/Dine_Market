import Link from "next/link"
import Image from "next/image"
import logo from "@/logo/Logo.webp"
import { ShoppingCart } from "lucide-react"
import { SearchIcon } from "lucide-react"
import { Input } from "components/ui/input"
export const Header = () => {
  return (
    <div className=" sticky top-0 flex justify-between items-center py-6 px-24 bg-white">
      {/* logo */}
      <div>
      <Link href={"/"}>
        <Image src={logo} alt="Dine Market" />
        </Link>
      </div>
      {/* Routes */}
          <div className="flex gap-x-10 text-lg">
          <Link href={"/category/female"}>Female</Link>
          <Link href={"/category/male"}>Male</Link>
          <Link href={"/category/kids"}>Kids</Link>
          <Link href={"/products"}>All Products</Link>
          </div>
      {/* Search bar */}
      <div className="flex justify-center items-center w-80">
      <SearchIcon className="text-slate-500"/>
      <Input className="h-6 hover:border-black" type="search" placeholder= "What you looking for"/>
      </div>
      {/* add to cart */}
      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center" >
        <ShoppingCart />
      </div>
    </div>
  )
}
