import React from "react";
import HeaderDesc from "./HeaderDesc";

function WarmCold({ nameHead, norm, colores, hsl }) {
  const isWarm = (h) => norm(h) >= 330 || norm(h) <= 90;
  const withColor = colores.filter((c) => c.s > 22);
  const warmColor = withColor.filter((c) => isWarm(c.h));
  const coldColor = withColor.filter((c) => !isWarm(c.h));

  // const useList = nameHead === 'warmColor' ? warmColor : coldColor 

  return (
    <div>
      <HeaderDesc nameHead={nameHead} />
      <div className="bg-white rounded-2xl border shadow-md p-4">
        <div className="flex flex-wrap gap-4">
          {(() => {
            if ((warmColor, coldColor).length === 0) {
              return (
                <span className="text-base text-[#5a544c]">
                  Sin coincidencias en esta paleta.
                </span>
              );
            }
            return (nameHead === 'warmColor' ? warmColor : coldColor).map((c) => (
              <div
                key={c.nombre}
                className="w-14 h-14 rounded-full"
                style={{ backgroundColor: hsl(c) }}
                title={c.nombre}
              ></div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
}

export default WarmCold;
