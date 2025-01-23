import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"} />
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
      <VerticalCardProduct category={"speakers"} heading={"Bluetooht Speakers"} />
      <VerticalCardProduct category={"refrigerator"} heading={"Regrigerators"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimers"} />
      <VerticalCardProduct category={"processor"} heading={"Processor"} />
      <VerticalCardProduct category={"printers"} heading={"Printers"} />
      
    </div>
  )
}

export default Home