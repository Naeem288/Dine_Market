import Hero from '@/views/hero'
import ProductList from '@/views/productList'
import ProductsBanner from '@/views/productsBanner'
import QualityBanner from '@/views/qualityBanner'
import SubscribeCard from '@/views/subscribeCard'


export default function Home() {
  return (
    <div>
  <Hero/>
  <ProductsBanner />
  <ProductList />
  <QualityBanner />
<SubscribeCard />
    </div>
  )
}
