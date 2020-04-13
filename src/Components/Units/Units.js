import React from 'react';
import Unit from './Unit/Unit';

const Units = (props) => {
   
    return (
        <div>
            <h1>
                {props.result.map ((element, index) => {
                return <Unit key={element["Security Code"]} key={element["Security Code"]} name={element["Security Name"]} />;
            })}
            </h1>
        </div>
    )
} 

export default Units