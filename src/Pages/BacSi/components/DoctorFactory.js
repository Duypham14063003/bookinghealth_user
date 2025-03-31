const doctorsData = [
    {
      id: 1,
      name: "Bác sĩ Nguyễn Văn An",
      specialty: "Nội khoa",
      experience: "Với hơn 20 năm kinh nghiệm...",
      detailedInfo: "Bác sĩ Nguyễn Văn An là một chuyên gia uy tín...",
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      id: 2,
      name: "Bác sĩ Trần Thị Bích",
      specialty: "Nhi khoa",
      experience: "Đã điều trị thành công nhiều ca bệnh nhi...",
      detailedInfo: "Bác sĩ Trần Thị Bích có nhiều năm kinh nghiệm...",
      imageUrl: "https://via.placeholder.com/120",
    },
  ];
  
  export default doctorsData;

  //Tạo DoctorFactory.js để quản lý danh sách bác sĩ
  //doctorsData có thể được mở rộng mà không cần sửa BacsiContainer.js.
  //Nếu sau này dữ liệu lấy từ API, chỉ cần sửa DoctorFactory.js.