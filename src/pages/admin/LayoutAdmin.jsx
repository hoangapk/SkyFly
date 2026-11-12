import React from 'react';
import NavbarAdmin from '../../components/common/admin/NavbarAdmin';
import HeaderAdmin from '../../components/common/admin/HeaderAdmin';
import NoelBackground from '../../components/common/admin/NoelBackground';
import AdminRouters from '../../routers/AdminRouters';

function LayoutAdmin(props) {
    return (
        <>
            <NoelBackground />
            <div className='lg:flex'>
                <NavbarAdmin />
                {/* Thêm các class tùy chỉnh thanh cuộn ở đây */}
                <div className='flex-1 lg:h-screen overflow-y-auto custom-scrollbar'>
                    <div className='sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60'>
                        <HeaderAdmin />
                    </div>
                    <div className="p-5">
                        <AdminRouters />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;