import { Products } from "@/components/utils/mock"
import ProductCard from "@/components/productCard"
import { StaticImageData } from "next/image"
const AllProducts = () => {
  return (
    <div className='flex justify-evenly items-center mt-16 flex-wrap '>
      {
        Products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            category={product.category}
            img={product.img as StaticImageData}
            id = {product.id} />
        ))
      }
    </div>
  )
}

export default AllProducts