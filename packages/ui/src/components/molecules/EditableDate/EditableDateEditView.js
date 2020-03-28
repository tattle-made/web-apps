import React, {useState} from 'react'
import {Box, Heading, TextInput, Button, Calendar} from 'grommet'

const EditableDateEditView = ({data, onUpdate}) => {
    const [currentValue, setCurrentValue] = useState(data.value)

    const onDateChange = (nextDate) => {setCurrentValue(nextDate.split("T")[0])}

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
            <Box align="center">
                <Calendar
                  size="small"
                  date={currentValue}
                  onSelect={onDateChange}
                />
            </Box>
            <Box align="center" pad="none">
                <Button primary label="Update" onClick={onUpdateClicked} />
            </Box>
        </Box>
    )
}

export default EditableDateEditView