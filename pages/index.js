import React from 'react'
import { Product, FooterBanner, HeroBanner } from "../components/index";
import { client } from "../lib/client";

const Home  = ({products, bannerData}) => {
  // console.log("PRODUCTS")
  // console.log(products)
  // console.log("Banner Data")
  console.log(bannerData)
  return (
    <>
      <HeroBanner bannerData = {bannerData.length !==0 && bannerData[0]}/>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>

        {products?.map((product)=>{
          return <p key={product.name}>{product.name}</p>
        })}
      </div>

      <FooterBanner />
    </>
  )
}
export default Home 

export const getServerSideProps = async ()=>{
  // page built on every request
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type =="banner"]`;
  const bannerData = await client.fetch(bannerQuery)

  return{
    props:{
      products, 
      bannerData
    }
  }
}