# IRC Support Desk

Real-time support chat frontend inspired by IRC. Multiple users join channels, set display names, and exchange messages over a WebSocket connection.

## Features

- **Channels** — Create channels and switch between them to view conversation history per channel
- **Users** — Edit your display name; see other connected users update in real time
- **Messages** — Send and receive messages in the active channel
- **Live connection** — UI reflects WebSocket connect/disconnect state

## Tech stack

- [React](https://react.dev/) 17 (class components)
- [Webpack](https://webpack.js.org/) 5 + Babel
- Custom `Socket` wrapper (`socket.js`) over the browser `WebSocket` API (JSON event payloads)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A WebSocket server running at **`ws://localhost:4000`** (this repo is the client only)

The client expects the backend to handle events such as `channel subscribe`, `channel add`, `user subscribe`, `user edit`, `message subscribe`, and `message add`.

## Getting started

```bash
pnpm install
pnpm run build    # compile bundle to dist/
pnpm run dev      # webpack dev server
```

Open the app via the dev server URL (shown in the terminal), or serve `index.html` after a production build.

To point at a different WebSocket host, update the URL in `components/App.jsx`:

```js
let ws = new WebSocket("ws://localhost:4000");
```

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm run dev`   | Start webpack dev server |
| `pnpm run build` | Build `dist/bundle.js`   |

## Project structure

```
├── index.html          # App shell
├── index.js            # React entry point
├── socket.js           # WebSocket + EventEmitter bridge
├── webpack.config.js
├── app.css
└── components/
    ├── App.jsx
    ├── channels/       # Channel list & form
    ├── messages/       # Message list & form
    └── users/          # User list & name form
```

## License

ISC — Vanessa Martin
