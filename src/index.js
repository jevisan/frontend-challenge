import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

function ReactRoot() {
    return <App />;
}

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
