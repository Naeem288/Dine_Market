import React from 'react'
import Image,{StaticImageData} from 'next/image'
import Link from 'next/link';

const ProductCard = (props:{title:string, price:number, category: string, img : StaticImageData, id : number}) => {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-5'>
    <Image src={props.img} alt='product 1'/>
    <h3 className='mt-3 text-lg font-bold'>{props.title}</h3>
    <p className='text-lg font-bold'>${props.price}</p>
    <p className='text-lg font-bold'>{props.category}</p>
        </div>
        </Link>
        
  )
};

export default ProductCard