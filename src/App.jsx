import "./App.css";
import CardList from "./Components/cardList.component";
import { robots } from "./robots";

function App() {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
