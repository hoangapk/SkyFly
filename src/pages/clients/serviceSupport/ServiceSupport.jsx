import { FiArrowRight, FiChevronRight, FiSearch, FiShoppingCart, FiArrowUp } from 'react-icons/fi';

// Danh sách dữ liệu 11 dịch vụ bổ trợ theo đúng hình mẫu
const ancillaryServices = [
  {
    id: 1,
    title: 'Sản phẩm kết hợp máy bay và tàu',
    description: 'Dễ dàng đặt vé máy bay kết hợp với vé tàu cao tốc để nối chuyến đến các thành phố lớn.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Mua thêm hành lý ký gửi',
    description: 'Nếu hành lý ký gửi của hành khách vượt quá Quy định, hành khách có thể chọn mua thêm hành lý ký gửi với hình thức Hành lý trả trước hoặc Hành lý tính cước tại sân bay.',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Đặt trước sản phẩm LotusDeli',
    description: 'Với dịch vụ đặt trước sản phẩm LotusDeli, hành khách có thể thoải mái lựa chọn suất ăn phù hợp với khẩu vị của mình.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Giữ giá tốt',
    description: 'Với chức năng “Giữ giá tốt”, hành khách có thể giữ mức giá vé mong muốn trong khi có thêm thời gian để hoàn thiện kế hoạch cho chuyến đi của mình, chỉ với một chi phí nhỏ.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Sky Sofa',
    description: 'Hãy lựa chọn dịch vụ Sky Sofa gồm 02 ghế trống cạnh nhau trong khoang Phổ thông để tận hưởng chuyến bay thoải mái cùng hãng hàng không.',
    image: 'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'E-voucher',
    description: 'Hình thức thanh toán bằng E-voucher (Phiếu quà tặng) giúp hành khách dễ dàng đặt mua các sản phẩm, dịch vụ hoặc gửi E-voucher làm quà tặng cho người thân và bạn bè.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Chọn trước chỗ ngồi',
    description: 'Hãy chọn trước chỗ ngồi để có được vị trí ưng ý nhất và tận hưởng trải nghiệm bay trọn vẹn ngay từ khi lên máy bay.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Nâng hạng',
    description: 'Hành khách sau khi mua vé có thể nâng hạng vé một cách dễ dàng để trải nghiệm dịch vụ đẳng cấp thương gia.',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Bảo hiểm du lịch TripCARE',
    description: 'TripCARE là sản phẩm Bảo hiểm Du lịch toàn diện dành cho hành khách trên mọi chặng bay nội địa và quốc tế.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Đặt khách sạn',
    description: 'Dịch vụ đặt phòng khách sạn hợp tác cùng đối tác lưu trú hàng đầu, cung cấp dịch vụ lưu trú thuận tiện cho hành khách.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'Bảo hiểm du lịch Travel Ready',
    description: 'Travel Ready là bảo hiểm du lịch toàn diện dành cho hành khách áp dụng cho các hành trình một chiều/khứ hồi khởi hành quốc tế.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Dịch vụ quá cảnh',
    description: 'Hành khách nối chuyến tại sân bay Nội Bài hoặc Tân Sơn Nhất (Việt Nam) sẽ có cơ hội tận hưởng những dịch vụ tham quan, du lịch trong thời gian quá cảnh.',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 13,
    title: 'Phòng khách thương gia',
    description: 'Nền tảng đặt phòng chờ trực tuyến giúp hành khách tận hưởng không gian thư giãn đẳng cấp tại hơn 1400 sân bay toàn cầu.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 14,
    title: 'Bảo hiểm XCover',
    description: 'An tâm di chuyển cùng gói bảo hiểm linh hoạt cho chuyến đi từ XCover.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
];

function AncillaryServices() {
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span className="hover:text-blue-900 cursor-pointer transition-colors">Trang chủ</span>
          <FiChevronRight className="text-gray-400" />
          <span className="text-blue-900 font-medium">Dịch vụ hỗ trợ</span>
        </nav>

        {/* Tiêu đề trang */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          Dịch vụ hỗ trợ
        </h1>

        {/* Lưới danh sách dịch vụ (1 cột mobile, 2 cột tablet, 3 cột desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ancillaryServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Khung ảnh bo góc có hiệu ứng zoom nhẹ giống card chuyến bay */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Tiêu đề dịch vụ */}
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-2">
                  {service.title}
                </h2>

                {/* Mô tả chi tiết */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
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

export default AncillaryServices;