import { CircularProgress, LinearProgress, Stack } from "@mui/material"

const MuiProgress = () => {
  return (
   <Stack spacing={2} >
    <CircularProgress color='error' variant='determinate' value={60} />
    <CircularProgress color='success' variant='indeterminate' />
    <CircularProgress color='warning' />

    <LinearProgress color='error' variant='determinate' value={60} />
    <LinearProgress color='success' variant='indeterminate' />
    <LinearProgress color='warning' />




    
    </Stack>
  )
}

export default MuiProgress