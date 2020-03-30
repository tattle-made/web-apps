import React, { useState } from 'react';
import {Anchor, Select, Grommet, Box, Calendar, Grid, Heading, Text, Button, ResponsiveContext, TextInput, TextArea, Tab, Tabs} from 'grommet';
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

const textData = {'id':1, 'type':'text', 'label':'Text', 'value':'Lorem ipsum.', 'author':100};
const numberData = {'id':2, 'type':'number', 'label':'Number', 'value': 15, 'author':101};
const dateData = {'id':3, 'type':'date', 'label':'Date', 'value':'2020-03-22', 'author':102};
const locationTextData = {'id':4, 'type':'location_text', 'label':'Location Text', 'value':'Punjab', 'author':103};
const locationCoordData = {'id':5, 'type':'location_lat_lon', 'label':'Location Coordinates', 'value':[59.69512,20.51566], 'author':102};
const dateRangeData = {'id':6, 'type':'dateRange', 'label':'Date Range', 'value':['2020-03-10T00:00:00.000Z','2020-03-27T00:00:00.000Z'], 'author':106};
const enumData = {'id':7, 'type':'text', 'label':'Selection', 'value':'Photo', 'author':109};

const tabElems = [textData, dateRangeData];

const syncIt = (elems) => {
	elems.forEach(function (tabElem) {
	    console.log(tabElem);
	});
}

export const MetadataTabs = () => (
    <Grommet theme={TattleTheme} full>
    	<Tabs>
	      	<Tab title="tab 1">
		    	<EditableText data={textData} />
		  		<EditableDateRange data={dateRangeData} />
		    	<Button margin={{'left':'medium'}} label="Sync" onClick={() => {syncIt(tabElems)}} />
		  	</Tab>
		  	<Tab title="tab 2">
		    	<EditableDate data={dateData} />
		  	</Tab>
	  	</Tabs>
    </Grommet>
);

export const TextMetadata = () => (
    <Grommet theme={TattleTheme} full>
      <EditableText data={textData} />
      <EditableText data={textData} isEditable={false} />
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
