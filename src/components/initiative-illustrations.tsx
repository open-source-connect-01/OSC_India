// Decorative abstract SVG illustrations for the "What We Do" initiative pages.

export function CircuitChipIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 180" className="w-full h-full max-w-[260px]" fill="none">
      {[30, 60, 90, 120, 150].map((x) => (
        <line key={`t${x}`} x1={x} y1="20" x2={x} y2="45" stroke={color} strokeWidth="1.5" opacity="0.55" />
      ))}
      {[30, 60, 90, 120, 150].map((x) => (
        <line key={`b${x}`} x1={x} y1="135" x2={x} y2="160" stroke={color} strokeWidth="1.5" opacity="0.55" />
      ))}
      <rect x="20" y="45" width="140" height="90" rx="6" stroke={color} strokeWidth="2" opacity="0.9" />
      <rect x="45" y="70" width="90" height="40" rx="3" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <circle cx="60" cy="90" r="4" fill={color} />
      <circle cx="90" cy="90" r="4" fill={color} opacity="0.6" />
      <circle cx="120" cy="90" r="4" fill={color} opacity="0.6" />
      <circle cx="180" cy="60" r="14" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="180" cy="60" r="3" fill={color} opacity="0.6" />
    </svg>
  );
}

export function GearsIllustration({ color }: { color: string }) {
  const gear = (cx: number, r: number, opacity: number) => {
    const teeth = 8;
    const lines = Array.from({ length: teeth }).map((_, i) => {
      const angle = (i / teeth) * Math.PI * 2;
      const x1 = cx + Math.cos(angle) * r;
      const y1 = 90 + Math.sin(angle) * r;
      const x2 = cx + Math.cos(angle) * (r + 8);
      const y2 = 90 + Math.sin(angle) * (r + 8);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" opacity={opacity} />;
    });
    return (
      <g>
        {lines}
        <circle cx={cx} cy="90" r={r} stroke={color} strokeWidth="1.8" opacity={opacity} />
        <circle cx={cx} cy="90" r={r * 0.32} fill={color} opacity={opacity} />
      </g>
    );
  };
  return (
    <svg viewBox="0 0 220 180" className="w-full h-full max-w-[260px]" fill="none">
      {gear(70, 34, 0.9)}
      {gear(140, 22, 0.55)}
      <line x1="95" y1="90" x2="122" y2="90" stroke={color} strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3" />
    </svg>
  );
}

export function BlueprintStepsIllustration({ color }: { color: string }) {
  const rows = [
    { y: 40, width: 60, x: 80 },
    { y: 75, width: 110, x: 55 },
    { y: 110, width: 160, x: 30 },
  ];
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      {rows.map((r, i) => (
        <g key={i}>
          {Array.from({ length: Math.round(r.width / 30) }).map((_, j) => (
            <rect
              key={j}
              x={r.x + j * 32}
              y={r.y}
              width="24"
              height="24"
              rx="2"
              stroke={color}
              strokeWidth="1.6"
              opacity={0.4 + i * 0.2}
              fill={j % 2 === 0 ? color : "none"}
              fillOpacity={j % 2 === 0 ? 0.15 : 0}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function NetworkNodesIllustration({ color, variant = "a" }: { color: string; variant?: "a" | "b" }) {
  const nodesA = [
    { x: 40, y: 50, r: 6 },
    { x: 110, y: 30, r: 10 },
    { x: 175, y: 60, r: 5 },
    { x: 60, y: 110, r: 5 },
    { x: 150, y: 120, r: 7 },
  ];
  const nodesB = [
    { x: 50, y: 40, r: 8 },
    { x: 160, y: 45, r: 6 },
    { x: 105, y: 120, r: 10 },
  ];
  const nodes = variant === "a" ? nodesA : nodesB;
  const center = variant === "a" ? nodes[1] : nodes[2];
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      {nodes
        .filter((n) => n !== center)
        .map((n, i) => (
          <line key={i} x1={center.x} y1={center.y} x2={n.x} y2={n.y} stroke={color} strokeWidth="1.5" opacity="0.4" />
        ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n === center ? color : "none"} stroke={color} strokeWidth="1.8" opacity={n === center ? 1 : 0.85} />
      ))}
    </svg>
  );
}

export function OpenBookIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      <path d="M110 40 L60 55 V125 L110 112 Z" stroke={color} strokeWidth="1.8" opacity="0.9" />
      <path d="M110 40 L160 55 V125 L110 112 Z" stroke={color} strokeWidth="1.8" opacity="0.6" />
      {[68, 76, 84, 92].map((y) => (
        <line key={y} x1="68" y1={y} x2="102" y2={y - 3} stroke={color} strokeWidth="1" opacity="0.35" />
      ))}
      {[68, 76, 84, 92].map((y) => (
        <line key={`r${y}`} x1="118" y1={y - 3} x2="152" y2={y} stroke={color} strokeWidth="1" opacity="0.35" />
      ))}
    </svg>
  );
}

export function TargetOrbitIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      <circle cx="110" cy="80" r="55" stroke={color} strokeWidth="1.2" opacity="0.25" />
      <circle cx="110" cy="80" r="34" stroke={color} strokeWidth="1.4" opacity="0.45" />
      <circle cx="110" cy="80" r="14" stroke={color} strokeWidth="1.8" opacity="0.8" />
      <circle cx="110" cy="80" r="5" fill={color} />
      <circle cx="165" cy="80" r="3" fill={color} opacity="0.7" />
      <circle cx="110" cy="25" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

export function WaveDotsIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      <path
        d="M20 100 C 50 40, 80 140, 110 80 S 170 20, 200 90"
        stroke={color}
        strokeWidth="2"
        opacity="0.7"
      />
      {[
        [20, 100],
        [65, 65],
        [110, 80],
        [155, 45],
        [200, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={color} opacity={i === 2 ? 1 : 0.6} />
      ))}
    </svg>
  );
}

export function RadiatingCirclesIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      <circle cx="90" cy="80" r="8" fill={color} />
      {[24, 40, 56, 72].map((r, i) => (
        <circle key={r} cx="90" cy="80" r={r} stroke={color} strokeWidth="1.3" opacity={0.5 - i * 0.1} />
      ))}
      <circle cx="90" cy="8" r="3" fill={color} opacity="0.6" />
      <circle cx="162" cy="80" r="3" fill={color} opacity="0.6" />
      <circle cx="90" cy="152" r="3" fill={color} opacity="0.6" />
    </svg>
  );
}

export function SegmentedPieIllustration({ color }: { color: string }) {
  const segments = [
    { d: "M110 80 L110 20 A60 60 0 0 1 162 50 Z", opacity: 0.9 },
    { d: "M110 80 L162 50 A60 60 0 0 1 162 110 Z", opacity: 0.7 },
    { d: "M110 80 L162 110 A60 60 0 0 1 110 140 Z", opacity: 0.5 },
    { d: "M110 80 L110 140 A60 60 0 0 1 58 110 Z", opacity: 0.35 },
    { d: "M110 80 L58 110 A60 60 0 0 1 58 50 Z", opacity: 0.25 },
    { d: "M110 80 L58 50 A60 60 0 0 1 110 20 Z", opacity: 0.15 },
  ];
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      {segments.map((s, i) => (
        <path key={i} d={s.d} fill={color} opacity={s.opacity} stroke="#0B1220" strokeWidth="1.5" />
      ))}
      <circle cx="110" cy="80" r="6" fill="#0B1220" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function StairsFigureIllustration({ color }: { color: string }) {
  const steps = [
    { x: 30, y: 120, w: 30, h: 20 },
    { x: 60, y: 100, w: 30, h: 40 },
    { x: 90, y: 80, w: 30, h: 60 },
    { x: 120, y: 60, w: 30, h: 80 },
    { x: 150, y: 40, w: 30, h: 100 },
  ];
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      {steps.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} stroke={color} strokeWidth="1.6" opacity={0.3 + i * 0.12} />
      ))}
      <circle cx="45" cy="105" r="6" fill={color} />
      <path d="M45 111 L45 118 M45 118 L38 128 M45 118 L52 128 M45 113 L38 108 M45 113 L52 108" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M45 105 C 90 60, 130 50, 170 35" stroke={color} strokeWidth="1.3" strokeDasharray="4 4" opacity="0.5" />
    </svg>
  );
}

export function GraduationGrowthIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 160" className="w-full h-full max-w-[260px]" fill="none">
      <path d="M110 35 L165 55 L110 75 L55 55 Z" stroke={color} strokeWidth="1.8" opacity="0.9" />
      <path d="M85 63 V 88 C 85 98, 135 98, 135 88 V 63" stroke={color} strokeWidth="1.6" opacity="0.6" />
      <line x1="165" y1="55" x2="165" y2="80" stroke={color} strokeWidth="1.4" opacity="0.5" />
      <circle cx="165" cy="84" r="2.5" fill={color} opacity="0.6" />
      {[
        [40, 130, 10],
        [65, 118, 16],
        [90, 122, 12],
        [115, 105, 22],
        [140, 112, 16],
        [165, 98, 26],
      ].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="10" height={h} fill={color} opacity={0.25 + i * 0.1} />
      ))}
    </svg>
  );
}
