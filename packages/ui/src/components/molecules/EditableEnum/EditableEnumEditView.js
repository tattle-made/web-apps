import React, { useState } from "react";
import { Box, Heading, TextInput, Button, Select, Grid } from "grommet";
import { Checkmark } from "grommet-icons";

const EditableEnumEditView = ({ data, onUpdate }) => {
  const [currentValue, setCurrentValue] = useState(data.value);

  const onSelectionChange = ({ option }) => {
    setCurrentValue(option);
  };

  const onUpdateClicked = () => {
    onUpdate({
      ...data,
      value: currentValue,
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
      <Select
        options={data.options}
        value={currentValue}
        onChange={onSelectionChange}
      />
    </Box>
  );
};

export default EditableEnumEditView;
