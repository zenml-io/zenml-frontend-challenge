import type { Node, Edge } from "reactflow";

const SPACING_X = 400;
const SPACING_Y = 180;

export function layoutTB(nodes: Node[], edges: Edge[]) {
  // Simple top-to-bottom layout based on dependencies
  const incomingCount = new Map<string, number>();
  const outgoing = new Map<string, string[]>();

  // Initialize
  nodes.forEach(n => {
    incomingCount.set(n.id, 0);
    outgoing.set(n.id, []);
  });

  // Count incoming edges and track outgoing
  edges.forEach(e => {
    incomingCount.set(e.target, (incomingCount.get(e.target) || 0) + 1);
    outgoing.get(e.source)?.push(e.target);
  });

  // Topological sort to determine levels (top to bottom)
  const levels: string[][] = [];
  const queue: string[] = [];
  const tempIncoming = new Map(incomingCount);

  // Start with nodes that have no incoming edges
  nodes.forEach(n => {
    if (tempIncoming.get(n.id) === 0) {
      queue.push(n.id);
    }
  });

  while (queue.length > 0) {
    const currentLevel: string[] = [...queue];
    levels.push(currentLevel);
    queue.length = 0;

    currentLevel.forEach(nodeId => {
      outgoing.get(nodeId)?.forEach(targetId => {
        const newCount = (tempIncoming.get(targetId) || 0) - 1;
        tempIncoming.set(targetId, newCount);
        if (newCount === 0) {
          queue.push(targetId);
        }
      });
    });
  }

  // Position nodes (top to bottom layout)
  const positionedNodes = nodes.map(node => {
    let levelIndex = 0;
    let nodeIndex = 0;

    for (let i = 0; i < levels.length; i++) {
      const nodeIdx = levels[i].indexOf(node.id);
      if (nodeIdx !== -1) {
        levelIndex = i;
        nodeIndex = nodeIdx;
        break;
      }
    }

    // Center nodes horizontally when multiple nodes at same level
    const nodesInLevel = levels[levelIndex]?.length || 1;
    const levelWidth = (nodesInLevel - 1) * SPACING_X;
    const startX = -levelWidth / 2;

    return {
      ...node,
      position: {
        x: startX + nodeIndex * SPACING_X,
        y: levelIndex * SPACING_Y
      }
    };
  });

  return positionedNodes;
}

// Keep the old function name for backward compatibility
export const layoutLR = layoutTB;