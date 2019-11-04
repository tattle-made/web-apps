import React, { useState, useEffect } from 'react'
import {Box, Heading} from 'grommet'
import { Search } from 'react-feather';

import { useDispatch, useSelector} from 'react-redux';

import {post} from '../../service/shell-server'

import MoleculeSearchFilterOptions from '../molecules/MoleculeSearchFilterOptions';

import {Atoms, Molecules} from '@tattle-made/ui'
import MoleculeDuplicatePost from '../molecules/MoleculeDuplicatePost';

import * as Axios from 'axios';

const {ExternalLink, MediaBlock, MultiModalInput} = Atoms;
const {MultipleLinks} = ExternalLink;
const {MultipleWithClickMoreButton, SinglePost} = MediaBlock;
const {MoleculeSearchInputForm} = Molecules;



const alsoSeenOnData = {
   loading : false, // true or false,
   // error : 'Could not connect to service.',
	items : [
		{
			title: 'Alt News',
			url : 'https://www.altnews.in/authors-wikipedia-page-vandalised-after-times-critical-cover-story-on-pm-modi/',
			timestamp: "10th May 2019"
		},
		{
			title: 'Boom Live',
			url : 'https://www.boomlive.in/amidst-shutdown-rumours-lakshmi-vilas-bank-files-police-complaint/',
			timestamp: "9th May 2019"
		},
		{
			title: 'Facebook',
			url : 'https://www.altnews.in/authors-wikipedia-page-vandalised-after-times-critical-cover-story-on-pm-modi/',
			timestamp: "8th May 2019"
		}
	]
}


/**
* @author denny
* @function SectionSearchWhatsappPosts
**/
const SectionSearchWhatsappPosts = () => {
   const defaultOptions = {
      duplicate: true,
      approximate: true,
      similar: true,
      stories: false
   }

   const [fetching, setFetching] = useState(false)
   const [options, setOptions] = useState(defaultOptions)
   const [duplicateResult, setDuplicateResult] = useState({status: 'default'})

   const test = useSelector( state => state.loginUser.username);

   useEffect(()=> {
      setFetching(true)
   })

   useEffect(() => {
      
   })

   const onSubmit = ((payload) => {
      console.log('searched : ', payload);
      if(payload.mode == 'url'){
         post(
            '/search/duplicate',
            {
               url: payload.data.query,
               threshold: 0.6
            },
            'be2742a0-e610-11e9-98c0-cfafcf9716d4'
         )
         .then((data) => {
            console.log(' API RESPONSE FOR DUPLICATE ===='); 
            console.log(data);
            return data;
         })
         .then((data) => setDuplicateResult({...data, status:'data'}))
         .catch((err) => console.log(err));
      }
   })

 return (
     <Box
        direction={'column'}
        gap={'medium'}
     >

         <Heading level={3}>{test} </Heading>

         <MultiModalInput onSubmit={onSubmit}/>
         
         <MoleculeSearchFilterOptions
            onSave={(options) => setOptions(options)}/>

         <MultipleLinks
            visible={options.stories}
            title={"Also Seen on"}
            loading={alsoSeenOnData.loading}
            links={alsoSeenOnData.items}
            error={alsoSeenOnData.error}
         />

         <MoleculeDuplicatePost
            visible={options.duplicate}
            title={'Duplicate'}
            data={duplicateResult}/>

         <MultipleWithClickMoreButton
            visible={options.approximate}
            label={'Approximate Matches'}
         />

         {/* {options.similar &&
            <MultipleWithClickMoreButton
               label={'Semantically Similar Matches'}
            />
         } */}    
   </Box>
)
}

export default SectionSearchWhatsappPosts