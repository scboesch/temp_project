import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>First edit saved back to Github.. {"\u2728"}</h2>
    Creating a PR from personal account to personal repo.
  </div>
);

render(<App />, document.getElementById("root"));
