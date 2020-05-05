import React, { useState, useEffect } from "react";
import {
  Anchor,
  Select,
  Grommet,
  Box,
  Calendar,
  Grid,
  Heading,
  Text,
  Button,
  ResponsiveContext,
  TextInput,
  TextArea,
  Tab,
  Tabs,
  RadioButtonGroup,
} from "grommet";
import { TattleTheme } from "../src";
import { Slack, Twitter, GitHub } from "react-feather";
import SimpleHeader from "../src/components/atoms/Header/SimpleHeader";
import { ToastHeader } from "react-bootstrap";
import { Edit } from "grommet-icons";
import { Molecules } from "../src";
const {
  EditableText,
  EditableEnum,
  EditableDate,
  EditableDateRange,
  EditableNumber,
  EditableLocationCoord,
} = Molecules;

export default {
  title: "Metadata",
};

const enumOptions = ["Photo", "Video", "Other Media"];

var textData = {
  id: 1,
  type: "text",
  label: "Text",
  value: "Lorem ipsum.",
  author: 100,
};
var numberData = {
  id: 2,
  type: "number",
  label: "Number",
  value: 15,
  author: 101,
};
var dateData = {
  id: 3,
  type: "date",
  label: "Date",
  value: "2020-03-22",
  author: 102,
};
var locationTextData = {
  id: 4,
  type: "location_text",
  label: "Location Text",
  value: "Punjab",
  author: 103,
};
var locationCoordData = {
  id: 5,
  type: "location_lat_lon",
  label: "Location Coordinates",
  value: [59.69512, 20.51566],
  author: 102,
};
var dateRangeData = {
  id: 6,
  type: "dateRange",
  label: "Date Range",
  value: ["2020-03-10T00:00:00.000Z", "2020-03-27T00:00:00.000Z"],
  author: 106,
};
var enumData = {
  id: 7,
  type: "text",
  label: "Selection",
  value: "Photo",
  author: 109,
};

var dataObj = {
  textData: textData,
  numberData: numberData,
  dateData: dateData,
  locationTextData: locationTextData,
  locationCoordData: locationCoordData,
  dateRangeData: dateRangeData,
  enumData: enumData,
};

export const MetadataTabs = () => {
  const [currentData, setCurrentData] = useState(dataObj);
  var tabElems = [currentData.textData, currentData.dateRangeData];
  const syncIt = (elems) => {
    elems.forEach(function(tabElem) {
      console.log(tabElem);
    });
  };
  const updateData = (data) => {
    for (var key in currentData) {
      if (currentData[key].id == data.id) {
        var newData = { ...currentData };
        newData[key] = data;
        setCurrentData(newData);
        return;
      }
    }
  };
  return (
    <Grommet theme={TattleTheme} full>
      <Tabs justify="start">
        <Tab title="tab 1" alignSelf="start">
          <EditableText
            data={currentData.textData}
            updateCallback={updateData}
          />
          <EditableDateRange
            data={currentData.dateRangeData}
            updateCallback={updateData}
          />
          <Button
            margin={{ left: "medium" }}
            label="Sync"
            onClick={() => {
              syncIt(tabElems);
            }}
          />
        </Tab>
        <Tab title="tab 2">
          <EditableDate
            data={currentData.dateData}
            updateCallback={updateData}
          />
        </Tab>
      </Tabs>
    </Grommet>
  );
};

export const RadioGroupMetadata = ({ values }) => {
  const [value, setValue] = React.useState("one");
  return (
    <RadioButtonGroup
      name="cta"
      options={["on", "off"]}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export const TextMetadata = () => {
  const [currentData, setCurrentData] = useState(textData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableText data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};

export const EnumMetadata = () => {
  const [currentData, setCurrentData] = useState(enumData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableEnum
        data={currentData}
        options={enumOptions}
        updateCallback={updateData}
      />
    </Grommet>
  );
};

export const DateMetadata = () => {
  const [currentData, setCurrentData] = useState(dateData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableDate data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};

export const DateRangeMetadata = () => {
  const [currentData, setCurrentData] = useState(dateRangeData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableDateRange data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};

export const NumberMetadata = () => {
  const [currentData, setCurrentData] = useState(numberData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableNumber data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};

export const LocationTextMetadata = () => {
  const [currentData, setCurrentData] = useState(locationTextData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableText data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};
export const LocationCoordinateMetadata = () => {
  const [currentData, setCurrentData] = useState(locationCoordData);
  const updateData = (data) => setCurrentData(data);
  return (
    <Grommet theme={TattleTheme} full>
      <EditableLocationCoord data={currentData} updateCallback={updateData} />
    </Grommet>
  );
};
