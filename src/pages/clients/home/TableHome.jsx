import React from 'react';
import { GoArrowRight } from 'react-icons/go';

function TableHome({ activeTab }) {
    // Dữ liệu hiển thị tương ứng với từng tab được chọn từ Home
    const contentData = {
        checkin: [
            { title: "Làm thủ tục trực tuyến", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80" },
            { title: "Làm thủ tục tại máy tự động", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80" },
            { title: "Làm thủ tục tại sân bay", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" }
        ],
        baggage: [
            { title: "Tra cứu thông tin hành lý", image: "https://www.vietnamairlines.com/content/dam/legacy-site-assets/Images/VNANew/BaggageLookup/Tracuuhanhly_313x218.jpg" },
            { title: "Hành lý xách tay", image: "https://www.vietnamairlines.com/content/dam/legacy-site-assets/Files/VNANewPage-Images/Travel%20Information/Baggage/Page/hanhly_xachtay.jpg" },
            { title: "Hành lý ký gửi miễn cước", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=600&q=80" }
        ],
        airport: [
            { title: "Thông tin nhà ga sân bay", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80" },
            { title: "Phòng chờ thương gia", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80" }
        ],
        preparation: [
            { title: "Giấy tờ tùy thân cần thiết", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" },
            { title: "Yêu cầu sức khỏe & quy định", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80" }
        ]
    };

    const currentCards = contentData[activeTab] || contentData.checkin;

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-gray-400 border-dashed border-t-0 rounded-b-2xl bg-white shadow-sm  '>
            {currentCards.map((item, index) => (
                <div key={index} className='flex flex-col justify-between border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group'>
                    <div>
                        <div className='h-48 overflow-hidden'>
                            <img className='w-full h-full object-cover group-hover:scale-105 transition duration-300' src={item.image} alt={item.title} />
                        </div>
                        <p className='p-4 font-semibold text-gray-800 text-base'>{item.title}</p>
                    </div>
                    <div className='p-4 pt-0 flex justify-end'>
                        <span className='p-2 rounded-full bg-gray-100 group-hover:bg-blue-600 group-hover:text-white transition'>
                            <GoArrowRight />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TableHome;