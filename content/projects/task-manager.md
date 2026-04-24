---
title: "Task Manager"
description: "A real-time collaborative task manager with drag-and-drop boards, team presence indicators, and deep keyboard navigation. Built for async-first teams."
tags: ["TypeScript", "Node.js", "PostgreSQL", "WebSockets", "React"]
github: "https://github.com/alexrivera/taskflow"
liveUrl: "https://taskflow.example.com"
---

TaskFlow is a Kanban-style task manager built for distributed teams. It supports real-time collaboration via WebSockets, showing live cursors and presence indicators. The drag-and-drop interface is fully keyboard accessible.

Technical highlights:
- **WebSocket presence** with Redis pub/sub for real-time updates
- **PostgreSQL** with optimistic locking for conflict-free edits
- **Full keyboard navigation** with ARIA compliance for accessibility
- **Offline support** with a service worker and IndexedDB sync queue
