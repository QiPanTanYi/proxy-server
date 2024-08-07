// src/proxy/proxy.controller.ts
import { Controller, Req, Res, All } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller()
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All('*')
  async proxyAll(@Req() req, @Res() res) {
    const { method, url, body } = req;
    try {
      const { data, headers: responseHeaders } =
        await this.proxyService.forwardRequest(url, method, body); // 转发原始响应头，不添加额外的Content-Type
      res.set(responseHeaders).status(200).send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
