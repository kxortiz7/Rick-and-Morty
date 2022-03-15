import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBox from './SearchBox';
import frame from '../assets/img/frame259.png'
import ResidentInfo from './ResidentInfo';
import ResidentsList from './ResidentsList';





const LocationInfo = () => {
    const [ramInfo, setramInfo] = useState({})

    const random = Math.floor((Math.random()*126) +1)
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setramInfo(res.data))
    },[])
    
  
    return (  
        <>
         <div className="header-frame">
           <img src={frame} alt="" />  
           <div className="input-search">
               <SearchBox setramInfo={setramInfo}/>
            </div>
             
            </div> 

            <section className='content-overall'>
               <div className="content-info">
                   <div className="content-name">
                   <h4>{ramInfo?.name}</h4> </div>                                   

                <div className="content-info-list">
                     <h6 >Type:
                        <p>{ramInfo?.type}</p></h6> 
                     <h6 >Dimension:
                        <p>{ramInfo?.dimension}</p></h6> 
                
                    <h6>Residents: {ramInfo?.residents?.length}</h6>
                 </div>

        
                </div>
                       <ResidentsList residentAPI = {ramInfo}></ResidentsList>
                
                
                </section>

                
                    
                <ResidentInfo/>
                    
               


            
        </>
    );
};

export default LocationInfo;