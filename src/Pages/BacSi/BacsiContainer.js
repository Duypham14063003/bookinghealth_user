import React, { useState } from "react";
import BacsiPresenter from "./BacsiPresenter";
import doctorsData from "./DoctorFactory"; // Import danh sách bác sĩ từ Factory
import { useDoctor } from "./DoctorContext"; // Import Context

const BacsiContainer = () => {
  const { selectedDoctor, setSelectedDoctor } = useDoctor(); // Dùng Context thay vì useState
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const doctorsPerPage = 2;
  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedDoctor(null); // Dùng setSelectedDoctor từ Context
  };

  return (
    <BacsiPresenter
      doctors={currentDoctors}
      totalDoctors={filteredDoctors.length}
      doctorsPerPage={doctorsPerPage}
      currentPage={currentPage}
      onSearch={setSearchQuery}
      onPageChange={handlePageChange}
      onSelectDoctor={setSelectedDoctor} // Truyền context function thay vì local state
      selectedDoctor={selectedDoctor} // Dùng state từ Context
    />
  );
};

export default BacsiContainer;

// Áp dụng Container-Presenter Pattern
//BacsiContainer.js chỉ xử lý logic và quản lý state. 


