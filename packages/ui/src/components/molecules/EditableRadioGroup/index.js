import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import PropTypes from "prop-types";
import EditableRadioGroupReadView from "./EditableRadioGroupReadView";
import EditableRadioGroupEditView from "./EditableRadioGroupEditView";

/**
 * @author
 * @function EditableRadioGroup
 **/

const EditableRadioGroup = ({ data, isEditable = true, updateCallback }) => {
  const [mode, setMode] = useState("view");

  const onEditClick = () => setMode("edit");
  const onUpdateClick = (data) => {
    setMode("view");
    updateCallback(data);
  };

  return (
    <Box>
      {mode === "view" ? (
        <EditableRadioGroupReadView
          data={data}
          onEdit={onEditClick}
          isEditable={isEditable}
        />
      ) : (
        <EditableRadioGroupEditView data={data} onUpdate={onUpdateClick} />
      )}
    </Box>
  );
};

export default EditableRadioGroup;
