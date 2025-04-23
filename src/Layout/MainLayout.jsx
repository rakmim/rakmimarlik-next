import React from 'react';
import Header from '../components/header/Header';
import SectionGridLines from '../components/section/SectionGridLines';
import ThemeSwitcher from '../components/ThemeSwitcher'; 

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <ThemeSwitcher />
            <SectionGridLines />
            {children} {/* Bu satır eksikti */}
        </>
    );
};

export default MainLayout;
