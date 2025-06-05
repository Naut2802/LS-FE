import TiengAnhMamNonImg from '~/assets/courses/ta-mn/ta-mn.jpg'
import TaMnOutComesImg_1 from '~/assets/courses/ta-mn/outcomes-1.jpg'
import TaMnOutComesImg_2 from '~/assets/courses/ta-mn/outcomes-2.jpg'
import TaMnOutComesImg_3 from '~/assets/courses/ta-mn/outcomes-3.jpg'
import TaMnCurriculumImg_1 from '~/assets/courses/ta-mn/curriculum-1.jpg'
import TaMnTextBookImg from '~/assets/courses/ta-mn/textbook.jpg'
import HtL1Img from '~/assets/courses/ht-l1/ht-l1.jpg'
import HtL1CurriculumImg_1 from '~/assets/courses/ht-l1/curriculum-1.jpg'

export const courses = [
  {
    id: '1',
    title: 'TIẾNG ANH MẦM NON',
    age: '3-6 Tuổi',
    image: TiengAnhMamNonImg,
    color: '#00C3B2',
    outcomes: [
      {
        image: TaMnOutComesImg_1,
        description: 'Phản xạ ngôn ngữ và diễn đạt tự nhiên theo chủ điểm gần gũi cuộc sống'
      },
      {
        image: TaMnOutComesImg_2,
        description: 'Hình thành thói quen giao tiếp tự tin trong cuộc sống hàng ngày'
      },
      {
        image: TaMnOutComesImg_3,
        description: 'Hiểu, sử dụng các cấu trúc, mẫu câu đơn giản trong các tình huống hàng ngày'
      }
    ],
    curriculum: [
      {
        level: 'Kindy 1',
        title: 'TIẾNG ANH MẦM NON (KINDY)',
        age: '3-4 TUỔI',
        duration: '3 THÁNG',
        sessions: '2 BUỔI/TUẦN',
        time: '3 GIỜ',
        image: TaMnCurriculumImg_1
      },
      {
        level: 'Kindy 2',
        title: 'TIẾNG ANH MẦM NON (KINDY)',
        age: '4-5 TUỔI',
        duration: '3 THÁNG',
        sessions: '2 BUỔI/TUẦN',
        time: '3 GIỜ',
        image: TaMnCurriculumImg_1
      },
      {
        level: 'Kindy 3',
        title: 'TIẾNG ANH MẦM NON (KINDY)',
        age: '5-6 TUỔI',
        duration: '3 THÁNG',
        sessions: '2 BUỔI/TUẦN',
        time: '3 GIỜ',
        image: TaMnCurriculumImg_1
      },
    ],
    methods: [
      {
        title: 'PHƯƠNG PHÁP TẮM NGÔN NGỮ',
        description: 'Cho trẻ làm quen thường xuyên với tiếng Anh qua hình ảnh, bài hát, truyện kể thú vị',
        color: 'primary.light'
      },
      {
        title: 'KỸ THUẬT PHẢN XẠ TOÀN THÂN TPR',
        description: 'Học tiếng anh thông qua vận động cơ thể và sự kết hợp các giác quan',
        color: 'primary.main'
      },
      {
        title: 'PHƯƠNG PHÁP CLIL',
        description: 'Kết hợp học tiếng anh qua nội dung các môn khoa học tự nhiên ở mức cơ bản, khuyến khích trẻ khám phá thế giới xung quanh',
        color: 'secondary.main'
      }
    ],
    discipline: {
      title: 'Kỷ luật tích cực',
      description: 'Tạo môi trường học tập vui vẻ, thoải mái; kiên nhẫn hướng dẫn, khuyến khích trẻ bằng lời khen, động viên để tăng cường sự tự tin',
      color: '#00C3B2'
    },
    textbook: {
      name: 'Super Safari',
      description: 'Chương trình Tiếng Anh Mầm non Kindy sử dụng giáo trình Super Safari từ Cambridge, giúp trẻ 3-6 tuổi phát triển tư duy và ngôn ngữ qua góc nhìn đa chiều, khơi gợi hứng thú học tập ngay từ nhỏ.',
      image: TaMnTextBookImg
    }
  },
  {
    id: '2',
    title: 'HÀNH TRANG LỚP 1',
    age: '4-6 Tuổi',
    image: HtL1Img,
    color: '#00A4FF',
    outcomes: [
      {
        image: TaMnOutComesImg_1,
        description: 'Giúp trẻ phát triển tư duy, làm quen với chữ số, chữ cái, rèn kỹ năng vận động tinh và nề nếp học tập.'
      },
      {
        image: TaMnOutComesImg_2,
        description: 'Phát triển tư duy logic, rèn đọc và viết cơ bản, nâng cao kỹ năng tự lập và khả năng tập trung'
      }
    ],
    curriculum: [
      {
        level: 'Lớp 4-5 tuổi',
        title: 'HÀNH TRANG LỚP 1 (4-5 TUỔI)',
        age: '4-5 TUỔI',
        duration: '3 THÁNG',
        sessions: '2 BUỔI/TUẦN',
        time: '3 GIỜ',
        image: HtL1CurriculumImg_1
      },
      {
        level: 'Lớp 5-6 tuổi',
        title: 'HÀNH TRANG LỚP 1 (5-6 TUỔI)',
        age: '5-6 TUỔI',
        duration: '3 THÁNG',
        sessions: '2 BUỔI/TUẦN',
        time: '3 GIỜ',
        image: HtL1CurriculumImg_1
      }
    ],
    methods: [
      {
        title: 'HỌC QUA TRÒ CHƠI',
        description: 'Dùng flashcard, hình ảnh, ghép chữ, đếm số bằng que tính',
        color: 'primary.light'
      },
      {
        title: 'KẾT HỢP VẬN ĐỘNG',
        description: 'Viết chữ trên bảng, chơi trò đi tìm chữ, vẽ số',
        color: 'primary.main'
      },
      {
        title: 'RÈN LUYỆN TỪ DỄ ĐẾN KHÓ',
        description: 'Nét cơ bản - chữ cái - ghép vần - câu ngắn',
        color: 'secondary.main'
      }
    ],
    discipline: {
      title: 'Kỷ luật tích cực',
      description: 'Dùng sticker, phiếu bé ngoan để động viên trẻ',
      color: '#00A4FF'
    },
    textbook: {
      name: 'Super Safari',
      description: 'Chương trình Tiếng Anh Mầm non Kindy sử dụng giáo trình Super Safari từ Cambridge, giúp trẻ 3-6 tuổi phát triển tư duy và ngôn ngữ qua góc nhìn đa chiều, khơi gợi hứng thú học tập ngay từ nhỏ.',
      image: TaMnTextBookImg
    }
  }
]