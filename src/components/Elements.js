import React from 'react'

import Information from "./element/Information";

function Elements({ fieldData,len,field }) {


    switch(fieldData.sectionName){
        case "Brand Information":

        return (
            <div>
                {/* <label>{fieldData.sectionName}</label> */}
               <Information fieldData={fieldData} />

            </div>
        )
        case "Additional Information":
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                     <Information fieldData={fieldData}/>
                </div>
            )


        case "Address Information":
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                     <Information fieldData={fieldData}/>

                </div>
            )


        default:
            return (
                <div>
                    {/* <label>{fieldData.sectionName}</label> */}
                      <Information fieldData={fieldData}/>

                </div>
            )

    }

}

export default Elements
