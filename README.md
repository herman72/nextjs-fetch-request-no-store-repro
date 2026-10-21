# `fetch()` with a `Request` and `cache: "no-store"` logs a `Date.now()` error in `next dev`

A minimal reproduction for a Next.js issue, with `cacheComponents` and `partialPrefetching`.

```bash
npm install
npm run dev
```

Open each page, and read the terminal of `next dev`:

| Page | The fetch | `next dev` logs the error |
|---|---|---|
| `/request` | `fetch(new Request(url, { cache: "no-store" }))` | yes |
| `/request-and-init` | `fetch(new Request(url), { cache: "no-store" })` | yes |
| `/init` | `fetch(url, { cache: "no-store" })` | no |
| `/request-no-option` | `fetch(new Request(url))` | no |

The error:

```text
Error: Route "/request": Next.js encountered the unstable value `Date.now()` while prerendering.
```

Each page reads `headers()` first, as a page with a session does, then fetches `https://api.vercel.app/blog`. Each page shows "25 posts", so each fetch works.

Tested on macOS with Node.js 26.12.0:

| Next.js | `/request` | `/request-and-init` | `/init` | `/request-no-option` |
|---|---|---|---|---|
| 16.5.0-canary.21 | error | error | no error | no error |
| 16.4.2 | error | error | no error | no error |
| 16.4.0-canary.21 | error | error | no error | no error |
| 16.4.0-canary.20 | no error | no error | no error | no error |
| 16.3.8 | no error | no error | no error | no error |

Without `partialPrefetching: true` in `next.config.mjs`, no page logs the error.
