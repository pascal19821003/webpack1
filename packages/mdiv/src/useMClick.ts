/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable prettier/prettier */
import React from "react";

import { type MDivProps } from "./MDiv.type";

export function runMClick<T extends MDivProps>(props: T) {
  const { onClick } = props;

  const handleClick = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      console.log("----handleClick-----", event)
      if (event.key === "Enter" || event.key === "Space") {
        onClick && onClick(event as any);
      }
    },
    [onClick]
  );

  return React.useMemo(() => {
    const newProps = { ...props };
    if (onClick) {
      newProps.role = newProps.role || "button";
      newProps.tabIndex = newProps.tabIndex || 0;
      newProps.onKeyDown = newProps.onKeyDown || handleClick;
      newProps.style = { cursor: "pointer", ...newProps.style };
    }
    return newProps;
  }, [onClick, handleClick, props]);
}
