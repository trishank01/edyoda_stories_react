import "./App.css";
import Cards from "./components/cards/Cards";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Cards />
    </>
  );
}

export default App;
