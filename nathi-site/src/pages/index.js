import React from 'react'

import { client } from 'lib/client';
import { Product, FooterBanner, HeroBanner } from 'components';




const Home = ({ products , bannerData }) => (
    <div>
      <HeroBanner heroBanner = {(bannerData.length !== 0) && bannerData[0] } />


      <div className='products-heading'> 
        <h2>
          Best Selling Product
        </h2>
        <p>Speakers of many variations</p>
      
      </div>
{/* this div isnt showing up */}
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner = {bannerData && bannerData[0] }/>
    
    </div>
  );
  export const getServerSideProps = async () =>{
    // form a sanity query

    const query = '*[_type == "product"]';
    const products = await client.fetch(query)

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: { products , bannerData }
    }
  }


export default Home;