import React from 'react';

const PageBannerWithTwo = (props) => {
    return (
        <>
            <div className="page_header">
                <div className="page_header_inner">
                    <div className="container">
                        <div className="page_header_content d-flex align-items-center justify-content-between">
                            <h2 className="heading">{props.title}</h2>
                            <ul className="breadcrumb d-flex align-items-center">
                                <li><a href="/">Ana Sayfa</a></li>
                                <li><a href={props.previousPageUrl}>{props.previousPageTitle}</a></li>
                                <li className="active">{props.activePage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBannerWithTwo;