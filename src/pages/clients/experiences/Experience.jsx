import React, { useState } from 'react';
import {
  FiArrowRight,
  FiChevronDown,
  FiArrowUp,
  FiSearch,
  FiShoppingCart,
} from 'react-icons/fi';

const cabinClasses = [
  {
    id: 1,
    title: 'Hạng Thương Gia',
    image:
      'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Hạng Phổ thông đặc biệt',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Hạng Phổ thông',
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
  },
];

const entertainmentItems = [
  {
    id: 1,
    title: 'Chương trình giải trí LotuStar',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Dịch vụ kết nối internet',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Ấn phẩm Heritage',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Ứng dụng đọc báo và tạp chí PressReader',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Chương trình giải trí FPT Play',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
  },
];

const shoppingItems = [
  {
    id: 1,
    title: 'LotusDeli',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'LotuShop',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
];

const faqCategories = [
  'Giải trí và Kết nối',
  'Suất ăn đồ uống',
  'Nội thất máy bay',
  'Mua sắm',
];

const faqData = {
  'Giải trí và Kết nối': [
    {
      question: 'Thiết bị giải trí có khác nhau giữa các hạng dịch vụ không?',
      answer:
        'Có. Kích thước màn hình, tai nghe chống ồn và giao diện giải trí có thể khác nhau tùy theo dòng tàu bay và hạng ghế (Thương Gia, Phổ thông đặc biệt, Phổ thông).',
    },
    {
      question:
        'Dịch vụ kết nối internet trên chuyến bay của VNA được cung cấp trên những chuyến bay nào?',
      answer:
        'Dịch vụ kết nối internet trên chuyến bay áp dụng trên các tàu bay thân rộng hiện đại đã được trang bị hệ thống thu phát sóng vệ tinh theo từng chặng bay khai thác.',
    },
    {
      question:
        'Chương trình giải trí LotuStar thường cung cấp các thể loại gì?',
      answer:
        'LotuStar cung cấp đa dạng phim điện ảnh, phim truyền hình, chương trình thiếu nhi, âm nhạc, trò chơi tương tác và thông tin điểm đến.',
    },
    {
      question: 'Tôi muốn đọc báo qua ứng dụng PressReader thì phải làm gì?',
      answer:
        'Hành khách có thể tải ứng dụng PressReader trước chuyến bay hoặc kết nối Wi-Fi/mạng hỗ trợ trên hành trình để tải tạp chí và báo điện tử miễn phí theo chính sách của chặng bay.',
    },
    {
      question:
        'Chương trình giải trí trên máy bay có khác nhau giữa các hạng dịch vụ không?',
      answer:
        'Nội dung thư viện giải trí nhìn chung phong phú cho mọi hành khách, trong khi các tiện ích đi kèm như màn hình cá nhân, cổng sạc hoặc bộ tiện ích có thể khác nhau theo hạng vé.',
    },
  ],
  'Suất ăn đồ uống': [
    {
      question: 'Tôi có thể đặt trước suất ăn đặc biệt không?',
      answer:
        'Hành khách có thể đăng ký suất ăn đặc biệt (như suất ăn chay, suất ăn theo chế độ dinh dưỡng hoặc suất ăn trẻ em) trước giờ khởi hành tối thiểu 24 tiếng.',
    },
    {
      question: 'Trên chuyến bay có phục vụ đồ uống miễn phí không?',
      answer:
        'Tùy theo độ dài chặng bay và hạng dịch vụ, hành khách sẽ được phục vụ nước lọc, trà, cà phê, nước giải khát hoặc các loại đồ uống phù hợp.',
    },
  ],
  'Nội thất máy bay': [
    {
      question: 'Khoang hành khách có không gian để đồ cá nhân như thế nào?',
      answer:
        'Mỗi ghế ngồi đều có ngăn đựng tài liệu phía trước và khoang hành lý xách tay phía trên đầu theo đúng tiêu chuẩn kích thước, trọng lượng quy định.',
    },
  ],
  'Mua sắm': [
    {
      question: 'Tôi có thể mua sắm miễn thuế trên chuyến bay bằng hình thức nào?',
      answer:
        'Hành khách có thể đặt trước hoặc mua trực tiếp trên chuyến bay bằng tiền mặt (VND/USD), thẻ thanh toán quốc tế hoặc các hình thức thanh toán được chấp nhận.',
    },
  ],
};

function Experience() {
  const [activeTab, setActiveTab] = useState('Giải trí và Kết nối');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const currentQuestions = faqData[activeTab] || [];

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    setOpenFaqIndex(null);
    setCurrentPage(1);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/70 pb-20 relative">
      {/* 1. Hero Banner: Dịch vụ trên không */}
      <section className="relative w-full h-[360px] md:h-[440px] overflow-hidden mb-14">
        <img
          src="https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1600&q=80"
          alt="Dịch vụ trên không"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex flex-col justify-center">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Dịch vụ trên không
            </h1>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed">
              Trải nghiệm không gian máy bay hiện đại, dịch vụ chuyên nghiệp từ
              hạng Phổ thông tới hạng Thương gia, mang đến hành trình thoải mái
              và đáng nhớ trên từng chuyến bay.
            </p>
          </div>
        </div>
      </section>

      {/* Container chính */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* 2. Dịch vụ & tiện nghi trên không */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-1.5">
            Mỗi hành trình, một trải nghiệm riêng biệt
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-7">
            Dịch vụ &amp; tiện nghi trên không
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {cabinClasses.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-3">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-900 border-b border-blue-600/40 pb-0.5 transition-colors">
                    Xem chi tiết
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Banner hương thơm LotusScent */}
        <section className="rounded-2xl overflow-hidden border border-blue-100 bg-gradient-to-r from-blue-50 via-cyan-50/70 to-amber-50/60 shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-900 text-white">
              LotusScent
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-blue-950">
              LotusScent - Hương thơm độc bản
            </h3>
            <p className="text-sm text-slate-600">
              Dấu ấn tinh tế trên mọi hành trình &bull; Chuẩn mực thanh tao
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-white/90 border border-blue-100 shadow-sm text-right">
              <p className="text-xs text-gray-500">Không gian thư giãn</p>
              <p className="text-sm font-bold text-blue-900">
                Thảo mộc &amp; Sen Việt
              </p>
            </div>
          </div>
        </section>

        {/* 4. Ẩm thực trên mây */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                Bay cao cùng hương vị Việt
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Ẩm thực trên mây
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Với sứ mệnh quảng bá ẩm thực Việt đến với du khách quốc tế,
                chúng tôi liên tục sáng tạo và đổi mới thực đơn phù hợp theo
                mùa và từng đường bay để mỗi chuyến bay là những trải nghiệm ẩm
                thực khác biệt.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Không chỉ ấn tượng với những món ăn từ nhiều nền ẩm thực trên
                thế giới, hành khách cũng sẽ được phục vụ thức uống với nhiều
                lựa chọn phong phú từ trà, cà phê, v.v. cho đến nước uống có
                ga, bia và rượu.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-72 md:h-88 group">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                  alt="Ẩm thực trên mây"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Giải trí & kết nối trên máy bay */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-1.5">
            Tận hưởng tiện ích giải trí
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-7">
            Giải trí &amp; kết nối trên máy bay
          </h2>

          {/* Hàng trên: 2 card lớn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {entertainmentItems
              .filter((item) => item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-black/25 to-transparent" />
                  <h3 className="relative z-10 h-full p-6 flex items-end text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>

          {/* Hàng dưới: 3 card nhỏ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entertainmentItems
              .filter((item) => !item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-black/25 to-transparent" />
                  <h3 className="relative z-10 h-full p-5 flex items-end text-base md:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>
        </section>

        {/* 6. Mua sắm trên mây */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-1.5">
            Niềm vui nhỏ nâng tầm trải nghiệm bay
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-7">
            Mua sắm trên mây
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {shoppingItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-full h-52 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-3">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-900 border-b border-blue-600/40 pb-0.5 transition-colors">
                    Xem chi tiết
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Câu hỏi thường gặp (FAQ) */}
        <section className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-1.5">
            Thông tin cần biết nhanh chóng
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Câu hỏi thường gặp
          </h2>

          {/* Danh sách Tab */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {faqCategories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleSelectTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Danh sách câu hỏi dạng Accordion */}
          <div className="space-y-3">
            {currentQuestions.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-sm md:text-base text-slate-800">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`text-blue-900 text-lg shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Phân trang nhỏ phía dưới */}
          <div className="flex items-center justify-center gap-4 mt-8 text-sm">
            {[1, 2].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg font-medium transition-colors cursor-pointer ${
                  currentPage === page
                    ? 'border border-blue-600 text-blue-900 font-semibold bg-blue-50/50'
                    : 'text-gray-500 hover:text-blue-900'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Nút cuộn lên đầu trang */}
      <button
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        className="fixed bottom-8 right-8 w-11 h-11 bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer z-30"
      >
        <FiArrowUp className="text-lg" />
      </button>
    </div>
  );
}

export default Experience;  