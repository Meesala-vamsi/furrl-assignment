import React, { useContext } from 'react'
import './Share.css'
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Context } from '../../ReactContext/Context';


const Share = ({setCurrStatus}) => {

  const {productId} = useContext(Context)

  const onClickClose=()=>{
    setCurrStatus(false)
    document.body.classList.remove("no-scroll")
  }
  return (
    <div className='share-container'>
      <div className='container'>
        <div className='copy-btn'>
          <h1>Share</h1>
          <a href={`https://furrl.in/productDetail?id=${productId}`}>Click here for details</a>
        </div>
        <hr />
        <p>Share with Others</p>
        <ul className='media-list-container'>
            <li className='media-list-item'>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://furrl.in/productDetail?id=${productId}`} target='_blank' rel="noreferrer" className='anchor'>
                <InstagramIcon className='media-icon'/>
                <p>Instagram</p>
              </a>
            </li>
            <li className='media-list-item'>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://furrl.in/productDetail?id=${productId}`} target='_blank' rel="noreferrer" className='anchor'>
                <LinkedInIcon className='media-icon linkedin'/>
                <p>LinkedIn</p>
              </a>
            </li>
            <li className='media-list-item'>
              <a href={`https://web.whatsapp.com/send?text=https://furrl.in/productDetail?id=${productId}`} target='_blank' rel="noreferrer" className='anchor'>
                <WhatsAppIcon className='media-icon whatsapp'/>
                <p>WhatsApp</p>
              </a>
            </li>
            <li className='media-list-item'>
              <a href={`https://twitter.com/intent/tweet?text=&url=https://furrl.in/productDetail?id=${productId}`} target='_blank' rel="noreferrer" className='anchor'>
                <XIcon className='media-icon '/>
                <p>Twitter</p>
              </a>
            </li>
        </ul>
        <CloseIcon className='close-icon' onClick={onClickClose}/>
      </div>
    
    </div>
  )
}

export default Share