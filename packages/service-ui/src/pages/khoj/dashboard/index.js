import React, { useRef, useEffect, useState } from "react"
import { Box, Heading, Text, Select, Collapsible, Button } from "grommet"
import * as d3 from "d3"
import { LDAvis } from "../../../data/ldavis.v1.0.1"
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
import { data as dataWeek37 } from "../../../data/wk37"
import { data as dataWeek36 } from "../../../data/wk36"
import { data as dataWeek35 } from "../../../data/wk35"
import { data as dataWeek34 } from "../../../data/wk34"
import { HelpCircle, XCircle } from "react-feather"

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
  const [showInstructions, setShowInstructions] = useState(false)

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
            title={
              "Explore weekly themes in Fact Checking Articles using Tattle's Topic Dashboard"
            }
          >
            <TwitterIcon size={32} round={true} bgStyle={{ fill: "#514e80" }} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashboard"}
          >
            <WhatsappIcon
              size={32}
              round={true}
              bgStyle={{ fill: "#514e80" }}
            />
          </WhatsappShareButton>
          <RedditShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashboard"}
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
            This interactive dashboard displays the themes in fact-checking
            articles we scraped from IFCN-certified websites in the selected
            week. Articles are grouped into thematic clusters using an algorithm
            known as Gibbs Sampling Dirichlet Multinomial Mixture (GSDMM), which
            groups together article headlines based on the similarity of their
            constituent words. The number of clusters is decided by a human (a
            Tattle team member) after some experimentation, with the aim of
            producing meaningful results. The algorithm does not generate names
            for the clusters. We have chosen to leave them unnamed to allow
            flexible interpretation, but they are numbered for identification.{" "}
          </Text>
          <Box>
            <Box
              round={"xsmall"}
              direction={"row"}
              onClick={() => {
                setShowInstructions(!showInstructions)
              }}
              align={"center"}
              gap={"xsmall"}
              margin={{ bottom: "small" }}
              focusIndicator={false}
              background={"light-1"}
              flex={"shrink"}
            >
              {showInstructions ? (
                <XCircle size={16} color={"#E56D67"} />
              ) : (
                <HelpCircle size={16} color={"#E56D67"} />
              )}
              {!showInstructions && (
                <Text size={"small"} color={"#E56D67"}>
                  {" "}
                  How to navigate this dashboard
                </Text>
              )}
            </Box>

            <Collapsible open={showInstructions}>
              <Text>
                Hovering over a cluster circle on the left displays the
                cluster's constituent words, along with their occurrence
                frequencies, on the right. Clicking on a cluster circle displays
                links to the fact-checking articles within it, below the
                visualisation (scroll down to see the links). The dashboard
                design is inspired by LDAvis, a visualisation technique for
                topic models.
              </Text>
            </Collapsible>
          </Box>
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
          <Heading level={3}> License</Heading>
          <Text>
            {" "}
            Contains information from Tattle Fact Checking Sites Database, which
            is made available{" "}
            <PlainExternalLink
              href={"https://services.tattle.co.in/khoj/explore"}
              target="_blank"
            >
              <Text color={"brand"} weight={"bold"}>
                here{" "}
              </Text>
            </PlainExternalLink>
            under the
            <PlainExternalLink
              href={"https://opendatacommons.org/licenses/odbl/1-0/"}
              target="_blank"
            >
              <Text color={"brand"} weight={"bold"}>
                {" "}
                Open Database License
              </Text>
            </PlainExternalLink>
            <Text>
              {" "}
              (ODbL). All the visualizations here are licensed under{" "}
            </Text>
            <PlainExternalLink
              href={"https://creativecommons.org/licenses/by-sa/4.0/"}
              target="_blank"
            >
              <Text color={"brand"} weight={"bold"}>
                {" "}
                CC BY-SA 4.0
              </Text>
            </PlainExternalLink>
            .
          </Text>
        </Box>
      </Box>
    </AppShell>
  )
}

export default Dashboard
