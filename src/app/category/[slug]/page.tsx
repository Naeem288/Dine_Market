import { Products } from "@/components/utils/mock"
import ProductCard from "@/components/productCard";
import {StaticImageData} from 'next/image'


const getProductByCategory=(category:string)=>{
return Products.filter((product)=>product.category===category)
}
export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug);
    return <div className='flex justify-evenly items-center mt-16 flex-wrap '>
        {
            result.length>0 ? result.map((product) => (
                  <ProductCard 
                  key={product.id} 
                  title={product.name} 
                  price={product.price} 
                  category={product.category}
                  img={product.img as StaticImageData}
                  id = {product.id} />
              )): <p> No Product Found</p>
        }
</div>;
  }