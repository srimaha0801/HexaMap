export default function HexagonCompass({ selectedGate, onGateSelect }) {
  const gatePositions = {
  gate1: { label: 'NE',  angle: -90 },
  gate2: { label: 'N', angle: -30 },
  gate3: { label: 'NW', angle: 30 },
  gate4: { label: 'SW',  angle: 90 },
  gate5: { label: 'S', angle: 150 },
  gate6: { label: 'SE', angle: -150 },
  };

  const directionToGate = {
  NE: 'gate1',
  N:  'gate2',
  NW: 'gate3',
  SW: 'gate4',
  S:  'gate5',
  SE: 'gate6',
  };

  const createSegmentPath = (cx, cy, innerRadius, outerRadius, startAngle, endAngle) => {
    const rad = (deg) => (deg * Math.PI) / 180;

    const p1 = { x: cx + innerRadius * Math.cos(rad(startAngle)), y: cy + innerRadius * Math.sin(rad(startAngle)) };
    const p2 = { x: cx + outerRadius * Math.cos(rad(startAngle)), y: cy + outerRadius * Math.sin(rad(startAngle)) };
    const p3 = { x: cx + outerRadius * Math.cos(rad(endAngle)), y: cy + outerRadius * Math.sin(rad(endAngle)) };
    const p4 = { x: cx + innerRadius * Math.cos(rad(endAngle)), y: cy + innerRadius * Math.sin(rad(endAngle)) };

    return `
      M ${p1.x},${p1.y}
      L ${p2.x},${p2.y}
      A ${outerRadius},${outerRadius} 0 0,1 ${p3.x},${p3.y}
      L ${p4.x},${p4.y}
      A ${innerRadius},${innerRadius} 0 0,0 ${p1.x},${p1.y}
      Z
    `;
  };

  const getLabelPosition = (cx, cy, radius, angle) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  return (
   <div
  className="
    absolute top-4 left-1/2 -translate-x-1/2 z-50
    lg:left-auto lg:right-6 lg:top-4 lg:translate-x-0
  "
>

      {/* Title */}
      <div className="text-center mb-1">
        <h2 className="text-[#D4AF37] text-sm font-bold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
          Select a Side
        </h2>
      </div>

      <svg width="150" height="150" viewBox="0 0 300 300">
        // Outer circle
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          opacity="0.6"
        />

        // Gate
        {Object.entries(gatePositions).map(([gate, { label, angle }]) => {
          const isActive = selectedGate === gate;

          return (
            <g key={gate}>
              <path
                d={createSegmentPath(150, 150, 80, 140, angle - 30, angle + 30)}
                fill={isActive ? '#D4AF37' : 'rgba(50,50,50,0.3)'}
                stroke="#D4AF37"
                strokeWidth="1"
                opacity={isActive ? 0.8 : 0.3}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onGateSelect(gate)}
                onMouseEnter={(e) => !isActive && (e.target.style.opacity = '0.6')}
                onMouseLeave={(e) => !isActive && (e.target.style.opacity = '0.3')}
              />

              // Lable
              <text
                x={getLabelPosition(150, 150, 110, angle).x}
                y={getLabelPosition(150, 150, 110, angle).y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? '#FFFFFF' : '#888888'}
                fontSize="18"
                fontWeight="bold"
                style={{
                  pointerEvents: 'none',
                  textShadow: isActive ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                }}
              >
                {label}
              </text>
            </g>
          );
        })}

        <circle
          cx="150"
          cy="150"
          r="50"
          fill="rgba(20,20,20,0.8)"
          stroke="#D4AF37"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
