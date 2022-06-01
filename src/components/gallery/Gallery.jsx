import React from "react";
import './gallery.css';
import Image from '../../assets/images.jpg';
import { gData } from '../gallery/galArray.js';
import Ga1 from '../../assets/g1.jpg';
import Ga2 from '../../assets/g2.jpg';
import Ga3 from '../../assets/g3.webp';
import Ga4 from '../../assets/g4.png';
import Ga5 from '../../assets/g5.webp';
import Ga6 from '../../assets/g6.webp';


const Gallery = () => {
    
     let data =[
        {
            id: 1,
            imgSrc: Ga1,

        },
        {
            id: 2,
            imgSrc: Ga2,

        },
        {
            id: 3,
            imgSrc: Ga3,

        },
        {
            id: 4,
            imgSrc: Ga4,

        },
        {
            id: 5,
            imgSrc: Ga5,

        },
        {
            id: 6,
            imgSrc: Ga6,

        },
    ]
   
    
    return (
        

<div class="gal">
    
     
    {data.map((item,index)=>{
        return(
            <div className="pics" key={index}>
                <img src={item.imgSrc} alt="Gallery" style={{ width: 400 }}/>
                </div>
        )
    
    })}
        
    </div>
  

    )

}
export default Gallery
