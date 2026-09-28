import { useId } from "react";

export type ArchNode = {
  id: string;
  label: string;
  col: 0 | 1 | 2;
  row: 0 | 1;
  accent?: boolean;
};

export type Arch = {
  nodes: ArchNode[];
  edges: [string, string][];
};

const COL_X = [60, 186, 312];
const ROW_Y = [34, 104];
const NODE_W = 108;
const NODE_H = 30;

// A small hand-drawn-style architecture sketch: boxes on a 3×2 grid,
// joined by dashed lines that slowly flow in the direction of the data.
const ArchDiagram = ({ arch, label }: { arch: Arch; label: string }) => {
  const markerId = `arrow-${useId().replace(/:/g, "")}`;
  const byId = Object.fromEntries(arch.nodes.map((n) => [n.id, n]));
  const rows = Math.max(...arch.nodes.map((n) => n.row)) + 1;
  const height = rows === 1 ? 68 : 138;

  const edgePath = (a: ArchNode, b: ArchNode) => {
    const ax = COL_X[a.col];
    const ay = ROW_Y[a.row];
    const bx = COL_X[b.col];
    const by = ROW_Y[b.row];
    if (a.col === b.col) {
      const dir = by > ay ? 1 : -1;
      return `M ${ax} ${ay + (dir * NODE_H) / 2} L ${bx} ${by - (dir * NODE_H) / 2 - dir * 3}`;
    }
    const dir = bx > ax ? 1 : -1;
    const x1 = ax + (dir * NODE_W) / 2;
    const x2 = bx - (dir * NODE_W) / 2 - dir * 3;
    if (a.row === b.row) return `M ${x1} ${ay} L ${x2} ${by}`;
    const mid = (x1 + x2) / 2;
    return `M ${x1} ${ay} C ${mid} ${ay}, ${mid} ${by}, ${x2} ${by}`;
  };

  return (
    <svg
      viewBox={`0 0 372 ${height}`}
      className="arch-diagram w-full h-auto"
      role="img"
      aria-label={`${label} architecture: ${arch.edges
        .map(([a, b]) => `${byId[a].label} to ${byId[b].label}`)
        .join(", ")}`}
    >
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 8 8"
          refX="6"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 8 4 L 0 8 z" fill="rgb(var(--ink-muted-rgb))" />
        </marker>
      </defs>

      {arch.edges.map(([from, to]) => (
        <path
          key={`${from}-${to}`}
          d={edgePath(byId[from], byId[to])}
          className="arch-edge"
          fill="none"
          stroke="rgb(var(--ink-muted-rgb))"
          strokeWidth="1"
          strokeDasharray="3 3"
          markerEnd={`url(#${markerId})`}
        />
      ))}

      {arch.nodes.map((n) => (
        <g key={n.id} transform={`translate(${COL_X[n.col] - NODE_W / 2} ${ROW_Y[n.row] - NODE_H / 2})`}>
          <rect
            width={NODE_W}
            height={NODE_H}
            fill="rgb(var(--paper-rgb))"
            stroke={n.accent ? "rgb(var(--accent-rgb))" : "rgb(var(--ink-faint-rgb))"}
            strokeWidth="1"
          />
          <text
            x={NODE_W / 2}
            y={NODE_H / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="11"
            letterSpacing="0.02em"
            fontFamily="Zen Kaku Gothic New, sans-serif"
            fill={n.accent ? "rgb(var(--accent-rgb))" : "rgb(var(--ink-soft-rgb))"}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default ArchDiagram;
