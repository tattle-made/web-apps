import React, {useState} from 'react'
import {Box, Heading, TextInput, Button, Select } from 'grommet'

const EditableEnumEditView = ({data, options, onUpdate}) => {
    const [currentValue, setCurrentValue] = useState(data.value)

    const onSelectionChange = ({option}) => {setCurrentValue(option)}

    const onUpdateClicked = () => {
        onUpdate({
            ...data,
            value : currentValue
        })
    }

	return (
        <Box
            pad="medium"
            margin="medium"
            background={{ color: "light-2", opacity: "strong" }}
            gap="small"
            width="medium"
            height={{'min':'150px'}}
        >
            <Heading level={3} margin={{'top':'xsmall', 'bottom': 'none'}}>
                {data.label}
            </Heading>
            <Select
              options={options}
              value={currentValue}
              onChange={onSelectionChange}
            />
            <Box align="center" pad="none">
                <Button primary label="Update" onClick={onUpdateClicked} />
            </Box>
        </Box>
    )
}

export default EditableEnumEditView