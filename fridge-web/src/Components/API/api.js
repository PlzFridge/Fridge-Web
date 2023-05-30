import axios from "axios";

const instance = axios.create({
  baseURL: "http://49.50.167.12:8080", // 서버의 기본 URL 설정
});

export default instance;
