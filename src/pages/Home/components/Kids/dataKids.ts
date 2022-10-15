import { v4 as uuidv4 } from 'uuid';
import { IBrand } from '../../../../models/brand.model';
import { IProduct } from '../../../../models/product.model';
export const slides = [
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/Puma-nam_3b684b081b924c6d83cd1ab85c21374d.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/Havaianas-nam_c522f0fab3604317bc8fa0d8b472a62a.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/puma-nam_4072465276d94b74b2346b707993ae1f.png',
  },
];
export const features: IProduct[] = [
  {
    _id: '633bcb36b9445656abd37b48',
    name: 'Đầm mini cổ trụ tay dài Belted White With Pockets',
    price: 6980000,
    discount: 80,
    description:
      'Chất liệu: 100% Cotton\nKiểu dáng đầm mini nữ tính, thời trang \nCổ trụ, tay dài xếp li thanh lịch\nThiết kế 4 túi hộp vuông ở trước\nPhối thắt lưng vải cùng màu\nChất vải mịn, tạo cảm giác thoải mái\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Pháp',
    colors: [
      {
        imageMedium:
          '/public/products/9bddc447-48fd-48ad-b0c9-a5845779d085-bla01_frob21035k_1_medium.jpg',
        imageSmall:
          '/public/products/49f0bdf9-e5ac-451f-993b-b49afe51f3d7-bla01_frob21035k_1_small.jpg',
        images: [
          '/public/products/6904fd99-a3b9-4db8-9782-2566cf87495c-bla01_frob21035k_1_large.jpg',
          '/public/products/9a45a92d-3c96-4550-96b4-80c3cf3164c3-bla01_frob21035k_2_large.jpg',
          '/public/products/72b63f72-3971-4ad9-8735-4e47e6b04b63-bla01_frob21035k_3_large.jpg',
          '/public/products/ab64d80b-9baf-46ac-a115-5b2470d8a14a-bla01_frob21035k_4_large.jpg',
          '/public/products/2ccf2888-2493-427e-91b1-755049785b7e-bla01_frob21035k_5_large.jpg',
        ],
        sizes: [
          {
            size: 'XS',
            quantity: 5,
            _id: '633bcb36b9445656abd37b4a',
          },
          {
            size: 'S',
            quantity: 10,
            _id: '633bcb36b9445656abd37b4b',
          },
          {
            size: 'M',
            quantity: 8,
            _id: '633bcb36b9445656abd37b4c',
          },
          {
            size: 'L',
            quantity: 14,
            _id: '633bcb36b9445656abd37b4d',
          },
        ],
        colorName: 'black',
        _id: '633bcb36b9445656abd37b49',
      },
    ],
    brand: {
      _id: '632fab522e176f3c9f7757c9',
      name: 'The Kooples',
      logo: '/public/brands/20220925074532-tk_70b125dd61494a359e6a15caa69efcc5.jpg',
      history:
        '<b>The Kooples<b/> là thương hiệu thời trang đến từ Pháp, được thành lập vào năm 2008 bởi 3 anh em Alexandre, Laurent và Raphael Elicha. Nguồn cảm hứng của <b>The Kooples<b/> vốn xuất phát từ những cặp đôi nổi tiếng thế giới sở hữu phong cách nổi loạn rock and roll, cực kỳ cá tính. Những thiết kế của thương hiệu đều mang đến sự táo bạo, quyến rũ nhưng không mất đi tinh thần sang trọng, thanh lịch.',
      createdAt: '2022-09-25T01:13:54.717Z',
      updatedAt: '2022-10-04T05:57:10.908Z',
      slug: 'the-kooples',
      __v: 0,
    },
    preserveInformation: 'Giặt nhẹ\nPhơi trong bóng râm\nKhông phơi dưới ánh nắng mặt trời',
    deliveryReturnPolicy:
      'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
    category: '632fb3c231bdaca089422a59',
    likeCount: 0,
    quantitySold: 1,
    keywords: ['đầm', 'đầm mini', 'đầm cổ trụ', 'đầm the kooples', 'đầm tay dài'],
    reviews: ['633dc92dad72c1a5c013019f'],
    favorites: [],
    rate: 5,
    gender: 'woman',
    deleted: false,
    createdAt: '2022-10-04T05:57:10.716Z',
    updatedAt: '2022-10-05T18:13:01.369Z',
    slug: 'djam-mini-co-tru-tay-dai-belted-white-with-pockets',
    __v: 0,
  },
  {
    _id: '633af8d5dd4d3f035d3cc2d7',
    name: 'Quần kiểu nữ vải bóng Petite Black Skinny Vinyl',
    price: 1369000,
    discount: 71,
    description:
      'Thành phần vải: 100% Polyurethane\nKiểu dáng hiện đại, phom skinny khoe dáng\nThiết kế chiều dài đến mắt cá chân\nLưng thun\nChất liệu vải bóng thời trang\nChất vải co giãn thoải mái\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Anh',
    colors: [
      {
        imageMedium:
          '/public/products/a000e401-12ff-4289-8ab0-f6ace31a7ee5-130_26e15rblk_1_medium.jpg',
        imageSmall:
          '/public/products/e48b02a9-1818-4eb5-a9be-5693b552a2e4-130_26e15rblk_1_small.jpg',
        images: [
          '/public/products/8aba022e-6dd2-4441-ad03-675762c05375-130_26e15rblk_1_large.jpg',
          '/public/products/87c6f2e8-1e73-44e7-9c41-232fe95512a7-130_26e15rblk_2_large.jpg',
          '/public/products/694cdb84-f04d-4bb4-b81c-bc774920f7cf-130_26e15rblk_3_large.jpg',
          '/public/products/ab0c6f5a-c9f9-4377-a83c-281cb79c87b9-130_26e15rblk_4_large.jpg',
          '/public/products/fcbaa3bd-5246-4b61-ba4a-e94a637160ae-130_26e15rblk_5_large.jpg',
        ],
        sizes: [
          {
            size: 'XS',
            quantity: 4,
            _id: '633af8d5dd4d3f035d3cc2d9',
          },
          {
            size: 'S',
            quantity: 6,
            _id: '633af8d5dd4d3f035d3cc2da',
          },
          {
            size: 'M',
            quantity: 11,
            _id: '633af8d5dd4d3f035d3cc2db',
          },
        ],
        colorName: 'black',
        _id: '633af8d5dd4d3f035d3cc2d8',
      },
    ],
    brand: {
      _id: '632fabd62e176f3c9f7757d5',
      name: 'CECI',
      logo: '/public/brands/20220925074532-ceci__1__d63674f268bc46fdaa0a56e998789786.jpg',
      history:
        'Mỗi cô gái đều là một cá tính riêng không hề trộn lẫn với bất kỳ ai. Và đó cũng là lý do <b>CECI</b> ra đời, để đồng hành cùng bạn trong hành trình thể hiện bản thân dù bạn là ai, vào bất cứ lúc nào, bất cứ nơi đâu. Với những sản phẩm trang sức và phụ kiện đầy tính đương đại, <b>CECI</b> chắc chắn sẽ là điểm đến luôn giúp bạn tìm thấy cho mình một món quà thú vị, một bất ngờ thú vị giúp bạn khám phá những ngóc ngách về bản thân mà mình chưa từng biết đến.',
      createdAt: '2022-09-25T01:16:06.070Z',
      updatedAt: '2022-10-03T14:59:33.616Z',
      slug: 'ceci',
      __v: 0,
    },
    preserveInformation:
      'Giặt máy\nPhơi trong bóng râm\nKhông phơi trực tiếp dưới ánh nắng mặt trời',
    deliveryReturnPolicy:
      'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
    category: '632fb30831bdaca089422a35',
    likeCount: 0,
    quantitySold: 1,
    keywords: ['quần', 'quần kiểu bóng', 'quần kiểu', 'quần bóng', 'quần skinny'],
    reviews: ['633dc92dad72c1a5c01301a0'],
    favorites: [],
    rate: 5,
    gender: 'woman',
    deleted: false,
    createdAt: '2022-10-03T14:59:33.167Z',
    updatedAt: '2022-10-05T18:13:01.374Z',
    slug: 'quan-kieu-nu-vai-bong-petite-black-skinny-vinyl',
    __v: 0,
  },
  {
    _id: '63370adc5ba35494fc385ae9',
    name: 'Áo sweatshirt tay dài phom suông Paisley Big Logo Overfit',
    price: 2490000,
    discount: 0,
    description:
      'Chất liệu: 100% cotton\nKiểu dáng áo sweatshirt phom suông thời trang\nCổ tròn, tay dài\nBo viền cổ, gấu tay và vạt áo\nPhối logo bóng chày nổi bật\nChất vải mềm mại, giữ ấm tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
    colors: [
      {
        imageMedium:
          '/public/products/65f9da91-8d4c-476b-823a-a36402b18594-50crs_3amti0126_1_medium.jpg',
        imageSmall:
          '/public/products/6878a389-6bff-43cc-9202-a636b4afb42c-50crs_3amti0126_1_small.jpg',
        images: [
          '/public/products/65ae14bd-efa6-43ce-8073-aec3dd404d59-50crs_3amti0126_1_large.jpg',
          '/public/products/73f1c2c0-3c75-4518-bcda-5fc0108602d6-50crs_3amti0126_2_large.jpg',
          '/public/products/37804c93-aa73-45d0-a357-f85014ce81f5-50crs_3amti0126_3_large.jpg',
          '/public/products/8d84bc86-b846-48a9-b09e-34645d1db43a-50crs_3amti0126_4_large.jpg',
          '/public/products/dbaf04f8-8eeb-4e5e-af67-a1941f93efd3-50crs_3amti0126_5_large.jpg',
          '/public/products/dfeb51f7-b276-42b7-87ca-fad09125423e-50crs_3amti0126_6_large.jpg',
          '/public/products/c9b2b016-a120-433c-a4a7-d8989f4bebab-50crs_3amti0126_7_large.jpg',
          '/public/products/7f89fe96-e6b2-4dce-bfa2-d819f4ba665f-50crs_3amti0126_8_large.jpg',
          '/public/products/ddd38368-50df-440a-8c0d-9724901bf5a0-50crs_3amti0126_9_large.jpg',
          '/public/products/42cc66e9-1673-47da-bf48-32e4042c1097-50crs_3amti0126_10_large.jpg',
        ],
        sizes: [
          {
            size: 'XS',
            quantity: 5,
            _id: '63370adc5ba35494fc385aeb',
          },
          {
            size: 'S',
            quantity: 10,
            _id: '63370adc5ba35494fc385aec',
          },
          {
            size: 'M',
            quantity: 15,
            _id: '63370adc5ba35494fc385aed',
          },
          {
            size: 'L',
            quantity: 15,
            _id: '63370adc5ba35494fc385aee',
          },
          {
            size: 'XL',
            quantity: 10,
            _id: '63370adc5ba35494fc385aef',
          },
        ],
        colorName: 'nude',
        _id: '63370adc5ba35494fc385aea',
      },
      {
        imageMedium:
          '/public/products/56322a70-b913-49c5-9ed6-8a94bc5417c5-50nyd_3amti0126_1_medium.jpg',
        imageSmall:
          '/public/products/0fcca614-3f0e-4268-87a1-7a8d212902ab-50nyd_3amti0126_1_small.jpg',
        images: [
          '/public/products/467f549e-73af-42be-89a0-d2d75a84768e-50nyd_3amti0126_1_large.jpg',
          '/public/products/f8773789-6440-4fdc-a415-85b634a69d00-50nyd_3amti0126_2_large.jpg',
          '/public/products/fcf9ca28-adb2-404a-bdc7-b660c9448c02-50nyd_3amti0126_3_large.jpg',
          '/public/products/15d303b1-8c19-499b-95bd-fc096b5c184a-50nyd_3amti0126_4_large.jpg',
          '/public/products/142f3c4c-407d-4ac1-bf05-073e79cf68af-50nyd_3amti0126_5_large.jpg',
          '/public/products/9a4c91e7-09fe-4f1b-9235-b88288d8b6f2-50nyd_3amti0126_6_large.jpg',
          '/public/products/a48cb576-5aa3-4962-91bd-08e43f370f8b-50nyd_3amti0126_7_large.jpg',
          '/public/products/65856176-6aa0-44dd-a039-09135143c4e0-50nyd_3amti0126_8_large.jpg',
          '/public/products/b422527a-08ca-464f-8955-d78b28e0ec22-50nyd_3amti0126_9_large.jpg',
        ],
        sizes: [
          {
            size: 'XS',
            quantity: 5,
            _id: '63370adc5ba35494fc385af1',
          },
          {
            size: 'S',
            quantity: 10,
            _id: '63370adc5ba35494fc385af2',
          },
          {
            size: 'M',
            quantity: 20,
            _id: '63370adc5ba35494fc385af3',
          },
          {
            size: 'L',
            quantity: 20,
            _id: '63370adc5ba35494fc385af4',
          },
          {
            size: 'XL',
            quantity: 14,
            _id: '63370adc5ba35494fc385af5',
          },
        ],
        colorName: 'dark-blue',
        _id: '63370adc5ba35494fc385af0',
      },
    ],
    brand: {
      _id: '632fa7242e176f3c9f775782',
      name: 'MLB',
      logo: '/public/brands/20220925074532-mlb_425e44b6399e417eb445b103d6848420.jpg',
      history:
        '<b>MLB</b> là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu <b>MLB</b> thuộc tập đoàn F&F đã mở cửa hàng <b>MLB Korea</b> đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, <b>MLB</b> đã có 250 cửa hàng tại khắp khu vực Châu Á.',
      createdAt: '2022-09-25T00:56:04.185Z',
      updatedAt: '2022-10-03T14:22:12.113Z',
      slug: 'mlb',
      __v: 0,
    },
    preserveInformation:
      'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước ở nhiệt độ 30℃\nPhơi nơi râm mát, thoáng khí',
    deliveryReturnPolicy:
      'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng\n\nSẢN PHẨM BẠN ĐÃ XEM',
    category: '632fb31431bdaca089422a3e',
    likeCount: 0,
    quantitySold: 1,
    keywords: ['sweater', 'áo sweater', 'áo mlb', 'sweater mlb'],
    reviews: [],
    favorites: [],
    rate: 3.6,
    gender: 'unisex',
    deleted: false,
    createdAt: '2022-09-30T15:27:24.772Z',
    updatedAt: '2022-10-05T17:59:45.711Z',
    slug: 'ao-sweatshirt-tay-dai-phom-suong-paisley-big-logo-overfit',
    __v: 0,
  },
];
export const trademarkProducts: IBrand[] = [
  {
    _id: '632faabb2e176f3c9f7757bc',
    name: 'GiGi',
    products: [
      {
        _id: '63385bbf78b2239a6680ed22',
        name: 'Áo khoác cardigan cổ gập phối nút cài thanh lịch',
        price: 1490000,
        discount: 0,
        description:
          'Thành phần vải: 70%Rayon, 10%Purl, 10% Nylon,10% Poly\nKiểu dáng áo khoác len cardigan phom suông thời trang\nCổ gập hiện đại, phối nút cài tròn phía trước\nBo viền gấu tay và vạt áo\nChất vải dệt kim mềm mại, giữ ấm tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Việt Nam',
        colors: [
          {
            imageMedium:
              '/public/products/75d0e6c7-d6e8-468e-8fa2-9bcbdd526504-28_g1304k222715_1_medium.jpg',
            imageSmall:
              '/public/products/56eeaee0-30f1-4a91-b0c3-6c1b66831b44-28_g1304k222715_1_small.jpg',
            images: [
              '/public/products/fa0e17d9-255f-4c2a-ba49-2d01719ac30c-28_g1304k222715_1_large.jpg',
              '/public/products/c9009aa7-c1d9-4b57-8414-32b2749fa3f0-28_g1304k222715_2_large.jpg',
              '/public/products/c0858436-5550-4126-b239-edfa63f9e184-28_g1304k222715_3_large.jpg',
              '/public/products/58a40545-37ad-4acf-9f9e-5fa0eedabc3f-28_g1304k222715_4_large.jpg',
              '/public/products/690d57c9-6a75-4e9d-bae6-eebf196ed226-28_g1304k222715_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 15,
                _id: '63385bbf78b2239a6680ed24',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '63385bbf78b2239a6680ed25',
              },
              {
                size: 'M',
                quantity: 20,
                _id: '63385bbf78b2239a6680ed26',
              },
              {
                size: 'L',
                quantity: 18,
                _id: '63385bbf78b2239a6680ed27',
              },
            ],
            colorName: 'light-blue',
            _id: '63385bbf78b2239a6680ed23',
          },
        ],
        brand: {
          _id: '632faabb2e176f3c9f7757bc',
          name: 'GiGi',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-10-03T14:06:19.934Z',
          slug: 'gigi',
          __v: 0,
        },
        preserveInformation:
          'Sử dụng chất tẩy rửa trung tính\nNhiệt độ nước giặt không quá 30*C\nKhông nên giặt quá lâu, quá mạnh tay\nKhông sử dụng máy sấy\nLuôn phơi trong bóng râm',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb33931bdaca089422a47',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo cardigan', 'cardigan', 'áo'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-01T15:24:47.093Z',
        updatedAt: '2022-10-01T15:24:47.093Z',
        slug: 'ao-khoac-cardigan-co-gap-phoi-nut-cai-thanh-lich',
        __v: 0,
      },
      {
        _id: '633aec5b0c45797f3046326b',
        name: 'Áo blazer nữ dáng dài phối nút cài thanh lịch',
        price: 2890000,
        discount: 0,
        description:
          'Thành phần vải: 73% Polyester, 23% Rayon, 4% Spandex\nKiểu dáng áo blazer nữ phom dài thời trang\nCổ bẻ đặc trưng\nNút cài tròn nổi bật\nChiết eo tôn dáng\nThiết kế trẻ trung, phối 2 túi nắp hộp ở mặt trước \nChất vải mềm mại, đường may tỉ mỉ - chắc chắn\nMàu sắc hiện đại, dễ dàng phối với nhiều loại trang phục \nXuất xứ thương hiệu: Việt Nam',
        colors: [
          {
            imageMedium:
              '/public/products/30e2bdc8-abcc-4417-8ba6-06a27f245ced-00_g1404o222611_1_medium.jpg',
            imageSmall:
              '/public/products/4c57cf0e-783d-48cb-950e-ba513780e2c9-00_g1404o222611_1_small.jpg',
            images: [
              '/public/products/19b67ae5-7fe5-4935-8d90-76535d20d860-00_g1404o222611_1_large.jpg',
              '/public/products/ce1d60af-5f16-4ff1-ae14-4bc20450eb8e-00_g1404o222611_2_large.jpg',
              '/public/products/77881d35-c0d7-48aa-971a-6b5780ae9769-00_g1404o222611_3_large.jpg',
              '/public/products/7bbb0311-fcc1-476b-a31e-295cf39e2537-00_g1404o222611_4_large.jpg',
              '/public/products/ecf6755a-1222-484d-a625-690f6b6ea8fc-00_g1404o222611_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 15,
                _id: '633aec5b0c45797f3046326d',
              },
              {
                size: 'S',
                quantity: 5,
                _id: '633aec5b0c45797f3046326e',
              },
              {
                size: 'M',
                quantity: 7,
                _id: '633aec5b0c45797f3046326f',
              },
              {
                size: 'L',
                quantity: 3,
                _id: '633aec5b0c45797f30463270',
              },
            ],
            colorName: 'white',
            _id: '633aec5b0c45797f3046326c',
          },
        ],
        brand: {
          _id: '632faabb2e176f3c9f7757bc',
          name: 'GiGi',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-10-03T14:06:19.934Z',
          slug: 'gigi',
          __v: 0,
        },
        preserveInformation: 'Giặt khô\nBảo quản nơi ráo thoáng mát',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb34b31bdaca089422a50',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo vest', 'áo blazer', 'áo vest gigi', 'blazer', 'blazer gigi'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-03T14:06:19.170Z',
        updatedAt: '2022-10-03T14:06:19.170Z',
        slug: 'ao-blazer-nu-dang-dai-phoi-nut-cai-thanh-lich',
        __v: 0,
      },
    ],
    logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
    history:
      'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
    createdAt: '2022-09-25T01:11:23.702Z',
    updatedAt: '2022-10-03T14:06:19.934Z',
    slug: 'gigi',
    __v: 0,
  },
  {
    _id: '632fabd62e176f3c9f7757d5',
    name: 'CECI',
    products: [
      {
        _id: '633af8d5dd4d3f035d3cc2d7',
        name: 'Quần kiểu nữ vải bóng Petite Black Skinny Vinyl',
        price: 1369000,
        discount: 71,
        description:
          'Thành phần vải: 100% Polyurethane\nKiểu dáng hiện đại, phom skinny khoe dáng\nThiết kế chiều dài đến mắt cá chân\nLưng thun\nChất liệu vải bóng thời trang\nChất vải co giãn thoải mái\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Anh',
        colors: [
          {
            imageMedium:
              '/public/products/a000e401-12ff-4289-8ab0-f6ace31a7ee5-130_26e15rblk_1_medium.jpg',
            imageSmall:
              '/public/products/e48b02a9-1818-4eb5-a9be-5693b552a2e4-130_26e15rblk_1_small.jpg',
            images: [
              '/public/products/8aba022e-6dd2-4441-ad03-675762c05375-130_26e15rblk_1_large.jpg',
              '/public/products/87c6f2e8-1e73-44e7-9c41-232fe95512a7-130_26e15rblk_2_large.jpg',
              '/public/products/694cdb84-f04d-4bb4-b81c-bc774920f7cf-130_26e15rblk_3_large.jpg',
              '/public/products/ab0c6f5a-c9f9-4377-a83c-281cb79c87b9-130_26e15rblk_4_large.jpg',
              '/public/products/fcbaa3bd-5246-4b61-ba4a-e94a637160ae-130_26e15rblk_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 4,
                _id: '633af8d5dd4d3f035d3cc2d9',
              },
              {
                size: 'S',
                quantity: 6,
                _id: '633af8d5dd4d3f035d3cc2da',
              },
              {
                size: 'M',
                quantity: 11,
                _id: '633af8d5dd4d3f035d3cc2db',
              },
            ],
            colorName: 'black',
            _id: '633af8d5dd4d3f035d3cc2d8',
          },
        ],
        brand: {
          _id: '632fabd62e176f3c9f7757d5',
          name: 'CECI',
          logo: '/public/brands/20220925074532-ceci__1__d63674f268bc46fdaa0a56e998789786.jpg',
          history:
            'Mỗi cô gái đều là một cá tính riêng không hề trộn lẫn với bất kỳ ai. Và đó cũng là lý do <b>CECI</b> ra đời, để đồng hành cùng bạn trong hành trình thể hiện bản thân dù bạn là ai, vào bất cứ lúc nào, bất cứ nơi đâu. Với những sản phẩm trang sức và phụ kiện đầy tính đương đại, <b>CECI</b> chắc chắn sẽ là điểm đến luôn giúp bạn tìm thấy cho mình một món quà thú vị, một bất ngờ thú vị giúp bạn khám phá những ngóc ngách về bản thân mà mình chưa từng biết đến.',
          createdAt: '2022-09-25T01:16:06.070Z',
          updatedAt: '2022-10-03T14:59:33.616Z',
          slug: 'ceci',
          __v: 0,
        },
        preserveInformation:
          'Giặt máy\nPhơi trong bóng râm\nKhông phơi trực tiếp dưới ánh nắng mặt trời',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb30831bdaca089422a35',
        likeCount: 0,
        quantitySold: 1,
        keywords: ['quần', 'quần kiểu bóng', 'quần kiểu', 'quần bóng', 'quần skinny'],
        reviews: ['633dc92dad72c1a5c01301a0'],
        favorites: [],
        rate: 5,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-03T14:59:33.167Z',
        updatedAt: '2022-10-05T18:13:01.374Z',
        slug: 'quan-kieu-nu-vai-bong-petite-black-skinny-vinyl',
        __v: 0,
      },
    ],
    logo: '/public/brands/20220925074532-ceci__1__d63674f268bc46fdaa0a56e998789786.jpg',
    history:
      'Mỗi cô gái đều là một cá tính riêng không hề trộn lẫn với bất kỳ ai. Và đó cũng là lý do <b>CECI</b> ra đời, để đồng hành cùng bạn trong hành trình thể hiện bản thân dù bạn là ai, vào bất cứ lúc nào, bất cứ nơi đâu. Với những sản phẩm trang sức và phụ kiện đầy tính đương đại, <b>CECI</b> chắc chắn sẽ là điểm đến luôn giúp bạn tìm thấy cho mình một món quà thú vị, một bất ngờ thú vị giúp bạn khám phá những ngóc ngách về bản thân mà mình chưa từng biết đến.',
    createdAt: '2022-09-25T01:16:06.070Z',
    updatedAt: '2022-10-03T14:59:33.616Z',
    slug: 'ceci',
    __v: 0,
  },
];
export const categoriesKids = [
  {
    _id: uuidv4(),
    categoryName: 'Trang phục',
    categoryDesc:
      'Định hình phong cách thời trang cho các thiên thần nhỏ của bạn với các item năng động và nhí nhảnh nhưng vẫn đảm bảo sự thoải mái và an toàn từ các thương hiệu thời trang quốc tế: Puma, Skechers, Havaianas,…',
    img: 'https://file.hstatic.net/1000284478/file/cate-trangphuc_e54490b0673341c78ab94b5155cce90b.png',
  },
  {
    _id: uuidv4(),
    categoryName: 'Giày dép',
    categoryDesc:
      'Mang lại sự thoải mái và an toàn cho từng bước chân của bé nhưng vẫn đảm bảo thiết kế nổi bật là những tiêu chí mà các thương hiệu thời trang Puma, Puma, Skechers,… luôn hướng đến.',
    img: 'https://file.hstatic.net/1000356698/file/cate-giay-dep_e9e7a3a57ff341b79b95863a56ae9633.jpg',
  },
  {
    _id: uuidv4(),
    categoryName: 'Túi, balo',
    categoryDesc:
      'Đa dạng các mẫu mã đến từ các thương hiệu thời trang nổi tiếng: Havaianas, Charles & Keith, Puma, Skechers, Puma... với phong cách đáng yêu, kiểu dáng năng động, nhí nhảnh, sử dụng chất liệu tốt nhất, đảm bảo an toàn cho bé.',
    img: 'https://file.hstatic.net/1000284478/file/cate-tuivi_e35ca60f53a7458e9ff9eead4e92b31d.png',
  },
  {
    _id: uuidv4(),
    categoryName: 'Phụ kiện',
    categoryDesc:
      'Với kho tàng phụ kiện phong phú như mắt kính, trang sức, mũ nón,... đến từ các thương hiệu đình đám như Havaianas, Mujosh, Charles & Keith, Puma,... sẽ khiến các fashionista nhí mê mẩn và yêu thích.',
    img: 'https://file.hstatic.net/1000284478/file/cate-phukien_27fc87dc1ff2420bb69120e8e894ff4b.png',
  },
];
