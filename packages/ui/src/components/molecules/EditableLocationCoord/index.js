import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableLocationCoordEditView from './EditableLocationCoordEditView';
import EditableLocationCoordReadView from './EditableLocationCoordReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableLocationCoord = ({data, isEditable = true, updateCallback}) => {
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
                    <EditableLocationCoordReadView data={data} onEdit={onEditClick} isEditable={isEditable}/>
                :
                    <EditableLocationCoordEditView data={data} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableLocationCoord.propTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.number),
        author: PropTypes.number
    })
}

export default EditableLocationCoord