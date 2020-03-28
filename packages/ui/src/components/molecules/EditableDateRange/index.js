import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableDateRangeEditView from './EditableDateRangeEditView';
import EditableDateRangeReadView from './EditableDateRangeReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableDateRange = ({data}) => {
    const [mode, setMode] = useState('view')
    const [currentData, setCurrentData] = useState(data)

    const onEditClick = () => setMode('edit')
    const onUpdateClick = (data) => {
        setMode('view')
        setCurrentData(data)
    }

    return(
        <Box>
            {
                mode == 'view' ?
                    <EditableDateRangeReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableDateRangeEditView data={currentData} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableDateRange.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.string),
        author: PropTypes.number
    })
}

export default EditableDateRange