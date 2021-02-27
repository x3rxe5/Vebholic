import formJSON from './dummy_payload.json';
import { useState, useEffect } from 'react';

import Elements from './components/Elements';
//import { FormContext } from './FormContext';s

function App() {
  const [elements,setElements] = useState({});
  let arr = formJSON[0].field;

  useEffect(() => {
    setElements(formJSON[0].field);
  },[formJSON])

  const handleSubmit = () => {

  }

  return(
    <>
    <form>
      <h1>{formJSON.name}</h1>
      {
        arr.map((e,i) => {
          return <Elements key={i} fieldData={e.fieldData}/>
          // return console.log("Field data => ",);
        })
      }
      <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </>
  )

}




export default App;
