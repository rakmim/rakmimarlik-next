import React from 'react';

const Bio = (props) => {
    return (
        <div className={props.className}>{props.text}</div>
    );
};

export default Bio;