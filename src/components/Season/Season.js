import React from 'react';
import data from "./season.json"
import './season.css';
import Header from '../Header/Header';



function Season(props) {

    let currentSeason = 1
    let currentId = currentSeason - 1;
    return (
        <>
            <Header /><div className='season-content'>
                <h1>SEASON {currentSeason}</h1>

                <div>
                    <h2>Synopsis</h2>
                    <p>{data[currentId].synopsis}</p>
                    <h3>Release Year: {data[currentId].year} </h3>

                </div>
            </div>
        </>
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

