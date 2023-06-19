import ProductCard from '@/components/productCard'
import jacket from '@/logo/jacket.webp'
import hoodies from '@/logo/hoodies.webp'
import Tshirt from '@/logo/t-shirt.webp'
import { Products } from '@/components/utils/mock'
import { StaticImageData } from 'next/image'


const ProductList = () => {
    const productsChunks = Products.slice(1, 4);
    console.log(productsChunks);
    return (
        <div className='flex flex-col items-center justify-center' >
            {/* TEXT */}
            <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-sm text-blue-600 tracking-widest font-bold title-font ">
                        PRODUCTS
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-bold  title-font text-gray-900">
                    Check What We Have
                    </h1>
                </div>
                {/* Products */}
        <div className='flex justify-center items-center -mt-10 gap-x-5'>
            {
                // fetching data from a manually created database which is located in utils folder
                productsChunks.map((product) => (
                    <ProductCard 
                    key={product.id} 
                    title={product.name} 
                    price={product.price} 
                    category={product.category} 
                    img={product.img as StaticImageData} 
                    id ={product.id} />
                ))
            }
        </div>
    </div>
    )
}

export default ProductList