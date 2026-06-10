import React from 'react'

/**
 * Animated "Institution in the Loop" diagram — pure SVG with CSS/SMIL motion,
 * so it renders on the server and animates without JavaScript.
 */

const ORBIT_PATH = 'M 320 110 A 210 210 0 1 1 319.9 110.0001'

const nodes = [
  { x: 320, y: 110, label: 'Policies & Procedures' },
  { x: 530, y: 320, label: 'Regulatory Corpus' },
  { x: 320, y: 530, label: 'AI Agents' },
  { x: 110, y: 320, label: 'Expert Review' },
]

export function LoopDiagram({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      className={className}
      role="img"
      aria-label="Diagram of the Institution in the Loop architecture: policies and procedures, the regulatory corpus, AI agents, and expert review orbiting your institution"
    >
      <defs>
        <radialGradient id="loop-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3D6BF4" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#3D6BF4" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3D6BF4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind the core */}
      <circle cx="320" cy="320" r="200" fill="url(#loop-core-glow)" />

      {/* Outer faint ring */}
      <circle cx="320" cy="320" r="248" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* Main orbit — animated dashes flowing around the loop */}
      <circle
        cx="320"
        cy="320"
        r="210"
        stroke="rgba(147,180,255,0.45)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />

      {/* Spokes from orbit nodes to the core */}
      {nodes.map((n) => (
        <line
          key={n.label}
          x1={n.x}
          y1={n.y}
          x2={320}
          y2={320}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Orbiting data packets */}
      <circle r="5" fill="#EE9F45">
        <animateMotion dur="18s" repeatCount="indefinite" path={ORBIT_PATH} />
      </circle>
      <g transform="rotate(180 320 320)">
        <circle r="5" fill="#6690FC">
          <animateMotion dur="18s" repeatCount="indefinite" path={ORBIT_PATH} />
        </circle>
      </g>

      {/* Core — the institution */}
      <circle cx="320" cy="320" r="92" fill="#0d182b" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
      <circle cx="320" cy="320" r="78" stroke="rgba(238,159,69,0.25)" strokeWidth="1" strokeDasharray="3 6" />

      {/* Bank glyph */}
      <g
        transform="translate(296 270)"
        stroke="#F8BC6E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 16 L24 4 L46 16" />
        <path d="M7 16 V32 M18.5 16 V32 M29.5 16 V32 M41 16 V32" />
        <path d="M2 32 H46 M2 38 H46" />
      </g>
      <text
        x="320"
        y="338"
        textAnchor="middle"
        className="font-display"
        fill="#ffffff"
        fontSize="17"
        fontWeight="600"
      >
        Your Institution
      </text>
      <text x="320" y="360" textAnchor="middle" fill="#9fb2cf" fontSize="12">
        in the loop
      </text>

      {/* Orbit node pills */}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 92}
            y={n.y - 21}
            width="184"
            height="42"
            rx="21"
            fill="#0d182b"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />
          <circle cx={n.x - 70} cy={n.y} r="3.5" fill="#EE9F45" className="animate-pulse-soft" />
          <text x={n.x + 6} y={n.y + 4.5} textAnchor="middle" fill="#e6ecf5" fontSize="13.5">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
