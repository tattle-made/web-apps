import React, { useState, useEffect } from "react";

import { Grid, Box, Heading, Text, Button } from "grommet";
import { Edit } from "grommet-icons";

/**
 * @author
 * @function EditableRadioGroup
 **/

const EditableRadioGroupReadView = ({ data, isEditable, onEdit }) => {
  return (
    <Box
      pad="medium"
      margin="medium"
      background={{ color: "light-2", opacity: "strong" }}
      gap="small"
      width="medium"
      height="150px"
    >
      <Grid
        fill
        areas={[
          { name: "nav", start: [0, 0], end: [2, 0] },
          { name: "main", start: [2, 0], end: [2, 0] },
        ]}
        columns={["small", "flex"]}
        rows={["flex"]}
        gap="small"
        margin="none"
      >
        <Box gridArea="nav">
          <Heading level={3} margin={{ top: "xsmall", bottom: "none" }}>
            {data.label}
          </Heading>
        </Box>
        {isEditable && (
          <Box gridArea="main">
            <Button
              size="small"
              focusIndicator={false}
              icon={<Edit />}
              onClick={onEdit}
            />
          </Box>
        )}
      </Grid>

      <Text>{data.value}</Text>
    </Box>
  );
};

export default EditableRadioGroupReadView;