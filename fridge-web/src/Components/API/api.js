import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.example.com' // 서버의 기본 URL 설정
});

export default instance;