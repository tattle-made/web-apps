import React, { useState } from 'react';
import {Anchor, Select, Grommet, Box, Calendar, Grid, Heading, Text, Button, ResponsiveContext, TextInput, TextArea} from 'grommet';
import { TattleTheme } from '../src';
import {Slack, Twitter, GitHub} from 'react-feather';
import SimpleHeader from '../src/components/atoms/Header/SimpleHeader';
import { ToastHeader } from 'react-bootstrap';
import { Edit } from "grommet-icons";
import {EditableText, EditableEnum, EditableDate, EditableDateRange, EditableNumber, EditableLocationCoord} from '../src/components/molecules';


export default {
  title: 'Metadata',
};

const enumOptions = ['Photo', 'Video', 'Other Media'];

const textData = {'id':1, 'type':'text', 'label':'Text', 'value':'Lorem ipsum.', 'author':100, 'mode':'view'};
const numberData = {'id':2, 'type':'number', 'label':'Number', 'value': 15, 'author':101, 'mode':'view'};
const dateData = {'id':3, 'type':'date', 'label':'Date', 'value':'2020-03-22', 'author':102, 'mode':'view'};
const locationTextData = {'id':4, 'type':'location_text', 'label':'Location Text', 'value':'Punjab', 'author':103, 'mode':'view'};
const locationCoordData = {'id':5, 'type':'location_lat_lon', 'label':'Location Coordinates', 'value':[59.69512,20.51566], 'author':102, 'mode':'view'};
const dateRangeData = {'id':6, 'type':'dateRange', 'label':'Date Range', 'value':['2020-03-10T00:00:00.000Z','2020-03-27T00:00:00.000Z'], 'author':106, 'mode':'view'};
const enumData = {'id':7, 'type':'text', 'label':'Selection', 'value':'Photo', 'author':109, 'mode':'view'};


// Components of different metadata types to be refactored into one component calling children components for displaying/populating different fields.

export const TextMetadata = () => (
    <Grommet theme={TattleTheme} full>
      <EditableText data={textData} />
    </Grommet>
);

export const EnumMetadata = () => (
    <Grommet theme={TattleTheme} full>
        <EditableEnum data={enumData} options={enumOptions} />
    </Grommet>
);

export const DateMetadata = () => (
    <Grommet theme={TattleTheme} full>
    	<EditableDate data={dateData} />
    </Grommet>
);

export const DateRangeMetadata = () => (
    <Grommet theme={TattleTheme} full>
    	<EditableDateRange data={dateRangeData} />
    </Grommet>
);

export const NumberMetadata = () => (
    <Grommet theme={TattleTheme} full>
    	<EditableNumber data={numberData} />
    </Grommet>
);

export const LocationTextMetadata = () => (
    <Grommet theme={TattleTheme} full>
   		<EditableText data={locationTextData} />
    </Grommet>
);

export const LocationCoordinateMetadata = () => (
    <Grommet theme={TattleTheme} full>
   		<EditableLocationCoord data={locationCoordData} />
    </Grommet>
);

const LocationCoordMetaView = (props) => {
	return (
		<Box
	        pad="medium"
	        margin="medium"
	        background={{ color: "light-2", opacity: "strong" }}
	        gap="small"
	        width="medium"
	      	height="150px"
	      >
	      	
	      	  	<Grid
			      fill
			      areas={[
			        { name: "nav", start: [0, 0], end: [2, 0] },
			        { name: "main", start: [2, 0], end: [2, 0] }
			      ]}
			      columns={["small", "flex"]}
			      rows={["flex"]}
			      gap="small"
			      margin="none"
			    >
			      <Box gridArea="nav">
				    <Heading level={3} margin={{'top':'xsmall', 'bottom': 'none'}}>
	                    {props.data.label}
	                </Heading>
	              </Box>
			      <Box gridArea="main">
			      	<Button size="small" focusIndicator={false} icon={<Edit/>} onClick={editInfo(props.data)} />
			      </Box>
			    </Grid>

	        <Text>{props.data.value.split(',')[0]}, {props.data.value.split(',')[1]}</Text>
	      </Box>
	      )
}

const LocationCoordMetaEdit = (props) => {
	return (
		<Box
	        pad="medium"
	        margin="medium"
	        background={{ color: "light-2", opacity: "strong" }}
	        gap="small"
	        width="medium"
	      	height={{'min':'150px'}}
	      >
            <TextInput value={props.data.label} />
            <TextInput value={props.data.value.split(',')[0]} />
            <TextInput value={props.data.value.split(',')[1]} />
            <Box align="center" pad="none">
		      <Button primary label="Update" onClick={() => {}} />
		    </Box>
	    </Box>
	      )
}


const DateRangeMetaView = (props) => {
	return (
		<Box
	        pad="medium"
	        margin="medium"
	        background={{ color: "light-2", opacity: "strong" }}
	        gap="small"
	        width="medium"
	      	height={{'min':'150px', 'max':'170px'}}
	      >
	      	  	<Grid
			      fill
			      areas={[
			        { name: "nav", start: [0, 0], end: [2, 0] },
			        { name: "main", start: [2, 0], end: [2, 0] }
			      ]}
			      columns={["small", "flex"]}
			      rows={["flex"]}
			      gap="small"
			      margin="none"
			    >
			      <Box gridArea="nav">
				    <Heading level={3} margin={{'top':'xsmall', 'bottom': 'none'}}>
	                    {props.data.label}
	                </Heading>
	              </Box>
			      <Box gridArea="main">
			      	<Button size="small" focusIndicator={false} icon={<Edit/>} onClick={() => {}} />
			      </Box>
			    </Grid>

	        <Text>From {props.data.value.split(',')[0].split("T")[0]}</Text>
	        <Text>To {props.data.value.split(',')[1].split("T")[0]}</Text>
	      </Box>
	      )
}

const DateRangeMetaEdit = (props) => {
	return (
		<Box
	        pad="medium"
	        margin="medium"
	        background={{ color: "light-2", opacity: "strong" }}
	        gap="small"
	        width="medium"
	      	height={{'min':'150px'}}
	      	align="center"
	      >
            <TextInput value={props.data.label} />
        	<Calendar
			  size="small"
			  dates={[[props.data.value.split(',')[0], props.data.value.split(',')[1]]]}
			  onSelect={(date) => {}}
			/>

			<Box align="center" pad="none">
		      <Button primary label="Update" onClick={() => {}} />
		    </Box>
        </Box>
	      )
}


const ContentGrid = ({children}) => {
    const size = React.useContext(ResponsiveContext);
    console.log(size);
    return(
        size=='medium'|| size=='large'?
            <Box 
                width={'960px'} 
                pad={'small'}
                margin={{top:'medium'}}
                alignSelf={'center'}
            >
                {children}
            </Box>
        :
            <Box 
                full
                pad={'small'}
                margin={{top:'medium'}}
            >
                {children}
            </Box>
    )
}

