import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="icon_box">
            <h6>{props.number}</h6>
            <img src="images/icon_box/d1.svg" alt="Icon Box" className="dark" />
            <img src="images/icon_box/d1-light.svg" alt="Icon Box" className="light" />
            <h4 className="text-white">{props.title}</h4>
            {/* <h4 className="text-white"><a href="/service-details">{props.title}</a></h4>*/}
            <p className="text-gray-600">{props.text}</p>
            <p className="text-gray-600"></p>
            {/* <div className="arrow_effect"> <a href="/service-details"><span className="crossline1"></span><span className="crossline2"></span></a></div> */}
        </div>

    );
};

export default ServiceCard;