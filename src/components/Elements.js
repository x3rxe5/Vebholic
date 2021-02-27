import React from 'react'

import BrandInformation from "./element/BrandInformation";

function Elements({ fieldData }) {


    switch(fieldData.sectionName){
        case "Brand Information":

        return (
            <div>
                <label>{fieldData.sectionName}</label>
               <BrandInformation fieldData={fieldData}/>

            </div>
        )
        case "Additional Information":
            return (
                <div>
                    <label>{fieldData.sectionName}</label>
                     <BrandInformation fieldData={fieldData}/>
                </div>
            )


        case "Address Information":
            return (
                <div>
                    <label>{fieldData.sectionName}</label>
                     <BrandInformation fieldData={fieldData}/>

                </div>
            )


        default:
            return (
                <div>
                    <label>{fieldData.sectionName}</label>

                      <BrandInformation fieldData={fieldData}/>

                </div>
            )

    }


}

export default Elements
