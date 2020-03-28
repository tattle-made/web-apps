import React, {useState} from 'react'
import {Box, Heading, TextInput, Button, Calendar} from 'grommet'

const EditableDateRangeEditView = ({data, onUpdate}) => {
    const [currentValue, setCurrentValue] = useState(data.value)

    const onDateRangeChange = (nextDate) => {
        if(nextDate == currentValue[1])
            setCurrentValue([currentValue[0], currentValue[0]]);
        else if(nextDate == currentValue[0])
            setCurrentValue([currentValue[1], currentValue[1]]);
        else
            setCurrentValue([currentValue[0], nextDate].sort());
    }

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
                  dates={[currentValue]}
                  onSelect={onDateRangeChange}
                />
            </Box>
            <Box align="center" pad="none">
                <Button primary label="Update" onClick={onUpdateClicked} />
            </Box>
        </Box>
    )
}

export default EditableDateRangeEditView