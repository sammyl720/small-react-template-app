import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import "./styles.css";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Panel from './components/Panel'
function App() {
  return (
    <div className="App">
      <Container>
        {(tabs, index, setIndex, currentTab) => (
          <Fragment>
            <Tabs tabs={tabs} index={index} setIndex={setIndex} />
            <Panel tab={currentTab} />
          </Fragment>
        )}
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
