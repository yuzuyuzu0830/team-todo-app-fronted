// src/lib/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true, // セッションクッキーを使う場合に必要
})

export default instance