# ZenML Frontend Challenge — AI Pipeline Visualization (3h)

<img width="5106" height="2636" alt="image" src="https://github.com/user-attachments/assets/d0f144ef-7684-4717-88ac-fcdb2bfa526e" />

## Overview 🌟

At ZenML, we help data scientists and AI engineers build production-ready AI pipelines. A critical part of our product is visualizing these pipelines in an intuitive way. For this challenge, you'll implement a React component that **visualizes AI pipeline execution**.

## Your Task: Enhance the Visualization ⚡

### Background 🧠

AI pipelines are workflows of connected steps. Each execution has:

- A directed graph of steps (nodes) and dependencies (edges)
- Status per step (running, completed, failed, pending)
- Execution metadata (runtime, resources, artifacts)

### What You Need to Build ✅

**Your goal**: Improve the existing pipeline visualization. In the following are some ideas, but feel free to come up with your own improvements.

#### 🎯 Core Improvements (pick 2-3)

1. Implement a proper layout for the pipeline visualization
2. Enhance the UI of the nodes

#### 🚀 Bonus Ideas (if time allows)

Consider UX enhancements on how users might want to interact with or view their pipeline data differently

### Technical Requirements 💻

The current stack is:

- **React 18 + TypeScript + Vite** - React development environment
- **React Flow (@xyflow/react v12)** - Graph visualization library for nodes/edges
- **Zod v4** - Runtime schema validation for type-safe data
- **Tailwind CSS** - Utility-first CSS framework

Your requirements are:

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

Submit a private GitHub repo (clone this public repo and push your changes to a new private one).
Add collaborators: `htahir1`, `Cahllagerfeld`, `znegrin`.

Your repository should contain:

1. **Working Code** - Enhanced application that builds successfully (`pnpm build`) and runs without errors.
2. **A Clear README** - Explaining briefly what you built and why
3. **Demo** - Either a short Loom video (3-5 min, linked in README) or screenshots showing your improvements
4. **AI Diary** - See below

**Important**: As we're also evaluating how you think and communicate, please carefully describe your thought process and design decisions, the challenges you identified, and why you chose one path over another.

## AI Policy 🤖 

AI use **is allowed**. If you use it, add a short **AI Diary** to your README with:

* what you asked,
* what you copied,
* what you changed.

If you didn’t use AI, just write: **“No AI used.”**

## Time Management ⏱️

**Spend ≤3 hours total.** If you run over:

- Stop coding and document what you'd do next
- Focus on one feature done well vs multiple features done poorly
- It's better to have a polished improvement than half-finished features

**Good luck! We're excited to see your approach to AI pipeline visualization.** ✨
