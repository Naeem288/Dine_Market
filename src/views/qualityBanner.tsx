import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import hoodies from '@/logo/hoodies.webp'
import { Button } from 'components/ui/button'


const QualityBanner = () => {
    return (
        <section className="text-gray-600 body-font -mt-16">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold  title-font text-gray-900">
                    Unique and Authentic Vintage <br />Designer Jewellery
                    </h1>
                </div>
                <div className="flex  items-center justify-center -m-16">
                    {/* Left Side */}
                    <div>
                        {/* upper banner */}
                        <div>
                            <div className="flex h-44 bg-white p-8 items-center  ">
                                {/* Left Text */}
                                <div>
                                    <h1 className="sm:text-base text-2xl font-bold title-font text-gray-900">
                                    Using Good Quality <br /> Materials
                                    </h1>
                                    <h2 className="text-gray-900 text-base mt-3 title-font font-medium">
                                    Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.
                                    </h2>
                                </div>
                                {/* Right text */}
                                <div>
                                    <h1 className="sm:text-base text-2xl font-bold title-font text-gray-900 ml-6">
                                    Using Good Quality <br /> Materials
                                    </h1>
                                    <h2 className="text-gray-900 text-base mt-3 title-font font-medium ml-6">
                                    Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* lower banner */}
                        <div className="-mt-8">
                            <div className="flex h-44 bg-White p-8 items-center  ">
                                {/* Left Text */}
                                <div>
                                    <h1 className="sm:text-base text-2xl font-bold title-font text-gray-900">
                                    Using Good Quality <br /> Materials
                                    </h1>
                                    <h2 className="text-gray-900 text-base mt-3 title-font font-medium">
                                    Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.
                                    </h2>
                                </div>
                                {/* Right */}
                                <div>
                                    <h1 className="sm:text-base text-2xl font-bold title-font text-gray-900 ml-6">
                                    Using Good Quality <br /> Materials
                                    </h1>
                                    <h2 className="text-gray-900 text-base mt-3 title-font font-medium ml-6">
                                    Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='flex items-center justify-center'>
                        <div className="p-4 md:w-80">
                            <div className="flex  h-96 p-8 flex-col">
                                {/* Image */}
                                   <Image  className='h-96 mt-2' src={hoodies} alt='image'/>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="p-4 md:w-80">
                            <div className="flex  h-96 bg-white p-8 flex-col">
                                {/* upper */}
                                <div className="flex items-center mb-3">
                                    <p className='text-lg text-justify'>
                                    This piece is ethically crafted in our small family-owned workshop in 
                                    Peru with unmatched attention to detail and care. 
                                    The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                                    </p>
                                </div>
                                {/* botthom */}
                                <div className="flex-grow ">
                                  <Link href={"/products"}>
                                  <Button>See All Products</Button>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default QualityBanner