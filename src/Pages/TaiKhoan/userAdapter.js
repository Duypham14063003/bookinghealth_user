// src/adapters/userAdapter.js
export const userAdapter = (apiData) => {
    return {
      name: apiData?.myTK?.username || "Chưa có",
      email: apiData?.myTK?.email || "Chưa có",
    };
  };
  