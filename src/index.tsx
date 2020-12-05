import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.scss";
import { Test } from "./components/Test";

export const App = () => {
	return (
		<React.StrictMode>
			<div className="cln">
				<Test />
			</div>
		</React.StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
