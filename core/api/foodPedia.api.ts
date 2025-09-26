import { SecureStorageAdapter } from '@/helpers/adapters/secure-storage.adapter';
import axios from 'axios';

const foodPediaApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
})

foodPediaApi.interceptors.request.use(async (config) => {
  // Verificar si hay token en el secureStorage
  const token = await SecureStorageAdapter.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { foodPediaApi };
