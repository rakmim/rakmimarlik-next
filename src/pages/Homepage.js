import React from 'react';
import SliderContainer from '../container/SliderContainer';
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const Homepage = () => {
    return (
        <><>
            <SeoHead {...seoMeta.home} />
            <h1>RAK Mimarlık Ana Sayfa</h1>
        </><div className="wrapper">
                <SliderContainer />
            </div></>
    );
};

export default Homepage;