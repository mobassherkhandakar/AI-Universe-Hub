import "./App.css";
import Button from "./componets/Button/Button";
import Cards from "./componets/Cards/Cards";
import Header from "./componets/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Cards></Cards>
      <Button>see more</Button>
    </>
  );
}

export default App;
