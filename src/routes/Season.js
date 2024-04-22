import React from 'react';
import data from "./season.json"
import './season.css';



function Season(props) {

    let currentSeason = 1
    let currentId = currentSeason - 1;
    return (
        
            <div className='season-content'>
                <h1>SEASON {currentSeason}</h1>

                <div>
                    <h2>Synopsis</h2>
                    <p>{data[currentId].synopsis}</p>
                    <h3>Release Year: {data[currentId].year} </h3>
                    <h3>Episodes:</h3>
                    <ul>
                        <li>Ep.01: {data[currentId].ep01}</li>
                        <li>Ep.02: {data[currentId].ep02}</li>
                        <li>Ep.03: {data[currentId].ep03}</li>
                        <li>Ep.04: {data[currentId].ep04}</li>
                        <li>Ep.05: {data[currentId].ep05}</li>
                        <li>Ep.06: {data[currentId].ep06}</li>
                        <li>Ep.07: {data[currentId].ep07}</li>
                        <li>Ep.08: {data[currentId].ep08}</li>
                        <li>Ep.09: {data[currentId].ep09}</li>
                        <li>Ep.10: {data[currentId].ep10}</li>
                        <li>Ep.11: {data[currentId].ep11}</li>
                        <li>Ep.12: {data[currentId].ep12}</li>
                    </ul>

                </div>
            </div>
        
    )
    /* return (
         <div className='season-content'>
          <h1>SEASON {currentSeason} WORKING</h1>
 
          <div>
             <h2>Synopsis</h2>
             <p>{data[currentId].synopsis}</p>
             <h3>Year: {data[currentId].year} </h3>
             
          </div>
         </div>
     );*/
}
export default Season;

