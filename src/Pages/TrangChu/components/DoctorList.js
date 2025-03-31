import React from "react";
import doctorsData, { createDoctorCard } from "./DoctorFactory";

const DoctorList = () => {
  return (
    <div className="bacsi-trangchu">
      <h2>ĐỘI NGŨ BÁC SĨ</h2>
      <div className="bacsi-trangchu-team">
        {doctorsData.map(createDoctorCard)}
      </div>
    </div>
  );
};

export default DoctorList;

  //Áp dụng Factory Pattern để tạo danh sách bác sĩ & tin tức
    //Factory Pattern	Tạo DoctorFactory.js và NewsFactory.js để sinh component động.