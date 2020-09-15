import React, { useState, useEffect } from "react";
import { Grid, Box, Heading, Text, Button, RadioButtonGroup } from "grommet";
import { Checkmark } from "grommet-icons";

/**
 * @author
 * @function EditableRadioGroupEditView
 **/

const EditableRadioGroupEditView = ({ data, onUpdate }) => {
  const [value, setValue] = React.useState("one");
  const [currentValue, setCurrentValue] = React.useState("one");

  const onUpdateClicked = () => {
    onUpdate({
      ...data,
      value,
    });
  };

  return (
    <Box
      pad="medium"
      margin="medium"
      background={{ color: "light-2", opacity: "strong" }}
      gap="small"
      width="medium"
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

        <Box gridArea="main">
          <Button
            size="small"
            focusIndicator={false}
            icon={<Checkmark />}
            onClick={onUpdateClicked}
          />
        </Box>
      </Grid>

      <RadioButtonGroup
        name="doc"
        options={data.options}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  );
};

export default EditableRadioGroupEditView;
