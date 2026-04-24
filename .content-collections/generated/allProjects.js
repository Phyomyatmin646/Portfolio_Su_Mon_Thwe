
export default [
  {
    "title": "Portfolio Site",
    "description": "A fast, SEO-optimized personal portfolio built with TanStack Start, React 19, and Tailwind CSS 4. Deployed on Netlify with edge functions and image optimization.",
    "tags": [
      "React",
      "TanStack Start",
      "TypeScript",
      "Tailwind CSS",
      "Netlify"
    ],
    "github": "https://github.com/alexrivera/portfolio",
    "liveUrl": "https://alexrivera.dev",
    "content": "This portfolio was designed and built from scratch as a showcase of modern web development practices. It uses TanStack Start's file-based routing, Content Collections for type-safe markdown, and Netlify Image CDN for automatic image optimization.\n\nKey technical decisions:\n- **TanStack Start** for file-based routing and server rendering\n- **Content Collections** for type-safe blog, project, and resume data\n- **Netlify Image CDN** for on-demand, optimized image delivery\n- **Tailwind CSS v4** with custom design tokens",
    "_meta": {
      "filePath": "portfolio-site.md",
      "fileName": "portfolio-site.md",
      "directory": ".",
      "extension": "md",
      "path": "portfolio-site"
    }
  },
  {
    "title": "Task Manager",
    "description": "A real-time collaborative task manager with drag-and-drop boards, team presence indicators, and deep keyboard navigation. Built for async-first teams.",
    "tags": [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "React"
    ],
    "github": "https://github.com/alexrivera/taskflow",
    "liveUrl": "https://taskflow.example.com",
    "content": "TaskFlow is a Kanban-style task manager built for distributed teams. It supports real-time collaboration via WebSockets, showing live cursors and presence indicators. The drag-and-drop interface is fully keyboard accessible.\n\nTechnical highlights:\n- **WebSocket presence** with Redis pub/sub for real-time updates\n- **PostgreSQL** with optimistic locking for conflict-free edits\n- **Full keyboard navigation** with ARIA compliance for accessibility\n- **Offline support** with a service worker and IndexedDB sync queue",
    "_meta": {
      "filePath": "task-manager.md",
      "fileName": "task-manager.md",
      "directory": ".",
      "extension": "md",
      "path": "task-manager"
    }
  }
]