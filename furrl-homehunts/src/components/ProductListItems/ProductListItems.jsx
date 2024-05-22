import React, { useCallback, useContext, useRef } from 'react'
import "./ProductListItems.css"

import IosShareIcon from '@mui/icons-material/IosShare';
import { Context } from '../../ReactContext/Context';




const ProductListItems = ({results,isLoading,hasNextPage,setCurrStatus,setPageNum}) => {

    const {setProductId} = useContext(Context)
 
    const observer=useRef()
    const lastItemRef = useCallback((node)=>{
        if(isLoading) return 

        if(observer.current) observer.current.disconnect()
            observer.current=new IntersectionObserver(entries=>{
                if(entries[0].isIntersecting && hasNextPage){
                    setPageNum(prevPageNum=>prevPageNum+1)
                }
        })

        if(node) observer.current.observe(node)
    },[isLoading,hasNextPage])


    const onClickShare=(event,id)=>{
        event.preventDefault()
        event.stopPropagation()
       setCurrStatus(true)
       window.scrollTo({ top: 0, behavior: 'smooth' })
       setProductId(id)
       document.body.classList.add("no-scroll")
    }


  return (
    <div>
        <ul className='product-list-container'>
            {
                results.map((eachResult,index)=>{
                    const uniqueKey = eachResult.id + index;
                    if(results.length===index + 1){
                        return(
                            <a  key = {uniqueKey}href={`https://web.furrl.in/productDetail?productId=7226412957869&id=${eachResult.id}`}>
                            <li  ref={lastItemRef} className='product-list-item' >
                                <div className='card-image'>
                                <img src={eachResult.images[0].src} alt="" />
                                <span onClick={(event)=>onClickShare(event,eachResult.id)}><IosShareIcon/></span>
                                </div>
                                <div>
                                <p className='vendor'>{eachResult.vendor.toUpperCase()}</p>
                                   <p className='title'>{eachResult.title}</p> 
                                   <div className='product-detail-container'>
                                   <div className='price-container'>
                                    <span className='discount-price'>Rs.{eachResult.price.value}</span>
                                    <span className='original-price'>Rs.{eachResult.MRP.value}</span>
                                    <span className='product-offer'>{eachResult.discountPercent}%</span>
                                   </div>
                                   </div>
                                </div>
                                
                            </li>
                            </a>
                        )
                    }else{
                        return(
                            <a key = {uniqueKey} href={`https://web.furrl.in/productDetail?productId=7226412957869&id=${eachResult.id}`}>
                            <li  className='product-list-item'>
                                <div className='card-image'>
                                    <img src={eachResult.images[0].src} alt="" />
                                    <span onClick={(event)=>onClickShare(event,eachResult.id)}><IosShareIcon/></span>
                                </div>
                                <div className='product-detail-container'>
                                   <p className='vendor'>{eachResult.vendor.toUpperCase()}</p>
                                   <p className='title'>{eachResult.title}</p> 
                                   <div className='price-container'>
                                    <span className='discount-price'>Rs.{eachResult.price.value}</span>
                                    <span className='original-price'>Rs.{eachResult.MRP.value}</span>
                                    <span className='product-offer'>{eachResult.discountPercent}%</span>
                                   </div>
            
                                </div>
                            </li>
                            </a>
                        )
                    }
                    
                })
            }
        </ul>
    </div>
  )
}

export default ProductListItems