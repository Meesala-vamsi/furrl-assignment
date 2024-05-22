import React, { useContext, useEffect, useState } from 'react'
import './Filters.css'
import { Context } from '../../ReactContext/Context'

const Filters = () => {

    const [getFilters,setFilters] = useState([])
    const [filterStatus,setFilterStatus] = useState('All')
    const {setFilterData} = useContext(Context)

    const handleFilterClick = (filter) => {
      setFilterStatus(filter.name);
      if(filter.name==="All"){
        setFilterData({})
      }else{
      setFilterData({ id: filter.uniqueId, type: filter.contentType });
      }
  };


    useEffect(()=>{
        const getFilters=async ()=>{
            const response = await fetch("https://api.furrl.in/api/v2/listing/getListingFilters", {
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
                "body": "{\"id\":\"#HomeHunts\",\"entity\":\"vibe\"}",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
              });

              if(response.ok){
                const data = await response.json();
                setFilters(data.data.getListingFilters.easyFilters)
              }
        }

        getFilters()
    },[]) 
  return (
    <div className='filter-container'>
        <ul>
            <li onClick={() => handleFilterClick({ name: 'All' })}>
              <button className={filterStatus === 'All' ? "active" : "inactive"}>All</button>
            </li>
            {
                getFilters.map((eachFilter)=>(
                    
                    <li key={eachFilter.uniqueId} >
                        <button className={filterStatus === eachFilter.name?"active":"inactive"} onClick={() => handleFilterClick(eachFilter)}>{eachFilter.name}</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Filters