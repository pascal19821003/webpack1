/* eslint-disable prettier/prettier */
import { ActionButton, type IButtonProps } from "@fluentui/react";
import { IIconProps } from "@fluentui/react";
import React from "react";

const addFriendIcon: IIconProps = { iconName: "AddFriend" };

export type IButtonAProps = IButtonProps & { haha: string };

export const ButtonA: React.FC<IButtonAProps> = (props: IButtonAProps) => {
  return (
    <div>
      <ActionButton {...props} iconProps={addFriendIcon} text={props.haha} />
    </div>
  );
};
