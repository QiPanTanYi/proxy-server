// src/proxy/proxy.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProxyService {
  private readonly targetUrl = 'https://light-word.net:10000';

  constructor() {}

  async forwardRequest(path: string, method: string, body?: any): Promise<any> {
    try {
      const response = await axios({
        method: method,
        url: `${this.targetUrl}${path}`,
        data: body,
        responseType: 'arraybuffer', // 设置响应类型为二进制
      });
      return {
        data: response.data,
        headers: response.headers, // 确保返回原始响应头
      };
    } catch (error) {
      throw new Error(error.response?.data || error.message);
    }
  }
}
