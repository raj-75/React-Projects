import React,{useState,useEffect} from "react";
import axios from "axios";

const GetEmployee = () =>
{

    const [userData, setData] = useState(null);
    const [error, setError] = useState(null);

        const fetchData = async () => {
          try {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setData(response.data.data);
          } catch (error) {
            setError(error);
          }
       
        };
    
        //fetchData();
      return (
        <>
         <button onClick={fetchData}>Fetch Data</button>        
        <div>
        <h1>User Data</h1>        
        {error ? (
            <p>Error: {error}</p>
        ) : (
            userData?(
            <ul>
            {userData.map(user => (
                <li key={user.id}>
                {user.first_name} {user.last_name}
                </li>
            ))}
            </ul>
            ):
            (
                <p>No record avaliable</p>
            )
        )}
      </div>
      </>
      );
}

export default GetEmployee;