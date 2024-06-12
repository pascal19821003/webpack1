/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from "lodash";

import * as aa from "./t1";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

const arr = [1, 2, 3];
arr.map((item) => {
  console.log("item:", item);
});

document.body.appendChild(component());
