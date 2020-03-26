import React, {useState} from 'react'
import {Box, Heading, TextInput, Button } from 'grommet'

const EditableTextEditView = ({data, onUpdate}) => {
    const [currentValue, setCurrentValue] = useState(data.value)

    const onTextChange = (event) => {setCurrentValue(event.target.value)}

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
            <TextInput value={currentValue} onChange={onTextChange} />
            <Box align="center" pad="none">
                <Button primary label="Update" onClick={onUpdateClicked} />
            </Box>
        </Box>
    )
}

export default EditableTextEditView