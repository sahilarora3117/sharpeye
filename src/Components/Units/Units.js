import React from 'react';
import Unit from './Unit/Unit';

const useStyles = () =>({
    layout: {
    },
})
const Units = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
                {props.result
                    .map ((element, index) => {
                        return <Unit key={element["Security Code"]} name={element["Security Name"]} code={element["Security Code"]}/>;
                })}
        </div>
    )
} 

export default Units

