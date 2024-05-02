import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layouts/header-footer/Navbar";
import Footer from "./layouts/header-footer/Footer";
import HomePage from "./layouts/homepage/HomePage";
import { layToanBoSach } from "./api/SachAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layouts/about/About";
import ChiTietSanPham from "./layouts/product/ChiTietSanPham";
import DangKyNguoiDung from "./layouts/user/DangKyNguoiDung";
import KichHoatTaiKhoan from "./layouts/user/KichHoatTaiKhoan";

import Test from "./layouts/user/Test";
import SachForm from "./layouts/admin/SachForm";
import DangNhap from "./layouts/user/DangNhap";
import SachForm_Admin from "./layouts/admin/SachForm";

function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          tuKhoaTimKiem={tuKhoaTimKiem}
          setTuKhoaTimKiem={setTuKhoaTimKiem}
        />

        <Routes>
          <Route
            path="/"
            element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />}
          />

          <Route
            path="/:maTheLoai"
            element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/sach/:maSach" element={<ChiTietSanPham />} />

          <Route path="/dang-ky" element={<DangKyNguoiDung />} />

          <Route
            path="/kich-hoat/:email/:maKichHoat"
            element={<KichHoatTaiKhoan />}
          />

          <Route path="/dang-nhap" element={<DangNhap />} />

          <Route path="/test" element={<Test />} />

          <Route path="/admin/them-sach" element={<SachForm_Admin />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
