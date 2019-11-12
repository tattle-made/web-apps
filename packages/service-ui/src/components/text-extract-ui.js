/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import onboardingImage from '../assets/onboarding.png'
import {extractText} from '../services/tattle-services'
import {getSignedUrl} from '../services/tattle-services-auth'
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import Feedback from './feedback';
import Logo from '../components/logo'
import Result from '../components/result'

const SHELL_EXPRESS_SERVER_URL = 'http://13.233.84.78:3003'


const MyDropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      console.log('==files==')
      console.log(acceptedFiles);

      const file = acceptedFiles[0]
      const fileName = uuidv1();
      // setServiceState({type:'PREVIEW', payload:{file:{preview: URL.createObjectURL(file)}}})
      setServiceState({type: 'LOADING', message: 'uploading'})
      getSignedUrl(fileName, file.type)
        .then((url) => {
          console.log('--url--');
          console.log(url);
          var options = {
            headers: {
              'Content-Type': file.type
            }
          };
          return axios.put(url, file, options)
          .then((response) => {
            return extractText(`https://tattle-services.s3.ap-south-1.amazonaws.com/${fileName}`)
            .then((result) => {
              setServiceResult(result)
              setServiceState({type:'NEUTRAL', message:'waiting for upload'})
            })
            .catch((err) => setServiceState({type:'ERROR', message:'Something went wrong'}));
          })
          // api call to create post in the backend
          .then((response)=>{
            console.log(`Making API call to ${SHELL_EXPRESS_SERVER_URL}`);
            return axios.post(
              `${SHELL_EXPRESS_SERVER_URL}/api/posts/`,
              {
                "type" : "image",
                "data" : "",
                "filename": fileName,
                "userId" : 159
              },
              {
                headers: {
                  token: 'be2742a0-e610-11e9-98c0-cfafcf9716d4'
                }
              }
            );
          })
        })
        .catch((err)=>console.log('==>error ',err))

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const [serviceState, setServiceState] = useState({type:'NEUTRAL', message:'waiting for image'});
    const [serviceResult, setServiceResult] = useState('');

    const onSubmit = ()=>{
      setServiceState({type: 'LOADING', message: 'uploading...'})
      extractText('https://tattle-services.s3.ap-south-1.amazonaws.com/GoodMorning_b5dc68a5-19d3-40b2-96f4-0549a844a84c-2aee222c-f5d4-48cd-a3c2-9a3614daad44_cmprsd_40.jpg')
      .then((result) => setServiceState({type: 'RESULT', message: result}))
      .catch((err) => setServiceState({type:'ERROR', message:'Something went wrong'}));
    }

    return (
      <div>
        <div sx={{visibility:'hidden'}}>
          <Logo/>
        </div>


        <div sx={{
          width: ['100%', '100%', '500px']
        }}>
          <div {...getRootProps()}
            sx={{
                padding: 4,
                borderRadius: '0.6em',
                borderWidth: '3px',
                borderColor: 'red.1',
                borderStyle: 'dotted',
                textAlign: 'center',
            }}
          >
            <input {...getInputProps()} />
            {
              isDragActive ?
                <h3> Upload your meme </h3> :
                <p> Drag 'n' drop your meme here, or click to select files</p>
            }
          </div>
          <div sx={{
            textTransform: 'uppercase',
            color: 'gray.6  ',
            marginTop: 2,
            textAlign: 'right',
            fontSize:8
          }}>
            <h5> status : {serviceState.message}</h5>
          </div>
        </div>

        {/* <button onClick={onSubmit}> Test </button> */}
        {
          serviceResult!=''?
          <div>
            <Result message={serviceResult}/>
            {/* <Feedback/>  */}
          </div>
          :
          null
        }
      </div>
    )
  }

export default MyDropzone;