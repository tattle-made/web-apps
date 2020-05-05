import React, { useState, useEffect } from "react";

/**
 * @author
 * @function EditableRadioGroup
 **/

const EditableRadioGroup = () => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
  });

  return <div>{fetching && <h3>Editable RadioGRoup</h3>}</div>;
};

export default EditableRadioGroup;
