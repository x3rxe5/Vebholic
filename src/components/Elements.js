import React from 'react'

import BrandInformation from "./element/BrandInformation";

function Elements({ fieldData,len,field }) {
    // let obj = {}

    // for(let i=0;i<len;i++){
    //     let inArr = field[i].fieldData.sectionName;
    //     if(obj[inArr]){ obj[inArr]++ }
    //     else{ obj[inArr] = 1}
    // }

    // let arr = [];

    // if(obj){
    //     Object.keys(obj).map(function(keyName,keyIndex){
    //         arr.push(keyName);
    //     })
    // }



{/*    return(
        <>

        {
            arr.forEach((e,i) => {
                {
                    console.log("This is e -> ",e,i)
                }
                <>
                    <h1>{e}</h1>
                    <label key={i}>{e}</label>

                </>
            })
        }

        </>
    )
*/}



    switch(fieldData.sectionName){
        case "Brand Information":

        return (
            <div>
                {/* <label>{fieldData.sectionName}</label> */}
               <BrandInformation fieldData={fieldData} />

            </div>
        )
        case "Additional Information":
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                     <BrandInformation fieldData={fieldData}/>
                </div>
            )


        case "Address Information":
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                     <BrandInformation fieldData={fieldData}/>

                </div>
            )


        default:
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                      <BrandInformation fieldData={fieldData}/>

                </div>
            )

    }

}

export default Elements
