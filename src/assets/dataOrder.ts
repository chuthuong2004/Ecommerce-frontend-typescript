import { IOrder } from '@/models';

export const dataOrder: IOrder[] = [
  {
    deliveryInformation: {
      firstName: 'Nguyễn',
      lastName: 'Quốc Trọn',
      phone: '0921775630',
      province: 'Tỉnh Bình Định',
      district: 'Huyện Phù Cát',
      ward: 'Thị trân Ngô Mây',
      address: 'khu An Hành Tây',
    },
    _id: '633dbcdd52c8cfe12c3a9878',
    user: {
      _id: '632c11056ed8972ad6e25053',
      email: 'hieucute2511@gmail.com',
      username: 'hieucute2511',
      isAdmin: false,
    },
    orderItems: [
      {
        name: 'Đầm mini cổ trụ tay dài Belted White With Pockets',
        price: 6980000,
        discount: 80,
        quantity: 1,
        size: 'L',
        color: 'black',
        image: '/public/products/6904fd99-a3b9-4db8-9782-2566cf87495c-bla01_frob21035k_1_large.jpg',
        brandName: 'The Kooples',
        product: '633bcb36b9445656abd37b48',
        _id: '633dbcdd52c8cfe12c3a9879',
      },
      {
        name: 'Quần kiểu nữ vải bóng Petite Black Skinny Vinyl',
        price: 1369000,
        discount: 71,
        quantity: 1,
        size: 'M',
        color: 'black',
        image: '/public/products/8aba022e-6dd2-4441-ad03-675762c05375-130_26e15rblk_1_large.jpg',
        brandName: 'CECI',
        product: '633af8d5dd4d3f035d3cc2d7',
        _id: '633dbcdd52c8cfe12c3a987a',
      },
    ],
    taxPrice: 0,
    shippingPrice: 30000,
    totalPrice: 1823010,
    provisionalPrice: 1793010,
    orderStatus: 'Delivered',
    isPaid: true,
    isEvaluated: true,
    orderId: 'ECO46ECEE359A79',
    createdAt: '2022-10-05T17:20:29.855Z',
    updatedAt: '2022-10-05T18:13:01.295Z',
    __v: 0,
    shippingAt: '2022-10-05T17:48:50.516Z',
    deliveryAt: '2022-10-05T17:49:14.298Z',
    deliveredAt: '2022-10-05T18:11:58.845Z',
    paidAt: '2022-10-05T18:11:58.846Z',
  },
  {
    deliveryInformation: {
      firstName: 'Nguyễn',
      lastName: 'Thị Hiếu',
      phone: '0354441351',
      province: 'Tỉnh Bình Định',
      district: 'Huyện Phù Cát',
      ward: 'Xã Cát Tân',
      address: 'Xóm Tây Nam, Thôn Kiều Huyên',
    },
    _id: '633d53f7259e11607aa4cb17',
    user: {
      _id: '632c11056ed8972ad6e25053',
      email: 'hieucute2511@gmail.com',
      username: 'hieucute2511',
      isAdmin: false,
    },
    orderItems: [
      {
        name: 'Áo khoác tay dài phối mũ trùm Dia Monogram Blocking',
        price: 7290000,
        discount: 0,
        quantity: 3,
        size: 'S',
        color: 'black',
        image: '/public/products/63526f83-ede7-4597-87f5-5eba1a1fc2b1-50bks_3awjm0224_1_large.jpg',
        brandName: 'MLB',
        product: '6338599c78b2239a6680ec70',
        _id: '633d53f7259e11607aa4cb18',
      },
    ],
    taxPrice: 0,
    shippingPrice: 30000,
    totalPrice: 21900000,
    provisionalPrice: 21870000,
    orderStatus: 'Canceled',
    isPaid: false,
    isEvaluated: false,
    orderId: 'ECO099AB245DD80',
    createdAt: '2022-10-05T09:52:55.155Z',
    updatedAt: '2022-10-05T09:53:56.456Z',
    __v: 0,
    canceledAt: '2022-10-05T09:53:56.446Z',
    canceledReason: 'Không còn nhu cầu',
  },
  {
    deliveryInformation: {
      firstName: 'Đào',
      lastName: 'Văn Thương',
      phone: '0333729170',
      province: 'Thành phố Hồ Chí Minh',
      district: 'Quận Thủ Đức',
      ward: 'Phường Hiệp Bình Chánh',
      address: '520/90/19 QL13',
    },
    _id: '633b1af66313d9d7eb0b4993',
    user: {
      _id: '632c11056ed8972ad6e25053',
      email: 'hieucute2511@gmail.com',
      username: 'hieucute2511',
      isAdmin: false,
    },
    orderItems: [
      {
        name: 'Áo sweatshirt tay dài phom suông Paisley Big Logo Overfit',
        price: 2490000,
        discount: 0,
        quantity: 1,
        size: 'XL',
        color: 'dark-blue',
        image: '/public/products/467f549e-73af-42be-89a0-d2d75a84768e-50nyd_3amti0126_1_large.jpg',
        brandName: 'MLB',
        product: '63370adc5ba35494fc385ae9',
        _id: '633b1af66313d9d7eb0b4994',
      },
    ],
    taxPrice: 0,
    shippingPrice: 10000,
    totalPrice: 2500000,
    provisionalPrice: 2490000,
    orderStatus: 'Delivered',
    isPaid: false,
    isEvaluated: true,
    orderId: 'ECOD5D79B443079',
    createdAt: '2022-10-03T17:25:10.256Z',
    updatedAt: '2022-10-05T12:39:23.748Z',
    __v: 0,
    shippingAt: '2022-10-04T09:24:07.144Z',
    deliveryAt: '2022-10-05T11:31:40.326Z',
    deliveredAt: '2022-10-05T11:37:04.218Z',
  },
  {
    deliveryInformation: {
      firstName: 'Đào',
      lastName: 'Văn Thương',
      phone: '0333729170',
      province: 'Thành phố Hồ Chí Minh',
      district: 'Quận Thủ Đức',
      ward: 'Phường Hiệp Bình Chánh',
      address: '520/90/19 QL13',
    },
    _id: '633b1aac6313d9d7eb0b48f9',
    user: {
      _id: '632c11056ed8972ad6e25053',
      email: 'hieucute2511@gmail.com',
      username: 'hieucute2511',
      isAdmin: false,
    },
    orderItems: [
      {
        name: 'Giày Sneakers Chunky Low',
        price: 2590000,
        discount: 0,
        quantity: 40,
        size: '250',
        color: 'black',
        image: '/public/products/a88d95b8-ad1d-48ed-a8b7-77d44562b90b-50l_32shu2111_1_large.jpg',
        brandName: 'MLB',
        product: '6336a18e0a0af98dcd7d21be',
        _id: '633b1aac6313d9d7eb0b48fa',
      },
      {
        name: 'Áo sweatshirt tay dài phom suông Paisley Big Logo Overfit',
        price: 2490000,
        discount: 0,
        quantity: 2,
        size: 'XL',
        color: 'dark-blue',
        image: '/public/products/467f549e-73af-42be-89a0-d2d75a84768e-50nyd_3amti0126_1_large.jpg',
        brandName: 'MLB',
        product: '63370adc5ba35494fc385ae9',
        _id: '633b1aac6313d9d7eb0b48fb',
      },
    ],
    taxPrice: 0,
    shippingPrice: 10000,
    totalPrice: 108590000,
    provisionalPrice: 108580000,
    orderStatus: 'Canceled',
    isPaid: false,
    isEvaluated: false,
    orderId: 'ECO1C98856A7B8B',
    createdAt: '2022-10-03T17:23:56.768Z',
    updatedAt: '2022-10-05T08:54:27.277Z',
    __v: 0,
    canceledAt: '2022-10-05T08:54:27.263Z',
    canceledReason: 'Hết tiền rùi bạn ơi !',
  },
];
