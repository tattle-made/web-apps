import React from 'react'
import {Grid, Box, Heading, Button, Text} from 'grommet'
import { Edit } from "grommet-icons";

const EditableDateRangeReadView = ({data, onEdit}) => {
	return (
        <Box
            pad="medium"
            margin="medium"
            background={{ color: "light-2", opacity: "strong" }}
            gap="small"
            width="medium"
            height="150px"
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
                    </Box>
                    <Box gridArea="main">
                        <Button size="small" focusIndicator={false} icon={<Edit/>} onClick={onEdit} />
                    </Box>
                </Grid>
            {
                Array.isArray(data.value)?
                    <React.Fragment>
                        <Text>From {data.value[0].split("T")[0]}</Text>
                        <Text>To {data.value[1].split("T")[0]}</Text>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Text>From {data.value.split("T")[0]}</Text>
                        <Text>To {data.value.split("T")[0]}</Text>
                    </React.Fragment>
            }
        </Box>
    )
}

export default EditableDateRangeReadView