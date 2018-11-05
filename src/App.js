import React from "react";
import Counter from "./components/Counter";
import Row from "./components/Row";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<Row>
        Auto
				<Counter initial={0} />
				<Counter initial={0} />
			</Row>
      <Row>
        Manual
				<Counter initial={0} autoIncrement />
				<Counter initial={0} autoDecrement/>
			</Row>
		</React.Fragment>
	);
};

export default App;
