import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableDateEditView from './EditableDateEditView';
import EditableDateReadView from './EditableDateReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableDate = ({data}) => {
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
                    <EditableDateReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableDateEditView data={currentData} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableDate.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        author: PropTypes.number
    })
}

export default EditableDate