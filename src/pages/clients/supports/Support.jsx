    import React, { useState } from 'react';
import {
  FiChevronRight,
  FiChevronDown,
  FiSearch,
  FiShoppingCart,
  FiArrowUp,
  FiClock,
  FiCreditCard,
  FiShield,
  FiBriefcase,
  FiUserCheck,
  FiRefreshCw,
  FiMail,
  FiPhoneCall,
  FiMessageCircle,
  FiPlay,
  FiBookOpen,
} from 'react-icons/fi';

const quickLinks = [
  {
    id: 1,
    title: 'Thông tin chuyến bay',
    description: 'Tra cứu thông tin chuyến bay và tìm hiểu mạng đường bay.',
    icon: FiClock,
  },
  {
    id: 2,
    title: 'Mua vé & Xuất hóa đơn',
    description: 'Chủ động mua vé và xuất hóa đơn trực tuyến.',
    icon: FiCreditCard,
  },
  {
    id: 3,
    title: 'Dịch vụ bổ trợ & Dịch vụ đặc biệt',
    description: 'Dễ dàng lựa chọn dịch vụ đặc biệt và dịch vụ bổ trợ.',
    icon: FiShield,
  },
  {
    id: 4,
    title: 'Hành lý',
    description: 'Tìm kiếm và theo dõi hành lý thất lạc.',
    icon: FiBriefcase,
  },
  {
    id: 5,
    title: 'Làm thủ tục & Giấy tờ tùy thân',
    description: 'Tìm hiểu quy định về giấy tờ và làm thủ tục cho chuyến bay.',
    icon: FiUserCheck,
  },
  {
    id: 6,
    title: 'Đổi & Hoàn vé',
    description: 'Chủ động thực hiện hoàn/đổi vé.',
    icon: FiRefreshCw,
  },
  {
    id: 7,
    title: 'Góp ý dịch vụ',
    description:
      'Hãy chia sẻ các vấn đề về sản phẩm/dịch vụ để chúng tôi có thể cải thiện tốt hơn!',
    icon: FiMail,
  },
];

const guides = [
  {
    id: 1,
    title: 'Đổi vé',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Hoàn vé',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Đổi chuyến không tự nguyện',
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=80',
  },
];

const faqs = [
  {
    question: 'Tôi có thể kiểm tra thông tin chuyến bay như thế nào?',
    answer:
      'Quý khách có thể nhập mã đặt chỗ (PNR) hoặc số hiệu chuyến bay cùng họ tên tại mục Thông tin chuyến bay để xem lịch bay, giờ khởi hành/hạ cánh và tình trạng khai thác mới nhất.',
  },
  {
    question:
      'Tôi có thể khiếu nại hành lý bị thất lạc hoặc hư hỏng bằng cách nào?',
    answer:
      'Quý khách vui lòng liên hệ quầy Hành lý tại sân bay ngay khi vừa nhận hành lý hoặc gửi thông tin kèm mã thẻ hành lý qua mục Hành lý / Trung tâm CSKH để được hỗ trợ tra cứu.',
  },
  {
    question: 'Điều kiện để Nâng hạng là gì?',
    answer:
      'Điều kiện nâng hạng phụ thuộc vào hạng đặt chỗ hiện tại, tình trạng ghế trống trên chuyến bay và quy định của từng chương trình nâng hạng áp dụng cho hành trình.',
  },
  {
    question: 'Giá vé của trẻ em được tính như thế nào?',
    answer:
      'Mức giá vé áp dụng cho trẻ em (từ 2 đến dưới 12 tuổi) và em bé (dưới 2 tuổi) được tính theo tỷ lệ phần trăm của giá vé người lớn tùy theo chặng bay và hạng giá vé.',
  },
  {
    question: 'Tôi có thể tìm hiểu điều kiện hoàn vé và mức phí ở đâu?',
    answer:
      'Quý khách có thể xem điều kiện hoàn/đổi và mức phí tương ứng ngay trên vé điện tử, mục Quản lý đặt chỗ hoặc liên hệ tổng đài hỗ trợ trước giờ khởi hành.',
  },
  {
    question: 'Tôi có thể tìm hiểu điều kiện đổi vé và phí đổi ở đâu?',
    answer:
      'Thông tin chi tiết về điều kiện đổi ngày, đổi chặng và chênh lệch/phí đổi vé được hiển thị khi quý khách thao tác đổi vé trực tuyến hoặc kiểm tra điều kiện giá vé đã mua.',
  },
];

const satisfactionLevels = [
  { value: 1, label: 'Rất không hài lòng', emoji: '😫' },
  { value: 2, label: 'Không hài lòng', emoji: '🙁' },
  { value: 3, label: 'Bình thường', emoji: '😐' },
  { value: 4, label: 'Hài lòng', emoji: '🙂' },
  { value: 5, label: 'Rất hài lòng', emoji: '🤩' },
];

