import React, {  useContext, useEffect, useState } from 'react'
import Filters from '../Filters/Filters'
import './Products.css'
import { ColorRing } from 'react-loader-spinner'
import { Context } from '../../ReactContext/Context';
import ProductListItems from '../ProductListItems/ProductListItems';


const Products = ({setCurrStatus}) => {
    const [pageNum,setPageNum] = useState(1)
    const [results,setResults] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [totalProducts,setTotalProducts] = useState(0)

    const [hasNextPage,setHasNextPage] = useState(false)

    const {filterData} = useContext(Context)

    
    useEffect(()=>{
        setIsLoading(true)
        const filteredData = filterData && filterData.id ? `[{"id":"${filterData.id}","type":"${filterData.type}"}]` : '[]';
        const getProducts = async ()=>{
            const response = await fetch("https://api.furrl.in/api/v2/listing/getListingProducts", {
                "headers": {
                  "accept": "application/json",
                  "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
                  "appversion": "1.0.234+145",
                  "content-type": "application/json",
                  "deviceid": "",
                  "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                  "sec-ch-ua-mobile": "?1",
                  "sec-ch-ua-platform": "\"Android\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-site",
                  "visitid": "tgKOzn9Ixe9t-OuOlPxu1"
                },
                "referrer": "https://furrl.in/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `{"input":{"page":${pageNum},"pageSize":10,"filters":${filteredData},"id":"#HomeHunts","entity":"vibe"}}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
              });
              try{
              if(response.ok){
                const data = await response.json()
                setResults((prev) => pageNum === 1 ? data.data.getListingProducts.products : [...prev, ...data.data.getListingProducts.products])
                setTotalProducts(data.data.getListingProducts.totalProducts)
                setHasNextPage(Boolean((data.data.getListingProducts.products).length))
                setIsLoading(false)
              }else{
                console.log("error")
              }}
              catch(error){
                console.log(error)
              }
        }

        getProducts()

        
    },[pageNum,filterData])

    useEffect(() => {
        setPageNum(1);
        setResults([]);
    }, [filterData]);

  return (
    <div className='products-container'>
        <div className='total-products'>
            <h1>Shop Products</h1>
            <p>{totalProducts} Products</p>
        </div>
        <Filters/>
        <ProductListItems results={results} isLoading={isLoading} hasNextPage={hasNextPage} setCurrStatus={setCurrStatus}   setPageNum={setPageNum}/>
        

        {/* LOADER CONTAINER */}
        
        { isLoading &&
            <div className='loader-container'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperClass="color-ring"
                    colors={["blue","blue","blue","blue","blue"]}
                    />
            </div>
        }
    </div>
  )
}

export default Products