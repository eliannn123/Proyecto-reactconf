import { useState, useEffect } from "react";
import { PillTabs } from "./PillTab";

export function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 ${isSticky ? "bg-black" : "bg-none"} z-50`}
    >
      <nav className="sm:flex hidden lg:justify-center md:lg:justify-center sm:justify-center">
        <PillTabs />
      </nav>
    </header>
  );
}
