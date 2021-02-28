import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField,FormControlLabel,Checkbox } from '@material-ui/core'
function BrandInformation({ fieldData:{fieldLabel,type,option}  }) {

  switch(type){
    case "singleLine":
      return(
        <TextField label={fieldLabel} variant="outlined" />
      )
    case "multiLine":
      return(
        <TextField multiline label={fieldLabel} variant="outlined" />
      )
    case "dropDown":
      return (
        <FormControl variant="outlined" className="dropdown">
          <InputLabel id="demo-simple-select-outlined-label">
            {fieldLabel}
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={fieldLabel}
            //   onChange={handleChange}
            label="Age"
          >
            {option.map((e, i) => {
              console.log("This is type and val -> ",typeof(e.order)," -> ",e.order)

                return (
                  <MenuItem value={e.optionLabel} key={e.order}>
                    {e.optionLabel}
                  </MenuItem>
                );


            })}
          </Select>
        </FormControl>
      );

    case "multiSelect":
      return(
        <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />

        }
        label={fieldLabel}
      />
      )

      case "email":
        return(<h1>This is text</h1>)
      case "mobileNumber":
        return(
          <h1>MobileNumber </h1>
        )
        case "switch":
          return(<h1>Switch</h1>)
    default:
      return null;
  }


}

export default BrandInformation

