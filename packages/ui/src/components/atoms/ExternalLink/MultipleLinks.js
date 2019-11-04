import React, { useState, useEffect } from 'react'
import SingleLink from './SingleLink';
import { Box, Heading, Text, Button} from 'grommet';
import Loading from '../Loading'

/**
* @author
* @function MultipleLinks
**/



const MultipleLinks = ({visible, title, links, loading, error}) => {
	const [fetching, setFetching] = useState(false)

useEffect(()=> {
	setFetching(true)
})

return (
	visible ?
	<Box fill={false} width={'medium'}>
		{/* {fetching && <h3>something</h3>} */}
		{title && <Heading level={4}>{title}</Heading>}
		{
			loading 
			? 
				<Loading/>
			:
			error!=undefined 
			?
				<Text size={'medium'} color={'status-error'}> {error}  </Text>
			:
			links.length==0
			?
				<Text size={'medium'}> No results found </Text>
			:
				<Box>
					{links.map((item)=>(
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
		}
	</Box>
	:
	<Box></Box>
	)
}

MultipleLinks.defaultProps = {
	title: "Multiple Links",
	links: []
}

export default MultipleLinks