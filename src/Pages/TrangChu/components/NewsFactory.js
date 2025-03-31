const newsData = [
    { id: 1, image: "tintuc1.png", title: "Tin tức 1" },
    { id: 2, image: "tintuc2.png", title: "Tin tức 2" },
    { id: 3, image: "tintuc3.png", title: "Tin tức 3" },
  ];
  
  export const createNewsSlide = (news) => (
    <div key={news.id} className="news-slide">
      <img src={news.image} alt={news.title} />
      <p>{news.title}</p>
    </div>
  );
  
  export default newsData;
  

    //Áp dụng Factory Pattern để tạo danh sách bác sĩ & tin tức
      //Factory Pattern	Tạo DoctorFactory.js và NewsFactory.js để sinh component động.