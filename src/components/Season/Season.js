import React from 'react';
import data from "./season.json"
import './season.css';



function Season(props) {

    let currentSeason = props.season
    let currentId = currentSeason - 1;

    return (
        <div className='season-content'>
         <h1>SEASON {currentSeason} WORKING</h1>

         <div>
            <h2>Synopsis</h2>
            <p>{data[currentId].synopsis}</p>
            <h3>Year: {data[currentId].year} </h3>
         </div>
        </div>
    );
}
export default Season;

