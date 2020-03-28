import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'grommet'
import EditableEnumEditView from './EditableEnumEditView';
import EditableEnumReadView from './EditableEnumReadView';

/*
    available modes : 'view' or 'edit'. default is 'view'
*/
const EditableEnum = ({data, options}) => {
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
                    <EditableEnumReadView data={currentData} onEdit={onEditClick}/>
                :
                    <EditableEnumEditView data={currentData} options={options} onUpdate={onUpdateClick}/>
            }
        </Box>
    )
}

EditableEnum.PropTypes = {
    data: PropTypes.shape({
        id : PropTypes.number,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        author: PropTypes.number
    })
}

export default EditableEnum