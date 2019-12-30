import React, { useState, useEffect } from 'react'
import SingleLink from './SingleLink';
import { Box, Heading, Text, Button} from 'grommet';
import Loading from '../Loading'

const spinning = (
    <svg
        version="1.1"
        viewBox="0 0 32 32"
        width="22px"
        height="22px"
        fill="#333333"
    >
        <path
        opacity=".25"
        d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
        />
        </path>
    </svg>
);

/**
* @author
* @function MultipleLinks
**/

const MultipleLinks = ({visible, title, links, data}) => {
	const [fetching, setFetching] = useState(false)

useEffect(()=> {
	setFetching(true)
})

return (
	<Box fill={false} width={'medium'}>
		{/* {fetching && <h3>something</h3>} */}
		<Box 
			direction={'row'}
			align={'center'}
			gap={'medium'}
		> 
			<Heading level={4}>{title}</Heading>
			{ data.status=='loading' && spinning }
		</Box>
		{
			data.status =='error'
			?
				<Text size={'small'} color={'status-error'}> {data.message}  </Text>
			:
			data.urls!=undefined && data.urls.length==0
			?
				<Text size={'medium'}> No results found </Text>
			:
			data.urls!=undefined && data.urls.length!=0
			?
				<Box>
					{data.urls.map((item)=>(
						<SingleLink
							title={item.title}
							url={item.url}
							timestamp={item.timestamp}
						/>
					))}
					<Button >
						<Text size={'xsmall'}> see all </Text>
					</Button>
				</Box>
			:
				null
		}
	</Box>
)}

MultipleLinks.defaultProps = {
	title: "Multiple Links",
	links: []
}

export default MultipleLinks