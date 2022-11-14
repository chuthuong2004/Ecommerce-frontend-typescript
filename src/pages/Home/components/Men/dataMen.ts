import { v4 as uuidv4 } from 'uuid';
import { IBrand } from '../../../../models/brand.model';
import { ICatalog } from '../../../../models/catalog.model';
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
export const brandsMen: IBrand[] = [
  {
    _id: '632fa8e72e176f3c9f77579d',
    name: 'HAVAIANAS ',
    products: [
      {
        _id: '63444ca633ba42245738faf9',
        name: 'Balo unisex phom chữ nhật Classic Monogram',
        price: 4890000,
        discount: 0,
        description:
          'Chất liệu: 100% Polyester\nKích thước: W30 x H42 x D15 (cm)\nKiểu dáng balo phom chữ nhật thời trang\nKhóa kéo kim loại chắc chắn\nGồm một ngăn chính và ngăn nhỏ phía trước\nPhối logo bóng chày thêu nổi bật\nThiết kế họa tiết monogram cá tính, thời thượng\nDây đeo dễ dàng tăng giảm kích thước\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/873577c5-a0f8-46ed-b250-388fb71c4afd-50crd_3abkm102n_1_medium.jpg',
            imageSmall:
              '/public/products/b3aca163-1653-44a9-b217-f11ce0db5257-50crd_3abkm102n_1_small.jpg',
            images: [
              '/public/products/d0bd8bfe-9e70-4e5c-8aaf-474695af5416-50crd_3abkm102n_1_large.jpeg',
              '/public/products/539a01c0-dc2f-4b0e-a388-ff70d9d10687-50crd_3abkm102n_2_large.jpeg',
              '/public/products/e4eddcee-b270-4084-9adf-9fbbcc61b69b-50crd_3abkm102n_3_large.jpeg',
              '/public/products/94eb558d-0603-4a9c-9857-bac41e0a1817-50crd_3abkm102n_4_large.jpeg',
              '/public/products/a9a99ea8-853d-4610-b41a-2449c8151d34-50crd_3abkm102n_5_large.jpeg',
              '/public/products/40d37af8-967e-4974-8d93-8c74c8c7f8e2-50crd_3abkm102n_6_large.jpeg',
              '/public/products/dd1ea28b-b8a7-4cbb-8d9e-9f00aadf57fb-50crd_3abkm102n_7_large.jpeg',
              '/public/products/a6b7c82a-d43e-4f44-9c70-918c1cd00814-50crd_3abkm102n_8_large.jpeg',
              '/public/products/78312ecc-c252-43d7-ad7d-20995853ec88-50crd_3abkm102n_9_large.jpeg',
            ],
            sizes: [
              {
                size: 'F',
                quantity: 40,
                _id: '63444ca633ba42245738fafb',
              },
            ],
            colorName: 'white',
            _id: '63444ca633ba42245738fafa',
          },
          {
            imageMedium:
              '/public/products/009d9c3c-ea7f-4db8-9da5-f7578d5b89a6-43brd_3abkm102n_1_medium.jpg',
            imageSmall:
              '/public/products/08b89894-94ea-4b6e-884e-94063a7e87a7-43brd_3abkm102n_1_small.jpg',
            images: [
              '/public/products/5582e891-0668-4d89-900e-34704b42c0bd-43brd_3abkm102n_1_large.jpeg',
              '/public/products/64911102-359d-43f9-b9bc-d5741a778e40-43brd_3abkm102n_2_large.jpeg',
              '/public/products/d4b2a149-abca-4963-b1d3-320928f461d6-43brd_3abkm102n_3_large.jpeg',
              '/public/products/d85a461f-fc40-43f8-bca3-ec7ab4800fee-43brd_3abkm102n_4_large.jpeg',
              '/public/products/04789490-d8de-4c3f-a27a-eef799aac77e-43brd_3abkm102n_5_large.jpeg',
              '/public/products/2fc55965-7803-4671-88de-32c69f5684da-43brd_3abkm102n_6_large.jpeg',
              '/public/products/78f5cfdd-5542-4020-ac15-077028d8dafa-43brd_3abkm102n_7_large.jpeg',
              '/public/products/d48cfc5c-f341-44c1-b63d-844a49683850-43brd_3abkm102n_8_large.jpeg',
              '/public/products/7c479c04-eb69-4289-b365-1dd00272fbc7-43brd_3abkm102n_9_large.jpeg',
              '/public/products/237f172c-05e3-48fa-a615-6daa1f239163-43brd_3abkm102n_10_large.jpeg',
            ],
            sizes: [
              {
                size: 'F',
                quantity: 30,
                _id: '63444ca633ba42245738fafd',
              },
            ],
            colorName: 'brown dark',
            _id: '63444ca633ba42245738fafc',
          },
        ],
        brand: {
          _id: '632fa7242e176f3c9f775782',
          name: 'MLB',
          logo: '/public/brands/20220925074532-mlb_425e44b6399e417eb445b103d6848420.jpg',
          history:
            '<b>MLB</b> là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu <b>MLB</b> thuộc tập đoàn F&F đã mở cửa hàng <b>MLB Korea</b> đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, <b>MLB</b> đã có 250 cửa hàng tại khắp khu vực Châu Á.',
          createdAt: '2022-09-25T00:56:04.185Z',
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation: 'Vệ sinh bằng khăn ẩm mềm\nTránh tiếp xúc với môi trường hóa chất',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb73ed29ff93337e742e9',
          products: ['63444ca633ba42245738faf9'],
          catalog: '632f34fcb1734732d9dc8803',
          gender: ['man', 'woman', 'unisex'],
          name: 'Balo',
          createdAt: '2022-09-25T02:04:46.512Z',
          updatedAt: '2022-10-10T16:47:34.616Z',
          slug: 'balo',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['balo mlb', 'balo unisex', 'balo monogram'],
        reviews: [],
        favorites: ['634e48c98dcb58804c09bed0'],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-10T16:47:34.565Z',
        updatedAt: '2022-11-06T03:39:49.604Z',
        slug: 'balo-unisex-phom-chu-nhat-classic-monogram',
        __v: 0,
      },
      {
        _id: '634445e133ba42245738ef3b',
        name: 'Áo sweatshirt tay dài phom suông Classic Monogram Allover Overfit',
        price: 3290000,
        discount: 0,
        description:
          'Chất liệu: Cotton\nKiểu dáng áo sweatshirt phom suông thời trang\nCổ tròn, tay dài\nBo viền cổ, gấu tay và vạt áo\nPhối logo bóng chày thêu nổi bật ở ngực trái\nThiết kế họa tiết monogram cá tính, thời thượng\nChất vải mềm mại, giữ ấm tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/c479b37d-5128-4d0d-9570-f7e50444a4ea-43brd_3amtm0224_1_medium.jpg',
            imageSmall:
              '/public/products/fca604f3-3aa0-4ea4-8bdd-3157087eeff6-43brd_3amtm0224_1_small.jpg',
            images: [
              '/public/products/0b445ebf-c692-492c-806b-2bde77af0a50-43brd_3amtm0224_1_large.jpg',
              '/public/products/309b19c9-9752-43f2-a163-1163c6c7a76b-43brd_3amtm0224_2_large.jpg',
              '/public/products/9956709b-0d5b-4f37-96ae-55a0a168a1a7-43brd_3amtm0224_3_large.jpg',
              '/public/products/0186eb52-d203-41e5-994c-79ee4fb8c7a3-43brd_3amtm0224_4_large.jpg',
              '/public/products/dd1bc2df-d7d7-409f-941d-a0aa18d71564-43brd_3amtm0224_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 30,
                _id: '634445e133ba42245738ef3d',
              },
              {
                size: 'S',
                quantity: 30,
                _id: '634445e133ba42245738ef3e',
              },
              {
                size: 'M',
                quantity: 40,
                _id: '634445e133ba42245738ef3f',
              },
              {
                size: 'L',
                quantity: 59,
                _id: '634445e133ba42245738ef40',
              },
              {
                size: 'XL',
                quantity: 40,
                _id: '634445e133ba42245738ef41',
              },
            ],
            colorName: 'brown',
            _id: '634445e133ba42245738ef3c',
          },
          {
            imageMedium:
              '/public/products/ad7f42fc-fc90-4d53-841f-e84fc262087f-50bks_3amtm0224_1_medium.jpg',
            imageSmall:
              '/public/products/8a909db0-9c60-4bb5-8823-5332caed21a1-50bks_3amtm0224_1_small.jpg',
            images: [
              '/public/products/f1ab7ba1-3c82-447f-a214-97ba330f476f-50bks_3amtm0224_1_large.jpg',
              '/public/products/80b2c0ee-3c4c-47c4-ac31-89177bb1c212-50bks_3amtm0224_2_large.jpg',
              '/public/products/f9ffbee1-cd9a-4173-91a2-5fed2ba3907b-50bks_3amtm0224_3_large.jpg',
              '/public/products/ea9f9cf7-6bea-4de0-afa2-f528d967e515-50bks_3amtm0224_4_large.jpg',
              '/public/products/c51c6758-a370-41be-9bb9-6aac687a4bd5-50bks_3amtm0224_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 40,
                _id: '634445e133ba42245738ef43',
              },
              {
                size: 'S',
                quantity: 30,
                _id: '634445e133ba42245738ef44',
              },
              {
                size: 'M',
                quantity: 50,
                _id: '634445e133ba42245738ef45',
              },
              {
                size: 'L',
                quantity: 45,
                _id: '634445e133ba42245738ef46',
              },
              {
                size: 'XL',
                quantity: 10,
                _id: '634445e133ba42245738ef47',
              },
            ],
            colorName: 'black',
            _id: '634445e133ba42245738ef42',
          },
        ],
        brand: {
          _id: '632fa7242e176f3c9f775782',
          name: 'MLB',
          logo: '/public/brands/20220925074532-mlb_425e44b6399e417eb445b103d6848420.jpg',
          history:
            '<b>MLB</b> là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu <b>MLB</b> thuộc tập đoàn F&F đã mở cửa hàng <b>MLB Korea</b> đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, <b>MLB</b> đã có 250 cửa hàng tại khắp khu vực Châu Á.',
          createdAt: '2022-09-25T00:56:04.185Z',
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước ở nhiệt độ 30℃\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo mlb', 'áo hoodie', 'áo nỉ', 'áo sweatshirt', 'áo monogram'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'man',
        deleted: false,
        createdAt: '2022-10-10T16:18:41.387Z',
        updatedAt: '2022-11-06T03:39:56.449Z',
        slug: 'ao-sweatshirt-tay-dai-phom-suong-classic-monogram-allover-overfit',
        __v: 0,
      },
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
        category: {
          _id: '632fb3c231bdaca089422a59',
          products: ['633bcb36b9445656abd37b48'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['woman'],
          name: 'Đầm',
          createdAt: '2022-09-25T01:49:54.213Z',
          updatedAt: '2022-10-04T05:57:10.822Z',
          slug: 'dam',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['đầm', 'đầm mini', 'đầm cổ trụ', 'đầm the kooples', 'đầm tay dài'],
        reviews: ['633dc92dad72c1a5c013019f'],
        favorites: [],
        rate: 5,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-04T05:57:10.716Z',
        updatedAt: '2022-11-07T13:27:42.155Z',
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
        category: {
          _id: '632fb30831bdaca089422a35',
          products: [
            '6336ea200a0af98dcd7d2688',
            '633af1a60c45797f30463495',
            '633af8d5dd4d3f035d3cc2d7',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Quần',
          createdAt: '2022-09-25T01:46:48.138Z',
          updatedAt: '2022-10-03T14:59:33.255Z',
          slug: 'quan',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['quần', 'quần kiểu bóng', 'quần kiểu', 'quần bóng', 'quần skinny'],
        reviews: ['633dc92dad72c1a5c01301a0'],
        favorites: [],
        rate: 5,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:59:33.167Z',
        updatedAt: '2022-10-27T16:31:38.505Z',
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
        category: {
          _id: '632fb30831bdaca089422a35',
          products: [
            '6336ea200a0af98dcd7d2688',
            '633af1a60c45797f30463495',
            '633af8d5dd4d3f035d3cc2d7',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Quần',
          createdAt: '2022-09-25T01:46:48.138Z',
          updatedAt: '2022-10-03T14:59:33.255Z',
          slug: 'quan',
          __v: 0,
        },
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
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:28:54.494Z',
        updatedAt: '2022-10-27T16:35:03.340Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Giặt khô\nKhông vắt bằng tay\nKhông giặt với nước\nKhông sử dụng chất tẩy\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
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
        updatedAt: '2022-10-27T16:35:06.768Z',
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
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['blazer', 'áo blazer', 'blazer kẻ sọc'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:12:33.627Z',
        updatedAt: '2022-10-20T18:17:26.471Z',
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
          name: 'GIGI',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-11-04T10:00:46.433Z',
          slug: 'gigi',
          __v: 0,
          image: '/public/brands/7fe81b01-8a48-4a3f-95d0-bc0fc5c1c56f-gigi.jpg',
        },
        preserveInformation: 'Giặt khô\nBảo quản nơi ráo thoáng mát',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['áo vest', 'áo blazer', 'áo vest gigi', 'blazer', 'blazer gigi'],
        reviews: [],
        favorites: ['6346c425f31ca8e6441abfce'],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:06:19.170Z',
        updatedAt: '2022-11-01T06:06:40.171Z',
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
          name: 'GIGI',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-11-04T10:00:46.433Z',
          slug: 'gigi',
          __v: 0,
          image: '/public/brands/7fe81b01-8a48-4a3f-95d0-bc0fc5c1c56f-gigi.jpg',
        },
        preserveInformation:
          'Sử dụng chất tẩy rửa trung tính\nNhiệt độ nước giặt không quá 30*C\nKhông nên giặt quá lâu, quá mạnh tay\nKhông sử dụng máy sấy\nLuôn phơi trong bóng râm',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb33931bdaca089422a47',
          products: ['6338599c78b2239a6680ec70', '63385bbf78b2239a6680ed22'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo Khoác',
          createdAt: '2022-09-25T01:47:37.291Z',
          updatedAt: '2022-10-01T15:24:47.177Z',
          slug: 'ao-khoac',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo cardigan', 'cardigan', 'áo'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-01T15:24:47.093Z',
        updatedAt: '2022-11-01T06:06:04.542Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước có nhiệt độ không quá 30 độ C\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb33931bdaca089422a47',
          products: ['6338599c78b2239a6680ec70', '63385bbf78b2239a6680ed22'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo Khoác',
          createdAt: '2022-09-25T01:47:37.291Z',
          updatedAt: '2022-10-01T15:24:47.177Z',
          slug: 'ao-khoac',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo mlb', 'áo khoác mũ trùm', 'áo khoác tay dài'],
        reviews: [],
        favorites: ['632c11056ed8972ad6e25053'],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-01T15:15:40.952Z',
        updatedAt: '2022-11-07T15:47:50.603Z',
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
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo pinko', 'áo trắng', 'áo đen', 'áo thun'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-01T14:58:47.108Z',
        updatedAt: '2022-10-20T18:17:26.720Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước ở nhiệt độ 30℃\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng\n\nSẢN PHẨM BẠN ĐÃ XEM',
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['sweater', 'áo sweater', 'áo mlb', 'sweater mlb'],
        reviews: [],
        favorites: [],
        rate: 3.6,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T15:27:24.772Z',
        updatedAt: '2022-10-20T18:17:26.709Z',
        slug: 'ao-sweatshirt-tay-dai-phom-suong-paisley-big-logo-overfit',
        __v: 0,
      },
    ],
    logo: '/public/brands/20220925074532-havaianas_ccf90cb940b04dcfbcef04f86c60678e.jpg',
    history:
      '<b>HAVAIANAS</b> là thương hiệu dép tông số 1 thế giới đến từ Brazil, với hơn 220 triệu đôi dép được bán ra mỗi năm và đã có mặt hơn 80 quốc gia trên thê giới. HAVAIANAS là hiện thân đầy màu sắc của một nền văn hóa Brazil sống động: Tinh thần tự do, niềm say mê cuộc sống và bản năng kết hợp những điều không thể. Hiện tại thương hiệu đã cho ra mắt thêm các dòng sản phẩm giày dép dạo phố, đi tiệc và cả phụ kiện như túi xách, ví... vô cùng đa dạng.',
    createdAt: '2022-09-25T01:03:35.340Z',
    updatedAt: '2022-11-04T10:03:08.329Z',
    slug: 'havaianas',
    __v: 0,
    image: '/public/brands/3bfb7a3b-2b1c-45e4-aa35-8956ce542361-havaianas.jpg',
  },
  {
    _id: '632fa7c82e176f3c9f775786',
    name: 'PUMA',
    products: [
      {
        _id: '63444ca633ba42245738faf9',
        name: 'Balo unisex phom chữ nhật Classic Monogram',
        price: 4890000,
        discount: 0,
        description:
          'Chất liệu: 100% Polyester\nKích thước: W30 x H42 x D15 (cm)\nKiểu dáng balo phom chữ nhật thời trang\nKhóa kéo kim loại chắc chắn\nGồm một ngăn chính và ngăn nhỏ phía trước\nPhối logo bóng chày thêu nổi bật\nThiết kế họa tiết monogram cá tính, thời thượng\nDây đeo dễ dàng tăng giảm kích thước\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/873577c5-a0f8-46ed-b250-388fb71c4afd-50crd_3abkm102n_1_medium.jpg',
            imageSmall:
              '/public/products/b3aca163-1653-44a9-b217-f11ce0db5257-50crd_3abkm102n_1_small.jpg',
            images: [
              '/public/products/d0bd8bfe-9e70-4e5c-8aaf-474695af5416-50crd_3abkm102n_1_large.jpeg',
              '/public/products/539a01c0-dc2f-4b0e-a388-ff70d9d10687-50crd_3abkm102n_2_large.jpeg',
              '/public/products/e4eddcee-b270-4084-9adf-9fbbcc61b69b-50crd_3abkm102n_3_large.jpeg',
              '/public/products/94eb558d-0603-4a9c-9857-bac41e0a1817-50crd_3abkm102n_4_large.jpeg',
              '/public/products/a9a99ea8-853d-4610-b41a-2449c8151d34-50crd_3abkm102n_5_large.jpeg',
              '/public/products/40d37af8-967e-4974-8d93-8c74c8c7f8e2-50crd_3abkm102n_6_large.jpeg',
              '/public/products/dd1ea28b-b8a7-4cbb-8d9e-9f00aadf57fb-50crd_3abkm102n_7_large.jpeg',
              '/public/products/a6b7c82a-d43e-4f44-9c70-918c1cd00814-50crd_3abkm102n_8_large.jpeg',
              '/public/products/78312ecc-c252-43d7-ad7d-20995853ec88-50crd_3abkm102n_9_large.jpeg',
            ],
            sizes: [
              {
                size: 'F',
                quantity: 40,
                _id: '63444ca633ba42245738fafb',
              },
            ],
            colorName: 'white',
            _id: '63444ca633ba42245738fafa',
          },
          {
            imageMedium:
              '/public/products/009d9c3c-ea7f-4db8-9da5-f7578d5b89a6-43brd_3abkm102n_1_medium.jpg',
            imageSmall:
              '/public/products/08b89894-94ea-4b6e-884e-94063a7e87a7-43brd_3abkm102n_1_small.jpg',
            images: [
              '/public/products/5582e891-0668-4d89-900e-34704b42c0bd-43brd_3abkm102n_1_large.jpeg',
              '/public/products/64911102-359d-43f9-b9bc-d5741a778e40-43brd_3abkm102n_2_large.jpeg',
              '/public/products/d4b2a149-abca-4963-b1d3-320928f461d6-43brd_3abkm102n_3_large.jpeg',
              '/public/products/d85a461f-fc40-43f8-bca3-ec7ab4800fee-43brd_3abkm102n_4_large.jpeg',
              '/public/products/04789490-d8de-4c3f-a27a-eef799aac77e-43brd_3abkm102n_5_large.jpeg',
              '/public/products/2fc55965-7803-4671-88de-32c69f5684da-43brd_3abkm102n_6_large.jpeg',
              '/public/products/78f5cfdd-5542-4020-ac15-077028d8dafa-43brd_3abkm102n_7_large.jpeg',
              '/public/products/d48cfc5c-f341-44c1-b63d-844a49683850-43brd_3abkm102n_8_large.jpeg',
              '/public/products/7c479c04-eb69-4289-b365-1dd00272fbc7-43brd_3abkm102n_9_large.jpeg',
              '/public/products/237f172c-05e3-48fa-a615-6daa1f239163-43brd_3abkm102n_10_large.jpeg',
            ],
            sizes: [
              {
                size: 'F',
                quantity: 30,
                _id: '63444ca633ba42245738fafd',
              },
            ],
            colorName: 'brown dark',
            _id: '63444ca633ba42245738fafc',
          },
        ],
        brand: {
          _id: '632fa7242e176f3c9f775782',
          name: 'MLB',
          logo: '/public/brands/20220925074532-mlb_425e44b6399e417eb445b103d6848420.jpg',
          history:
            '<b>MLB</b> là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu <b>MLB</b> thuộc tập đoàn F&F đã mở cửa hàng <b>MLB Korea</b> đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, <b>MLB</b> đã có 250 cửa hàng tại khắp khu vực Châu Á.',
          createdAt: '2022-09-25T00:56:04.185Z',
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation: 'Vệ sinh bằng khăn ẩm mềm\nTránh tiếp xúc với môi trường hóa chất',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb73ed29ff93337e742e9',
          products: ['63444ca633ba42245738faf9'],
          catalog: '632f34fcb1734732d9dc8803',
          gender: ['man', 'woman', 'unisex'],
          name: 'Balo',
          createdAt: '2022-09-25T02:04:46.512Z',
          updatedAt: '2022-10-10T16:47:34.616Z',
          slug: 'balo',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['balo mlb', 'balo unisex', 'balo monogram'],
        reviews: [],
        favorites: ['634e48c98dcb58804c09bed0'],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-10T16:47:34.565Z',
        updatedAt: '2022-11-06T03:39:49.604Z',
        slug: 'balo-unisex-phom-chu-nhat-classic-monogram',
        __v: 0,
      },
      {
        _id: '634445e133ba42245738ef3b',
        name: 'Áo sweatshirt tay dài phom suông Classic Monogram Allover Overfit',
        price: 3290000,
        discount: 0,
        description:
          'Chất liệu: Cotton\nKiểu dáng áo sweatshirt phom suông thời trang\nCổ tròn, tay dài\nBo viền cổ, gấu tay và vạt áo\nPhối logo bóng chày thêu nổi bật ở ngực trái\nThiết kế họa tiết monogram cá tính, thời thượng\nChất vải mềm mại, giữ ấm tốt\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Hàn Quốc',
        colors: [
          {
            imageMedium:
              '/public/products/c479b37d-5128-4d0d-9570-f7e50444a4ea-43brd_3amtm0224_1_medium.jpg',
            imageSmall:
              '/public/products/fca604f3-3aa0-4ea4-8bdd-3157087eeff6-43brd_3amtm0224_1_small.jpg',
            images: [
              '/public/products/0b445ebf-c692-492c-806b-2bde77af0a50-43brd_3amtm0224_1_large.jpg',
              '/public/products/309b19c9-9752-43f2-a163-1163c6c7a76b-43brd_3amtm0224_2_large.jpg',
              '/public/products/9956709b-0d5b-4f37-96ae-55a0a168a1a7-43brd_3amtm0224_3_large.jpg',
              '/public/products/0186eb52-d203-41e5-994c-79ee4fb8c7a3-43brd_3amtm0224_4_large.jpg',
              '/public/products/dd1bc2df-d7d7-409f-941d-a0aa18d71564-43brd_3amtm0224_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 30,
                _id: '634445e133ba42245738ef3d',
              },
              {
                size: 'S',
                quantity: 30,
                _id: '634445e133ba42245738ef3e',
              },
              {
                size: 'M',
                quantity: 40,
                _id: '634445e133ba42245738ef3f',
              },
              {
                size: 'L',
                quantity: 59,
                _id: '634445e133ba42245738ef40',
              },
              {
                size: 'XL',
                quantity: 40,
                _id: '634445e133ba42245738ef41',
              },
            ],
            colorName: 'brown',
            _id: '634445e133ba42245738ef3c',
          },
          {
            imageMedium:
              '/public/products/ad7f42fc-fc90-4d53-841f-e84fc262087f-50bks_3amtm0224_1_medium.jpg',
            imageSmall:
              '/public/products/8a909db0-9c60-4bb5-8823-5332caed21a1-50bks_3amtm0224_1_small.jpg',
            images: [
              '/public/products/f1ab7ba1-3c82-447f-a214-97ba330f476f-50bks_3amtm0224_1_large.jpg',
              '/public/products/80b2c0ee-3c4c-47c4-ac31-89177bb1c212-50bks_3amtm0224_2_large.jpg',
              '/public/products/f9ffbee1-cd9a-4173-91a2-5fed2ba3907b-50bks_3amtm0224_3_large.jpg',
              '/public/products/ea9f9cf7-6bea-4de0-afa2-f528d967e515-50bks_3amtm0224_4_large.jpg',
              '/public/products/c51c6758-a370-41be-9bb9-6aac687a4bd5-50bks_3amtm0224_5_large.jpg',
            ],
            sizes: [
              {
                size: 'XS',
                quantity: 40,
                _id: '634445e133ba42245738ef43',
              },
              {
                size: 'S',
                quantity: 30,
                _id: '634445e133ba42245738ef44',
              },
              {
                size: 'M',
                quantity: 50,
                _id: '634445e133ba42245738ef45',
              },
              {
                size: 'L',
                quantity: 45,
                _id: '634445e133ba42245738ef46',
              },
              {
                size: 'XL',
                quantity: 10,
                _id: '634445e133ba42245738ef47',
              },
            ],
            colorName: 'black',
            _id: '634445e133ba42245738ef42',
          },
        ],
        brand: {
          _id: '632fa7242e176f3c9f775782',
          name: 'MLB',
          logo: '/public/brands/20220925074532-mlb_425e44b6399e417eb445b103d6848420.jpg',
          history:
            '<b>MLB</b> là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu <b>MLB</b> thuộc tập đoàn F&F đã mở cửa hàng <b>MLB Korea</b> đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, <b>MLB</b> đã có 250 cửa hàng tại khắp khu vực Châu Á.',
          createdAt: '2022-09-25T00:56:04.185Z',
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước ở nhiệt độ 30℃\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo mlb', 'áo hoodie', 'áo nỉ', 'áo sweatshirt', 'áo monogram'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'man',
        deleted: false,
        createdAt: '2022-10-10T16:18:41.387Z',
        updatedAt: '2022-11-06T03:39:56.449Z',
        slug: 'ao-sweatshirt-tay-dai-phom-suong-classic-monogram-allover-overfit',
        __v: 0,
      },
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
        category: {
          _id: '632fb3c231bdaca089422a59',
          products: ['633bcb36b9445656abd37b48'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['woman'],
          name: 'Đầm',
          createdAt: '2022-09-25T01:49:54.213Z',
          updatedAt: '2022-10-04T05:57:10.822Z',
          slug: 'dam',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['đầm', 'đầm mini', 'đầm cổ trụ', 'đầm the kooples', 'đầm tay dài'],
        reviews: ['633dc92dad72c1a5c013019f'],
        favorites: [],
        rate: 5,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-04T05:57:10.716Z',
        updatedAt: '2022-11-07T13:27:42.155Z',
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
        category: {
          _id: '632fb30831bdaca089422a35',
          products: [
            '6336ea200a0af98dcd7d2688',
            '633af1a60c45797f30463495',
            '633af8d5dd4d3f035d3cc2d7',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Quần',
          createdAt: '2022-09-25T01:46:48.138Z',
          updatedAt: '2022-10-03T14:59:33.255Z',
          slug: 'quan',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['quần', 'quần kiểu bóng', 'quần kiểu', 'quần bóng', 'quần skinny'],
        reviews: ['633dc92dad72c1a5c01301a0'],
        favorites: [],
        rate: 5,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:59:33.167Z',
        updatedAt: '2022-10-27T16:31:38.505Z',
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
        category: {
          _id: '632fb30831bdaca089422a35',
          products: [
            '6336ea200a0af98dcd7d2688',
            '633af1a60c45797f30463495',
            '633af8d5dd4d3f035d3cc2d7',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Quần',
          createdAt: '2022-09-25T01:46:48.138Z',
          updatedAt: '2022-10-03T14:59:33.255Z',
          slug: 'quan',
          __v: 0,
        },
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
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:28:54.494Z',
        updatedAt: '2022-10-27T16:35:03.340Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Giặt khô\nKhông vắt bằng tay\nKhông giặt với nước\nKhông sử dụng chất tẩy\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
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
        updatedAt: '2022-10-27T16:35:06.768Z',
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
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['blazer', 'áo blazer', 'blazer kẻ sọc'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:12:33.627Z',
        updatedAt: '2022-10-20T18:17:26.471Z',
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
          name: 'GIGI',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-11-04T10:00:46.433Z',
          slug: 'gigi',
          __v: 0,
          image: '/public/brands/7fe81b01-8a48-4a3f-95d0-bc0fc5c1c56f-gigi.jpg',
        },
        preserveInformation: 'Giặt khô\nBảo quản nơi ráo thoáng mát',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb34b31bdaca089422a50',
          products: [
            '633aec5b0c45797f3046326b',
            '633aedd10c45797f3046331d',
            '633af0130c45797f304633d4',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Vest & Blazer',
          createdAt: '2022-09-25T01:47:55.372Z',
          updatedAt: '2022-10-03T14:22:12.036Z',
          slug: 'vest-and-blazer',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['áo vest', 'áo blazer', 'áo vest gigi', 'blazer', 'blazer gigi'],
        reviews: [],
        favorites: ['6346c425f31ca8e6441abfce'],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-03T14:06:19.170Z',
        updatedAt: '2022-11-01T06:06:40.171Z',
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
          name: 'GIGI',
          logo: '/public/brands/20220925074532-gigi_aacd3cff11034e27a773efec5e02e58a.jpg',
          history:
            'Thương hiệu thời trang GiGi của Việt Nam sở hữu dòng sản phẩm thời trang cao cấp dành riêng cho nữ giới. Các thiết kế của thương hiệu đều toát lên phong cách quyến rũ và sang trọng, kết hợp với chất lượng hoàn mỹ và kỹ thuật gia công điêu luyện. Sự kết hợp giữa chất liệu cao cấp và thiết kế nữ tính của GiGi sẽ giúp hoàn thiện vẻ đẹp của các quý cô trong mọi hoàn cảnh từ đi tiệc, dạo phố hay đi làm,... ',
          createdAt: '2022-09-25T01:11:23.702Z',
          updatedAt: '2022-11-04T10:00:46.433Z',
          slug: 'gigi',
          __v: 0,
          image: '/public/brands/7fe81b01-8a48-4a3f-95d0-bc0fc5c1c56f-gigi.jpg',
        },
        preserveInformation:
          'Sử dụng chất tẩy rửa trung tính\nNhiệt độ nước giặt không quá 30*C\nKhông nên giặt quá lâu, quá mạnh tay\nKhông sử dụng máy sấy\nLuôn phơi trong bóng râm',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb33931bdaca089422a47',
          products: ['6338599c78b2239a6680ec70', '63385bbf78b2239a6680ed22'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo Khoác',
          createdAt: '2022-09-25T01:47:37.291Z',
          updatedAt: '2022-10-01T15:24:47.177Z',
          slug: 'ao-khoac',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo cardigan', 'cardigan', 'áo'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-01T15:24:47.093Z',
        updatedAt: '2022-11-01T06:06:04.542Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước có nhiệt độ không quá 30 độ C\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng',
        category: {
          _id: '632fb33931bdaca089422a47',
          products: ['6338599c78b2239a6680ec70', '63385bbf78b2239a6680ed22'],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo Khoác',
          createdAt: '2022-09-25T01:47:37.291Z',
          updatedAt: '2022-10-01T15:24:47.177Z',
          slug: 'ao-khoac',
          __v: 0,
        },
        likeCount: 1,
        quantitySold: 0,
        keywords: ['áo khoác', 'áo mlb', 'áo khoác mũ trùm', 'áo khoác tay dài'],
        reviews: [],
        favorites: ['632c11056ed8972ad6e25053'],
        rate: 0,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-10-01T15:15:40.952Z',
        updatedAt: '2022-11-07T15:47:50.603Z',
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
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 0,
        keywords: ['áo pinko', 'áo trắng', 'áo đen', 'áo thun'],
        reviews: [],
        favorites: [],
        rate: 0,
        gender: 'women',
        deleted: false,
        createdAt: '2022-10-01T14:58:47.108Z',
        updatedAt: '2022-10-20T18:17:26.720Z',
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
          updatedAt: '2022-11-04T09:55:13.372Z',
          slug: 'mlb',
          __v: 0,
          image: '/public/brands/6e6e73de-81be-4af7-8ddf-2baa590ba384-mlb.jpg',
        },
        preserveInformation:
          'Không giặt chung với sản phẩm khác màu\nKhông sử dụng bột giặt có chất tẩy quá mạnh\nGiặt bằng nước ở nhiệt độ 30℃\nPhơi nơi râm mát, thoáng khí',
        deliveryReturnPolicy:
          'QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE\n\nSản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.\nSản phẩm không áp dụng: \n - Đồ lót, đồ bơi\n\n - Nước hoa\n\n - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... \n\n - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.\n\nĐối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn\nThời gian đổi trả hàng:\n - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\n - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.\n\nTham khảo thêm thông tin tại Chính sách đổi trả hàng\n\nSẢN PHẨM BẠN ĐÃ XEM',
        category: {
          _id: '632fb31431bdaca089422a3e',
          products: [
            '63300c9cf7524778799d9350',
            '6336fdfdcff2ea799ddf377e',
            '63370adc5ba35494fc385ae9',
            '633855a778b2239a6680ebce',
            '634445e133ba42245738ef3b',
          ],
          catalog: '632f35fab1734732d9dc8821',
          gender: ['man', 'woman', 'unisex'],
          name: 'Áo',
          createdAt: '2022-09-25T01:47:00.674Z',
          updatedAt: '2022-10-10T16:18:41.445Z',
          slug: 'ao',
          __v: 0,
        },
        likeCount: 0,
        quantitySold: 1,
        keywords: ['sweater', 'áo sweater', 'áo mlb', 'sweater mlb'],
        reviews: [],
        favorites: [],
        rate: 3.6,
        gender: 'unisex',
        deleted: false,
        createdAt: '2022-09-30T15:27:24.772Z',
        updatedAt: '2022-10-20T18:17:26.709Z',
        slug: 'ao-sweatshirt-tay-dai-phom-suong-paisley-big-logo-overfit',
        __v: 0,
      },
    ],
    logo: '/public/brands/20220925074532-puma_624b36fe3a5348d5a3284364d3b378b9.jpg',
    history:
      'Được thành lập vào năm 1948 tại Đức, <b>PUMA</b> là một trong những thương hiệu thể thao hàng đầu thế giới về thiết kế, phát triển các mặt hàng giày dép, quần áo, phụ kiện. <b>PUMA</b> chuyên sản xuất giày thời trang và giày thể thao dùng trong bóng đá, chạy bộ, giày để tập luyện trong phòng tập, golf và đua xe mô-tô. Thương hiệu hiện phân phối các dòng sản phẩm tại hơn 120 quốc gia và được phân phối tại Việt Nam bởi Maison JSC.',
    createdAt: '2022-09-25T00:58:48.421Z',
    updatedAt: '2022-11-04T10:04:08.310Z',
    slug: 'puma',
    __v: 0,
    image: '/public/brands/88d1af4a-1f2c-4a22-9914-86ddc445afa5-puma.jpg',
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
