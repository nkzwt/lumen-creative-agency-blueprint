import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ChatBoardEntity, InquiryEntity, type Inquiry } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/test', (c) => c.json({ success: true, data: { name: 'Lumen API' }}));
  // LEAD GENERATION ENDPOINTS
  app.post('/api/contact', async (c) => {
    const body = (await c.req.json()) as Partial<Inquiry>;
    if (!body.name || !body.email || !body.message) {
      return bad(c, 'name, email, and message are required');
    }
    const inquiry = await InquiryEntity.create(c.env, {
      id: crypto.randomUUID(),
      type: 'contact',
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: Date.now(),
    });
    return ok(c, inquiry);
  });
  app.post('/api/quote', async (c) => {
    const body = (await c.req.json()) as Partial<Inquiry>;
    if (!body.name || !body.email || !body.message || !body.service || !body.budget) {
      return bad(c, 'missing required fields for quote');
    }
    const inquiry = await InquiryEntity.create(c.env, {
      id: crypto.randomUUID(),
      type: 'quote',
      name: body.name,
      email: body.email,
      company: body.company,
      service: body.service,
      budget: body.budget,
      message: body.message,
      timestamp: Date.now(),
    });
    return ok(c, inquiry);
  });
  // USERS (Existing Template Routes)
  app.get('/api/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const cq = c.req.query('cursor');
    const lq = c.req.query('limit');
    const page = await UserEntity.list(c.env, cq ?? null, lq ? Math.max(1, (Number(lq) | 0)) : undefined);
    return ok(c, page);
  });
  app.post('/api/users', async (c) => {
    const { name } = (await c.req.json()) as { name?: string };
    if (!name?.trim()) return bad(c, 'name required');
    return ok(c, await UserEntity.create(c.env, { id: crypto.randomUUID(), name: name.trim() }));
  });
  // CHATS (Existing Template Routes)
  app.get('/api/chats', async (c) => {
    await ChatBoardEntity.ensureSeed(c.env);
    const cq = c.req.query('cursor');
    const lq = c.req.query('limit');
    const page = await ChatBoardEntity.list(c.env, cq ?? null, lq ? Math.max(1, (Number(lq) | 0)) : undefined);
    return ok(c, page);
  });
}