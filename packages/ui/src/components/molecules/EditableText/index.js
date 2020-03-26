import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableTextEditView from './EditableTextEditView';
import EditableTextReadView from './EditableTextReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableText = ({data}) => {
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
                    <EditableTextReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableTextEditView data={currentData} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableText.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        author: PropTypes.number
    })
}

export default EditableText