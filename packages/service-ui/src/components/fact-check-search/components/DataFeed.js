import React, { useState, useEffect } from "react"
import {
  ResponsiveContext,
  Box,
  Heading,
  Text,
  CheckBox,
  Button,
} from "grommet"
import DataAccess from "./DataAccess"
import MoleculeMultiplePosts from "./MoleculeMultiplePosts"
import { ArrowLeft, ArrowRight } from "react-feather"
import DataFeedControls from "../DataFeedControls"
import { postWithToken, get } from "../../../services/shell-server"
import { TOKEN } from "../../../config"
import { ExternalLink } from "../../atomic/TattleLinks"

/**
 * @author
 * @function DataFeed
 **/

const DataFeed = () => {
  const [pageCount, setPageCount] = useState(0)
  const [fetching, setFetching] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [mediaType, setMediaType] = useState("all")
  const [multipleMediaBlockData, setMultipleMediaBlockData] = useState({
    status: "default",
  })
  const [filterValue, setFilterValue] = React.useState("all")

  const screenSize = React.useContext(ResponsiveContext)
  console.log("--screensize--", screenSize)

  const increment = () => {
    if (pageNumber != pageCount) {
      setPageNumber(pageNumber + 1)
      getData(filterValue, pageNumber)
    }
  }

  const decrement = () => {
    if (pageNumber != 1) {
      setPageNumber(pageNumber - 1)
      getData(filterValue, pageNumber)
    }
  }

  const getData = (type, pageNum) => {
    setMultipleMediaBlockData({ status: "loading" })
    return get(`/fact-check-story/${type}/${pageNum}`, TOKEN)
      .then(response => {
        setPageCount(response.data.totalPages)
        setMultipleMediaBlockData({
          status: "data",
          posts: response.data.posts,
        })
      })
      .catch(err => {
        setMultipleMediaBlockData({ status: "error" })
      })
  }

  useEffect(() => {
    setFetching(true)
    getData(filterValue, 1)
  }, [])

  const onFilterChange = filterValue => {
    setFilterValue(filterValue)
    getData(filterValue, pageNumber)
  }

  return (
    <Box fill>
      {screenSize === "small" ? (
        <Box
          direction={"column"}
          fill={"horizontal"}
          margin={{ top: "large" }}
          gap={"medium"}
          flex={false}
        >
          <DataFeedControls onChange={onFilterChange} />
          <DataAccess />
        </Box>
      ) : (
        <Box
          direction={"row"}
          fill={"horizontal"}
          margin={{ top: "large" }}
          wrap={"true"}
          flex={false}
        >
          <DataFeedControls onChange={onFilterChange} />
          <DataAccess />
        </Box>
      )}

      <Box
        fill={"horizontal"}
        margin={{ top: "medium" }}
        direction={"row"}
        gap={"small"}
        align={"center"}
      >
        <Button plain margin={"none"} onClick={decrement}>
          <ArrowLeft size={16} />
        </Button>
        <Text>
          {" "}
          showing page {pageNumber} of {pageCount}{" "}
        </Text>
        <Button plain margin={"none"} onClick={increment}>
          <ArrowRight size={16} />
        </Button>
      </Box>

      <Box>
        <MoleculeMultiplePosts data={multipleMediaBlockData} />
      </Box>
    </Box>
  )
}

export default DataFeed
