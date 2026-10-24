import React, { useEffect } from 'react';
import NavBar from '../../components/common/client/NavBar';
import Footer from '../../components/common/client/Footer';
import Header from '../../components/common/client/Header';
import ClientRouters from '../../routers/ClientRouters';

function LayoutClient(props) {
    return (
        <div className='flex'>
            <NavBar />
            <div className="flex-1 lg:h-screen overflow-auto">
                <Header />
                <ClientRouters />
                <Footer />
            </div>
        </div>
    );
}

export default LayoutClient;