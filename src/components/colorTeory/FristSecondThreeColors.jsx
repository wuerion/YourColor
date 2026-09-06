import React from "react";
import HeaderDesc from "./HeaderDesc";

function FristSecondThreeColors({ nameHead, state, hsl }) {
  const FORMULAS = {
    Naranja: "amarillo + rojo",
    Verde: "amarillo + azul",
    Violeta: "azul + rojo",
    "Amarillo Naranja": "amarillo + naranja",
    "Rojo Naranja": "rojo + naranja",
    "Rojo Violeta": "rojo + violeta",
    "Azul Violeta": "azul + violeta",
    "Azul Verde": "azul + verde",
    "Amarillo Verde": "amarillo + verde",
  };

  const base = state.filter((x) => x.cat === nameHead);
  return (
    <div>
      <HeaderDesc nameHead={nameHead} />

      <div className=" bg-white border rounded-2xl shadow-md p-4">
        <div className="flex-1 flex justify-between gap-4 text-center">
          {(nameHead === "primario" || nameHead === "secundario") &&
            base.map((it, i) => {
              const formula = FORMULAS[it.name] ? (
                <span className=" text-sm text-[#5a544c]">
                  ({FORMULAS[it.name]})
                </span>
              ) : (
                ""
              );
              return (
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full shadow-inner"
                    style={{ backgroundColor: hsl(it.color) }}
                  ></div>
                  <b>{it.color.nombre}</b>
                  {formula}
                </div>
              );
            })}
        </div>

        <div className=" grid grid-col-1 md:grid-cols-2 justify-items-center gap-4">
          {nameHead === "terciario" &&
            base.map((it, i) => (
              <div className="flex flex-col gap-4 w-full items-center">
                <div
                  className="w-14 h-14 rounded-full shadow-inner"
                  style={{ backgroundColor: hsl(it.color) }}
                ></div>
                <b className="text-center">{it.color.nombre}</b>
                <span className="block text-sm text-[#5a544c] ">
                  {it.name}
                  <span className="">
                  {FORMULAS[it.name] ? " · " + FORMULAS[it.name] : ""}
                  </span>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FristSecondThreeColors;
