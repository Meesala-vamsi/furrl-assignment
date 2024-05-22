import React, { useContext, useEffect, useState } from 'react'
import "./Header.css"
import IosShareIcon from '@mui/icons-material/IosShare';
import { Context } from '../../ReactContext/Context';

const Header = () => {

    const [headerData,setHeaderData] = useState({})
    
    useEffect(()=>{
      // setIsLoading(false)
        const getHeaderDetails=async()=>{
            const url="https://api.furrl.in/api/v2/listing/getVibeByName"
          const response = await fetch(url, {
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
                "body": "{\"name\":\"#HomeHunts\"}",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
              });

              if(response.ok){
                const data = await response.json()
                setHeaderData({image:data.data.getVibeByName.profileImageUrl,headerName:data.data.getVibeByName.name})
              }
        }

        

        getHeaderDetails()
    },[])
  return (
    <div className='header-container'>
        <img src={headerData.image} alt="" className='header-image' />
        <span><IosShareIcon/></span>
        
    </div>
  )
}

export default Header