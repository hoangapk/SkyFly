import React, { useState } from 'react';

// Sử dụng SVG thuần đồng bộ với toàn bộ hệ thống, không cần cài thư viện ngoài
const PlusIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);

const SearchIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
);

const EyeIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const TrashIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
);

function Bookings() {
    // Dữ liệu mẫu danh sách đặt vé (Bookings) của Skyfly Airlines
    const [bookingsList, setBookingsList] = useState([
        { id: 'SK-921', passenger: 'Nguyễn Văn A', route: 'HAN - SGN', flightNo: 'SK-102', seats: '12A, 12B', price: '2,450,000 đ', status: 'Đã xác nhận', time: 'Hôm nay, 10:15' },
        { id: 'SK-922', passenger: 'Trần Thị B', route: 'DAD - HAN', flightNo: 'SK-205', seats: '04C', price: '1,200,000 đ', status: 'Đang xử lý', time: 'Hôm nay, 09:40' },
        { id: 'SK-923', passenger: 'Lê Hoàng C', route: 'SGN - DAD', flightNo: 'SK-310', seats: '18E', price: '1,850,000 đ', status: 'Đã xác nhận', time: 'Hôm qua, 15:20' },
        { id: 'SK-924', passenger: 'Phạm Văn D', route: 'CXR - HAN', flightNo: 'SK-412', seats: '02F', price: '3,100,000 đ', status: 'Đã hủy', time: '02/11/2026' },
        { id: 'SK-925', passenger: 'Hoàng Thị E', route: 'SGN - PQC', flightNo: 'SK-508', seats: '09A', price: '950,000 đ', status: 'Đã xác nhận', time: '01/11/2026' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách đặt vé theo mã vé hoặc tên hành khách
    const filteredBookings = bookingsList.filter(item =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.passenger.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.route.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 text-slate-100 max-w-7xl mx-auto">
            {/* Header trang & Nút thêm đặt chỗ */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        Quản lý Đặt vé (Bookings) 🎫
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Theo dõi toàn bộ thông tin đơn đặt vé, ghế ngồi và trạng thái thanh toán của hành khách.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                    <PlusIcon className="w-4 h-4" /> Tạo đặt chỗ mới
                </button>
            </div>

            {/* Thanh công cụ tìm kiếm & Bộ lọc trạng thái */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <SearchIcon className="w-4 h-4" />
                    </span>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo mã vé, tên hành khách hoặc chặng bay..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-all shadow-inner"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/50 transition-all">
                        <option value="all">Tất cả trạng thái</option>
                        <option value="confirmed">Đã xác nhận</option>
                        <option value="pending">Đang xử lý</option>
                        <option value="cancelled">Đã hủy</option>
                    </select>
                </div>
            </div>

            {/* Bảng dữ liệu đặt vé */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-slate-400 border-b border-slate-800 uppercase bg-slate-900/40">
                            <tr>
                                <th className="py-3 px-4">Mã vé</th>
                                <th className="py-3 px-4">Hành khách</th>
                                <th className="py-3 px-4">Chặng bay</th>
                                <th className="py-3 px-4">Số hiệu</th>
                                <th className="py-3 px-4">Ghế</th>
                                <th className="py-3 px-4">Tổng tiền</th>
                                <th className="py-3 px-4">Trạng thái</th>
                                <th className="py-3 px-4 text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                            {filteredBookings.length > 0 ? (
                                filteredBookings.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="py-3.5 px-4 font-medium text-amber-400">{item.id}</td>
                                        <td className="py-3.5 px-4 font-semibold text-slate-200">{item.passenger}</td>
                                        <td className="py-3.5 px-4 font-mono text-xs text-sky-400">{item.route}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{item.flightNo}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{item.seats}</td>
                                        <td className="py-3.5 px-4 font-semibold text-emerald-400">{item.price}</td>
                                        <td className="py-3.5 px-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                item.status === 'Đã xác nhận'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                    : item.status === 'Đang xử lý'
                                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    item.status === 'Đã xác nhận' ? 'bg-emerald-400' : item.status === 'Đang xử lý' ? 'bg-amber-400' : 'bg-rose-400'
                                                }`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-700/50 transition-all" title="Xem chi tiết">
                                                    <EyeIcon className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-700/50 transition-all" title="Xóa đơn">
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-8 text-slate-500">
                                        Không tìm thấy thông tin đặt vé phù hợp.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Phân trang bên dưới */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    <span>Hiển thị 1-5 trên tổng số 5 đơn đặt vé</span>
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

export default Bookings;