import React, { useState, useEffect } from "react"
import { Grid, Box, Heading, Text, Paragraph } from "grommet"
import AppShell from "../../components/atomic/AppShell"
import styled from "styled-components"
import DataFeed from "../../components/fact-check-search/components/DataFeed"
import { footerItems, primaryNav } from "../../config/options"
import { PlainExternalLink } from "../../components/atomic/TattleLinks"

const DataVizOverview = styled.div`
  text-align: center;
  h1 {
    font-size: "22px";
  }
  h2 {
    font-size: "18px";
    display: inline;
    font-weight: "200";
  }
  p {
    font-size: "12px";
    font-weight: "300";
  }
`

/**
 * @author
 * @function Explore
 **/

const Explore = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <AppShell
      headerLabel={"Khoj"}
      headerTarget={"/khoj"}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={false}
    >
      {/* <Box width={'horizontal'} height={'350px'} border>
    </Box> */}
      <Box direction={"column"} gap={"medium"} flex={false}>
        <Paragraph fill>
          This section shows all the images scraped from fact checking sites so
          far. Currently we have 11K articles and 36K images from 6 IFCN
          certified fact checking websites
        </Paragraph>
        {/* <Box direction={'row'} gap={'small'} margin={{top:'medium'}}>
        <Box width={'50%'} border pad={'medium'} flex={false} >
          <DataVizOverview>
            <h1> Overview </h1>
            <Grid
              columns={{
                count:3,
                size: 'auto'
              }}
              gap={'small'}
            >
              <Box> <p> stories </p> </Box>
              <Box> <p> images </p> </Box>
              <Box> <p> websites </p> </Box>
            </Grid>
          
            <Grid
                columns={{
                  count:3,
                  size: 'auto'
                }}
                gap={'small'}
              >
              <Box> <h2> 11K </h2> </Box>
              <Box> <h2> 36K </h2> </Box>
              <Box> <h2> 6 </h2> </Box>
            </Grid>
          </DataVizOverview>
        </Box>
        
        <Box width={'50%'}>
        
        </Box>
      </Box> */}
        <DataFeed />
        <Box flex={false}>
          <Heading level={2}>License</Heading>
          <Box direction={"column"} gap={"small"}>
            <Text>
              {" "}
              The Dataset is licensed under{" "}
              <PlainExternalLink
                href={"https://opendatacommons.org/licenses/odbl/1-0/"}
                target="_blank"
              >
                <Text color={"brand"} weight={"bold"}>
                  ODbl{" "}
                </Text>
              </PlainExternalLink>
              which means that you are free to share, create and adapt this
              dataset as long as you <Text weight={"bold"}>attribute </Text>
              Tattle,
              <Text weight={"bold"}>
                {" "}
                share the database under the same terms{" "}
              </Text>
              and
              <Text weight={"bold"}> keep the adaptations open</Text>.
            </Text>

            <Text> {"The database can be attributed as follows:"}</Text>
          </Box>
          <Box
            round={"xsmall"}
            background={"light-1"}
            pad={"medium"}
            margin={{ top: "small", bottom: "medium" }}
          >
            <Text>
              {" "}
              Contains information from Tattle Fact Checking Sites Database,
              which is made available{" "}
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
              <Text> (ODbL) </Text>
            </Text>
          </Box>
          <Box>
            <Text>
              A readable summary of the license can be found
              <PlainExternalLink
                href={"https://opendatacommons.org/licenses/odbl/summary/"}
                target="_blank"
              >
                <Text color={"brand"} weight={"bold"}>
                  {" "}
                  here{" "}
                </Text>
              </PlainExternalLink>
              The legal text can be found
              <PlainExternalLink
                href={
                  "https://github.com/tattle-made/tattle-research/blob/master/Tattle_FC_Data_License.md"
                }
                target="_blank"
              >
                <Text color={"brand"} weight={"bold"}>
                  {" "}
                  here
                </Text>
              </PlainExternalLink>
              .
            </Text>
          </Box>
        </Box>
      </Box>
    </AppShell>
  )
}

export default Explore
