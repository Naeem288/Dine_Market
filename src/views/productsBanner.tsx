import Image from 'next/image'
import React from 'react'
import shirt from '@/logo/shirt.webp'
import tshirt from '@/logo/t-shirt.webp'
import jacket from '@/logo/jacket.webp'

const ProductsBanner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-sm text-blue-600 tracking-widest font-bold title-font ">
                        PROMOTIONS
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-bold  title-font text-gray-900">
                        Our Promotions Events
                    </h1>
                </div>
                <div className="flex  items-center justify-center -m-10">
                    {/* Left Side */}
                    <div>
                        {/* upper banner */}
                        <div className="p-4 md:w-auto">
                            <div className="flex h-44 bg-gray-300 p-8 items-center justify-center ">
                                {/* Text */}
                                <div>
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                                        GET UP TO <br /> 60%
                                    </h1>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        For the summer <br />season
                                    </h2>
                                </div>
                                {/* Image */}
                                <div>
                                    <Image className='h-44 w-auto' src={shirt} alt='shirt' />
                                </div>
                            </div>
                        </div>
                        {/* lower banner */}
                        <div className="p-4 md:w-auto">
                            <div className="flex h-44 bg-gray-950 p-8 flex-col ">
                                <div className='flex items-center justify-center flex-col'>
                                    <h1 className="sm:text-3xl text-4xl font-bold title-font text-white">
                                        GET 30% Off
                                    </h1>

                                    <h2 className="text-white text-sm title-font font-medium mt-5">
                                        USE PROMO CODE
                                    </h2>
                                </div>
                                <div className="cursor-pointer flex items-center justify-center ml-12 rounded-lg  bg-gray-800 w-72 p-1 ">
                                    <p className="text-lg font-bold text-white text  ">
                                    DINE WEEKEND SALE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='flex items-center justify-center'>
                        <div className="p-4 md:w-80">
                            <div className="flex  h-96 bg-orange-100 p-8 flex-col">
                                {/* upper */}
                                <div className="flex items-center mb-3">
                                    <h2 className="text-gray-900 text-lg  -mt-3 title-font font-medium">
                                    Flex Sweatshirt <br /> $100.00 <b> $75.00 </b>
                                    </h2>
                                </div>
                                {/* botthom */}
                                <div className="flex-grow ">
                                   <Image className='mt-2' src={tshirt} alt='image'/>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="p-4 md:w-80">
                            <div className="flex  h-96 bg-gray-300 p-8 flex-col">
                                {/* upper */}
                                <div className="flex items-center mb-3">
                                    <h2 className="text-gray-900 text-lg  -mt-3 title-font font-medium">
                                    Flex Push Button Bomber <br /> $225.00 <b> $190.00 </b>
                                    </h2>
                                </div>
                                {/* botthom */}
                                <div className="flex-grow ">
                                   <Image className='mt-2' src={jacket} alt='image'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductsBanner