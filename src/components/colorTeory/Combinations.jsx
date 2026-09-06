import React from "react";
import HeaderDesc from "./HeaderDesc";

function Combinations({ nearest, colores, base, hsl }) {
  const WHEEL_REF = [
    { h: 60, name: "Amarillo", cat: "primario" },
    { h: 45, name: "Amarillo Naranja", cat: "terciario" },
    { h: 30, name: "Naranja", cat: "secundario" },
    { h: 15, name: "Rojo Naranja", cat: "terciario" },
    { h: 0, name: "Rojo", cat: "primario" },
    { h: 330, name: "Rojo Violeta", cat: "terciario" },
    { h: 270, name: "Violeta", cat: "secundario" },
    { h: 255, name: "Azul Violeta", cat: "terciario" },
    { h: 240, name: "Azul", cat: "primario" },
    { h: 195, name: "Azul Verde", cat: "terciario" },
    { h: 120, name: "Verde", cat: "secundario" },
    { h: 90, name: "Amarillo Verde", cat: "terciario" },
  ];

  const classifyWheel = (items) =>
    WHEEL_REF.map((ref) => ({ ...ref, color: nearest(items, ref.h) }));

  const specs = [
    {
      key: "Complementario",
      desc: "Colores opuestos.",
      offsets: [180],
      mode: "line",
    },
    {
      key: "Análoga",
      desc: "Colores que están uno junto al otro.",
      offsets: [-30, 30],
      mode: "chain",
      reorder: [1, 0, 2],
    },
    {
      key: "Triádica",
      desc: "Tres colores equidistante en el círculo.",
      offsets: [120, 240],
      mode: "triangle",
    },
    {
      key: "Tetrádica",
      desc: "Dos pares de complementarios.",
      offsets: [90, 180, 270],
      mode: "cross",
    },
  ];

  function pickSequence(items, baseColor, offsets) {
    const chosen = [baseColor];

    for (const off of offsets) {
      chosen.push(nearest(items, baseColor.h + off, chosen));
    }

    return chosen;
  }

  function polar(cx, cy, r, hueDeg) {
    const a = ((hueDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  function miniWheels(points, mode) {
    const size = 160;
    const c = 80;
    const R = 64;

    const refDots = WHEEL_REF.map((ref, index) => {
      const p = polar(c, c, R, ref.h);
      return (
        <circle
          key={`${ref.name}-${index}`}
          cx={p.x.toFixed(1)}
          cy={p.y.toFixed(1)}
          r="2.6"
          fill="#DDD6C6"
        />
      );
    });

    const coords = points.map((pt) => polar(c, c, R, pt.h));
    let lines = null;
    let d = "";

    switch (mode) {
      case "line":
        lines = (
          <line
            x1={`${coords[0].x}`}
            y1={`${coords[0].y}`}
            x2={`${coords[1].x}`}
            y2={`${coords[1].y}`}
            stroke="#161310"
            strokeWidth="1.4"
            fill="none"
          />
        );
        break;

      case "chain":
        d = `M ${coords[0].x} ${coords[0].y}`;
        for (let i = 1; i < coords.length; i++) {
          d += `L ${coords[i].x} ${coords[i].y}`;
        }
        lines = <path d={d} stroke="#161310" strokeWidth="1.4" fill="none" />;
        break;

      case "triangle":
        d = `M ${coords[0].x} ${coords[0].y}`;
        for (let i = 1; i < coords.length; i++) {
          d += `L ${coords[i].x} ${coords[i].y}`;
        }
        d += " Z";
        lines = <path d={d} stroke="#161310" strokeWidth="1.4" fill="none" />;
        break;

      case "cross":
        lines = (
          <>
            <line
              x1={coords[0].x}
              y1={coords[0].y}
              x2={coords[2].x}
              y2={coords[2].y}
              stroke="#161310"
              strokeWidth="1.4"
              fill="none"
            />
            <line
              x1={coords[1].x}
              y1={coords[1].y}
              x2={coords[3].x}
              y2={coords[3].y}
              stroke="#161310"
              strokeWidth="1.4"
              fill="none"
            />
          </>
        );
        break;

      default:
        lines = null;
    }

    const dots = points.map((pt, i) => {
      const p = coords[i];
      return (
        <circle
          key={`${pt.nombre || i}-${i}`}
          cx={p.x.toFixed(1)}
          cy={p.y.toFixed(1)}
          r="8"
          fill={hsl(pt)}
          stroke="#000"
          strokeWidth="1"
        />
      );
    });

    return (
      <svg viewBox={'0 0 160 160'} className="w-48 h-48 md:max-w-40 md:max-h-40">
        <circle
          cx={c}
          cy={c}
          r={R}
          fill="none"
          stroke="#E4DDCE"
          strokeWidth="1"
        />
        {refDots}
        {lines}
        {dots}
      </svg>
    );
  }

  const swatches = (points) =>
    points.map((p, idx) => (
      <div
        key={`${p.nombre || "sombra"}-${idx}`}
        className="w-7 h-7 rounded-full"
        style={{ backgroundColor: hsl(p) }}
        title={p.nombre}
      ></div>
    ));

  return (
    <div className="">
      <HeaderDesc nameHead="combinationColor" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {specs.map((spec) => {
          let points = pickSequence(colores, base, spec.offsets);

          if (spec.reorder) {
            points = spec.reorder.map((i) => points[i]);
          }

          const svg = miniWheels(points, spec.mode);
          const example = swatches(points);

          return (
            <div key={spec.key} className="text-center flex flex-col items-center">
              <h4 className="text-lg">{spec.key}</h4>
              <p className="mt-2.5 text-base">{spec.desc}</p>
              {svg}
              <div className="text-sm text-[#5a544c] uppercase tracking-widest mt-3">Ejemplo</div>
              <div className="flex justify-center gap-1.5 mt-2.5">
                {example}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Combinations;