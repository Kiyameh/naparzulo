import Alert from '@mui/material/Alert'


// Severity: success, error, info, warning

function ServerResponseBox({text, severity}) {
  return (
    <Alert
      sx={{m: 2}}
      severity={severity}
    >
      {text}
    </Alert>
  )
}

export default ServerResponseBox
