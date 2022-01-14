import "./App.css";
import { Provider } from "react-redux";
import { BlockchainProvider } from "./blockchain";
import store from "./store";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <Provider store={store}>
      <BlockchainProvider>
        <div className="App">
          <GameContainer></GameContainer>
        </div>
      </BlockchainProvider>
    </Provider>
  );
}

export default App;
