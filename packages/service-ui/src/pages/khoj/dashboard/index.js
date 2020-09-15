import React, { useRef, useEffect, useState } from "react"
import { Box, Heading, Text, Select } from "grommet"
import * as d3 from "d3"
import { LDAvis } from "./ldavis.v1.0.1"
import AppShell from "../../../components/atomic/AppShell"
import { PlainExternalLink } from "@bit/tattle-tech.core-ui.links"
import { footerItems, primaryNav } from "../../../config/options"
import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"
import styled from "styled-components"
import { navigate } from "gatsby"
import { parse } from "query-string"
import { data as dataWeek37 } from "./data/wk37"
import { data as dataWeek36 } from "./data/wk36"
import { data as dataWeek35 } from "./data/wk35"
import { data as dataWeek34 } from "./data/wk34"

const D3Div = styled.div`
  path {
    fill: none;
  }
`

/**
 * @author
 * @function Dashboard
 **/
const getData = weekNumber => {
  var data
  switch (parseInt(weekNumber)) {
    case 37:
      data = dataWeek37
      break
    case 36:
      data = dataWeek36
      break
    case 35:
      data = dataWeek35
      break
    case 34:
      data = dataWeek34
      break
    default:
      data = dataWeek37
      break
  }
  //console.log({ headlines: data["per_cluster_headlines"]["1"][0]["headline"] })
  return data
}

const Dashboard = ({ location }) => {
  const ldavisRef = useRef()
  const [value, setValue] = React.useState("September 7 - September 13, 2020")
  const [currentData, setCurrentData] = useState(
    getData(parse(location.search).week)
  )
  const [relatedArticles, setRelatedArticles] = useState([])
  const [selectedTopicId, setSelectedTopicId] = useState(-1)

  useEffect(() => {
    console.log("current location changed")
    // console.log({ location })
    // console.log("current data changed")
    // console.log({ ldavisRef.current, data })
    ldavisRef.current.innerHTML = ""
    setCurrentData(getData(parse(location.search).week))
    LDAvis(ldavisRef.current, currentData, "#visualization", onClusterSelected)
  }, [location])

  const onDateRangeChanged = option => {
    setValue(option)
    var weekNumber
    switch (option) {
      case "September 7 - September 13, 2020":
        weekNumber = 37
        break
      case "August 31 - September 6, 2020":
        weekNumber = 36
        break
      case "August 24 - August 30, 2020":
        weekNumber = 35
        break
      case "August 17 - August 23, 2020":
        weekNumber = 34
        break
      default:
        weekNumber = 37
        break
    }

    navigate(`/khoj/dashboard?week=${weekNumber}`)
  }

  const onClusterSelected = clusterId => {
    setSelectedTopicId(clusterId.topics)
  }

  return (
    <AppShell
      headerLabel={"Khoj"}
      headerTarget={"/khoj"}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
    >
      <Box direction={"column"} flex={false} gap={"medium"}>
        <Heading level={2}> Themes in Factchecking Articles</Heading>
        <Box direction={"row"} alignContent={"center"} gap={"xsmall"}>
          <TwitterShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <TwitterIcon size={32} round={true} bgStyle={{ fill: "#514e80" }} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <WhatsappIcon
              size={32}
              round={true}
              bgStyle={{ fill: "#514e80" }}
            />
          </WhatsappShareButton>
          <RedditShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <RedditIcon size={32} round={true} bgStyle={{ fill: "#514e80" }} />
          </RedditShareButton>
          {/*<LinkedinShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <LinkedinIcon
              size={32}
              round={true}
              bgStyle={{ fill: "#514e80" }}
            />
          </LinkedinShareButton>*/}
        </Box>
        <Box gap={"medium"} flex={true}>
          <Text>
            This interactive dashboard displays the themes in factchecking
            articles we scraped in the selected week. Articles are grouped into
            thematic clusters using an algorithm known as Gibbs Sampling
            Dirichlet Multinomial Mixture (GSDMM), which clusters the article
            headlines based on the similarity of their constituent words. The
            number of clusters is decided by a human (a Tattle team member)
            after some experimentation, with the aim of producing meaningful
            results. The algorithm does not generate names for the clusters. We
            have chosen to leave them unnamed to allow flexible interpretation,
            but they are numbered for identification. Hovering over a cluster on
            the left displays its constituent words on the right. Clicking on a
            cluster displays links to the articles that comprise it. The
            dashboard design is inspired by LDAvis, a visualisation technique
            for topic models.
          </Text>
          <Box width={"medium"} flex={true}>
            <Select
              options={[
                "September 7 - September 13, 2020",
                "August 31 - September 6, 2020",
                "August 24 - August 30, 2020",
                "August 17 - August 23, 2020",
              ]}
              value={value}
              onChange={({ option }) => onDateRangeChanged(option)}
            />
          </Box>
        </Box>
        <Box direction={"row"}>
          <Box width={"540px"}>
            <Text size={"medium"}>Thematic Cluster Map</Text>
            <Text size={"small"}>
              2D representation of mathematical 'distances' between the
              clusters)
            </Text>
          </Box>
          {/* <Box width={"90px"}></Box> */}
          <Box width={"360px"}>
            <Text size={"medium"}>Top-10 Words in cluster</Text>
          </Box>
        </Box>

        <Box flex={true}>
          <D3Div ref={ldavisRef} id="visualization"></D3Div>
        </Box>
        <Box>
          <Heading level={3}>Articles in this Cluster</Heading>
          {selectedTopicId === -1 && (
            <Text size={"medium"}>
              {" "}
              Clicking on a cluster will show articles linked to this
            </Text>
          )}
          {selectedTopicId !== -1 &&
            currentData["per_cluster_headlines"] &&
            currentData["per_cluster_headlines"][selectedTopicId].map(
              headline => {
                return (
                  <Box margin={{ bottom: "medium" }}>
                    <PlainExternalLink
                      key={"abc"}
                      href={headline.url}
                      target="_blank"
                    >
                      {" "}
                      <Box>
                        <Text size={"medium"}> {headline.headline}</Text>
                        <Text size={"small"}> {headline.url}</Text>
                      </Box>
                    </PlainExternalLink>
                  </Box>
                )
              }
            )}
        </Box>
        <Box>
          <Heading level={3}> Licence</Heading>
          <Text>
            {" "}
            Please contact us at admin@tattle.co.in to access the underlying
            data{" "}
          </Text>
        </Box>
      </Box>
    </AppShell>
  )
}

export default Dashboard
