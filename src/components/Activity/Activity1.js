import React from "react";

function Activity1({ condition, volume }) {
    if (condition) {
        const elements = [];
        for (let i = 0; i < volume; i++) {
            elements.push(
                <div key={i}>
                    This is rendered if the condition is {String(condition)}. Volume = {i}
                </div>
            );
        }
        return(
            <>
            <div>This is rendered if the condition is {String(condition)}. volumn =  {volume} </div>

            <div>
                {elements.length > 0 ? elements : <div>This is rendered if the condition is {volume}.</div>}
             </div>
            </>
        ) 
      } else {
        return <div>This is rendered if the condition is {String(condition)}.</div>;
      }
  }

  export default Activity1;