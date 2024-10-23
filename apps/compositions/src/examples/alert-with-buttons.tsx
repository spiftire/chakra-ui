import { Box } from "@chakra-ui/react"
import { Alert } from "compositions/ui/alert"
import { Button } from "compositions/ui/button"

export const AlertWithButtons = () => {
  return (
    <Alert
      status="info"
      title="This is the alert title"
      flex="1"
      endElement={
        <Button size="sm" alignSelf="center">
          Action
        </Button>
      }
    >
      <Box>This is the alert description</Box>
    </Alert>
  )
}