function Support() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmitFeedback = () => {
    if (!selectedRating) return;
    setSubmittedFeedback(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/70 pb-20 relative">
      {/* Thanh tiện ích góc trên bên phải */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 flex justify-end items-center gap-3">
        <div className="relative w-64">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
        <button className="p-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-md transition-colors cursor-pointer">
          <FiShoppingCart className="text-lg" />
        </button>
      </div>

      {/* Container chính */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4 space-y-14">
        {/* Breadcrumb & Tiêu đề trang */}
        <div>
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span className="hover:text-blue-900 cursor-pointer transition-colors">
              Trang chủ
            </span>
            <FiChevronRight className="text-gray-400" />
            <span className="text-blue-900 font-medium">Trung tâm trợ giúp</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Trung tâm trợ giúp
          </h1>
        </div>

        {/* 1. Liên kết nhanh */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Liên kết nhanh
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-7">
            Truy cập nhanh các tính năng giúp Quý khách chủ động quản lý hành
            trình.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {quickLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white flex items-center justify-center text-2xl mb-4 transition-colors duration-200">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-900 border-b border-blue-600/40 pb-0.5 transition-colors">
                      Xem chi tiết
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Hướng dẫn thực hiện */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-7">
            Hướng dẫn thực hiện
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/45 to-black/15" />

                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3.5">
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-blue-600 text-white border border-white/40 backdrop-blur-sm text-xs font-medium transition-colors cursor-pointer"
                    >
                      <FiPlay className="text-xs" />
                      Xem video
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-blue-900 text-white border border-white/40 backdrop-blur-sm text-xs font-medium transition-colors cursor-pointer"
                    >
                      <FiBookOpen className="text-xs" />
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Câu hỏi thường gặp */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Câu hỏi thường gặp
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <button
                    type="button"
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
        </section>

        {/* 4. Liên hệ với chúng tôi */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-7">
            Liên hệ với chúng tôi
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Cột trái: Trò chuyện với NEO & Liên hệ văn phòng chi nhánh */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-7 shadow-md flex flex-col justify-between space-y-8">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-2xl mb-4">
                  <FiMessageCircle />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Trò chuyện với NEO
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  NEO là một trợ lý ảo thông minh, được thiết kế để hỗ trợ
                  người dùng trong việc tìm kiếm thông tin và giải đáp thắc mắc
                  một cách nhanh chóng và hiệu quả.
                </p>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
                >
                  Trò chuyện ngay với NEO
                </button>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-xl mb-3">
                  <FiPhoneCall />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  Liên hệ văn phòng chi nhánh
                </h3>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>

            {/* Cột phải: Trung tâm CSKH */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-7 shadow-md space-y-4">
              <h3 className="text-xl font-bold text-slate-800">
                Trung tâm CSKH tại Việt Nam
              </h3>

              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                <li>Giờ hoạt động: 24/7</li>
                <li>
                  Gọi trong lãnh thổ Việt Nam:{' '}
                  <a
                    href="tel:19001100"
                    className="text-blue-600 hover:text-blue-900 font-semibold underline"
                  >
                    1900 1100
                  </a>
                </li>
                <li>
                  Gọi từ nước ngoài về Việt Nam:{' '}
                  <a
                    href="tel:+842438320320"
                    className="text-blue-600 hover:text-blue-900 font-semibold underline"
                  >
                    (+84) 24 38320320
                  </a>
                </li>
              </ul>

              <p className="text-sm text-gray-600 leading-relaxed">
                Tổng đài Chăm sóc khách hàng tiếp nhận cùng lúc nhiều cuộc gọi;
                do đó, yêu cầu của Quý khách có thể không được xử lý kịp thời.
                Quý khách vui lòng liên hệ Trung tâm Chăm sóc Khách hàng qua
                email dưới đây để được trợ giúp nhanh chóng:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>
                  Vé mua trên website/app:{' '}
                  <a
                    href="mailto:onlinesupport@airline.example"
                    className="text-blue-600 hover:text-blue-900 font-medium underline break-all"
                  >
                    onlinesupport@airline.example
                  </a>
                </li>
                <li>
                  Hỗ trợ chung:{' '}
                  <a
                    href="mailto:telesales@airline.example"
                    className="text-blue-600 hover:text-blue-900 font-medium underline break-all"
                  >
                    telesales@airline.example
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Đánh giá mức độ hài lòng */}
        <section className="pt-4 text-center">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-6">
            Quý khách có hài lòng với thông tin đã tìm được?
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-4 md:gap-6 mb-5">
            {satisfactionLevels.map((item) => {
              const isSelected = selectedRating === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    setSelectedRating(item.value);
                    setSubmittedFeedback(false);
                  }}
                  className={`w-24 py-3 px-2 rounded-2xl flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border border-blue-600 shadow-sm -translate-y-0.5'
                      : 'hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <span
                    className={`text-xs leading-tight ${
                      isSelected
                        ? 'text-blue-900 font-semibold'
                        : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs md:text-sm text-gray-500 mb-5">
            Nếu Quý khách cần phản hồi chi tiết, vui lòng điền thông tin tại mục{' '}
            <span className="text-blue-600 hover:text-blue-900 underline cursor-pointer font-medium">
              Góp ý dịch vụ
            </span>
            .
          </p>

          <button
            type="button"
            onClick={handleSubmitFeedback}
            className="px-7 py-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
          >
            Gửi ý kiến
          </button>

          {submittedFeedback && (
            <p className="mt-3 text-sm font-medium text-cyan-700">
              Cảm ơn Quý khách đã gửi đánh giá!
            </p>
          )}
        </section>
      </div>

      {/* Nút cuộn lên đầu trang */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        className="fixed bottom-8 right-8 w-11 h-11 bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer z-30"
      >
        <FiArrowUp className="text-lg" />
      </button>
    </div>
  );
}

export default Support;