import { Box, FormControl, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
  const [checked, setChecked] = useState(true);
  console.log(checked)
  const handleChange = (e:React.ChangeEvent<HTMLElement>)=>{
    setChecked(!checked)
  }
  return (
    <div>
      <Box>
        <FormControlLabel label='dark mode' control={<Switch  checked={checked} 
        onChange={handleChange}
        color='success'
        />  } />
      </Box>
    </div>
  )
}

export default MuiSwitch