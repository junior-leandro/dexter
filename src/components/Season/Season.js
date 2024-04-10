import './season.css';

export default function Season(props) {
    return (
        <div className='season-content'>
         <h1>SEASON {props.season} WORKING</h1>
         <div>
            <h2>{props.season} st Summary</h2>
         </div>
        </div>
    );
}

