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
import { data as dataWeek31 } from "./data/wk31"
import { data as dataWeek32 } from "./data/wk32"
import { data as dataWeek35 } from "./data/wk35"

/**
 * @author
 * @function Dashboard
 **/

const Dashboard = () => {
  const ldavisRef = useRef()
  const [value, setValue] = React.useState("Jul 27 - Aug 2")
  const [currentData, setCurrentData] = useState(dataWeek35)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [selectedTopicId, setSelectedTopicId] = useState(-1)

  useEffect(() => {
    // console.log("current data changed")
    // console.log({ ldavisRef.current, data })
    ldavisRef.current.innerHTML = ""
    LDAvis(ldavisRef.current, currentData, "#wk35", onClusterSelected)
  }, currentData)

  const onDateRangeChanged = option => {
    setValue(option)
    var newData
    switch (option) {
      case "Jul 27 - Aug 2":
        newData = dataWeek31
        break
      case "Aug 3 - Aug 9":
        newData = dataWeek32
        break
      case "":
        break
      case "":
        break
      case "":
        break
      default:
        newData = data
        break
    }
    console.log({ newData })

    // setCurrentData(newData)
  }

  const onClusterSelected = clusterId => {
    console.log("cluster selected : ", clusterId)
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
        <Box direction={"row"} alignContent={"center"}>
          <Heading level={6} margin={{ right: "small", bottom: "none" }}>
            {" "}
            Share in your network
          </Heading>
          <TwitterShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <TwitterIcon
              size={40}
              round={true}
              bgStyle={{ fill: "#FFFFFF" }}
              iconFillColor={"#514e80"}
            />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <WhatsappIcon
              size={32}
              round={true}
              bgStyle={{ fill: "#FFFFFF" }}
              iconFillColor={"#514e80"}
            />
          </WhatsappShareButton>
          <RedditShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <RedditIcon
              size={40}
              round={true}
              bgStyle={{ fill: "#FFFFFF" }}
              iconFillColor={"#514e80"}
            />
          </RedditShareButton>
          <LinkedinShareButton
            url={"https://services.tattle.co.in/khoj/dashboard/"}
            title={"Fact Checking Topic Dashbaord"}
          >
            <LinkedinIcon
              size={40}
              round={true}
              bgStyle={{ fill: "#FFFFFF" }}
              iconFillColor={"#514e80"}
            />
          </LinkedinShareButton>
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
                "Jul 27 - Aug 2",
                "Aug 3 - Aug 9",
                "Aug 10 - Aug 16",
                "Aug 17 - Aug 23",
                "Aug 24 - Aug 30",
              ]}
              value={value}
              onChange={({ option }) => onDateRangeChanged(option)}
            />
          </Box>
        </Box>
        <Box
          direction={"row"}
          margin={{ top: "medium" }}
          flex={true}
          overflow={"visible"}
        >
          <Box width={"600px"}>
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
          <div ref={ldavisRef} id="wk35"></div>
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
                console.log(headline)
                return (
                  <Box margin={{ bottom: "small" }}>
                    <PlainExternalLink
                      key={"abc"}
                      href={headline.url}
                      target="_blank"
                    >
                      {" "}
                      <Text size={"medium"}> {headline.headline}</Text>
                      <Text size={"small"}> {headline.url}</Text>
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
