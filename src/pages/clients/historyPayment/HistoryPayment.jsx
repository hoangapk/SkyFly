import React, { useState } from 'react';
import MyPayment from './MyPayment';
import ListExchange from './ListExchange';
import Pay from './Pay';

function HistoryPayment() {
    // State quản lý tab menu bên trái
    const [activeNav, setActiveNav] = useState('history');


    const sidebarNavItems = [
        { id: 'payment', label: 'Thanh toán', type: 'item' },
        { id: 'divider1', type: 'divider' },
        { id: 'booking', label: 'Đặt chỗ của tôi', type: 'item' },
        { id: 'history', label: 'Danh sách giao dịch', type: 'item' },
        { id: 'refund', label: 'Thanh toán & Hoàn tiền', type: 'item' },
        { id: 'flight-alert', label: 'Thông báo giá vé máy bay', type: 'item' },
        { id: 'passenger', label: 'Thông tin hành khách đã lưu', type: 'item' },
        { id: 'notification-settings', label: 'Cài đặt thông báo', type: 'item' },
        { id: 'divider2', type: 'divider' },
        { id: 'account', label: 'Tài khoản', type: 'item' },
        { id: 'logout', label: 'Đăng xuất', type: 'item' },
    ];



    // SVG Icon cho từng mục sidebar
    const renderNavIcon = (id, isActive) => {
        const color = isActive ? 'text-white' : 'text-slate-500';
        switch (id) {
            case 'points':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>;
            case 'payment':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>;
            case 'booking':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
            case 'history':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
            case 'refund':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>;
            case 'flight-alert':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
            case 'passenger':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
            case 'notification-settings':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
            case 'account':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>;
            case 'logout':
                return <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;
            default:
                return null;
        }
    };
    // Thêm các state quản lý nút switch thông báo
    const [notifPromo, setNotifPromo] = useState(true);
    const [notifPriceAlert, setNotifPriceAlert] = useState(true);
    const [notifReviewReminder, setNotifReviewReminder] = useState(true);
    const [notifSurvey, setNotifSurvey] = useState(true);
    const [notifReviewReply, setNotifReviewReply] = useState(true);
    const [notifActivityLog, setNotifActivityLog] = useState(false);
    console.log(activeNav);
    
    return (
        <div className="min-h-screen bg-[#f2f3f7] p-4 md:p-6 font-sans text-slate-800">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-12 gap-6">

                    {/* CỘT TRÁI - SIDEBAR (3.5 / 12 CỘT) */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3.5 space-y-3">
                        {/* User Card */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-11 h-11 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center font-bold text-slate-600 text-sm">
                                    HN
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-bold text-slate-900 text-sm truncate">Ho&agrave;ng Nguyễn ...</h3>
                                    <p className="text-[11px] text-slate-400">Google</p>
                                </div>
                            </div>

                            {/* Bronze Priority Banner */}
                            <div className="bg-gradient-to-r from-[#9e6d42] via-[#b88554] to-[#805229] text-white p-2.5 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-200"></div>
                                    <span className="text-[11px] font-semibold">Bạn là thành viên Bronze Priority</span>
                                </div>
                                <svg className="w-4 h-4 text-amber-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </div>

                        {/* Navigation List */}
                        <div className="bg-white rounded-xl py-2 shadow-sm border border-slate-200/80">
                            {/* Điểm thưởng */}
                            <div className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700">
                                <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-400 text-[#0194f3] flex items-center justify-center text-[10px] font-bold">P</div>
                                <span>0</span>
                            </div>

                            {sidebarNavItems.map((item) => {
                                if (item.type === 'divider') {
                                    return <hr key={item.id} className="my-1.5 border-slate-100" />;
                                }
                                const isActive = activeNav === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveNav(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium transition-colors text-left ${isActive
                                            ? 'bg-[#0194f3] text-white font-semibold'
                                            : 'text-slate-700 hover:bg-slate-50'
                                            }`}
                                    >
                                        {renderNavIcon(item.id, isActive)}
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* CỘT PHẢI - NỘI DUNG THAY ĐỔI THEO TAB (8.5 / 12 CỘT) */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-8.5 space-y-3">

                        {/* 1. Đang chọn tab Danh sách giao dịch HOẶC Thanh toán */}
                        {activeNav === 'payment' && (
                            <Pay/>
                        )}
                        {activeNav === 'history' && (
                            
                            <ListExchange/>
                        )}
                        {/* Đang chọn tab My Booking */}
                        {activeNav === 'booking' && (
                            <MyPayment />
                        )}
                        {/* Đang chọn tab Payments & Refunds */}
                        {activeNav === 'refund' && (
                            <div className="space-y-4">
                                {/* Tiêu đề trang */}
                                <h2 className="text-xl font-bold text-slate-900">Refund balance & status</h2>

                                {/* Banner thông báo số dư hoàn tiền */}
                                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-xs">
                                            🔄
                                        </div>
                                        <span className="text-xs text-slate-700 font-medium">
                                            Some refunds are returned as Refund Balance and can be used for future bookings.
                                        </span>
                                    </div>
                                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>

                                {/* Khung số dư hoàn tiền (Refund Balance) */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">Refund Balance</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xl font-bold text-slate-900">0 VND</span>
                                                <button className="text-[11px] text-[#0194f3] bg-sky-50 px-2 py-0.5 rounded-md hover:bg-sky-100 transition-colors font-medium">
                                                    See history
                                                </button>
                                            </div>
                                        </div>
                                        <button disabled className="bg-slate-100 text-slate-400 font-semibold text-xs px-4 py-2 rounded-lg cursor-not-allowed">
                                            Withdraw balance
                                        </button>
                                    </div>
                                </div>

                                {/* Khung thêm tài khoản ngân hàng */}
                                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 flex items-center justify-between">
                                    <span className="text-xs text-slate-600">
                                        Add your bank account for a quick refund and withdrawal process.
                                    </span>
                                    <button className="bg-[#0194f3] hover:bg-sky-600 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors shadow-sm shrink-0">
                                        Add bank details
                                    </button>
                                </div>

                                {/* Banner Book a trip with Refund Balance */}
                                <div className="bg-gradient-to-r from-[#0071eb] to-[#0194f3] rounded-2xl p-4 text-white flex items-center justify-between shadow-sm cursor-pointer hover:opacity-95 transition-opacity">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm">
                                            ✈️
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs">Book a trip with Refund Balance</h4>
                                            <p className="text-[11px] text-white/90">Explore Traveloka, pay with balance</p>
                                        </div>
                                    </div>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>

                                {/* Khung trạng thái hoàn tiền (Your refund status) */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80">
                                    <h3 className="font-bold text-slate-900 text-sm mb-6">Your refund status</h3>

                                    <div className="py-8 px-4 flex flex-col items-center justify-center text-center">
                                        {/* Hình minh họa con lười ngủ */}
                                        <div className="w-32 h-24 mb-4 relative flex items-center justify-center">
                                            <div className="text-4xl">🦥💤</div>
                                        </div>

                                        <h4 className="font-bold text-slate-900 text-sm mb-1">
                                            You don't have any refund requests
                                        </h4>
                                        <p className="text-xs text-slate-400 max-w-xs">
                                            Take it easy, you don't have any refunds to worry about.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Đang chọn tab Flight Price Alerts */}
                        {activeNav === 'flight-alert' && (
                            <div className="space-y-4">
                                {/* Banner thông báo trên cùng */}
                                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-sm shrink-0">
                                        🔔
                                    </div>
                                    <span className="text-xs text-slate-700 font-medium">
                                        Be the first to know when flight ticket prices have dropped!
                                    </span>
                                </div>

                                {/* Tiêu đề trang */}
                                <h2 className="text-xl font-bold text-slate-900 pt-2">Flight Price Alerts</h2>

                                {/* Khung nội dung chính */}
                                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[350px]">
                                    {/* Hình minh họa cái chuông */}
                                    <div className="w-20 h-20 mb-4 bg-amber-50 rounded-full flex items-center justify-center text-3xl shadow-inner">
                                        🔔
                                    </div>

                                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                                        Get a good deal on your flight!
                                    </h4>
                                    <p className="text-xs text-slate-400 max-w-sm mb-6 leading-relaxed">
                                        Get notified when flight ticket prices have dropped!
                                    </p>
                                    <button className="bg-[#0194f3] hover:bg-sky-600 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors shadow-sm flex items-center gap-2">
                                        <span>🔔</span>
                                        <span>Create Price Alert</span>
                                    </button>
                                </div>
                            </div>
                        )}
                        {/* Đang chọn tab Saved Passenger Details */}
                        {activeNav === 'passenger' && (
                            <div className="space-y-4">
                                {/* Khung nội dung chính */}
                                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[380px]">
                                    {/* Hình minh họa nhóm hành khách */}
                                    <div className="w-24 h-20 mb-4 flex items-center justify-center">
                                        <div className="text-4xl">👥👤🖱️</div>
                                    </div>

                                    <h3 className="font-bold text-slate-900 text-base mb-2">
                                        Saved Passenger Details
                                    </h3>
                                    <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                                        Fill in passenger details now, pick passengers quickly later. Passenger Quick Pick saves you the hassle of entering the same passenger details every time you book.
                                    </p>
                                </div>

                                {/* Nút Add Passengers bên dưới khung */}
                                <button className="w-full bg-[#0194f3] hover:bg-sky-600 text-white font-semibold text-xs py-3 rounded-xl transition-colors shadow-sm">
                                    Add Passengers
                                </button>
                            </div>
                        )}
                        {/* Đang chọn tab Notification Settings */}
                        {activeNav === 'notification-settings' && (
                            <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm border border-slate-200/80">

                                {/* Nhóm 1: Promo and offers */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Promo and offers</h3>

                                    {/* Mục 1: Traveloka promo */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Traveloka promo</h5>
                                            <p className="text-[11px] text-slate-400">Promotions and deals.</p>
                                        </div>
                                        {/* Toggle Switch */}
                                        <div
                                            onClick={() => setNotifPromo(!notifPromo)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifPromo ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>

                                    {/* Mục 2: Price alerts */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Price alerts</h5>
                                            <p className="text-[11px] text-slate-400">Price changes on your saved items.</p>
                                        </div>
                                        {/* Toggle Switch */}
                                        <div
                                            onClick={() => setNotifPriceAlert(!notifPriceAlert)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifPriceAlert ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Nhóm 2: Feedback */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Feedback</h3>

                                    {/* Review reminder */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Review reminder</h5>
                                            <p className="text-[11px] text-slate-400">An extra nudge to share your thoughts on recent experience.</p>
                                        </div>
                                        <div
                                            onClick={() => setNotifReviewReminder(!notifReviewReminder)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifReviewReminder ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>

                                    {/* Survey */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Survey</h5>
                                            <p className="text-[11px] text-slate-400">Feedback opportunities to enhance your experience.</p>
                                        </div>
                                        <div
                                            onClick={() => setNotifSurvey(!notifSurvey)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifSurvey ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>

                                    {/* Review Reply */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Review Reply</h5>
                                            <p className="text-[11px] text-slate-400">Get notified when your review receives a reply.</p>
                                        </div>
                                        <div
                                            onClick={() => setNotifReviewReply(!notifReviewReply)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifReviewReply ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Nhóm 3: Account and booking */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Account and booking</h3>

                                    {/* Activity log */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div>
                                            <h5 className="font-bold text-xs text-slate-900 mb-0.5">Activity log</h5>
                                            <p className="text-[11px] text-slate-400">Account logins, password changes, PIN and security.</p>
                                        </div>
                                        <div
                                            onClick={() => setNotifActivityLog(!notifActivityLog)}
                                            className={`w-10 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${notifActivityLog ? 'bg-[#0194f3] justify-end' : 'bg-slate-300 justify-start'}`}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Đang chọn tab My Account */}
                        {activeNav === 'account' && (
                            <div className="space-y-6">
                                {/* Tiêu đề trang */}
                                <h2 className="text-xl font-bold text-slate-900">Settings</h2>

                                {/* Thanh tab con: Account Information / Password & Security */}
                                <div className="flex border-b border-slate-100 text-xs font-semibold">
                                    <button className="pb-3 px-4 text-[#0194f3] border-b-2 border-[#0194f3]">Account Information</button>
                                    <button className="pb-3 px-4 text-slate-400 hover:text-slate-600">Password & Security</button>
                                </div>

                                {/* 1. Phần Personal Data */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-4">
                                    <h3 className="font-bold text-slate-900 text-sm">Personal Data</h3>

                                    {/* Full Name */}
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-medium text-slate-500">Full Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Hoàng Nguyễn Gia"
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#0194f3]"
                                        />
                                        <p className="text-[10px] text-slate-400">Your full name will also appear as your profile name</p>
                                    </div>

                                    {/* Gender & Birthdate */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                        <div className="space-y-1 md:col-span-1">
                                            <label className="text-[11px] font-medium text-slate-500">Gender</label>
                                            <div className="relative">
                                                <select className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-400 bg-white appearance-none focus:outline-none focus:border-[#0194f3]">
                                                    <option></option>
                                                </select>
                                                <div className="absolute right-3 top-3.5 pointer-events-none text-xs text-slate-400">▼</div>
                                            </div>
                                        </div>

                                        <div className="space-y-1 md:col-span-3">
                                            <label className="text-[11px] font-medium text-slate-500">Birthdate</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['Day', 'Month', 'Year'].map((placeholder, idx) => (
                                                    <div key={idx} className="relative">
                                                        <select className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-400 bg-white appearance-none focus:outline-none focus:border-[#0194f3]">
                                                            <option>{placeholder}</option>
                                                        </select>
                                                        <div className="absolute right-3 top-3.5 pointer-events-none text-xs text-slate-400">▼</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* City of Residence */}
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-medium text-slate-500">City of Residence</label>
                                        <input
                                            type="text"
                                            placeholder="City of Residence"
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-400 focus:outline-none focus:border-[#0194f3]"
                                        />
                                    </div>

                                    {/* Nút hành động */}
                                    <div className="flex justify-end gap-2 pt-2">
                                        <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-400 cursor-not-allowed">
                                            Maybe later
                                        </button>
                                        <button className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-200 text-slate-400 cursor-not-allowed">
                                            Save
                                        </button>
                                    </div>
                                </div>

                                {/* 2. Phần Email */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Email</h3>
                                            <p className="text-[11px] text-slate-400">You may use up to 3 email(s)</p>
                                        </div>
                                        <button className="border border-[#0194f3] text-[#0194f3] hover:bg-sky-50 font-semibold text-xs px-3.5 py-1.5 rounded-full transition-colors">
                                            + Add Email
                                        </button>
                                    </div>

                                    <div className="p-3 border border-slate-100 rounded-lg flex items-center justify-between bg-slate-50/50">
                                        <span className="text-xs font-semibold text-slate-800">1. hoangapk113@gmail.com</span>
                                        <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">Recipient for notifications</span>
                                    </div>
                                </div>

                                {/* 3. Phần Mobile Number */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Mobile Number</h3>
                                            <p className="text-[11px] text-slate-400">You may use up to 3 mobile number(s)</p>
                                        </div>
                                        <button className="border border-[#0194f3] text-[#0194f3] hover:bg-sky-50 font-semibold text-xs px-3.5 py-1.5 rounded-full transition-colors">
                                            + Add Mobile Number
                                        </button>
                                    </div>
                                </div>

                                {/* 4. Phần Linked Accounts */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-3">
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">Linked Accounts</h3>
                                        <p className="text-[11px] text-slate-400">For an easier login, connect your social accounts with Traveloka</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HistoryPayment;