import React from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
	const AppStyle = {
		display: "flex",
		justifyContent: "space-evenly"
	};
	return (
		<React.Fragment>
			<div style={AppStyle}>
        Auto
				<Counter initial={0} />
				<Counter initial={0} />
			</div>
      <div style={AppStyle}>
        Manual
				<Counter initial={0} autoIncrement />
				<Counter initial={0} autoDecrement/>
			</div>
		</React.Fragment>
	);
};

export default App;
