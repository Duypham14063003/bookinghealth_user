import { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const hideSnackbar = () => setSnackbar({ open: false });

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar, hideSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

//Sử dụng Singleton Pattern cho Snackbar
//quản lý snackbar trên toàn ứng dụng, có thể dùng Singleton Pattern với Context API.
//Singleton Pattern	Dùng SnackbarService.js để quản lý snackbar trên toàn ứng dụng.