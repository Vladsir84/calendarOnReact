import React from 'react';
import Header from './Header'
import Navigation from './Navigation';
import RenderSidebar from './RenderSidebar';

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <RenderSidebar />
        </>
    );
};

export default App;