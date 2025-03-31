import React from "react";
import NewsSlider from "./NewsSlider";
import DoctorList from "./DoctorList";

const TrangChuPresenter = ({ navigate }) => {
  return (
    <div>
      <header className="header">
        <h1>Bệnh Viện UMC</h1>
        <p>Dịch vụ y tế nhanh chóng, chuyên nghiệp.</p>
      </header>

      {/* Tin tức */}
      <NewsSlider />

      {/* Đội ngũ bác sĩ */}
      <DoctorList />

      {/* Nút điều hướng */}
      <button onClick={() => navigate("/datkham")}>Đặt lịch hẹn ngay</button>
    </div>
  );
};

export default TrangChuPresenter;

//Container-Presenter	Tách TrangChuContainer.js (logic) & TrangChuPresenter.js (UI).