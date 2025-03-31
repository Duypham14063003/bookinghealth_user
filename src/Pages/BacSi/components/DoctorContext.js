import { createContext, useContext, useState } from "react";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

// Hook dùng để lấy dữ liệu từ Context
export const useDoctor = () => useContext(DoctorContext);


// Tạo DoctorContext.js (Singleton lưu trạng thái bác sĩ)