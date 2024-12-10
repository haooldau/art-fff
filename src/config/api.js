const API_BASE_URL = {
  MAIN_API: import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3001",     // 主后端API
  CRAWLER_API: import.meta.env.VITE_DAMAI_API_URL || "http://localhost:8000"    // 爬虫API
};

export default API_BASE_URL;