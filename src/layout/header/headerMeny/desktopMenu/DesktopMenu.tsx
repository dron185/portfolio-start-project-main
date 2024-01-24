import React from "react";
import {Menu} from "../menu/Menu";
import { S } from "../HeaderMenu_Styles"

// type MenuPropsType = {
//   menuItems: Array<string>
// }

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesktopMenu>
        <Menu menuItems={props.menuItems}/>
    </S.DesktopMenu>
  );
};