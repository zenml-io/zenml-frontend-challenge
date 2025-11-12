# ZenML Frontend Challenge — AI Pipeline Visualization (1.5h)

## Overview 🌟

At ZenML, we help data scientists and AI engineers build production-ready AI pipelines. A critical part of our product is visualizing these pipelines in an intuitive way. For this challenge, you'll implement a React component that **visualizes AI pipeline execution**.

## ✅ Tech Stack Setup

- **React 18 + TypeScript + Vite** - React development environment
- **React Flow (@xyflow/react v12)** - Graph visualization library for nodes/edges
- **Zod v4** - Runtime schema validation for type-safe data
- **Tailwind CSS** - Utility-first CSS framework

## Your Task: Enhance the Visualization ⚡

### Background 🧠

AI pipelines are workflows of connected steps. Each execution has:

- A directed graph of steps (nodes) and dependencies (edges)
- Status per step (running, completed, failed, pending)
- Execution metadata (runtime, resources, artifacts)

### What You Need to Build ✅

**Your goal**: Improve the existing pipeline visualization. In the following are some ideas, but feel free to come up with your own improvements.

#### 🎯 Core Improvements (pick 2-3)

1. **Proper Layout Algorithm** - Replace random positioning with hierarchical/tree layout (top-to-bottom or left-to-right)
1. **Better Node Design** - Add status colors, progress indicators, icons, better visual hierarchy

#### 🚀 Bonus Ideas (if time allows)

- Real-time status updates (mock with timers)
- Execution timeline view
- Step dependency highlighting on hover
- Export/sharing functionality
- Mobile-responsive design

### Technical Requirements 💻

- Keep the existing **TypeScript** and **React** structure
- **React Flow** is already set up (but you can enhance it or try alternatives)
- Maintain clean component architecture
- Consider the user experience for 3–20 steps
- Include at least one new interactive feature

### Data Source 📊

- Pipeline data is currently static: `src/data/pipeline.json`
- Feel free to modify the sample data to test different scenarios (e.g., add more steps, change statuses)

## Quick Start 🚀

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Lint code
pnpm lint

# Format code
pnpm format

# Build for production
pnpm build
```

## Evaluation Criteria 🔍

We're looking for:

1. **Problem-Solving** - How you identify and address UX/UI challenges
2. **Component Design** - Clean, reusable React components
3. **Visual Design** - Intuitive, professional-looking interface
4. **Code Quality** - Readable, maintainable TypeScript
5. **User Experience** - Smooth interactions and clear information hierarchy

## Deliverables 📦

1. **Working Code** - Enhanced application that runs with `pnpm dev`
2. **Brief Summary** - 2-3 sentences describing what you built and why
3. **Demo** - Either a short Loom video (3-5 min) or screenshots showing your improvements

## Time Management ⏱️

**Spend ≤1.5 hours total.** If you run over:

- Stop coding and document what you'd do next
- Focus on one feature done well vs multiple features done poorly
- It's better to have a polished improvement than half-finished features

**Good luck! We're excited to see your approach to AI pipeline visualization.** ✨
