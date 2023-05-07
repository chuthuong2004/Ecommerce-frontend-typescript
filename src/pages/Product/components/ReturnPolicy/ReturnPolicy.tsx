import { memo } from 'react';

const ReturnPolicy = () => {
  return (
    <div>
      <p className="p10">
        QUY ĐỊNH&nbsp;ĐỔI TRẢ&nbsp;HÀNG TẠI&nbsp;&nbsp;<strong>KOGA CLOTHES</strong>
      </p>
      <ul>
        <li className="p10">
          <strong>Sản phẩm áp dụng: </strong>Tất cả sản phẩm được giao dịch trên Koga Clothes, có
          chương trình khuyến mãi&nbsp;không quá 30%.
        </li>
        <li>
          <strong>Sản phẩm không áp dụng:&nbsp;</strong>
        </li>
      </ul>
      <p className="p10">&nbsp;- Đồ lót, đồ bơi</p>
      <p className="p10">&nbsp;- Nước hoa</p>
      <p className="p10">
        &nbsp;- Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,...&nbsp;
      </p>
      <p className="p10">
        &nbsp;- Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Koga.
      </p>
      <ul>
        <li className="p10">
          <strong>Đối tượng khách hàng:&nbsp;</strong>Tất cả khách hàng sử dụng dịch vụ tại
          <em>
            &nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.maisononline.vn/">
              Koga Clothes
            </a>
          </em>
        </li>
        <li className="p10">
          <strong>Thời gian đổi trả hàng:</strong>
        </li>
      </ul>
      <p className="p10">
        &nbsp;- <strong>Đổi hàng</strong>: Trong vòng <strong>14 ngày</strong> kể từ ngày khách hàng
        nhận được sản phẩm.
      </p>
      <p className="p10">
        &nbsp;-&nbsp;<strong>Trả hàng:</strong> Trong vòng <strong>03 ngày</strong> kể từ ngày khách
        hàng nhận được sản phẩm.
      </p>
    </div>
  );
};

export default memo(ReturnPolicy);
