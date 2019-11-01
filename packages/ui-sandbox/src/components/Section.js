import React, { useState, useEffect } from 'react'
import {Box, Heading, Text, Button, CheckBox, Collapsible, RangeInput} from 'grommet'
import {Molecules, Atoms} from '@tattle-made/ui'

import SinglePost from '../atoms/MediaBlock/SinglePost';
import { MultipleLinks } from '../atoms/ExternalLink';


const {MediaBlock} = Atoms
const {MultipleWithClickMoreButton} = MediaBlock


const {MoleculeSearchInputForm} = Molecules;

/**
* @author
* @function SectionSearchWhatsappPosts
**/

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


const SearchFilter = ({onSave, init}) => {
   const APPROXIMATE_THRESHOLD = 40;

   const[collapse, setCollapse]=useState(false)
   const[duplicate, setDuplicate]=useState(true);
   const[approximate, setApproximate]=useState(true);
   const [approximateThreshold, setApproximateThreshold] = React.useState(APPROXIMATE_THRESHOLD);
   const[similar, setSimilar]=useState(true);
   const[stories, setStories]=useState(true);

   return(
      <Box gap="medium" width={'medium'}>
         <Button onClick={() => setCollapse(!collapse)} >
            <Text size={'small'}> settings </Text>
         </Button>
         <Collapsible open={collapse}>
            <Box gap={'medium'}>
               <CheckBox
                  checked={duplicate}
                  label="Duplicate Posts"
                  onChange={(event) => setDuplicate(event.target.checked)}/>
               <Box direction={'row'} align={'center'} gap={'small'}>
                  <CheckBox
                     checked={approximate}
                     label="Approximate Matches"
                     onChange={(event) => setApproximate(event.target.checked)}/>
                  <Text size="'small"> {approximateThreshold} </Text>
                  <RangeInput onChange={(e) => setApproximateThreshold(e.target.value)} value={approximateThreshold} />
               </Box>
               <CheckBox
                  checked={similar}
                  label="Semantically Similar Posts"
                  onChange={(event) => setSimilar(event.target.checked)}/>
               <CheckBox
                  checked={stories}
                  label="External Stories"
                  onChange={(event) => setStories(event.target.checked)}/>

               <Button 
                  width={'small'} 
                  label={'save'} 
                  onClick={ ()=> {
                     setCollapse(!collapse)
                     onSave({duplicate, approximate, similar, stories})
                  }}
               />
            </Box>
         </Collapsible>
      </Box>
   )
}

const SectionSearchWhatsappPosts = () => {
   const defaultOptions = {
      duplicate: true,
      approximate: true,
      similar: true,
      stories: false
   }

   const [options, setOptions] = useState(defaultOptions)

useEffect(()=> {
  
})

 return (
     <Box
        direction={'column'}
        gap={'medium'}
     >
        <Box
            width={'large'}
            direction={'column'}
            gap={'medium'}
         >
            <MoleculeSearchInputForm />
         </Box>
         
         {/* Settings Section */}
         <SearchFilter
            onSave={(options) => setOptions(options)}
         />

         {options.stories && 
            <MultipleLinks
               title={"Also Seen on"}
               loading={alsoSeenOnData.loading}
               links={alsoSeenOnData.items}
               error={alsoSeenOnData.error}
            />
         }

         {options.duplicate &&
            <Box>
               <Heading level={4}>Duplicate</Heading>
               <SinglePost
                     type={'image'}
                     src={"https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/image-posts%2F425f24f2-eda6-4e9f-99ec-d0eeb0b64db4?alt=media&token=fdbbb89f-1662-4652-9037-768a9d8b7424"}
               />
            </Box>
         }

         {options.approximate &&
            <MultipleWithClickMoreButton
               label={'Approximate Matches'}
            />
         }

         {options.similar &&
            <MultipleWithClickMoreButton
               label={'Semantically Similar Matches'}
            />
         }


      
          
    </Box>
 )
}

export default SectionSearchWhatsappPosts