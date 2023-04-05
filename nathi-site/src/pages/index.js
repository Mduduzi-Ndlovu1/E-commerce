import React from 'react'

import { client } from 'lib/client';
import { Product, FooterBanner, HeroBanner } from 'components';
import banner from 'nathis-site/schemas/banner';


const Home = ({products,bannerData}) => (
    <div>
      <HeroBanner herobanner = {(bannerData.length !== 0) && bannerData[0] } />
      {console.log(bannerData)}

      <div className='products-heading'> 
        <h2>
          Best Selling Product
        </h2>
        <p>Speakers of many variations</p>
      
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name
        )}
      </div>

      <FooterBanner/>
    
    </div>
  );
  export const getServerSideProps =async () =>{
    // form a sanity query

    const query = '*[_type == "product"]';
    const products = await client.fetch(query)

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {products,bannerData}
    }
  }


export default Home;