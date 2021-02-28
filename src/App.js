import formJSON from './dummy_payload.json';

import './App.css'

import Elements from './components/Elements';
import { Button } from "@material-ui/core"



function App() {

  let arr = formJSON[0].field;



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

            }

          </>
          )
        })
      }`
      <Button variant="contained" color="primary">
        Send
      </Button>
      </form>
      </div>
    </>
  )

}




export default App;
