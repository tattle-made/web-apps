import React, {useState} from 'react'
import {Box, Heading, TextInput, Button } from 'grommet'

const EditableLocationCoordEditView = ({data, onUpdate}) => {
    const [currentValue, setCurrentValue] = useState(data.value)

    const onCoord1Change = (event) => {setCurrentValue([event.target.value, currentValue[1]])}
    const onCoord2Change = (event) => {setCurrentValue([currentValue[0], event.target.value])}

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
            <TextInput value={currentValue[0]} onChange={onCoord1Change} />
            <TextInput value={currentValue[1]} onChange={onCoord2Change} />
            <Box align="center" pad="none">
                <Button primary label="Update" onClick={onUpdateClicked} />
            </Box>
        </Box>
    )
}

export default EditableLocationCoordEditView