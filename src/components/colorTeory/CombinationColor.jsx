import React from "react";
import HeaderDesc from "./HeaderDesc";

function CombinationColor({ colores, nameSection, hsl, base }) {
  
  const dataCard = {
    neutro: {
      title: "Colores neutros",
      subTitle: "",
      desc: "Combinan con todo y quilibran.",
    },
    monochromatic: {
      title: "Mismo tono",
      subTitle: "monocromática",
      desc: "Diferentes intensidades de color base.",
    },
    multichromatic: {
      title: "Diferentes tono",
      subTitle: "multicromática",
      desc: "Varios colres del círculo cromático.",
    },
    rule: {
      title: "Regla 60-30-10",
      subTitle: "",
      desc: "Equilibrio y jerarquía visual.",
    },
  };

  const name = dataCard[nameSection];

  const FALLBACK_NEUTROS = [
    { nombre: "Beige", h: 35, s: 28, l: 70 },
    { nombre: "Marrón", h: 22, s: 38, l: 32 },
    { nombre: "Gris", h: 0, s: 0, l: 55 },
    { nombre: "Oliva", h: 75, s: 20, l: 35 },
    { nombre: "Azul noche", h: 215, s: 35, l: 20 },
  ];

  const neutros = () => {
    let neutros = colores.filter((c) => c.s <= 25);
    if (neutros.length < 3) neutros = FALLBACK_NEUTROS;
    return neutros.map((c, i) => (
      <div
        key={i}
        className="w-14 h-14 rounded-full"
        style={{ backgroundColor: hsl(c) }}
        title={c.nombre}
      ></div>
    ));
  };

  const monochromatics = () => {
    const elementMono = [];
    const steps = [-32, -16, 0, 16, 32];
    steps.forEach((off) => {
      const l = Math.min(92, Math.max(8, base.l + off));
      const style = {
        backgroundColor: `hsl(${base.h}, ${base.s}%, ${l}%)`,
      };
      elementMono.push(<div className="w-14 h-14 rounded-full" style={style}></div>);
    });
    return elementMono;
  };

  const multichromatics = () => {
    const elementMulti = [];
    const sorted = [...colores].sort((a, b) => a.h - b.h);
    const n = Math.min(6, sorted.length);
    const sample = [];
    for (let i = 0; i < n; i++)
      sample.push(sorted[Math.floor((i * sorted.length) / n)]);
    sample.map((c) =>
      elementMulti.push(
        <div
        key={'dot:'+c.nombre}
          className="w-14 h-14 rounded-full"
          style={{ backgroundColor: hsl(c) }}
          title={c.nombre}
        ></div>,
      ),
    );
    return elementMulti;
  };

  const rule = () => {
    const len = colores.length;
    const second = colores[Math.floor(len / 2) || colores[0]];
    const acento = colores[len - 1] || colores[0];

    const styleConic = {
      background: `conic-gradient(${hsl(base)} 0 60%, ${hsl(second)} 60% 90%, ${hsl(acento)} 90% 100%)`,
    };

    const elementLengend = [];
    [
      [base, "60%", "Color dominante"],
      [second, "30%", "Color secundario"],
      [acento, "10%", "Color de acento"],
    ].forEach(([c, pct, label]) => {
      elementLengend.push(
        <div className="flex items-center gap-2" key={'combinate:'+c.nombre}>
          <div className="flex-none w-5 h-5 rounded-full" style={{ backgroundColor: hsl(c) }}></div>
          <div>
            <span className="text-[#5a544c]">{pct}</span>
            <span className="block text-sm text-[#5a544c] ">
              {label} · {c.nombre}
            </span>
          </div>
        </div>,
      );
    });

    const elementPie = (
      <>
        <div
          className="w-32 h-32 rounded-full borde"
          style={styleConic}
          id="rulePie"
        ></div>
        <div className="">{elementLengend}</div>
      </>
    );

    return elementPie;
  };

  const renders = {
    neutro: neutros,
    monochromatic: monochromatics,
    multichromatic: multichromatics,
    rule: rule,
  };

  return (
    <div className="bg-white rounded-2xl border shadow-md p-4 ">
      <h3 className="mt-1 text-lg">{name.title}</h3>
      <p className="text-[#5a544c] mb-4">{name.desc}</p>
      <div className={nameSection === "rule" ? "flex flex-col gap-4" : "flex flex-wrap gap-4"}>
        {renders[nameSection]?.() ?? null}
      </div>
    </div>
  );
}

export default CombinationColor;
