import React from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Row from "./components/Row";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<Row>
        <p>Manual</p>
				<Counter initial={0} />
				<Counter initial={0} />
			</Row>

      <Row>
        <p>Auto</p>
				<Counter initial={0} autoIncrement />
				<Counter initial={0} autoDecrement/>
			</Row>

      <hr/>
      <Row>
        <p>Timer Count down</p>
        <Timer initial={100} autoDecrement />
      </Row>

      <Row>
        <p>Timer Count Up</p>
        <Timer initial={0} autoIncrement />
      </Row>
		</React.Fragment>
	);
};

export default App;
