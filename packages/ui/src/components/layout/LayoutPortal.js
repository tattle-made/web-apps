import React from "react";
import {
  Grommet,
  ResponsiveContext,
  Box,
  Stack,
  Grid,
  Heading,
  Text,
} from "grommet";
import TattleTheme from "../../theme";

const columns = {
  medium: ["auto", "flex"],
  small: ["auto", "flex"],
};

const PortalGrid = ({ size, primaryNavigationContent, mainSectionContent }) => {
  return (
    <Grid
      rows={["flex"]}
      columns={columns[size]}
      areas={[
        { name: "PrimaryNavigationSection", start: [0, 0], end: [0, 0] },
        { name: "MainSection", start: [1, 0], end: [1, 0] },
      ]}
      gap={"small"}
      fill
    >
      <Box fill background={"brand"} gridArea={"PrimaryNavigationSection"}>
        {primaryNavigationContent}
      </Box>
      <Box fill gridArea={"MainSection"}>
        {mainSectionContent}
      </Box>
    </Grid>
  );
};

const LayoutPortal = ({ primaryNavigationContent, mainSectionContent }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <PortalGrid
      size={size}
      primaryNavigationContent={primaryNavigationContent}
      mainSectionContent={mainSectionContent}
    ></PortalGrid>
  );
};

export default LayoutPortal;
