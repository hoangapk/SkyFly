import React, { useState } from 'react';

// Sử dụng SVG thuần đồng bộ với hệ thống, không cần cài thư viện ngoài
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

function CustomerInfors() {
    // Dữ liệu mẫu danh sách thông tin khách hàng (Đã sửa lỗi key memberType)
    const [customers, setCustomers] = useState([
        { id: 'CUST-001', name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', phone: '0905123456', passport: 'B1234567', totalBookings: '4 chuyến', memberType: 'Thành viên VIP' },
        { id: 'CUST-002', name: 'Trần Thị B', email: 'tranthib@gmail.com', phone: '0918987654', passport: 'B7654321', totalBookings: '2 chuyến', memberType: 'Thành viên thường' },
        { id: 'CUST-003', name: 'Lê Hoàng C', email: 'lehoangc@gmail.com', phone: '0988111222', passport: 'B9988776', totalBookings: '6 chuyến', memberType: 'Thành viên VIP' },
        { id: 'CUST-004', name: 'Phạm Văn D', email: 'phamvand@gmail.com', phone: '0935333444', passport: 'B4433221', totalBookings: '1 chuyến', memberType: 'Thành viên mới' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // Lọc khách hàng theo tên, email hoặc số điện thoại
    const filteredCustomers = customers.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm)
    );

    return (
        <div className="space-y-6 text-slate-100 max-w-7xl mx-auto">
            {/* Header trang & Nút thêm khách hàng */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        Quản lý Thông tin Khách hàng (Customer Infos) 👤
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Quản lý hồ sơ, thông tin liên lạc, số hộ chiếu và lịch sử đặt vé của hành khách Skyfly.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                    <PlusIcon className="w-4 h-4" /> Thêm khách hàng mới
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
                        placeholder="Tìm kiếm theo tên khách hàng, email hoặc số điện thoại..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-all shadow-inner"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/50 transition-all">
                        <option value="all">Tất cả loại thành viên</option>
                        <option value="vip">Thành viên VIP</option>
                        <option value="normal">Thành viên thường</option>
                        <option value="new">Thành viên mới</option>
                    </select>
                </div>
            </div>

            {/* Bảng hiển thị thông tin khách hàng */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-slate-400 border-b border-slate-800 uppercase bg-slate-900/40">
                            <tr>
                                <th className="py-3 px-4">Mã KH</th>
                                <th className="py-3 px-4">Họ và tên</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Số điện thoại</th>
                                <th className="py-3 px-4">Số Hộ chiếu / CCCD</th>
                                <th className="py-3 px-4">Hạng thành viên</th>
                                <th className="py-3 px-4 text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="py-3.5 px-4 font-medium text-amber-400">{item.id}</td>
                                        <td className="py-3.5 px-4 font-semibold text-slate-200">{item.name}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{item.email}</td>
                                        <td className="py-3.5 px-4 font-mono text-xs text-sky-400">{item.phone}</td>
                                        <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{item.passport}</td>
                                        <td className="py-3.5 px-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${item.memberType === 'Thành viên VIP'
                                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${item.memberType === 'Thành viên VIP' ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                                                {item.memberType}
                                            </span>
                                        </td>
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
                                        Không tìm thấy thông tin khách hàng phù hợp.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Phân trang bên dưới */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    <span>Hiển thị 1-4 trên tổng số 4 khách hàng</span>
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

export default CustomerInfors;