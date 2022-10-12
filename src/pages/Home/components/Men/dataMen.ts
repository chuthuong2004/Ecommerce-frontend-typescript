import { v4 as uuidv4 } from 'uuid';
import { IBrand } from '../../../../models/brand';
export const slides = [
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/pedro-nam_3b684b081b924c6d83cd1ab85c21374d.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/mlb-nam_c522f0fab3604317bc8fa0d8b472a62a.png',
  },
  {
    _id: uuidv4(),
    img: 'https://file.hstatic.net/1000284478/file/puma-nam_4072465276d94b74b2346b707993ae1f.png',
  },
];
export const features = [
  {
    _id: uuidv4(),
    img: 'https://product.hstatic.net/1000284478/product/03_382088_1_48a5efded8344568a5b4d37455be8b73.jpg',
    trademark: 'Puma',
    productName: 'Giày thể thao cổ thấp hiện đại RS Connect Dust',
  },
  {
    _id: uuidv4(),
    img: 'https://product.hstatic.net/1000284478/product/44_pm2-25210190_1_9af2f03d9bc84457bf561e0f81b378ef.jpg',
    trademark: 'Pedro',
    productName: 'Túi đeo chéo nam form chữ nhật Boxy',
  },
  {
    _id: uuidv4(),
    img: 'https://product.hstatic.net/1000284478/product/50kal_3ajp21016_1_c5c67b04e322424d8a1d1b00efa7c5de.jpg',
    trademark: 'Mlb',
    productName: 'Áo khoác bóng chày Basic Padded Mego Logo',
  },
];
export const trademarkProducts: IBrand[] = [
  {
    _id: '632faabb2e176f3c9f7757bc',
    name: 'GiGi',
    products: [
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
        _id: '633af1a60c45797f30463495',
        name: 'Quần kiểu nữ ống rộng Coated Fabric',
        price: 6900000,
        discount: 51,
        description:
          'Thành phần vải: 100% polyester\nKiểu dáng quần ống rộng thời trang\nLưng cao\nNhấn li đứng dáng\nPhối thắt lưng bảng mảnh cùng tone màu\nTúi xéo hai bên\nChất da bóng thời thượng\nMàu sắc dễ phối với nhiều trang phục, phụ kiện\nXuất xứ thương hiệu: Ý',
        colors: [
          {
            imageMedium:
              '/public/products/3f14c6dc-7a4c-46db-b3fd-73bf5686a217-1_9134030003_1_medium.jpg',
            imageSmall:
              '/public/products/c3413d06-9cff-4ec3-b184-c703d30fe975-1_9134030003_1_small.jpg',
            images: [
              '/public/products/8c17f70e-4727-4f04-ba4a-da886b2ffb9e-1_9134030003_1_large.jpg',
              '/public/products/9b7cd80e-36de-4486-a7c8-595c7b43e9f1-1_9134030003_2_large.jpg',
              '/public/products/2670c934-c8fc-48b2-9edb-8e56756130e4-1_9134030003_3_large.jpg',
              '/public/products/f34d3b18-e779-4068-80c3-bcf70c040f9c-1_9134030003_4_large.jpg',
              '/public/products/e2a9dacf-7e8d-4e92-9811-0c636798a884-1_9134030003_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 15,
                _id: '633af1a60c45797f30463497',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '633af1a60c45797f30463498',
              },
              {
                size: 'M',
                quantity: 18,
                _id: '633af1a60c45797f30463499',
              },
            ],
            colorName: 'blue-fabric',
            _id: '633af1a60c45797f30463496',
          },
        ],
        brand: {
          _id: '632faadb2e176f3c9f7757c0',
          name: 'MAX&Co.',
          logo: '/public/brands/20220925074532-maxco_411a3a60f3d2445299e5b0389920ef17.jpg',
          history:
            'MAX&Co. là thương hiệu thuộc Max Mara, tập đoàn thời trang hàng đầu thế giới của Ý với các sản phẩm trang phục dành riêng cho nữ giới. Các bộ sưu tập của MAX&Co. đều sở hữu những phong cách đa dạng và độc đáo, đậm chất thủ công gia truyền lâu đời của người Ý, nhưng vẫn pha trộn chút hài hòa về trong phong cách và đường nét, thương hiệu này hướng tới những quý cô yêu thích những trải nghiệm mới lạ cùng với thời trang.',
          createdAt: '2022-09-25T01:11:55.872Z',
          updatedAt: '2022-10-03T14:28:54.666Z',
          slug: 'maxandco.',
          __v: 0,
        },
        preserveInformation:
          'Giặt với nước ở nhiệt độ thấp\nKhông sử dụng chất tẩy rửa\nỦi với nhiệt độ thấp\nKhông sấy khô, giặt khô\nPhơi trong bóng râm',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb30831bdaca089422a35',
        likeCount: 0,
        quantitySold: 0,
        keywords: [
          'quần nữ',
          'quần kiểu',
          'quần ống rộng',
          'quần max&co',
          'quần kiểu nữ',
          'quần kiểu nữ ống rộng',
        ],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-03T14:28:54.494Z',
        updatedAt: '2022-10-03T14:28:54.494Z',
        slug: 'quan-kieu-nu-ong-rong-coated-fabric',
        __v: 0,
      },
      {
        _id: '633af0130c45797f304633d4',
        name: 'Áo blazer tay dài phối nút cài Dia Monogram All Over',
        price: 1099000,
        discount: 0,
        description:
          'Chất liệu: 53% wool, 39% polyester, 8% nylon\nKiểu dáng áo blazer phom suông thời trang\nTay dài, cổ bẻ và 2 nút cài tròn\nPhối logo nổi bật ở ngực trái\nHọa tiết monogram cá tính, thời thượng\nThiết kế trẻ trung với túi vuông hai bên và 1 túi ở ngực trái\nLớp lót mềm mại, thoáng mát\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/65e58a04-9a3b-4e5e-abf7-edd41393c973-43bgd_3ajkm0124_1_medium.jpg',
            imageSmall:
              '/public/products/5534b38f-a63f-4b9b-b0cd-c49deca93ea0-43bgd_3ajkm0124_1_small.jpg',
            images: [
              '/public/products/dd16382f-6cd5-45dc-860a-b8a824511c1c-43bgd_3ajkm0124_1_large.jpg',
              '/public/products/4c10e5aa-0cb5-42a0-89aa-5bbda7eb22b7-43bgd_3ajkm0124_2_large.jpg',
              '/public/products/53411c58-619a-4314-b5ed-6ccc30b253a8-43bgd_3ajkm0124_3_large.jpg',
              '/public/products/d44c0e85-8dbc-4e66-ba01-3e338727de30-43bgd_3ajkm0124_4_large.jpg',
              '/public/products/ec5755d1-aad1-4186-8c8b-4f12b043c748-43bgd_3ajkm0124_5_large.jpg',
              '/public/products/d1af3067-fb41-424d-8de2-a9574d04e886-43bgd_3ajkm0124_6_large.jpg',
              '/public/products/49d6b208-296b-4ea2-a9d1-0d9483753c92-43bgd_3ajkm0124_7_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 10,
                _id: '633af0130c45797f304633d6',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '633af0130c45797f304633d7',
              },
              {
                size: 'M',
                quantity: 15,
                _id: '633af0130c45797f304633d8',
              },
            ],
            colorName: 'brown',
            _id: '633af0130c45797f304633d5',
          },
          {
            imageMedium:
              '/public/products/aaa8f073-d43a-44da-8898-c36185fed365-50bks_3ajkm0124_1_medium.jpg',
            imageSmall:
              '/public/products/d83493c9-caad-47f5-97ec-5ebaf77b8d1b-50bks_3ajkm0124_1_small.jpg',
            images: [
              '/public/products/676d5283-38ec-4bc0-a6a9-f4ab61524074-50bks_3ajkm0124_1_large.jpg',
              '/public/products/e0357d39-664b-463e-973f-7fb705c2b1d8-50bks_3ajkm0124_2_large.jpg',
              '/public/products/92e302cd-5f87-412f-a85f-481a97e773d9-50bks_3ajkm0124_3_large.jpg',
              '/public/products/ae41500b-25c3-43e8-a882-95d0f020ed3b-50bks_3ajkm0124_4_large.jpg',
              '/public/products/09ebc175-965c-49de-88a8-279c06ebb460-50bks_3ajkm0124_5_large.jpg',
              '/public/products/91f4d487-8f40-4980-a89a-0ac1f8bdde57-50bks_3ajkm0124_6_large.jpg',
              '/public/products/759f3884-1f49-4368-9927-80faf9bb9a20-50bks_3ajkm0124_7_large.jpg',
              '/public/products/f88b758e-c4bd-4e00-9c55-86ed02c1f5db-50bks_3ajkm0124_8_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 5,
                _id: '633af0130c45797f304633da',
              },
              {
                size: 'S',
                quantity: 10,
                _id: '633af0130c45797f304633db',
              },
              {
                size: 'M',
                quantity: 20,
                _id: '633af0130c45797f304633dc',
              },
            ],
            colorName: 'black',
            _id: '633af0130c45797f304633d9',
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
          'Giặt khô\nKhông vắt bằng tay\nKhông giặt với nước\nKhông sử dụng chất tẩy\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb34b31bdaca089422a50',
        likeCount: 0,
        quantitySold: 0,
        keywords: [
          'blazer mlb',
          'áo mlb',
          'áo blazer tay dài phối nút ',
          'blazer phối nút',
          'blazer tay dài',
        ],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-03T14:22:11.958Z',
        updatedAt: '2022-10-03T14:22:11.958Z',
        slug: 'ao-blazer-tay-dai-phoi-nut-cai-dia-monogram-all-over',
        __v: 0,
      },
      {
        _id: '633aedd10c45797f3046331d',
        name: 'Áo blazer nữ kẻ sọc thời trang',
        price: 8900000,
        discount: 70,
        description:
          'Chất liệu: 80% cotton, 20% wool. Lớp lót: 100% polyester\nKiểu dáng áo blazer nữ phom suông thanh lịch\nPhối dây cột eo tôn dáng\nHoạ tiết kẻ sọc mảnh thời trang\nChất vải mềm mịn và thấm hút tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Ý',
        colors: [
          {
            imageMedium:
              '/public/products/9dc77ac3-e219-4c3d-be0d-918962efad02-1_7914940003_1_medium.jpg',
            imageSmall:
              '/public/products/db9e6f41-e5f4-4f35-af89-b8d78607a598-1_7914940003_1_small.jpg',
            images: [
              '/public/products/435133be-7a79-4af8-9840-376b502cb3ed-1_7914940003_1_large.jpg',
              '/public/products/6285c0c8-8ed8-4f5e-86b9-3783f62a5c8a-1_7914940003_2_large.jpg',
              '/public/products/0a8dbc46-691d-4f66-bbed-f036ad30b9ee-1_7914940003_3_large.jpg',
              '/public/products/7844a245-e8ce-4dc4-aab2-fc8141e7b886-1_7914940003_4_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 2,
                _id: '633aedd10c45797f3046331f',
              },
              {
                size: 'S',
                quantity: 5,
                _id: '633aedd10c45797f30463320',
              },
              {
                size: 'M',
                quantity: 7,
                _id: '633aedd10c45797f30463321',
              },
            ],
            colorName: 'triple-white',
            _id: '633aedd10c45797f3046331e',
          },
        ],
        brand: {
          _id: '632faadb2e176f3c9f7757c0',
          name: 'MAX&Co.',
          logo: '/public/brands/20220925074532-maxco_411a3a60f3d2445299e5b0389920ef17.jpg',
          history:
            'MAX&Co. là thương hiệu thuộc Max Mara, tập đoàn thời trang hàng đầu thế giới của Ý với các sản phẩm trang phục dành riêng cho nữ giới. Các bộ sưu tập của MAX&Co. đều sở hữu những phong cách đa dạng và độc đáo, đậm chất thủ công gia truyền lâu đời của người Ý, nhưng vẫn pha trộn chút hài hòa về trong phong cách và đường nét, thương hiệu này hướng tới những quý cô yêu thích những trải nghiệm mới lạ cùng với thời trang.',
          createdAt: '2022-09-25T01:11:55.872Z',
          updatedAt: '2022-10-03T14:28:54.666Z',
          slug: 'maxandco.',
          __v: 0,
        },
        preserveInformation:
          'Giặt với nước ở nhiệt độ thấp\nKhông sử dụng chất tẩy rửa\nỦi với nhiệt độ thấp\nKhông sấy khô, giặt khô\nPhơi trong bóng râm',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb34b31bdaca089422a50',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['blazer', 'áo blazer', 'blazer kẻ sọc'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-03T14:12:33.627Z',
        updatedAt: '2022-10-03T14:12:33.627Z',
        slug: 'ao-blazer-nu-ke-soc-thoi-trang',
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
        _id: '6338599c78b2239a6680ec70',
        name: 'Áo khoác tay dài phối mũ trùm Dia Monogram Blocking',
        price: 7290000,
        discount: 0,
        description:
          'Chất liệu vải: 48% Cotton, 52% Polyester\nKiểu dáng áo khoác kiểu phối zip cài thời trang\nBo viền cổ tay và gấu áo mềm mại\nPhối mũ trùm và dây rút hiện đại\nTúi zip hai bên\nLogo bóng chày thêu nổi bật ở ngực trái\nHọa tiết monogram cá tính, thời thượng\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Singapore',
        colors: [
          {
            imageMedium:
              '/public/products/239a36d4-c5ce-4b0a-bb57-bcd30648ad8b-43bgs_3awjm0224_1_medium.jpg',
            imageSmall:
              '/public/products/1f9ed3e5-1c10-4274-84ff-8900084a0763-43bgs_3awjm0224_1_small.jpg',
            images: [
              '/public/products/ca5f0eb5-32f6-4868-87d9-bd54d2ece98c-43bgs_3awjm0224_1_large.jpg',
              '/public/products/00a42c9c-ca7b-4d61-a109-2b827229aa1a-43bgs_3awjm0224_2_large.jpg',
              '/public/products/886abccb-51f0-416c-b584-499e4ac46a46-43bgs_3awjm0224_3_large.jpg',
              '/public/products/79f61a23-1fa9-40eb-bb4e-52d8295af915-43bgs_3awjm0224_4_large.jpg',
              '/public/products/cd4c4db4-d090-40af-8650-ac64b747af27-43bgs_3awjm0224_5_large.jpg',
              '/public/products/70ec66c3-6a0c-4d62-a812-09e8ed3b623b-43bgs_3awjm0224_6_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 5,
                _id: '6338599c78b2239a6680ec72',
              },
              {
                size: 'S',
                quantity: 10,
                _id: '6338599c78b2239a6680ec73',
              },
              {
                size: 'M',
                quantity: 15,
                _id: '6338599c78b2239a6680ec74',
              },
              {
                size: 'L',
                quantity: 9,
                _id: '6338599c78b2239a6680ec75',
              },
            ],
            colorName: 'brown',
            _id: '6338599c78b2239a6680ec71',
          },
          {
            imageMedium:
              '/public/products/7a672e77-95ab-4866-877f-1db73b7d08b5-50bks_3awjm0224_1_medium.jpg',
            imageSmall:
              '/public/products/91b227cf-d515-4db2-92b3-392da25b15c9-50bks_3awjm0224_1_small.jpg',
            images: [
              '/public/products/63526f83-ede7-4597-87f5-5eba1a1fc2b1-50bks_3awjm0224_1_large.jpg',
              '/public/products/8f14395f-e907-482e-aa25-8a37122c9913-50bks_3awjm0224_2_large.jpg',
              '/public/products/65d88f16-8c0b-4fef-be2d-7ec777497465-50bks_3awjm0224_3_large.jpg',
              '/public/products/c210ef4a-39db-40d4-a033-95eb07d1f347-50bks_3awjm0224_4_large.jpg',
              '/public/products/4ecece29-325b-4135-bd67-8e131f31f8c1-50bks_3awjm0224_5_large.jpg',
              '/public/products/e07a1cf1-dbbd-4ea8-a8a9-d9d4e2cd3dfc-50bks_3awjm0224_6_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 10,
                _id: '6338599c78b2239a6680ec77',
              },
              {
                size: 'S',
                quantity: 15,
                _id: '6338599c78b2239a6680ec78',
              },
              {
                size: 'M',
                quantity: 8,
                _id: '6338599c78b2239a6680ec79',
              },
              {
                size: 'L',
                quantity: 5,
                _id: '6338599c78b2239a6680ec7a',
              },
            ],
            colorName: 'black',
            _id: '6338599c78b2239a6680ec76',
          },
          {
            imageMedium:
              '/public/products/f1009761-9e51-478f-bdbc-139e73506db9-50crs_3awjm0224_1_medium.jpg',
            imageSmall:
              '/public/products/19318171-db12-42b9-a744-5cc2c79325f4-50crs_3awjm0224_1_small.jpg',
            images: [
              '/public/products/44da387f-0983-477d-b58c-b6b902492e11-50crs_3awjm0224_1_large.jpg',
              '/public/products/ec415c2b-0939-4a34-ad77-141279b8c79d-50crs_3awjm0224_2_large.jpg',
              '/public/products/1ab55c58-ad5e-4779-83a7-920c157c391e-50crs_3awjm0224_3_large.jpg',
              '/public/products/6f727988-8f8c-40cb-b0d6-230eef4ad9c5-50crs_3awjm0224_4_large.jpg',
              '/public/products/902eb082-e011-41b9-9f7d-1d0df008f9b2-50crs_3awjm0224_5_large.jpg',
              '/public/products/0fc90f10-0659-4cd9-91ff-664b214dbedd-50crs_3awjm0224_6_large.jpg',
              '/public/products/6d2be823-132e-4a3a-89b3-ca144cb2af93-50crs_3awjm0224_7_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 10,
                _id: '6338599c78b2239a6680ec7c',
              },
              {
                size: 'S',
                quantity: 15,
                _id: '6338599c78b2239a6680ec7d',
              },
              {
                size: 'M',
                quantity: 7,
                _id: '6338599c78b2239a6680ec7e',
              },
              {
                size: 'L',
                quantity: 5,
                _id: '6338599c78b2239a6680ec7f',
              },
            ],
            colorName: 'white',
            _id: '6338599c78b2239a6680ec7b',
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
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước có nhiệt độ không quá 30 độ C\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb33931bdaca089422a47',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo mlb', 'áo khoác mũ trùm', 'áo khoác tay dài'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-01T15:15:40.952Z',
        updatedAt: '2022-10-05T09:53:56.536Z',
        slug: 'ao-khoac-tay-dai-phoi-mu-trum-dia-monogram-blocking',
        __v: 0,
      },
      {
        _id: '633855a778b2239a6680ebce',
        name: 'Áo thun nữ tay ngắn phối chuỗi hạt Tiphanie',
        price: 6200000,
        discount: 0,
        description:
          'Thành phần vải: 100% Cotton\nKiểu dáng áo thun nữ dáng dài năng động\nCổ tròn, tay ngắn\nLogo thương hiệu in ở mặt trước\nNổi bật với thiết kế cut out phối viền chuỗi hạt cá tính\nChất vải mềm mịn, thoáng mát\nThích hợp cho các bạn nữ mặc đi chơi, đi học,...\nGam màu hiện đại dễ dàng phối với nhiều loại trang phục \nXuất xứ thương hiệu: Ý',
        colors: [
          {
            imageMedium:
              '/public/products/1b59f321-e361-4f69-b5c8-e0db2f23e150-z05_1g18as_1_medium.jpg',
            imageSmall:
              '/public/products/3417d470-5182-4c50-86ce-433de93864e6-z05_1g18as_1_small.jpg',
            images: [
              '/public/products/2021311a-6c7e-4d23-98b2-6f15b7cfb2bf-z05_1g18as_1_large.jpg',
              '/public/products/ca03fad4-100f-4ed1-9903-308cf198704c-z05_1g18as_2_large.jpg',
              '/public/products/bf47c1ac-d162-4719-b57d-2c64379d518d-z05_1g18as_3_large.jpg',
              '/public/products/8b78a9fc-1f9b-4596-8890-3abc51b0749d-z05_1g18as_4_large.jpg',
              '/public/products/41e3ea9b-3e18-4a2b-a7d3-a27aac726240-z05_1g18as_5_large.jpg',
              '/public/products/96814d4c-07c2-4991-93b1-35c14d6742ca-z05_1g18as_6_large.jpg',
              '/public/products/70dfaeda-03fd-4d4d-b943-7d1d4b916f9c-z05_1g18as_7_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 10,
                _id: '633855a778b2239a6680ebd0',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '633855a778b2239a6680ebd1',
              },
              {
                size: 'M',
                quantity: 15,
                _id: '633855a778b2239a6680ebd2',
              },
              {
                size: 'L',
                quantity: 5,
                _id: '633855a778b2239a6680ebd3',
              },
            ],
            colorName: 'white',
            _id: '633855a778b2239a6680ebcf',
          },
          {
            imageMedium:
              '/public/products/c68daa53-8089-4ccf-b03b-0c126b07fe9b-z99_1g18as_1_medium.jpg',
            imageSmall:
              '/public/products/7cf5c52b-eca9-44e1-a5bc-5b47f59f5a0b-z99_1g18as_1_small.jpg',
            images: [
              '/public/products/36001dcd-b4cc-4930-996f-1656e69effdc-z99_1g18as_1_large.jpg',
              '/public/products/aca71a5d-953d-4d90-a29f-7a049c39cd8c-z99_1g18as_2_large.jpg',
              '/public/products/dde539ef-daa6-4b31-9d0b-bdeeb3055dbd-z99_1g18as_3_large.jpg',
              '/public/products/4e3b20a9-d05f-4ba0-984e-ff126098e578-z99_1g18as_4_large.jpg',
              '/public/products/74d07c50-0c59-4e27-82b8-4b29566a63eb-z99_1g18as_5_large.jpg',
              '/public/products/4ccd79e6-7275-450d-972a-22de7f8a9670-z99_1g18as_6_large.jpg',
              '/public/products/4be87eb8-7106-48bb-b569-ecc936ff8634-z99_1g18as_7_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 5,
                _id: '633855a778b2239a6680ebd5',
              },
              {
                size: 'S',
                quantity: 15,
                _id: '633855a778b2239a6680ebd6',
              },
              {
                size: 'M',
                quantity: 15,
                _id: '633855a778b2239a6680ebd7',
              },
              {
                size: 'L',
                quantity: 5,
                _id: '633855a778b2239a6680ebd8',
              },
            ],
            colorName: 'black',
            _id: '633855a778b2239a6680ebd4',
          },
        ],
        brand: {
          _id: '632fabb02e176f3c9f7757d1',
          name: 'PINKO',
          logo: '/public/brands/20220925074532-pinko_a44b8a88ffe74585b7dd7da2ff94b2bb.jpg',
          history:
            'Thương hiệu được thành lập vào cuối những năm 1980 bởi Chủ tịch kiêm Giám đốc điều hành hiện tại Pietro Negra và vợ ông Cristina Rubini. <b>PINKO<b/> hướng đến những người phụ nữ độc lập, mạnh mẽ và gợi cảm. Với thiết kế linh hoạt, cá tính cùng chất liệu vải cao cấp, <b>PINKO<b/> mang đến 1 không gian sáng tạo giúp người phụ nữ tạo ra được phong cách riêng, khiến họ luôn cuốn hút và biến hóa. <b>PINKO<b/> được tạo ra để truyền cảm hứng cho phụ nữ Tự tin khoe cá tính.',
          createdAt: '2022-09-25T01:15:28.153Z',
          updatedAt: '2022-10-01T14:58:47.299Z',
          slug: 'pinko',
          __v: 0,
        },
        preserveInformation:
          'Giặt tay\nKhông giặt khô\nKhông sử dụng chất tẩy rửa mạnh\nKhông sấy khô\nỦi ở nhiệt độ tối đa 110°C\nKhông phơi trực tiếp dưới ánh nắng mặt trời',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb31431bdaca089422a3e',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo pinko', 'áo trắng', 'áo đen', 'áo thun'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-10-01T14:58:47.108Z',
        updatedAt: '2022-10-01T14:58:47.108Z',
        slug: 'ao-thun-nu-tay-ngan-phoi-chuoi-hat-tiphanie',
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
      {
        _id: '6336fdfdcff2ea799ddf377e',
        name: 'Áo ba lỗ thể thao nữ Dare To Cropped',
        price: 1299000,
        discount: 0,
        description:
          'Thành phần vải: 77% nylon, 23% elastane\nKiểu dáng áo ba lỗ croptop phom ôm nữ tính\nLogo thương hiệu in nổi bật ở ngực trái\nCổ xẻ chữ V\nThiết kế dây thắt đan chéo đẹp mắt ở phía trước\nThích hợp sử dụng cho tập luyện thể thao & hoạt động ngoài trời\nXuất xứ thương hiệu: Đức',
        colors: [
          {
            imageMedium:
              '/public/products/78e82574-7781-4ea7-9cb2-bd05251c53cf-01_535635_1_medium.jpg',
            imageSmall:
              '/public/products/03c34ec9-2f03-41fc-8f35-8fb650721a44-01_535635_1_small.jpg',
            images: [
              '/public/products/4bb07c3e-ef6e-47f0-bc86-01a5aad46c7b-01_535635_1_large..jpg',
              '/public/products/06a16855-1acd-4171-9264-7d153a09beea-01_535635_2_large.jpg',
              '/public/products/e7cf4b3a-0bcf-4e69-a459-c6dbc254fc07-01_535635_3_large.jpg',
              '/public/products/26860fe4-ec43-4601-a21e-9447a7098dd1-01_535635_4_large.jpg',
              '/public/products/f7b0b35a-9b80-4044-b957-d8ed870afe98-01_535635_5_large.jpg',
              '/public/products/84258282-c311-4957-b884-658eae03dcfc-01_535635_6_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 24,
                _id: '6336fdfdcff2ea799ddf3780',
              },
              {
                size: 'S',
                quantity: 40,
                _id: '6336fdfdcff2ea799ddf3781',
              },
              {
                size: 'M',
                quantity: 30,
                _id: '6336fdfdcff2ea799ddf3782',
              },
            ],
            colorName: 'black',
            _id: '6336fdfdcff2ea799ddf377f',
          },
          {
            imageMedium:
              '/public/products/282aae79-84c9-4c7b-ae4f-29aa7e968f6f-50_535635_1_medium.jpg',
            imageSmall:
              '/public/products/ed550e6e-2001-42d4-9da2-87b7f900b6cf-50_535635_1_small.jpg',
            images: [
              '/public/products/6b8849f7-3d13-42e7-b234-85c8509f8a35-50_535635_1_large.jpg',
              '/public/products/1e83437f-b4b6-4b3f-81e1-ea024f4fa406-50_535635_2_large.jpg',
              '/public/products/6d8a50e8-6c1c-415d-a13b-329752546111-50_535635_3_large.jpg',
              '/public/products/e01b30b0-de88-4f17-b75a-8022a2af00d8-50_535635_4_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 10,
                _id: '6336fdfdcff2ea799ddf3784',
              },
              {
                size: 'S',
                quantity: 30,
                _id: '6336fdfdcff2ea799ddf3785',
              },
              {
                size: 'M',
                quantity: 40,
                _id: '6336fdfdcff2ea799ddf3786',
              },
            ],
            colorName: 'pink',
            _id: '6336fdfdcff2ea799ddf3783',
          },
        ],
        brand: {
          _id: '632fa7c82e176f3c9f775786',
          name: 'PUMA',
          logo: '/public/brands/20220925074532-puma_624b36fe3a5348d5a3284364d3b378b9.jpg',
          history:
            'Được thành lập vào năm 1948 tại Đức, <b>PUMA</b> là một trong những thương hiệu thể thao hàng đầu thế giới về thiết kế, phát triển các mặt hàng giày dép, quần áo, phụ kiện. <b>PUMA</b> chuyên sản xuất giày thời trang và giày thể thao dùng trong bóng đá, chạy bộ, giày để tập luyện trong phòng tập, golf và đua xe mô-tô. Thương hiệu hiện phân phối các dòng sản phẩm tại hơn 120 quốc gia và được phân phối tại Việt Nam bởi Maison JSC.',
          createdAt: '2022-09-25T00:58:48.421Z',
          updatedAt: '2022-09-30T14:32:29.904Z',
          slug: 'puma',
          __v: 0,
        },
        preserveInformation:
          'Không giặt khô\nKhông giặt chung với sản phẩm khác màu\nKhông sử dụng chất làm mềm vải\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nKhông ủi hình in\nGiặt bằng nước có nhiệt độ không quá 30 độ C\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb31431bdaca089422a3e',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['puma', 'áo thể thao', 'áo balo', 'dare to cropped'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'woman',
        deleted: false,
        createdAt: '2022-09-30T14:32:29.740Z',
        updatedAt: '2022-09-30T14:32:29.740Z',
        slug: 'ao-ba-lo-the-thao-nu-dare-to-cropped',
        __v: 0,
      },
      {
        _id: '6336ef530a0af98dcd7d26da',
        name: 'Giày thể thao Bigball Chunky Planet',
        price: 2990000,
        discount: 0,
        description:
          'Chất liệu: Da tổng hợp\nKiểu dáng giày thể thao đế cao thời trang\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\nCộng hưởng cùng chi tiết logo bóng chày in nổi bật\nDây buộc tròn đơn giản\nLớp lót êm ái, nâng dáng bước chân\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/cefac07c-d6f5-4c1a-958f-9e6ec6a5c928-50mtl_3ashcd32n_1_medium.jpg',
            imageSmall:
              '/public/products/273b9f3a-c35c-4970-9070-b4beb8b67f68-50mtl_3ashcd32n_1_small.jpg',
            images: [
              '/public/products/099f27d4-6d95-4e61-b23f-7698bbfa1ef4-50mtl_3ashcd32n_1_large.jpg',
              '/public/products/7874c55d-a9ff-4a92-802d-1d71bc15a16f-50mtl_3ashcd32n_2_large.jpg',
              '/public/products/b3ce1564-d90a-4af1-bb5c-a712628d406f-50mtl_3ashcd32n_3_large.jpg',
              '/public/products/dfc1cf51-4fc5-4e82-af0a-be81aa496025-50mtl_3ashcd32n_4_large.jpg',
              '/public/products/dbc46763-ea67-4226-bff4-d9e47a8a4b61-50mtl_3ashcd32n_5_large.jpg',
              '/public/products/f4d8a1bc-1aea-4e82-9349-807197b7264a-50mtl_3ashcd32n_6_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 20,
                _id: '6336ef530a0af98dcd7d26dc',
              },
              {
                size: '235',
                quantity: 40,
                _id: '6336ef530a0af98dcd7d26dd',
              },
              {
                size: '240',
                quantity: 50,
                _id: '6336ef530a0af98dcd7d26de',
              },
              {
                size: '245',
                quantity: 40,
                _id: '6336ef530a0af98dcd7d26df',
              },
              {
                size: '250',
                quantity: 29,
                _id: '6336ef530a0af98dcd7d26e0',
              },
              {
                size: '260',
                quantity: 59,
                _id: '6336ef530a0af98dcd7d26e1',
              },
              {
                size: '270',
                quantity: 58,
                _id: '6336ef530a0af98dcd7d26e2',
              },
              {
                size: '280',
                quantity: 48,
                _id: '6336ef530a0af98dcd7d26e3',
              },
              {
                size: '290',
                quantity: 44,
                _id: '6336ef530a0af98dcd7d26e4',
              },
            ],
            colorName: 'violet',
            _id: '6336ef530a0af98dcd7d26db',
          },
          {
            imageMedium:
              '/public/products/8ade8260-a79b-4419-9595-298a0b13d7ad-07ors_3ashcd32n_1_medium.jpg',
            imageSmall:
              '/public/products/f0d2cc57-b9a7-44c0-a34d-49ff5c98e5e5-07ors_3ashcd32n_1_small.jpg',
            images: [
              '/public/products/a2473b8a-ff3e-4e9a-8f49-ae8e33980057-07ors_3ashcd32n_1_large.jpg',
              '/public/products/118c6392-a77a-4117-a5b9-1be015bfc9d8-07ors_3ashcd32n_2_large.jpg',
              '/public/products/b2cfaba9-a580-4b55-8467-51d394f5f31e-07ors_3ashcd32n_3_large.jpg',
              '/public/products/21645b6a-dd95-4993-8ac4-88846e3d580e-07ors_3ashcd32n_4_large.jpg',
              '/public/products/f3557cda-7d76-4d32-a231-a364bae2db74-07ors_3ashcd32n_5_large.jpg',
              '/public/products/336682cf-35b6-4543-986e-fe2bfe72a06d-07ors_3ashcd32n_6_large.jpg',
              '/public/products/a2ea0c92-4581-4ea4-a533-962b6e2a5637-07ors_3ashcd32n_7_large.jpg',
              '/public/products/90201607-e051-45a7-86c4-30dfe231e3f9-07ors_3ashcd32n_8_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 20,
                _id: '6336ef530a0af98dcd7d26e6',
              },
              {
                size: '235',
                quantity: 5,
                _id: '6336ef530a0af98dcd7d26e7',
              },
              {
                size: '240',
                quantity: 40,
                _id: '6336ef530a0af98dcd7d26e8',
              },
              {
                size: '245',
                quantity: 29,
                _id: '6336ef530a0af98dcd7d26e9',
              },
              {
                size: '250',
                quantity: 49,
                _id: '6336ef530a0af98dcd7d26ea',
              },
              {
                size: '260',
                quantity: 43,
                _id: '6336ef530a0af98dcd7d26eb',
              },
              {
                size: '270',
                quantity: 72,
                _id: '6336ef530a0af98dcd7d26ec',
              },
              {
                size: '280',
                quantity: 85,
                _id: '6336ef530a0af98dcd7d26ed',
              },
              {
                size: '290',
                quantity: 24,
                _id: '6336ef530a0af98dcd7d26ee',
              },
            ],
            colorName: 'yellow',
            _id: '6336ef530a0af98dcd7d26e5',
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
          'Vệ sinh bằng khăn ẩm mềm\nKhông sử dụng hóa chất tẩy rửa lên bề mặt sản phẩm\nBảo quản sản phẩm nơi khô thoáng',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb57a31bdaca089422ad8',
        likeCount: 0,
        quantitySold: 0,
        keywords: [
          'mlb',
          'giày mlb',
          'giày thể thao',
          'giày sneaker',
          'giày chunky',
          'giày bigbal',
          'planet',
        ],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T13:29:55.997Z',
        updatedAt: '2022-09-30T13:29:55.997Z',
        slug: 'giay-the-thao-bigball-chunky-planet',
        __v: 0,
      },
      {
        _id: '6336ea200a0af98dcd7d2688',
        name: 'Quần jogger lưng thun Monogram Training',
        price: 3490000,
        discount: 30,
        description:
          'Thành phần vải: 65% Cotton, 35% Polyester\nKiểu dáng jogger lưng thun thời trang\nBo ống mềm mại\nPhối logo bóng chày ở góc quần\nHọa tiết monogram nổi bật\nChất vải mềm mại, co giãn thoải mái\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/df8f7cf2-e096-45e5-a6a4-7901a3bedc1f-50m_31tpm1111_1_medium.jpg',
            imageSmall:
              '/public/products/2c361447-e497-492d-81cc-f62c714205ef-50m_31tpm1111_1_small.jpg',
            images: [
              '/public/products/d951ba1c-d316-412e-bfaa-342b64cebe2d-50m_31tpm1111_1_large.jpg',
              '/public/products/79badac8-2a97-42a8-a3ea-774739b02734-50m_31tpm1111_2_large.jpg',
              '/public/products/d5e2e0c6-8bcf-4f81-9eeb-71990c36cde5-50m_31tpm1111_3_large.jpg',
              '/public/products/f17fe7d4-5d75-4132-9e8c-868988c8832b-50m_31tpm1111_4_large.jpg',
              '/public/products/869d5230-2fb4-4b46-ae86-b72c5895206f-50m_31tpm1111_5_large.jpg',
              '/public/products/0b41b698-54d4-48ed-9322-4a3b0c0e0f4f-50m_31tpm1111_6_large.jpg',
              '/public/products/7686f5b6-d6af-4ac3-ad3e-395ab0f82d19-50m_31tpm1111_7_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 20,
                _id: '6336ea200a0af98dcd7d268a',
              },
              {
                size: 'S',
                quantity: 50,
                _id: '6336ea200a0af98dcd7d268b',
              },
              {
                size: 'M',
                quantity: 30,
                _id: '6336ea200a0af98dcd7d268c',
              },
              {
                size: 'L',
                quantity: 40,
                _id: '6336ea200a0af98dcd7d268d',
              },
              {
                size: 'XL',
                quantity: 20,
                _id: '6336ea200a0af98dcd7d268e',
              },
            ],
            colorName: 'gray',
            _id: '6336ea200a0af98dcd7d2689',
          },
          {
            imageMedium:
              '/public/products/cc1fd95a-1176-48fe-bf92-b3f8e259a018-50s_31tpm1111_1_medium.jpg',
            imageSmall:
              '/public/products/615b4712-6e5c-44e1-ac4f-31b32c75894a-50s_31tpm1111_1_small.jpg',
            images: [
              '/public/products/b125c104-b234-40ed-b7d4-94f5b65700f5-50s_31tpm1111_1_large.jpg',
              '/public/products/f0e173c1-eea7-4dc7-94ae-b794a1349220-50s_31tpm1111_2_large.jpg',
              '/public/products/71c59f13-bcc1-43ef-8190-799a2737a8d2-50s_31tpm1111_3_large.jpg',
              '/public/products/41268a6b-9789-408c-9040-b08e366a9295-50s_31tpm1111_4_large.jpg',
              '/public/products/7becd504-4781-4212-be83-6f6279af3689-50s_31tpm1111_5_large.jpg',
              '/public/products/d3a94901-8b33-403e-b120-08bc97c031b8-50s_31tpm1111_6_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 20,
                _id: '6336ea200a0af98dcd7d2690',
              },
              {
                size: 'S',
                quantity: 12,
                _id: '6336ea200a0af98dcd7d2691',
              },
              {
                size: 'M',
                quantity: 50,
                _id: '6336ea200a0af98dcd7d2692',
              },
              {
                size: 'L',
                quantity: 40,
                _id: '6336ea200a0af98dcd7d2693',
              },
              {
                size: 'XL',
                quantity: 40,
                _id: '6336ea200a0af98dcd7d2694',
              },
            ],
            colorName: 'blue',
            _id: '6336ea200a0af98dcd7d268f',
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
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước có nhiệt độ không quá 30 độ C\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb30831bdaca089422a35',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['quần jogger', 'quần lưng thun', 'quần mlb', 'quần monogram'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T13:07:44.556Z',
        updatedAt: '2022-09-30T13:07:44.556Z',
        slug: 'quan-jogger-lung-thun-monogram-training',
        __v: 0,
      },
      {
        _id: '6336ad3b0a0af98dcd7d23aa',
        name: 'Giày thể thao Bigball Chunky Monogram',
        price: 3490000,
        discount: 0,
        description:
          'Chất liệu: Da tổng hợp \nKiểu dáng giày sneaker đế cao thời trang\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\nCộng hưởng cùng chi tiết chữ logo bóng chày với họa tiết monogram sắc nét\nLớp lót êm ái, nâng dáng bước chân\nĐế cao su với độ bền cao, chắc chắn mang lại độ ma sát tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/91f80b83-8447-4583-9b71-27ac620a4c3f-50bks_3ashcm11n_1_medium.jpg',
            imageSmall:
              '/public/products/c0b9b558-c10e-4b48-9253-2be298a22526-50bks_3ashcm11n_1_small.jpg',
            images: [
              '/public/products/0687ade6-2c5a-4596-9586-210616d64d01-50bks_3ashcm11n_1_large.jpg',
              '/public/products/7e068426-4320-4e17-899b-829b92ea0598-50bks_3ashcm11n_2_large.jpg',
              '/public/products/691a2521-2af0-4d5d-8a74-d0eac675c688-50bks_3ashcm11n_3_large.jpg',
              '/public/products/94135b3a-1ec9-49ac-b010-fef47d308246-50bks_3ashcm11n_4_large.jpg',
              '/public/products/0d5bd022-d617-4806-a752-3c64c6d92815-50bks_3ashcm11n_5_large.jpg',
              '/public/products/63ef4e40-eb3e-4fa5-af30-cbdd9a316e4d-50bks_3ashcm11n_6_large.jpg',
              '/public/products/87651a09-7ab4-4ddc-90c9-7a68073516af-50bks_3ashcm11n_7_large.jpg',
              '/public/products/8d4376a3-1c5b-420b-bed3-c58b6bd6a099-50bks_3ashcm11n_8_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 20,
                _id: '6336ad3b0a0af98dcd7d23ac',
              },
              {
                size: '240',
                quantity: 40,
                _id: '6336ad3b0a0af98dcd7d23ad',
              },
              {
                size: '250',
                quantity: 39,
                _id: '6336ad3b0a0af98dcd7d23ae',
              },
              {
                size: '260',
                quantity: 54,
                _id: '6336ad3b0a0af98dcd7d23af',
              },
              {
                size: '270',
                quantity: 54,
                _id: '6336ad3b0a0af98dcd7d23b0',
              },
              {
                size: '280',
                quantity: 40,
                _id: '6336ad3b0a0af98dcd7d23b1',
              },
              {
                size: '290',
                quantity: 34,
                _id: '6336ad3b0a0af98dcd7d23b2',
              },
            ],
            colorName: 'black',
            _id: '6336ad3b0a0af98dcd7d23ab',
          },
          {
            imageMedium:
              '/public/products/77105b17-1e0b-4b65-9bdf-b3326a2747ba-43bgd_3ashcm11n_1_medium.jpg',
            imageSmall:
              '/public/products/ccbd8375-3971-4bfc-bb8d-e8473c091bbb-43bgd_3ashcm11n_1_small.jpg',
            images: [
              '/public/products/d308af7f-95c7-461a-aa78-5a9c2fdda85b-43bgd_3ashcm11n_2_large.jpg',
              '/public/products/536c080b-3666-4df7-a75e-ca5dfa14d83b-43bgd_3ashcm11n_3_large.jpg',
              '/public/products/027ee513-3005-4235-a5c4-e4274de0c64a-43bgd_3ashcm11n_4_large.jpg',
              '/public/products/8fc9f01f-eac8-4190-bf81-69dca8c6be6f-43bgd_3ashcm11n_5_large.jpg',
              '/public/products/a150ac15-a920-42b2-bd8b-a9b6fa91ab5e-43bgd_3ashcm11n_6_large.jpg',
              '/public/products/7a40d955-a5c6-491c-923b-b4862bbcacd4-43bgd_3ashcm11n_7_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 40,
                _id: '6336ad3b0a0af98dcd7d23b4',
              },
              {
                size: '240',
                quantity: 50,
                _id: '6336ad3b0a0af98dcd7d23b5',
              },
              {
                size: '250',
                quantity: 50,
                _id: '6336ad3b0a0af98dcd7d23b6',
              },
              {
                size: '260',
                quantity: 40,
                _id: '6336ad3b0a0af98dcd7d23b7',
              },
              {
                size: '270',
                quantity: 75,
                _id: '6336ad3b0a0af98dcd7d23b8',
              },
              {
                size: '280',
                quantity: 40,
                _id: '6336ad3b0a0af98dcd7d23b9',
              },
              {
                size: '290',
                quantity: 36,
                _id: '6336ad3b0a0af98dcd7d23ba',
              },
            ],
            colorName: 'yellow',
            _id: '6336ad3b0a0af98dcd7d23b3',
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
          'Không sử dụng thuốc tẩy trắng có chứa chất tẩy clo\nKhông giặt khô\nKhông sấy khô\nKhông giặt với nước',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb57a31bdaca089422ad8',
        likeCount: 0,
        quantitySold: 0,
        keywords: [
          'mlb',
          'giày mlb',
          'giày thể thao',
          'giày sneaker',
          'giày bigball',
          'giày chunky',
          'giày monogram',
        ],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T08:47:55.781Z',
        updatedAt: '2022-09-30T08:47:55.781Z',
        slug: 'giay-the-thao-bigball-chunky-monogram',
        __v: 0,
      },
      {
        _id: '6336a9a80a0af98dcd7d2321',
        name: 'Giày thể thao Chunky A Classic',
        price: 3090000,
        discount: 0,
        description:
          'Chất liệu: Synthetic Leather\nKiểu dáng giày sneakers đế cao thời trang\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\nCộng hưởng cùng chi tiết logo bóng chày in nổi bật\nLớp lót êm ái, nâng dáng bước chân\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn quốc',
        colors: [
          {
            imageMedium:
              '/public/products/ab487387-9639-4df6-8fc0-5bc6748bad08-50whs_3ashcs12n_1_medium.jpg',
            imageSmall:
              '/public/products/ee8224e3-f1e3-4ecf-b257-e8f15ec096c7-50whs_3ashcs12n_1_small.jpg',
            images: [
              '/public/products/65a6e497-ddc1-47c9-b1de-bae5cc4fff61-50whs_3ashcs12n_1_large.jpg',
              '/public/products/69ed65ec-b880-48d8-aa6f-5cd63c86fbc6-50whs_3ashcs12n_2_large.jpg',
              '/public/products/f8135518-b745-4e0d-8a50-d25fd867ad3e-50whs_3ashcs12n_3_large.jpg',
              '/public/products/3b7df19f-26f1-4deb-ac63-45d02f3e8aeb-50whs_3ashcs12n_4_large.jpg',
              '/public/products/fc4d5b7a-3775-43fe-a387-80f51d08d886-50whs_3ashcs12n_5_large.jpg',
              '/public/products/bd44695f-6cfa-4a3b-a2af-012f9283037e-50whs_3ashcs12n_6_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 40,
                _id: '6336a9a80a0af98dcd7d2323',
              },
              {
                size: '235',
                quantity: 50,
                _id: '6336a9a80a0af98dcd7d2324',
              },
              {
                size: '240',
                quantity: 50,
                _id: '6336a9a80a0af98dcd7d2325',
              },
              {
                size: '250',
                quantity: 60,
                _id: '6336a9a80a0af98dcd7d2326',
              },
              {
                size: '255',
                quantity: 40,
                _id: '6336a9a80a0af98dcd7d2327',
              },
              {
                size: '260',
                quantity: 60,
                _id: '6336a9a80a0af98dcd7d2328',
              },
              {
                size: '270',
                quantity: 20,
                _id: '6336a9a80a0af98dcd7d2329',
              },
              {
                size: '275',
                quantity: 30,
                _id: '6336a9a80a0af98dcd7d232a',
              },
              {
                size: '280',
                quantity: 76,
                _id: '6336a9a80a0af98dcd7d232b',
              },
              {
                size: '290',
                quantity: 50,
                _id: '6336a9a80a0af98dcd7d232c',
              },
            ],
            colorName: 'white',
            _id: '6336a9a80a0af98dcd7d2322',
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
          'Vệ sinh bằng khăn ẩm mềm\nBảo quản nơi khô thoáng\nKhông phơi trực tiếp dưới ánh nắng mặt trời',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb57a31bdaca089422ad8',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['mlb', 'giày mlb', 'giày thể thao', 'giày sneaker', 'giày chunky a'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T08:32:40.247Z',
        updatedAt: '2022-09-30T08:32:40.247Z',
        slug: 'giay-the-thao-chunky-a-classic',
        __v: 0,
      },
      {
        _id: '6336a7030a0af98dcd7d22d2',
        name: 'Giày thể thao Bigball Chunky',
        price: 2490000,
        discount: 0,
        description:
          'Chất liệu: Da tổng hợp\nKiểu dáng giày sneaker đế cao thời trang\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\nPhối dây buộc tròn nổi bật\nCộng hưởng cùng chi tiết logo bóng chày in sắc nét\nLớp lót êm ái, nâng dáng bước chân\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn quốc',
        colors: [
          {
            imageMedium:
              '/public/products/d793fd78-6506-409b-9c52-caef815f4ab0-43ivs_3ashc201n_1_medium.jpg',
            imageSmall:
              '/public/products/df65af19-ec10-4cec-a03f-1c5ad9aab40d-43ivs_3ashc201n_1_small.jpg',
            images: [
              '/public/products/dd1b09e4-89f4-4ea0-96fd-530f1d3946cd-43ivs_3ashc201n_1_large.jpg',
              '/public/products/6f81fe53-9210-4d60-8de9-e88ecb6cb64e-43ivs_3ashc201n_2_large.jpg',
              '/public/products/9c2200dc-919b-4c9e-89fd-69b479d6fae9-43ivs_3ashc201n_3_large.jpg',
              '/public/products/11c2f296-241b-4953-a521-18ce5fe646fd-43ivs_3ashc201n_4_large.jpg',
              '/public/products/e64a153e-1a98-477b-86ab-5b4bd7f6d48f-43ivs_3ashc201n_5_large.jpg',
              '/public/products/a060561d-0133-4388-b3b4-cc973a066abf-43ivs_3ashc201n_6_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 50,
                _id: '6336a7030a0af98dcd7d22d4',
              },
              {
                size: '235',
                quantity: 30,
                _id: '6336a7030a0af98dcd7d22d5',
              },
              {
                size: '240',
                quantity: 60,
                _id: '6336a7030a0af98dcd7d22d6',
              },
              {
                size: '245',
                quantity: 54,
                _id: '6336a7030a0af98dcd7d22d7',
              },
              {
                size: '250',
                quantity: 34,
                _id: '6336a7030a0af98dcd7d22d8',
              },
              {
                size: '255',
                quantity: 30,
                _id: '6336a7030a0af98dcd7d22d9',
              },
              {
                size: '260',
                quantity: 96,
                _id: '6336a7030a0af98dcd7d22da',
              },
              {
                size: '265',
                quantity: 34,
                _id: '6336a7030a0af98dcd7d22db',
              },
              {
                size: '270',
                quantity: 40,
                _id: '6336a7030a0af98dcd7d22dc',
              },
              {
                size: '275',
                quantity: 54,
                _id: '6336a7030a0af98dcd7d22dd',
              },
              {
                size: '280',
                quantity: 93,
                _id: '6336a7030a0af98dcd7d22de',
              },
              {
                size: '285',
                quantity: 34,
                _id: '6336a7030a0af98dcd7d22df',
              },
              {
                size: '290',
                quantity: 20,
                _id: '6336a7030a0af98dcd7d22e0',
              },
            ],
            colorName: 'white',
            _id: '6336a7030a0af98dcd7d22d3',
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
          'Vệ sinh bằng khăn ẩm mềm\nKhông sử dụng hóa chất tẩy rửa lên bề mặt sản phẩm\nBảo quản sản phẩm nơi khô thoáng',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb57a31bdaca089422ad8',
        likeCount: 0,
        quantitySold: 0,
        keywords: [
          'mlb',
          'giày mlb',
          'giày thể thao',
          'giày bigball chunky',
          'giày bigball',
          'giày sneaker',
          'giày chunky',
        ],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T08:21:23.533Z',
        updatedAt: '2022-09-30T08:21:23.533Z',
        slug: 'giay-the-thao-bigball-chunky',
        __v: 0,
      },
      {
        _id: '6336a18e0a0af98dcd7d21be',
        name: 'Giày Sneakers Chunky Low',
        price: 2590000,
        discount: 0,
        description:
          'Chất liệu: 100% Cotton. Lớp lót: 100% Cotton\nKiểu dáng giày sneakers đế cao thời trang\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\nPhối chữ in nổi bật\nLớp lót êm ái, nâng dáng bước chân\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/ad7879a7-a337-4de1-9f17-c4f64d82fb65-43w_32shu2111_1_medium.jpg',
            imageSmall:
              '/public/products/7d44e579-b16b-4352-934e-340b60e884fd-43w_32shu2111_1_small.jpg',
            images: [
              '/public/products/6acab21d-5a58-452d-b173-736134d5a60f-43w_32shu2111_1_large.jpg',
              '/public/products/11d1a956-81e7-4f78-88c3-f6ce8af8e131-43w_32shu2111_2_large.jpg',
              '/public/products/facf5cf8-e562-4e4e-9dd3-1d13de4c429f-43w_32shu2111_3_large.jpg',
              '/public/products/1128ed61-ad3f-4d84-8ec6-53a8c8177e76-43w_32shu2111_4_large.jpg',
              '/public/products/bc49274f-551d-4108-8018-d3e0aaebf70e-43w_32shu2111_5_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 50,
                _id: '6336a18e0a0af98dcd7d21c0',
              },
              {
                size: '240',
                quantity: 10,
                _id: '6336a18e0a0af98dcd7d21c1',
              },
              {
                size: '250',
                quantity: 38,
                _id: '6336a18e0a0af98dcd7d21c2',
              },
            ],
            colorName: 'white',
            _id: '6336a18e0a0af98dcd7d21bf',
          },
          {
            imageMedium:
              '/public/products/953d54bf-71a0-4d88-904c-b867ca8f391f-50l_32shu2111_1_medium.jpg',
            imageSmall:
              '/public/products/d8e0b45f-f4ab-4518-a952-6e712fbc8ef7-50l_32shu2111_1__small.jpg',
            images: [
              '/public/products/a88d95b8-ad1d-48ed-a8b7-77d44562b90b-50l_32shu2111_1_large.jpg',
              '/public/products/d7bb46ff-85f4-490a-b3dd-0fc05176639f-50l_32shu2111_2_large.jpg',
              '/public/products/c3555262-34db-4e5c-b0f9-b98066af15dd-50l_32shu2111_3_large.jpg',
              '/public/products/3b27837a-3979-4ff3-9ae9-6c109d5eedaa-50l_32shu2111_4_large.jpg',
              '/public/products/d1f75982-4284-472f-8b7d-e6a938fc307e-50l_32shu2111_5_large.jpg',
              '/public/products/5bef3108-861e-4b1d-b0dd-1deaca6bfac4-50l_32shu2111_6_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 50,
                _id: '6336a18e0a0af98dcd7d21c4',
              },
              {
                size: '240',
                quantity: 30,
                _id: '6336a18e0a0af98dcd7d21c5',
              },
              {
                size: '250',
                quantity: 40,
                _id: '6336a18e0a0af98dcd7d21c6',
              },
            ],
            colorName: 'black',
            _id: '6336a18e0a0af98dcd7d21c3',
          },
          {
            imageMedium:
              '/public/products/fbb54c60-1764-4c21-9761-69fd02671a4f-50r_32shu2111_1_medium.jpg',
            imageSmall:
              '/public/products/1edbffc2-d042-4249-ac64-73d1a69f5184-50r_32shu2111_1_small.jpg',
            images: [
              '/public/products/55e69c71-a93e-430f-97bc-01075d93938b-50r_32shu2111_1_large.jpg',
              '/public/products/09bb7d07-8a04-4b18-b3b7-55c275c41024-50r_32shu2111_2_large.jpg',
              '/public/products/c845b854-e2ab-4672-a2f6-95e0ae2b0260-50r_32shu2111_3_large.jpg',
              '/public/products/5e47d408-cf14-48d2-ab03-89db1f5e11f5-50r_32shu2111_4_large.jpg',
              '/public/products/f8dc2eb5-0c55-4ccd-9824-09a1dd4a5d3f-50r_32shu2111_5_large.jpg',
              '/public/products/26f1d916-df20-4105-9ec7-020079408dd7-50r_32shu2111_6_large.jpg',
            ],
            sizes: [
              {
                size: '230',
                quantity: 40,
                _id: '6336a18e0a0af98dcd7d21c8',
              },
              {
                size: '240',
                quantity: 70,
                _id: '6336a18e0a0af98dcd7d21c9',
              },
              {
                size: '250',
                quantity: 30,
                _id: '6336a18e0a0af98dcd7d21ca',
              },
            ],
            colorName: 'red',
            _id: '6336a18e0a0af98dcd7d21c7',
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
          'Không sử dụng thuốc tẩy trắng có chứa chất tẩy clo\nKhông giặt khô\nKhông sấy khô\nKhông giặt với nước',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: '632fb57a31bdaca089422ad8',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['mlb', 'giày mlb', 'giày sneaker', 'giày chunky low', 'giày thể thao'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T07:58:06.678Z',
        updatedAt: '2022-09-30T07:58:06.678Z',
        slug: 'giay-sneakers-chunky-low',
        __v: 0,
      },
      {
        _id: '63300c9cf7524778799d9350',
        name: 'Áo thun cổ tròn ngắn tay Basic Monogram',
        price: 1990000,
        discount: 1,
        description:
          'Thành phần vải: 100% Cotton. Kiểu dáng áo thun phom suông năng động. Cổ tròn,  tay ngắn đơn giản. Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB. Họa tiết monogram nổi bật. Chất vải mềm mịn, thấm hút tốt. Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện. Xuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium: '/public/products/20220925020323-50bgd_3atsm1023_1_medium.jpg',
            imageSmall: '/public/products/20220925020323-50bgd_3atsm1023_1_small.jpg',
            images: [
              '/public/products/20220925020323-50bgd_3atsm1023_1_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_2_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_3_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_4_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_5_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_6_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_7_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_8_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_9_large.jpg',
              '/public/products/20220925020323-50bgd_3atsm1023_10_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 12,
                _id: '63300c9cf7524778799d9352',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '63300c9cf7524778799d9353',
              },
              {
                size: 'M',
                quantity: 16,
                _id: '63300c9cf7524778799d9354',
              },
              {
                size: 'L',
                quantity: 56,
                _id: '63300c9cf7524778799d9355',
              },
              {
                size: 'XL',
                quantity: 34,
                _id: '63300c9cf7524778799d9356',
              },
            ],
            colorName: 'yellow',
            _id: '63300c9cf7524778799d9351',
          },
          {
            imageMedium: '/public/products/20220925020323-50bll_3atsm1023_1_medium.jpg',
            imageSmall: '/public/products/20220925020323-50bll_3atsm1023_1_small.jpg',
            images: [
              '/public/products/20220925020323-50bll_3atsm1023_1_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_2_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_4_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_5_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_6_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_7_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_8_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_9_large.jpg',
              '/public/products/20220925020323-50bll_3atsm1023_10_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 12,
                _id: '63300c9cf7524778799d9358',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '63300c9cf7524778799d9359',
              },
              {
                size: 'M',
                quantity: 16,
                _id: '63300c9cf7524778799d935a',
              },
              {
                size: 'L',
                quantity: 56,
                _id: '63300c9cf7524778799d935b',
              },
              {
                size: 'XL',
                quantity: 34,
                _id: '63300c9cf7524778799d935c',
              },
            ],
            colorName: 'light blue',
            _id: '63300c9cf7524778799d9357',
          },
          {
            imageMedium: '/public/products/20220925020323-50nys_3atsm1023_1_medium.jpg',
            imageSmall: '/public/products/20220925020323-50nys_3atsm1023_1_small.jpg',
            images: [
              '/public/products/20220925020323-50nys_3atsm1023_1_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_2_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_3_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_4_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_5_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_6_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_7_large.jpg',
              '/public/products/20220925020323-50nys_3atsm1023_8_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 12,
                _id: '63300c9cf7524778799d935e',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '63300c9cf7524778799d935f',
              },
              {
                size: 'M',
                quantity: 16,
                _id: '63300c9cf7524778799d9360',
              },
              {
                size: 'L',
                quantity: 56,
                _id: '63300c9cf7524778799d9361',
              },
              {
                size: 'XL',
                quantity: 34,
                _id: '63300c9cf7524778799d9362',
              },
            ],
            colorName: 'blue',
            _id: '63300c9cf7524778799d935d',
          },
          {
            imageMedium: '/public/products/20220925020323-50bks_3atsm1023_1_medium.jpg',
            imageSmall: '/public/products/20220925020323-50bks_3atsm1023_1_small.jpg',
            images: [
              '/public/products/20220925020323-50bks_3atsm1023_1_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_1_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_2_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_3_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_4_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_5_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_6_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_7_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_8_large.jpg',
              '/public/products/20220925020323-50bks_3atsm1023_9_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 12,
                _id: '63300c9cf7524778799d9364',
              },
              {
                size: 'S',
                quantity: 20,
                _id: '63300c9cf7524778799d9365',
              },
              {
                size: 'M',
                quantity: 16,
                _id: '63300c9cf7524778799d9366',
              },
              {
                size: 'L',
                quantity: 56,
                _id: '63300c9cf7524778799d9367',
              },
              {
                size: 'XL',
                quantity: 34,
                _id: '63300c9cf7524778799d9368',
              },
            ],
            colorName: 'black',
            _id: '63300c9cf7524778799d9363',
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
          '<p>Giặt ở nhiệt độ tối đa 30 độ</p><p>Không dùng chất tẩy</p><p>Phơi trong bóng râm</p><p>Không phơi trực tiếp dưới ánh nắng mặt trời</p>',
        deliveryReturnPolicy:
          '<p>QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI <b>MAISONONLINE</b></p><p><strong>Sản phẩm áp dụng:</strong> Tất cả sản phẩm được giao trên MaisonOnline, có chương trình khuyến mãi không quá 30%.</p><p><strong>Sản phẩm không áp dụng:</strong></p><p>- Đồ lót, đồ bơi</p><p>- Nước hoa</p><p>- Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang...</p><p>- Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống của hàng của Maison.</p><p><strong>Đối tương khách hàng:</strong> Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn</p><p><strong>Thời gian đổi trả hàng:</strong></p><p><strong>- Đổi hàng:</strong>Trong vòng <strong>14 ngày</strong> kể từ ngày khách hàng nhận được sản phẩm.</p><p><strong>- Trả hàng:</strong>Trong vòng <strong>3 ngày</strong> kể từ ngày khách hàng nhận được sản phẩm.</p><p>Tham khảo thêm thông tin tại <strong>Chính sách đổi trả hàng</strong></p>',
        category: '632fb31431bdaca089422a3e',
        likeCount: 0,
        quantitySold: 0,
        keywords: ['mlb', 'áo thun', 'áo ngắn tay', 'áo thun cổ tròn', 'áo thun ngắn tay'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-25T08:09:00.414Z',
        updatedAt: '2022-10-02T12:03:54.347Z',
        slug: 'ao-thun-co-tron-ngan-tay-basic-monogram',
        __v: 0,
        deletedAt: '2022-10-02T11:58:14.556Z',
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
export const categoriesMen = [
  {
    _id: uuidv4(),
    categoryName: 'Trang phục',
    categoryDesc:
      'Thoải mái lựa chọn và khẳng định phong cách thời trang lịch lãm và cá tính dành cho mọi quý ông với các item quần áo đến từ các thương hiệu thời trang quốc tế: DSquared2, Ted Baker, Puma,…',
    img: 'https://file.hstatic.net/1000284478/file/nam-trang-phuc_2ea04cdf7ce14a18a20ef86bc2e23416.png',
    slug: 'trang-phuc-nam',
  },
  {
    _id: uuidv4(),
    categoryName: 'Giày dép',
    categoryDesc:
      'Giúp mọi quý ông tự tin sải bước với các thiết kế giày dép thời trang, lịch lãm: giày tây, giày sandals, giày thể thao, dép,…đến từ các thương hiệu nổi tiếng như DSquared2, Pedro, Havaianas,…',
    img: 'https://file.hstatic.net/1000284478/file/nam-giay-dep_2e7f953fb7ad4095b520db6ec430bdac.png',
    slug: 'giay-dep-nam',
  },
  {
    _id: uuidv4(),
    categoryName: 'Túi, ví, balo',
    categoryDesc:
      'Với thiết kế lịch lãm và không kém phần hiện đại từ các thương hiệu Pedro, Dsquared2, MLB, Puma, The Kooples... các bộ sưu tập sẽ giúp tôn lên sự nam tính và nét thanh lịch cho các quý ông, hoàn thiện vẻ ngoài một cách hoàn hảo.',
    img: 'https://file.hstatic.net/1000284478/file/nam-tui-vi_56696d1818ff46aeaef80ccd9f51c12b.png',
    slug: 'tui-vi-nam',
  },
  {
    _id: uuidv4(),
    categoryName: 'Phụ kiện',
    categoryDesc:
      'Với kho tàng phụ kiện phong phú như thắt lưng, mắt kính, trang sức,... đến từ các thương hiệu đình đám Aojo, Mujosh, Pedro,... sẽ khiến các fashionista mê mẩn và yêu thích, giúp hoàn thiện vẻ ngoài một cách hoàn hảo.',
    img: 'https://file.hstatic.net/1000284478/file/nam-phu-kien_e26f9d5ac756478f8c660be777d3c3e7.png',
    slug: 'phu-kien-nam',
  },
];

export interface ICatalog {
  _id: string;
  name: string;
  categories: string[];
  type: IGenderCatalog[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IGenderCatalog {
  productType: string;
  image: string;
  description: string;
  _id: string;
  slug: string;
}
export const catalogs: ICatalog[] = [
  {
    _id: '632f35fab1734732d9dc8821',
    name: 'Trang phục',
    categories: [
      '632fb18d31bdaca089422a13',
      '632fb23531bdaca089422a28',
      '632fb30831bdaca089422a35',
      '632fb31431bdaca089422a3e',
      '632fb33931bdaca089422a47',
      '632fb34b31bdaca089422a50',
      '632fb3c231bdaca089422a59',
      '632fb3c931bdaca089422a62',
      '632fb3dd31bdaca089422a6b',
      '632fb41331bdaca089422a74',
    ],
    type: [
      {
        productType: 'Nam',
        image:
          '/public/catalogs/20220924114802-nam-trang-phuc_2ea04cdf7ce14a18a20ef86bc2e23416.jpg',
        description:
          'Thoải mái lựa chọn và khẳng định phong cách thời trang lịch lãm và cá tính dành cho mọi quý ông với các item quần áo đến từ các thương hiệu thời trang quốc tế: DSquared2, Ted Baker, Puma,…',
        slug: 'trang-phuc-nam',
        _id: '632f35fab1734732d9dc8822',
      },
      {
        productType: 'Nữ',
        image: '/public/catalogs/20220924114802-nu-trang-phuc_3446f6419c3d4d2bb5099c467d322a68.jpg',
        description:
          'Thoải mái lựa chọn và khẳng định phong cách thời trang sành điệu, cá tính với các item quần áo, đầm váy đến từ các thương hiệu thời trang trong và ngoài nước: Max&Co., MLB, GiGi, Puma,…',
        slug: 'trang-phuc-nu',
        _id: '632f35fab1734732d9dc8823',
      },
      {
        productType: 'Trẻ em',
        image:
          '/public/catalogs/20220924114802-cate-trangphuc_e54490b0673341c78ab94b5155cce90b.jpg',
        description:
          'Định hình phong cách thời trang cho các thiên thần nhỏ của bạn với các item năng động và nhí nhảnh nhưng vẫn đảm bảo sự thoải mái và an toàn từ các thương hiệu thời trang quốc tế: Puma, Skechers, MLB,…',
        slug: 'trang-phuc-tre-em',
        _id: '632f35fab1734732d9dc8824',
      },
    ],
    createdAt: '2022-09-24T16:53:14.566Z',
    updatedAt: '2022-09-25T01:51:16.012Z',
    slug: 'trang-phuc',
    __v: 2,
  },
  {
    _id: '632f35b0b1734732d9dc8817',
    name: 'Giày dép',
    categories: [
      '632fb4c831bdaca089422a87',
      '632fb4f731bdaca089422a90',
      '632fb50231bdaca089422a99',
      '632fb51231bdaca089422aa2',
      '632fb52031bdaca089422aab',
      '632fb53531bdaca089422ab4',
      '632fb54731bdaca089422abd',
      '632fb55431bdaca089422ac6',
      '632fb55f31bdaca089422acf',
      '632fb57a31bdaca089422ad8',
      '632fb58b31bdaca089422ae1',
      '632fb60831bdaca089422aea',
      '632fb673dac63047a707be33',
      '632fb6b8d29ff93337e742c5',
    ],
    type: [
      {
        productType: 'Nam',
        image: '/public/catalogs/20220924114802-nam-giay-dep_2e7f953fb7ad4095b520db6ec430bdac.jpg',
        description:
          'Giúp mọi quý ông tự tin sải bước với các thiết kế giày dép thời trang, lịch lãm: giày tây, giày sandals, giày thể thao, dép,…đến từ các thương hiệu nổi tiếng như DSquared2, Pedro, Havaianas,…',
        slug: 'giay-dep-nam',
        _id: '632f35b0b1734732d9dc8818',
      },
      {
        productType: 'Nữ',
        image: '/public/catalogs/20220924114802-nu-giay-dep_51b3f8a683394d98995fc8e6b552db1c.jpeg',
        description:
          'Tôn vinh vóc dáng xinh đẹp của phái nữ với các mẫu thiết kế giày dép thời trang và hiện đại: giày cao gót, giày sandals, giày thể thao,... đến từ các thương hiệu nổi tiếng như Charles & Keith, Pedro, Puma,…',
        slug: 'giay-dep-nu',
        _id: '632f35b0b1734732d9dc8819',
      },
      {
        productType: 'Trẻ em',
        image: '/public/catalogs/20220924114802-cate-giay-dep_e9e7a3a57ff341b79b95863a56ae9633.jpg',
        description:
          'Mang lại sự thoải mái và an toàn cho từng bước chân của bé nhưng vẫn đảm bảo thiết kế nổi bật là những tiêu chí mà các thương hiệu thời trang Pedro, Puma, Skechers,… luôn hướng đến.',
        slug: 'giay-dep-tre-em',
        _id: '632f35b0b1734732d9dc881a',
      },
    ],
    createdAt: '2022-09-24T16:52:00.370Z',
    updatedAt: '2022-09-25T02:02:32.935Z',
    slug: 'giay-dep',
    __v: 0,
  },
  {
    _id: '632f3560b1734732d9dc880d',
    name: 'Phụ kiện',
    categories: [
      '632fbe297f8a18941fb34dd8',
      '632fbe2d7f8a18941fb34de1',
      '632fbe337f8a18941fb34dea',
      '632fbe407f8a18941fb34df3',
      '632fbe507f8a18941fb34dfc',
      '632fbe587f8a18941fb34e05',
    ],
    type: [
      {
        productType: 'Nam',
        image: '/public/catalogs/20220924114802-nam-phu-kien_e26f9d5ac756478f8c660be777d3c3e7.jpg',
        description:
          'Với kho tàng phụ kiện phong phú như thắt lưng, mắt kính, trang sức,... đến từ các thương hiệu đình đám Aojo, Mujosh, Pedro,... sẽ khiến các fashionista mê mẩn và yêu thích, giúp hoàn thiện vẻ ngoài một cách hoàn hảo.',
        slug: 'phu-kien-nam',
        _id: '632f3560b1734732d9dc880e',
      },
      {
        productType: 'Nữ',
        image: '/public/catalogs/20220924114802-nu-phu-kien_5bc3c88075e44cb29f203dc5b5e0c61c.jpg',
        description:
          'Với kho tàng phụ kiện phong phú như mắt kính, trang sức, mũ nón... đến từ các thương hiệu như Charles & Keith, Ted Baker, The Kooples,... sẽ khiến các fashionista mê mẩn và yêu thích.',
        slug: 'phu-kien-nu',
        _id: '632f3560b1734732d9dc880f',
      },
      {
        productType: 'Trẻ em',
        image: '/public/catalogs/20220924114802-cate-phukien_27fc87dc1ff2420bb69120e8e894ff4b.jpg',
        description:
          'Với kho tàng phụ kiện phong phú như mắt kính, trang sức, mũ nón,... đến từ các thương hiệu đình đám như MLB, Mujosh, Charles & Keith, Puma,... sẽ khiến các fashionista nhí mê mẩn và yêu thích.',
        slug: 'phu-kien-tre-em',
        _id: '632f3560b1734732d9dc8810',
      },
    ],
    createdAt: '2022-09-24T16:50:40.842Z',
    updatedAt: '2022-09-25T02:35:04.994Z',
    slug: 'phu-kien',
    __v: 0,
  },
  {
    _id: '632f34fcb1734732d9dc8803',
    name: 'Túi, ví, balo',
    categories: [
      '632fb6f8d29ff93337e742ce',
      '632fb703d29ff93337e742d7',
      '632fb70bd29ff93337e742e0',
      '632fb73ed29ff93337e742e9',
      '632fb765d29ff93337e742f2',
      '632fb771d29ff93337e742fb',
      '632fbc0d14aa2e82f090ae3c',
      '632fbc4314aa2e82f090ae45',
      '632fbc5614aa2e82f090ae4e',
      '632fbc6214aa2e82f090ae57',
      '632fbc7b14aa2e82f090ae60',
    ],
    type: [
      {
        productType: 'Nam',
        image: '/public/catalogs/20220924114802-nam-tui-vi_56696d1818ff46aeaef80ccd9f51c12b.jpg',
        description:
          'Với thiết kế lịch lãm và không kém phần hiện đại từ các thương hiệu Pedro, Dsquared2, MLB, Puma, The Kooples... các bộ sưu tập sẽ giúp tôn lên sự nam tính và nét thanh lịch cho các quý ông, hoàn thiện vẻ ngoài một cách hoàn hảo.',
        slug: 'tui-vi-balo-nam',
        _id: '632f34fcb1734732d9dc8804',
      },
      {
        productType: 'Nữ',
        image: '/public/catalogs/20220924114802-nu-tui-xach_6e81da7ad0364378a8716ac59393f45c.jpg',
        description:
          'Với kích thước và kiểu dáng đa dạng, đảm bảo mọi tiện ích và phù hợp nhiều đối tượng, các bộ sưu tập đến từ các thương hiệu: Charles & Keith, Pedro, Marhen.J,... sẽ làm thỏa mãn các nàng.',
        slug: 'tui-vi-balo-nu',
        _id: '632f34fcb1734732d9dc8805',
      },
      {
        productType: 'Trẻ em',
        image: '/public/catalogs/20220924114802-cate-tuivi_e35ca60f53a7458e9ff9eead4e92b31d.jpg',
        description:
          'Đa dạng các mẫu mã đến từ các thương hiệu thời trang nổi tiếng: Havaianas, Charles & Keith, Puma, Skechers, Puma... với phong cách đáng yêu, kiểu dáng năng động, nhí nhảnh, sử dụng chất liệu tốt nhất, đảm bảo an toàn cho bé.',
        slug: 'tui-vi-balo-tre-em',
        _id: '632f34fcb1734732d9dc8806',
      },
    ],
    createdAt: '2022-09-24T16:49:00.866Z',
    updatedAt: '2022-09-25T02:27:07.169Z',
    slug: 'tui-vi-balo',
    __v: 0,
  },
];
