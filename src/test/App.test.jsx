import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Render App Content", () => {
  const Application = render(<App />);

  console.log(Application);
});