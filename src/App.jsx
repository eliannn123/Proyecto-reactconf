import { Sep } from "./components/Sep";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { RandomNames } from "./components/Names";
import { Place } from "./components/Place";
import { Schedule } from "./components/Table";
import { Prices } from "./components/Prices";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Intro />
      <Sep />
      <Navbar />
      <Sep />
      <RandomNames />
      <Sep />
      <Place />
      <Sep />
      <Schedule />
      <Sep />
      <Prices />
      <Sep />
      <Contact />
    </>
  );
}

export default App;
