# ZenML Frontend Challenge — AI Pipeline Visualization (1.5h)

## Overview 🌟
At ZenML, we help data scientists and AI engineers build production-ready AI pipelines. A critical part of our product is visualizing these pipelines in an intuitive way. For this challenge, you'll implement a React component that **visualizes AI pipeline execution**.

## What's Already Built for You 🎁

This scaffold provides a **complete, working application** with:

### ✅ Full Tech Stack Setup
- **React 18 + TypeScript + Vite** - Modern React development
- **React Flow** - Graph visualization library for nodes/edges
- **Zod** - Runtime schema validation for API data
- **MSW** - API mocking for offline development
- **Vitest + Testing Library** - Test framework with sample tests
- **ESLint + Prettier** - Code quality and formatting
- **GitHub Actions CI** - Automated testing and builds

### ✅ Complete API Integration
- Live API endpoint: `https://zenml-frontend-challenge-backend.fly.dev/pipelines`
- Sample data in `src/mocks/fixtures/pipelineExecution.json`
- TypeScript schemas with validation (`src/api/schema.ts`)
- Data fetching hook (`src/hooks/usePipelineData.ts`)

### ✅ Working Graph Visualization
- Custom React Flow node components with status colors
- Top-to-bottom pipeline layout algorithm with proper spacing
- Smooth animated edges with arrow markers
- Interactive features: zoom, pan, minimap controls with status colors
- Robust error handling with retry mechanisms and helpful feedback
- Grid layout with graph on left, details panel on right

### ✅ Sample Pipeline
The app comes with a sample **5-step AI training pipeline**:
1. **Data Loading** (completed) → 2. **Data Preprocessing** (completed) → 3. **Model Training** (running) → 4. **Evaluation** (pending) → 5. **Model Deployment** (pending)

## Your Task: Enhance the Visualization ⚡

### Background 🧠
AI pipelines are workflows of connected steps. Each execution has:
- A directed graph of steps (nodes) and dependencies (edges)
- Status per step (running, completed, failed, pending)
- Execution metadata (runtime, resources, artifacts)

### What You Need to Build ✅
**Your goal**: Improve the existing pipeline visualization. Choose from these options:

#### 🎯 Core Improvements (pick 2-3)
1. **Better Node Design** - Improve visual design, add progress indicators, better status representation
2. **Enhanced Details Panel** - Rich step information, better formatting, execution timelines
3. **Interactive Features** - Step filtering, search, status-based highlighting
4. **Layout Improvements** - Better node spacing, curved edges, node grouping
5. **Performance** - Handle larger pipelines (test with duplicated sample data)

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
- **API is source of truth**: Use the live endpoint when available
- **Fallback to mocks**: Run `MSW=1 pnpm dev` for offline development
- Sample data is in `src/mocks/fixtures/pipelineExecution.json`

## Quick Start 🚀

```bash
# Install dependencies
pnpm install

# Start development (tries real API first)
pnpm dev

# Start with mock data (guaranteed to work offline)
MSW=1 pnpm dev

# Run tests
pnpm test

# Build for production
pnpm run build
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

## Project Structure 📁

```
src/
├── app/           # Main App component and entry point
├── api/           # API client, schemas, endpoints
├── components/    # React components (Graph, DetailsPanel, etc.)
├── hooks/         # Custom React hooks (usePipelineData)
├── layout/        # Graph layout algorithms
├── mocks/         # MSW mocks and sample data
├── styles/        # Global CSS
└── test/          # Test files
```

## Need Help? 🆘

- **MSW not working?** Make sure to use `MSW=1 pnpm dev`
- **API down?** The mock data will work offline
- **Styling?** Global CSS variables are in `src/styles/globals.css`
- **React Flow docs?** Check https://reactflow.dev/

---

**Good luck! We're excited to see your approach to AI pipeline visualization.** ✨