import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrangChuPresenter from "./TrangChuPresenter";
import SnackbarComponent from "./SnackbarComponent";
import { useSnackbar } from "./SnackbarService";

const TrangChuContainer = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginSuccess")) {
      showSnackbar("Đăng nhập thành công!", "success");
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  return (
    <>
      <SnackbarComponent />
      <TrangChuPresenter navigate={navigate} />
    </>
  );
};

export default TrangChuContainer;

//Container-Presenter	Tách TrangChuContainer.js (logic) & TrangChuPresenter.js (UI).

//Có thể tái sử dụng DoctorList, NewsSlider, Snackbar.
//Tách biệt logic và UI, giúp component nhẹ hơn.