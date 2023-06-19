import { Products } from "@/components/utils/mock"
import ProductCard from "@/components/productCard";
import Image, { StaticImageData } from 'next/image'
import { space } from "postcss/lib/list";
import { Button } from "components/ui/button";



const getProductDetails = (id: number) => {
    return Products.filter((product) => product.id == id)
}
export default function Page({ params }: { params: { id: number } }) {
    const result = getProductDetails(params.id);
    return <div className='flex justify-evenly items-center mt-16 flex-wrap '>
        {
            result.map((product) => (
               <div key={product.id} className="flex items-center justify-center">
                <div>
                    <h2 className="font-bold">Product Details</h2>
                    <Image src={product.img} alt={product.name}/>
                    <p className="font-bold">{product.name}</p>
                    <p className="font-bold">$ {product.price}</p>
                    <p className="font-bold">{product.category}</p>
                    <Button className="rounded-full">Add to cart</Button>
                </div>
               </div>
            ))
        }
    </div>
}