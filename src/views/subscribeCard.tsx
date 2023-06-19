import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import React from 'react'


const SubscribeCard = () => {
    return (
        <div className='relative flex items-center justify-center'>
            <p className='text-gray-100 text-9xl font-bold '>Newsletter</p>
            <div className='absolute'>
                <div>
                    <h1 className="sm:text-4xl text-2xl font-bold  title-font text-gray-900">
                        Subscribe Our Newsletter
                    </h1>
                    <h2 className="text-sm flex items-center justify-center text-gray-500 font-serif tracking-widest  title-font mt-7 ">
                    Get the latest information and promo offers directly
                    </h2>
                </div>
                <div className="flex  max-w-lg items-center space-x-2 mt-7">
                    <Input  type="email" placeholder="Input email address" />
                    <Button className='w-1/2' type="submit">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default SubscribeCard