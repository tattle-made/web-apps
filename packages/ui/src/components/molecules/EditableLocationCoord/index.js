import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableLocationCoordEditView from './EditableLocationCoordEditView';
import EditableLocationCoordReadView from './EditableLocationCoordReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableLocationCoord = ({data}) => {
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
                    <EditableLocationCoordReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableLocationCoordEditView data={currentData} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableLocationCoord.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.number),
        author: PropTypes.number
    })
}

export default EditableLocationCoord