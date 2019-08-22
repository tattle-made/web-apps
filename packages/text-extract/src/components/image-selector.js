/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {extractText} from '../services/tattle-services'
import {getSignedUrl} from '../services/tattle-services-auth'
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import Feedback from './feedback';
import Logo from '../components/logo'
import Result from '../components/result'

const ImageSelector = (props) => {
    const [serviceState, setServiceState] = useState({type:'NEUTRAL', message:'waiting for image'});

    const onDrop = useCallback(acceptedFiles => {
        console.log('use file here');
        // const file = acceptedFiles[0]
        // const fileName = uuidv1();
        // setServiceState({type: 'LOADING', message: 'uploading'})
        // getSignedUrl(fileName, file.type)
        //   .then((url) => {
        //     console.log('--url--');
        //     console.log(url);
        //     var options = {
        //       headers: {
        //         'Content-Type': file.type
        //       }
        //     };
        //     return axios.put(url, file, options)
        //     .then((response) => {
        //       return extractText(`https://tattle-services.s3.ap-south-1.amazonaws.com/${fileName}`)
        //       .then((result) => {
        //         setServiceResult(result)
        //         setServiceState({type:'NEUTRAL', message:'waiting for upload'})
        //       })
        //       .catch((err) => setServiceState({type:'ERROR', message:'Something went wrong'}));
        //     })
        //   })
        //   .catch((err)=>console.log('==>error ',err))
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return(
        <div {...getRootProps()}>
            <input {...getInputProps()}/>
            {
                isDragActive ?
                    <p> Drop the files here </p>:
                    <p> Drag and Drop your meme here </p>
            }
        </div>
    )
}

export default ImageSelector