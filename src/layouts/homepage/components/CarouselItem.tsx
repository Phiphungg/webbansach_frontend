import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { layMotAnhCuaMotSach, layToanBoAnh } from "../../../api/HinhAnhAPI";

interface CarouselItemInterface {
  sach: SachModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
  const maSach: number = props.sach.maSach;

  const [danhSachHinhAnh, setdanhSachHinhAnh] = useState<HinhAnhModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);

  useEffect(
    () => {
      layMotAnhCuaMotSach(maSach)
        .then((hinhAnhData) => {
          setdanhSachHinhAnh(hinhAnhData);
          setDangTaiDuLieu(false);
        })
        .catch((error) => {
          setDangTaiDuLieu(false);
          setBaoLoi(error.message);
        });
    },
    [] // Chi goi mot lan
  );

  if (dangTaiDuLieu) {
    return (
      <div>
        <h1>Đang tải dữ liệu</h1>
      </div>
    );
  }

  if (baoLoi) {
    return (
      <div>
        <h1>Gặp lỗi: {baoLoi}</h1>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-5 text-center">
        {danhSachHinhAnh[0] && danhSachHinhAnh[0] && (
          <img
            src={danhSachHinhAnh[0].duLieuAnh}
            className="float-end"
            style={{ width: "150px" }}
          />
        )}
      </div>
      <div className="col-7">
        <h5>{props.sach.tenSach}</h5>
        <p>{props.sach.moTa}.</p>
      </div>
    </div>
  );
};
export default CarouselItem;
