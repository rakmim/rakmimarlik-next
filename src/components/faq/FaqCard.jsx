import React from 'react';

const FaqCard = (props) => {
    return (
        <div className="icon_box">
            <p className="text-white">{props.title}</p>
            <p className="text-gray-600">{props.text}</p>
            <p className="text-gray-600"></p>
        </div>

    );
};

export default FaqCard;