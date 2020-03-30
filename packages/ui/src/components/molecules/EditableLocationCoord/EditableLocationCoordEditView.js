import React, {useState} from 'react'
import {Box, Heading, TextInput, Button, Grid } from 'grommet'
import {Checkmark} from 'grommet-icons'
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
            height="170px"
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
                >
                    <Box gridArea="nav">
                        <Heading level={3} margin={{'top':'xsmall', 'bottom': 'none'}}>
                            {data.label}
                        </Heading>
                        <TextInput value={currentValue[0]} onChange={onCoord1Change} />
                        <TextInput value={currentValue[1]} onChange={onCoord2Change} />
                    </Box>
                    <Box gridArea="main">
                        <Button size="small" focusIndicator={false} icon={<Checkmark/>} onClick={onUpdateClicked} />
                    </Box>
                </Grid>
        </Box>
    )
}

export default EditableLocationCoordEditView