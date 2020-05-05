import React from "react";
import { Status } from "../src/components/atoms";
import LayoutPortal from "../src/components/layout/LayoutPortal";
import { AppShell } from "../src/components/layout";
import { Box, Heading, Text } from "grommet";
import AppLogo from "../src/components/atoms/AppLogo";
import MenuItem from "../src/components/atoms/MenuItem";
import { Button } from "@storybook/react/demo";

export default {
  title: "Layout",
};

export const LayoutPortalDemo = () => (
  <AppShell>
    <LayoutPortal
      primaryNavigationContent={
        <Box pad={"small"}>
          <Box>
            <AppLogo name={"Kosh"} />
          </Box>

          <Box pad={"medium"}>
            <div className="links" onClick={(e) => onMenuItemClick(e)}>
              <MenuItem
                route={"/posts"}
                icon={"post"}
                label={"Posts"}
                className={classnames({
                  active:
                    location.pathname.includes("/posts") ||
                    location.pathname.includes("/post"),
                })}
              />
              <MenuItem
                route={"/search"}
                icon={"search"}
                label={"Search"}
                className={classnames({
                  active: location.pathname.includes("/search"),
                })}
              />

              <AccessControl
                allowedPermissions={["user:canView"]}
                text={() => this.dothis()}
                renderNoAccess={() => {}}
              >
                <MenuItem
                  route={"/queue"}
                  icon={"queue"}
                  label={"Queues"}
                  className={classnames({
                    active: location.pathname.includes("/queue"),
                  })}
                />
              </AccessControl>

              <AccessControl
                allowedPermissions={["user:canView"]}
                text={() => this.dothis()}
                renderNoAccess={() => {}}
              >
                <MenuItem
                  route={"/users"}
                  icon={"user"}
                  label={"Users"}
                  className={classnames({
                    active: location.pathname.includes("/users"),
                  })}
                />
              </AccessControl>
            </div>

            <Box margin={{ top: "large" }}>
              <Button plain onClick={onUserOptionClick}>
                <LogOut />
              </Button>
            </Box>
          </Box>
        </Box>
      }
      mainSectionContent={<h1> Main Content </h1>}
    ></LayoutPortal>
  </AppShell>
);
