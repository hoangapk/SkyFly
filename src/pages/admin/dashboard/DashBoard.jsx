import React from 'react';

// Định nghĩa các icon dạng SVG thuần để không cần cài thư viện ngoài
const PlaneIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
);

const ShoppingBagIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
);

const UsersIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
);

const DollarSignIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const TrendingUpIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a1.125 1.125 0 011.59 0L21.75 9M19.5 9h2.25V6.75" /></svg>
);

const ClockIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const CheckCircleIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const AlertCircleIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
);

function Dashboard() {
    const stats = [
        { title: 'Tổng số chuyến bay', value: '24', change: '+12%', icon: PlaneIcon, color: 'text-sky-400', bg: 'bg-sky-500/10' },
        { title: 'Vé đã đặt', value: '1,420', change: '+18.2%', icon: ShoppingBagIcon, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        { title: 'Người dùng', value: '850', change: '+5.4%', icon: UsersIcon, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
        { title: 'Doanh thu tháng', value: '$48,500', change: '+24.1%', icon: DollarSignIcon, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    ];

    const recentBookings = [
        { id: 'SK-921', passenger: 'Nguyễn Văn A', route: 'HAN - SGN', seats: '12A, 12B', status: 'Đã xác nhận', time: '10 phút trước' },
        { id: 'SK-922', passenger: 'Trần Thị B', route: 'DAD - HAN', seats: '04C', status: 'Đang xử lý', time: '25 phút trước' },
        { id: 'SK-923', passenger: 'Lê Hoàng C', route: 'SGN - DAD', seats: '18E', status: 'Đã xác nhận', time: '1 giờ trước' },
    ];

    return (
        <div className="p-6 space-y-6 text-slate-100 max-w-7xl mx-auto">
            {/* Khối lời chào và tổng quan */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        Xin chào, Hoàng quản trị viên! 👋
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Hệ thống Skyfly Airlines đang hoạt động ổn định. Dưới đây là tóm tắt dữ liệu hôm nay.
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Hệ thống trực tuyến
                    </span>
                </div>
            </div>

            {/* Các thẻ thống kê (Stats Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-400">{item.title}</span>
                                <div className={`p-2.5 rounded-xl ${item.bg} ${item.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-baseline justify-between">
                                <span className="text-2xl font-bold tracking-tight text-white">{item.value}</span>
                                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                                    <TrendingUpIcon className="w-3.5 h-3.5" /> {item.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bảng dữ liệu đặt vé gần đây & Hoạt động nhanh */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Danh sách đơn vé mới */}
                <div className="lg:col-span-2 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-white">Đơn đặt vé gần đây</h2>
                        <button className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors">
                            Xem tất cả →
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-xs text-slate-400 border-b border-slate-800 uppercase bg-slate-900/40">
                                <tr>
                                    <th className="py-3 px-4">Mã vé</th>
                                    <th className="py-3 px-4">Hành khách</th>
                                    <th className="py-3 px-4">Chuyến bay</th>
                                    <th className="py-3 px-4">Ghế</th>
                                    <th className="py-3 px-4">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {recentBookings.map((booking, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="py-3.5 px-4 font-medium text-amber-400">{booking.id}</td>
                                        <td className="py-3.5 px-4 text-slate-200">{booking.passenger}</td>
                                        <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{booking.route}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{booking.seats}</td>
                                        <td className="py-3.5 px-4">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                booking.status === 'Đã xác nhận'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                            }`}>
                                                {booking.status === 'Đã xác nhận' ? <CheckCircleIcon className="w-3 h-3" /> : <ClockIcon className="w-3 h-3" />}
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Thao tác nhanh (Quick Actions) */}
                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Thao tác nhanh</h2>
                        <p className="text-xs text-slate-400 mb-4">Lối tắt quản lý hệ thống Skyfly</p>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm font-medium text-slate-200 transition-all group">
                                <span className="flex items-center gap-3">
                                    <PlaneIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" /> Thêm chuyến bay mới
                                </span>
                                <span className="text-slate-500">→</span>
                            </button>

                            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm font-medium text-slate-200 transition-all group">
                                <span className="flex items-center gap-3">
                                    <UsersIcon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" /> Quản lý tài khoản User
                                </span>
                                <span className="text-slate-500">→</span>
                            </button>

                            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm font-medium text-slate-200 transition-all group">
                                <span className="flex items-center gap-3">
                                    <ShoppingBagIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" /> Xem danh sách đặt chỗ
                                </span>
                                <span className="text-slate-500">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                        <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                            <AlertCircleIcon className="w-5 h-5 text-amber-400 shrink-0" />
                            <div className="text-xs text-amber-200/90">
                                <span className="font-semibold block">Lưu ý bảo trì</span>
                                Kiểm tra lại cấu hình giá vé động trước giờ cao điểm.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;