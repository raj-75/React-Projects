import React from "react";

function Activity2({ condition, volume }) {
    const fruits = ["Apple", "Mango", "Banana", "GFG"];
 
    // Some styling for the items
    const styles = {
        backgroundColor: "yellow",
        width: "80px",
        marginBottom: "10px",
        padding: "10px",
        color: "black",
        boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
    };
    const handleClick = (fruitname) => {
        console.log(fruitname);
        alert('Alert! This is a popup - ' + fruitname.fruit);
      };

    return (
        <>
            {
                fruits.map((fruit) => (
                    <div key={fruit} style={styles} onClick={() => handleClick({fruit})}>
                        {fruit}
                    </div>
                ))
            }
        </>
    );
  }

  export default Activity2;