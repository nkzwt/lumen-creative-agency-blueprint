# Cloudflare Workers Full-Stack Chat Demo

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nkzwt/lumen-creative-agency-blueprint)

A production-ready full-stack chat application built on Cloudflare Workers, featuring a React frontend with shadcn/ui and a Durable Objects backend for multi-tenant entity storage (Users, Chats, Messages). Demonstrates scalable, stateful serverless architecture with pagination, CRUD operations, and real-time-like messaging.

## ✨ Key Features

- **Durable Objects for Entities**: One DO instance per User/Chat, with automatic indexing for listing/pagination.
- **Type-Safe APIs**: Hono-based REST API with full TypeScript support across frontend/backend/shared types.
- **Modern UI**: React 18 + Tailwind CSS + shadcn/ui components, dark mode, responsive design.
- **Data Seeding**: Mock data auto-populates on first run.
- **Infinite Queries**: TanStack Query for data fetching, mutations, and optimistic updates.
- **Error Handling**: Client/server error reporting, boundaries, and retries.
- **Production-Ready**: CORS, logging, health checks, SPA asset handling.
- **Zero-Cold-Start Backend**: Global Durable Object storage with CAS for concurrency.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Cloudflare Workers, Hono, Durable Objects, TypeScript |
| **Frontend** | React 18, Vite, Tailwind CSS, shadcn/ui, TanStack Query, React Router |
| **UI/UX** | Lucide Icons, Framer Motion, Sonner Toasts, Sidebar Layout |
| **Data** | Shared types, IndexedEntity pattern, Pagination cursors |
| **Dev Tools** | Bun, ESLint, TypeScript 5, Wrangler |
| **Other** | Immer, Zod (extensible), UUID, Crypto |

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) installed (`curl -fsSL https://bun.sh/install | bash`)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`bunx wrangler@latest init` or global install)

### Installation
```bash
git clone <your-repo-url>
cd <project-name>
bun install
```

### Local Development
```bash
# Start dev server (frontend + worker proxy)
bun dev

# In another terminal, typegen for env types
bun cf-typegen

# Open http://localhost:3000 (or $PORT)
```

### Preview Production Build
```bash
bun build  # Builds static assets
bun preview  # Serves production preview
```

## 📖 Usage

### API Endpoints
All APIs under `/api/*`:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/users` | GET/POST | List/create users (supports `?cursor` & `?limit`) |
| `/api/users/:id` | DELETE | Delete user |
| `/api/users/deleteMany` | POST | Bulk delete users |
| `/api/chats` | GET/POST | List/create chats |
| `/api/chats/:chatId/messages` | GET/POST | List/send messages |
| `/api/chats/:id` | DELETE | Delete chat |
| `/api/chats/deleteMany` | POST | Bulk delete chats |
| `/api/client-errors` | POST | Report frontend errors |

Example (cURL):
```bash
# List users
curl "http://localhost:3000/api/users?limit=10"

# Create chat
curl -X POST "http://localhost:3000/api/chats" \
  -H "Content-Type: application/json" \
  -d '{"title": "My Chat"}'
```

### Frontend
- Sidebar navigation (customize `src/components/app-sidebar.tsx`)
- Theme toggle (light/dark)
- Home page demo – replace `src/pages/HomePage.tsx` with your app
- Error boundaries and reporting included

## ☁️ Deployment

Deploy to Cloudflare Workers with one command:

```bash
bun cf-typegen  # Update types (if changed)
bun deploy      # Builds + deploys (frontend assets + worker)
```

**Custom Domain**: Edit `wrangler.jsonc` and run `wrangler deploy`.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nkzwt/lumen-creative-agency-blueprint)

Access your live app at `https://<worker-name>.<account>.workers.dev`.

## 🧪 Testing Locally

- Seed data auto-loads on first API call.
- Use browser dev tools → Network tab to test APIs.
- `console.error` in worker logs to Cloudflare dashboard.

## 🔧 Extending

- **New Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
- **New Routes**: Add to `worker/user-routes.ts`.
- **UI Pages**: Add routes in `src/main.tsx`.
- **Custom Hooks**: Use `src/hooks/*` pattern.

## 🤝 Contributing

1. Fork & clone.
2. `bun install`.
3. Make changes.
4. `bun lint` & test locally.
5. PR with clear description.

## 📄 License

MIT License – see [LICENSE](LICENSE) (add if needed).