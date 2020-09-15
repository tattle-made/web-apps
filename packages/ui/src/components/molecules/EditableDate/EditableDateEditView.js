import React, {useState} from 'react'
import {Box, Heading, TextInput, Button, Calendar, Grid} from 'grommet'
import {Checkmark} from 'grommet-icons'

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
            height={{'min-height':'150px'}}
            >
                <Grid
                    fill
                    areas={[
                    { name: "nav", start: [0, 0], end: [2, 0] },
                    { name: "main", start: [2, 0], end: [2, 0] }
                    ]}
                    columns={["small", "flex"]}
                    rows={["flex"]}
                    gap="small"
                    margin="none"
                >
                    <Box gridArea="nav">
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
                    </Box>
                    <Box gridArea="main">
                        <Button size="small" focusIndicator={false} icon={<Checkmark/>} onClick={onUpdateClicked} />
                    </Box>
                </Grid>
        </Box>
    )
}

export default EditableDateEditView