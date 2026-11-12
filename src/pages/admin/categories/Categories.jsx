import React, { useState } from 'react';

// Sử dụng SVG thuần nhất quán với các component trước, không cần cài thêm thư viện
const PlusIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);

const SearchIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
);

const EditIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487zm0 0L19.5 7.125" /></svg>
);

const TrashIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
);

function Categories() {
    // Dữ liệu mẫu danh mục vé / dịch vụ hàng không của Skyfly
    const [categories, setCategories] = useState([
        { id: 'CAT-01', name: 'Vé Phổ thông (Economy)', code: 'ECO', totalFlights: '12 chuyến', status: 'Hoạt động', updateTime: 'Hôm nay, 08:30' },
        { id: 'CAT-02', name: 'Vé Thương gia (Business)', code: 'BUS', totalFlights: '6 chuyến', status: 'Hoạt động', updateTime: 'Hôm qua, 14:15' },
        { id: 'CAT-03', name: 'Vé Hạng nhất (First Class)', code: 'FIRST', totalFlights: '2 chuyến', status: 'Bảo trì', updateTime: '02/11/2026' },
        { id: 'CAT-04', name: 'Vé Trẻ em (Child)', code: 'CHD', totalFlights: '10 chuyến', status: 'Hoạt động', updateTime: '28/10/2026' },
        { id: 'CAT-05', name: 'Vé Khứ hồi ưu đãi', code: 'PROMO-RT', totalFlights: '4 chuyến', status: 'Hoạt động', updateTime: '25/10/2026' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh mục theo từ khóa tìm kiếm
    const filteredCategories = categories.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 text-slate-100 max-w-7xl mx-auto">
            {/* Header trang & Nút thêm mới */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        Quản lý Danh mục (Categories) 🗂️
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Quản lý các hạng vé, phân loại dịch vụ và cấu hình hệ thống Skyfly Airlines.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                    <PlusIcon className="w-4 h-4" /> Thêm danh mục mới
                </button>
            </div>

            {/* Thanh công cụ tìm kiếm & Bộ lọc */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <SearchIcon className="w-4 h-4" />
                    </span>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên danh mục hoặc mã code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-all shadow-inner"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/50 transition-all">
                        <option value="all">Tất cả trạng thái</option>
                        <option value="active">Đang hoạt động</option>
                        <option value="maintenance">Đang bảo trì</option>
                    </select>
                </div>
            </div>

            {/* Bảng hiển thị danh mục */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-slate-400 border-b border-slate-800 uppercase bg-slate-900/40">
                            <tr>
                                <th className="py-3 px-4">Mã ID</th>
                                <th className="py-3 px-4">Tên danh mục</th>
                                <th className="py-3 px-4">Mã Code</th>
                                <th className="py-3 px-4">Số chuyến áp dụng</th>
                                <th className="py-3 px-4">Trạng thái</th>
                                <th className="py-3 px-4">Cập nhật cuối</th>
                                <th className="py-3 px-4 text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="py-3.5 px-4 font-medium text-amber-400">{item.id}</td>
                                        <td className="py-3.5 px-4 font-semibold text-slate-200">{item.name}</td>
                                        <td className="py-3.5 px-4 font-mono text-xs text-sky-400">{item.code}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{item.totalFlights}</td>
                                        <td className="py-3.5 px-4">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Hoạt động'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Hoạt động' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-400 text-xs">{item.updateTime}</td>
                                        <td className="py-3.5 px-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700/50 transition-all" title="Chỉnh sửa">
                                                    <EditIcon className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-700/50 transition-all" title="Xóa">
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-8 text-slate-500">
                                        Không tìm thấy danh mục phù hợp.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Phân trang đơn giản bên dưới */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    <span>Hiển thị 1-5 trên tổng số 5 danh mục</span>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white transition-all disabled:opacity-50" disabled>Trước</button>
                        <button className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold">1</button>
                        <button className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-all">Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;