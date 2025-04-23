import React from 'react';
import Link from 'next/link';

const ProjectCard = (props) => {
    return (
        <div className="icon_box">
            <h6>{props.number}</h6>
            <img src="images/icon_box/d1.svg" alt="Icon Box" className="dark" />
            <img src="images/icon_box/d1-light.svg" alt="Icon Box" className="light" />
            <h4 className="text-white">
                <Link href={`/project-details/${props.slug}`}>{props.title}</Link>
                </h4>
            <p className="text-gray-600">{props.summary}</p>
            <p className="text-gray-600"></p>
        </div>

    );
};

export default ProjectCard;