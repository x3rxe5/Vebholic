import formJSON from './dummy_payload.json';
import { useState, useEffect } from 'react';
import './App.css'
import LabelVal from "./LabelVal";
import Elements from './components/Elements';
import { Button } from "@material-ui/core"
import { FormControlLabel } from '@material-ui/core';
//import { FormContext } from './FormContext';

function App() {
  const [elements,setElements] = useState({});
  let arr = formJSON[0].field;

  useEffect(() => {
    setElements(formJSON[0].field);
  },[formJSON])

  const handleSubmit = () => {

  }
  let field = arr;
  const len = arr.length;
  let obj = {}

    for(let i=0;i<len;i++){
        let inArr = field[i].fieldData.sectionName;
        if(obj[inArr]){ obj[inArr]++ }
        else{ obj[inArr] = 1}
    }

    let arr2 = [];

    if(obj){
        Object.keys(obj).map(function(keyName,keyIndex){
            arr2.push(keyName);
        })
    }



  return(
    <>
    <div className="app">
      <h1>{formJSON.name}</h1>
    <form>

      {
        arr2.map((e) => {
          return (

            <>
            <h3>{e}</h3>
            {
              arr.map((ee,i) => {

                if(e === ee.fieldData.sectionName){
                  return  <Elements key={i} fieldData={ee.fieldData} len={len} field={arr}/>
                }
                })
              // return console.log("Field data => ",);
            }

          </>
          )
        })
      }`
        {/* {
          arr2.forEach((e,i) => {
            return <LabelVal e={e} key={i} />
          })
        } */}

      <Button variant="contained" color="primary">
        Send
      </Button>
      </form>
      </div>
    </>
  )

}




export default App;
