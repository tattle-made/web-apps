import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableDateRangeEditView from './EditableDateRangeEditView';
import EditableDateRangeReadView from './EditableDateRangeReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableDateRange = ({data, isEditable = true, updateCallback}) => {
    const [mode, setMode] = useState('view')

    const onEditClick = () => setMode('edit')
    const onUpdateClick = (data) => {
        setMode('view')
        updateCallback(data)
    }

    return(
        <Box>
            {
                mode == 'view' ?
                    <EditableDateRangeReadView data={data} onEdit={onEditClick} isEditable={isEditable}/>
                :
                    <EditableDateRangeEditView data={data} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableDateRange.propTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.string),
        author: PropTypes.number
    })
}

export default EditableDateRange