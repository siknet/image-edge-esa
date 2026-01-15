import { handle } from '../src/app';

export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  return handle(request, {
    IMAGE_URLS: process.env.IMAGE_URLS,
    CORS_ALLOW_ORIGIN: process.env.CORS_ALLOW_ORIGIN
  });
}
