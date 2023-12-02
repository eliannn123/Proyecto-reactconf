import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = ["Invitados", "Fecha", "Intinerario", "Precios", "Contacto"];
const locations = [
  "#invitados",
  "#fecha",
  "#intinerario",
  "#precios",
  "#contacto",
];
export function PillTabs() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <a href={locations[i]} key={text}>
        <button
          className="relative hidden md:block md:p-2 lg:p-2  bg-black text-white border-0 font-principal lg:text-[24px] md:text-[24px] text-[17px] sm:text-[24px] rounded-full"
          onMouseEnter={() => setHoveredIndex(i)}
        >
          {hoveredIndex === i && (
            <MagicTabSelect
              id="pillTabs"
              transition={{ type: "spring", bounce: 0.35 }}
            >
              <span className="rounded-full absolute inset-0 z-10 bg-white mix-blend-difference" />
            </MagicTabSelect>
          )}
          {text}
        </button>
      </a>
    );
  });

  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}
