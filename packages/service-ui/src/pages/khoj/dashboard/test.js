import React from "react"
import { Box, Button } from "grommet"
import data from "../../../data"

const Test = () => {
  const btnClicked = () => {
    console.log("tests")
    console.log(data)
  }
  return (
    <Box>
      <Button label={"test"} onClick={btnClicked} />
    </Box>
  )
}

export default Test
