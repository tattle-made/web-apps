import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableNumberEditView from './EditableNumberEditView';
import EditableNumberReadView from './EditableNumberReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableNumber = ({data}) => {
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
                    <EditableNumberReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableNumberEditView data={currentData} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableNumber.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.number,
        author: PropTypes.number
    })
}

export default EditableNumber