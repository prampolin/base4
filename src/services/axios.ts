import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import Axios from 'axios'

export const AxiosInstance = Axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/MIDISOFTCORPORATION/Teste/1.0.0',
  headers: {
    'Content-Type': 'application/json',
  },
})

export function request<T = any, R = AxiosResponse<T>, D = any>(
  config: AxiosRequestConfig<D>,
  options?: AxiosRequestConfig<D>
): Promise<R> {
  //@ts-expect-error
  return AxiosInstance.request({ ...config, ...options }).catch((error) => {
    if (Axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw error
  })
}
