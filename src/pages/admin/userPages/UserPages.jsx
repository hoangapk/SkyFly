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

const LockIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
);

function UserPages() {
    // Dữ liệu mẫu danh sách tài khoản người dùng / quản trị viên
    const [users, setUsers] = useState([
        { id: 'USR-01', name: 'Nguyễn Gia Hoàng', email: 'hoangapk113@gmail.com', role: 'Quản trị viên (Admin)', status: 'Hoạt động', lastLogin: 'Hôm nay, 12:00' },
        { id: 'USR-02', name: 'Trần Văn Minh', email: 'minhtran@gmail.com', role: 'Nhân viên hỗ trợ', status: 'Hoạt động', lastLogin: 'Hôm qua, 15:30' },
        { id: 'USR-03', name: 'Lê Thị Lan', email: 'lanle@gmail.com', role: 'Khách hàng', status: 'Hoạt động', lastLogin: '02/11/2026' },
        { id: 'USR-04', name: 'Phạm Quốc Hưng', email: 'hungpham@gmail.com', role: 'Khách hàng', status: 'Đã khóa', lastLogin: '25/10/2026' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // Lọc người dùng theo tên hoặc email
    const filteredUsers = users.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 text-slate-100 max-w-7xl mx-auto">
            {/* Header trang & Nút thêm tài khoản */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        Quản lý Tài khoản (User Pages) 👥
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Quản lý phân quyền, tài khoản quản trị viên và người dùng của hệ thống Skyfly Airlines.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                    <PlusIcon className="w-4 h-4" /> Thêm tài khoản mới
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
                        placeholder="Tìm kiếm theo tên tài khoản hoặc email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-all shadow-inner"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/50 transition-all">
                        <option value="all">Tất cả phân quyền</option>
                        <option value="admin">Quản trị viên</option>
                        <option value="staff">Nhân viên hỗ trợ</option>
                        <option value="customer">Khách hàng</option>
                    </select>
                </div>
            </div>

            {/* Bảng hiển thị danh sách người dùng */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-slate-400 border-b border-slate-800 uppercase bg-slate-900/40">
                            <tr>
                                <th className="py-3 px-4">Mã ID</th>
                                <th className="py-3 px-4">Họ và tên</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Phân quyền</th>
                                <th className="py-3 px-4">Trạng thái</th>
                                <th className="py-3 px-4">Đăng nhập cuối</th>
                                <th className="py-3 px-4 text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="py-3.5 px-4 font-medium text-amber-400">{item.id}</td>
                                        <td className="py-3.5 px-4 font-semibold text-slate-200">{item.name}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{item.email}</td>
                                        <td className="py-3.5 px-4">
                                            <span className={`font-medium text-xs ${item.role.includes('Quản trị') ? 'text-amber-400' : 'text-sky-400'}`}>
                                                {item.role}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                item.status === 'Hoạt động'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Hoạt động' ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-400 text-xs">{item.lastLogin}</td>
                                        <td className="py-3.5 px-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700/50 transition-all" title="Chỉnh sửa">
                                                    <EditIcon className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-700/50 transition-all" title="Khóa tài khoản">
                                                    <LockIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-8 text-slate-500">
                                        Không tìm thấy tài khoản người dùng phù hợp.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Phân trang bên dưới */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    <span>Hiển thị 1-4 trên tổng số 4 tài khoản</span>
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

export default UserPages;