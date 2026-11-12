import React, { useEffect } from 'react';
import NavBar from '../../components/common/client/NavBar';
import Footer from '../../components/common/client/Footer';
import Header from '../../components/common/client/Header';
import ClientRouters from '../../routers/ClientRouters';

function LayoutClient(props) {
    return (
        <div className='lg:flex'>
            <NavBar />
            <div className='flex-1 lg:h-screen overflow-y-auto custom-scrollbar'>
                <div className='sticky top-0 z-100 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60'>
                    <Header />
                </div>
                <ClientRouters />
                <Footer />
            </div>
        </div>
    );
}

export default LayoutClient;