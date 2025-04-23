import React from 'react';
import HeaderNav from './HeaderNav';
import UpperHeader from './UpperHeader';

const Header = () => {
    return (
        <>
            <UpperHeader />
            <HeaderNav id='offcanvasHome' />
        </>
    );
};

export default Header;