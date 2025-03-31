import React from "react";
import newsData, { createNewsSlide } from "./NewsFactory";

const NewsSlider = () => {
  return (
    <div className="tintuc-trangchu-slider">
      <h2>TIN TỨC</h2>
      <div className="news-slider">
        {newsData.map(createNewsSlide)}
      </div>
    </div>
  );
};

export default NewsSlider;


  //Áp dụng Factory Pattern để tạo danh sách bác sĩ & tin tức
    //Factory Pattern	Tạo DoctorFactory.js và NewsFactory.js để sinh component động.