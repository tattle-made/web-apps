import React from "react";
import { ResponsiveContext, Box, Heading } from "grommet";

const Logo = () => (
  <Box
    height="32px"
    width="32px"
    round="full"
    background="url(//tattle-media.s3.amazonaws.com/monogram-dark.svg)"
  />
);

/**
 * @author denny
 * @function Logo
 **/

const AppLogo = ({ name }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box pad={"small"} direction={"row"} align={"center"} gap={"small"}>
      <Logo />
      {size != "small" && (
        <Heading level={4} margin={"none"}>
          {" "}
          {name}{" "}
        </Heading>
      )}
    </Box>
  );
};

export default AppLogo;
