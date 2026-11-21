import { FiArrowRight, FiChevronRight, FiSearch, FiShoppingCart, FiArrowUp } from 'react-icons/fi';

// Danh sách 4 mục thông tin chuẩn bị cho chuyến bay theo đúng hình mẫu
const tripPreparationItems = [
  {
    id: 1,
    title: 'Chuyến bay nội địa Việt Nam',
    description: 'Tìm hiểu những giấy tờ quan trọng cho các chặng bay nội địa Việt Nam.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Chuyến bay đến Việt Nam',
    description: 'Để nhập cảnh/quá cảnh Việt Nam, hành khách cần chuẩn bị một số giấy tờ cần thiết theo quy định của nhà chức trách.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Chuyến bay từ Việt Nam đi quốc tế',
    description: 'Tìm hiểu các loại giấy tờ cần chuẩn bị trước khi thực hiện hành trình từ Việt Nam đi quốc tế.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Cẩm nang cho một hành trình thuận lợi',
    description: 'Một hành trình luôn bắt đầu từ khi lên kế hoạch, tìm kiếm thông tin, trải nghiệm dịch vụ tại sân bay khởi hành, tận hưởng dịch vụ trên không, cho tới lúc nhận hành lý tại sân bay và thỏa sức khám phá điểm đến.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
];

function Trip() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/70 pb-16 relative">
      {/* Thanh tiện ích góc trên bên phải (Tìm kiếm & Giỏ hàng) đồng bộ tone blue-900 */}
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
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4">
        {/* Breadcrumb 3 cấp như trong ảnh */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
          <span className="hover:text-blue-900 cursor-pointer transition-colors">Trang chủ</span>
          <FiChevronRight className="text-gray-400" />
          <span className="hover:text-blue-900 cursor-pointer transition-colors">Thông tin hành trình</span>
          <FiChevronRight className="text-gray-400" />
          <span className="text-blue-900 font-medium">Chuẩn bị cho chuyến bay</span>
        </nav>

        {/* Tiêu đề trang */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          Chuẩn bị cho chuyến bay
        </h1>

        {/* Lưới danh sách 4 thẻ card (3 thẻ hàng trên, 1 thẻ hàng dưới bên trái) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {tripPreparationItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Khung ảnh bo góc có hiệu ứng zoom nhẹ khi hover */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Tiêu đề thẻ */}
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-2 leading-snug">
                  {item.title}
                </h2>

                {/* Mô tả chi tiết */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Nút Xem thêm đồng bộ màu blue-600 / blue-900 */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-900 transition-colors">
                  Xem thêm
                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nút cuộn lên đầu trang ở góc dưới bên phải */}
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

export default Trip;