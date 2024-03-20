import React from "react";

const Card1 = props =>
{
    console.log(props);
    const [data, setData] = props.functions;
    //setData("Anuj");
    return(
        <>
        <div>
      <input value={data} />
    </div>
        </>
    )
};

export default Card1;