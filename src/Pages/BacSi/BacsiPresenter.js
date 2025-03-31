import React from "react";
import {
  Container,
  InfoText,
  SearchInput,
  DoctorCard,
  DoctorImage,
  DoctorInfo,
  DetailButton,
  CloseButton,
  Pagination,
  PageNumber
} from "./BacsiStyles"; // Import các styled-components

const BacsiPresenter = ({
  doctors,
  totalDoctors,
  doctorsPerPage,
  currentPage,
  onSearch,
  onPageChange,
  onSelectDoctor,
  selectedDoctor,
}) => {
  return (
    <Container>
      <InfoText>ĐỘI NGŨ Y - BÁC SĨ</InfoText>

      {selectedDoctor ? (
        <DoctorCard isDetail>
          <DoctorImage src={selectedDoctor.imageUrl} alt={selectedDoctor.name} />
          <DoctorInfo>
            <h2>{selectedDoctor.name}</h2>
            <p>{selectedDoctor.detailedInfo}</p>
          </DoctorInfo>
          <CloseButton onClick={() => onSelectDoctor(null)}>Đóng</CloseButton>
        </DoctorCard>
      ) : (
        <>
          <SearchInput
            type="text"
            placeholder="Hãy nhập tên bác sĩ bạn cần tìm..."
            onChange={(e) => onSearch(e.target.value)}
          />
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id}>
              <DoctorImage src={doctor.imageUrl} alt={doctor.name} />
              <DoctorInfo>
                <h3>{doctor.name}</h3>
                <p>Chuyên môn: {doctor.specialty}</p>
                <p>Kinh nghiệm: {doctor.experience}</p>
                <DetailButton onClick={() => onSelectDoctor(doctor)}>Chi tiết</DetailButton>
              </DoctorInfo>
            </DoctorCard>
          ))}
          <Pagination>
            {[...Array(Math.ceil(totalDoctors / doctorsPerPage))].map((_, index) => (
              <PageNumber
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </PageNumber>
            ))}
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default BacsiPresenter;

// Áp dụng Container-Presenter Pattern
//BacsiPresenter.js chỉ xử lý giao diện.
//Dễ dàng thay đổi UI mà không ảnh hưởng đến logic.

