import React from "react";
import MenuItem from "../src/components/atoms/MenuItem";
import { BrowserRouter } from "react-router-dom";
import { TattleTheme } from "../src";
import { Grommet } from "grommet";

export default {
  title: "Menu Item",
};

export const Simple = () => (
  <Grommet theme={TattleTheme}>
    <BrowserRouter>
      <MenuItem route={"/posts"} icon={"post"} label={"Posts"} />
    </BrowserRouter>
  </Grommet>
);
