/* eslint-disable react/display-name */
import React from "react";

import { type MDivProps } from "./MDiv.type";
import { runMClick } from "./useMClick";

export const MDiv: React.FC<MDivProps> = React.forwardRef((props, ref) => {
  const props2 = runMClick(props);
  return (
    <div {...props2} ref={ref}>
      {props2.children}
    </div>
  );
});
