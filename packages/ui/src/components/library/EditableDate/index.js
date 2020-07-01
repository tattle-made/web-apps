import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableDateEditView from './EditableDateEditView';
import EditableDateReadView from './EditableDateReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableDate = ({data, isEditable = true, updateCallback}) => {
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
                    <EditableDateReadView data={data} onEdit={onEditClick} isEditable={isEditable}/>
                :
                    <EditableDateEditView data={data} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableDate.propTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        author: PropTypes.number
    })
}

export default EditableDate