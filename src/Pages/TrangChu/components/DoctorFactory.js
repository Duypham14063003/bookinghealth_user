const doctorsData = [
    { id: 1, name: "BS An", image: "bacsi1.png" },
    { id: 2, name: "BS Bình", image: "bacsi2.png" },
    { id: 3, name: "BS Thịnh", image: "bacsi3.png" },
  ];
  
  export const createDoctorCard = (doctor) => (
    <div key={doctor.id} className="bacsi-trangchu-item">
      <img src={doctor.image} alt={doctor.name} />
      <p>{doctor.name}</p>
    </div>
  );
  
  export default doctorsData;
  

  //Áp dụng Factory Pattern để tạo danh sách bác sĩ & tin tức
  //Factory Pattern	Tạo DoctorFactory.js và NewsFactory.js để sinh component động.