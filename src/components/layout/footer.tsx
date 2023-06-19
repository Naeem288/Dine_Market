import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/logo/Logo.webp'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className=" body-font">
        <div className=" ml-24 container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
            <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={logo} alt='logo' />
            </Link>
            <p className="mt-5 text-sm text-gray-500">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
            </p>
            <div className='flex gap-x-3 mt-5'>
              <Link href={"/facebook.com"}>
                <FaTwitter className='text-3xl' />
              </Link>
              <Link href={"/facebook.com"}>
                <FaFacebookF className='text-3xl' />
              </Link>
              <Link href={"/facebook.com"}>
                <FaLinkedinIn className='text-3xl' />
              </Link>
            </div>

          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg  mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Terms of Use</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">How it works</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg  mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Support Career</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">24h Services</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg  mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Servic 24h</a>
                </li>

              </nav>
            </div>
          </div>
        </div>
        <div >
        <div className="h-0.5 w-screen bg-gray-800 mt-20"></div>
        <div className='flex items-center justify-evenly mt-6'>
        <p className='font bold text-lg'>Copyright © 2022 Dine <br /> Market</p>
        <p className='font bold text-lg'>Design by. <b>Weird <br /> Design Studio</b></p>
        <p className='font bold text-lg'>Code by. <b>Naeem Shehzad on <br /> github</b></p>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer