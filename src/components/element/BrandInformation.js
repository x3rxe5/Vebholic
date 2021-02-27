import React from 'react'
import { TextField } from '@material-ui/core'
function BrandInformation({ fieldData  }) {
    return (
      <div>
        {fieldData.type == singleLine && <TextField />}.
        {fieldData.type == multiLine && <TextField />}
        {/* {fieldData.type == singleLine && <TextField />} */}
        {fieldData.type == dropDown && (
          <FormControl variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">{Age}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
    );
}

export default BrandInformation

// Pankaj -> call me ??