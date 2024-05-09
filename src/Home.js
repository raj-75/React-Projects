import React from "react";
import image1 from './images/download.jpg';
import image2 from './images/download2.jpg';
import image3 from './images/download3.jpg';
import { useSelector,useDispatch } from "react-redux";
import{setUsers} from "./Redux/Slices/Counter/Index";
import { useEffect,useRef  } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';

export function Home() {
  const gridRef = useRef(null);
  //const counter = useSelector(state =>state.counter.counter);
  const dispatch = useDispatch();
   
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.data));
        //console.log(data.data);
        // const updatedSource = { ...gridSource, localdata: data.data };
        //   dataAdapter.dataBind();
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [dispatch]);

  const userlist = useSelector((state) => state);
// Accessing the data array from userlist
const dataArray = userlist.reducer.users.list;
console.log("Data array:", dataArray);

const gridSource = {
  datatype: 'array',
  datafields: [
    { name: 'id', type: 'string' },
    { name: 'first_name', type: 'string' },
  ],
  localdata: dataArray, // Initial empty data
};
const dataAdapter = new jqx.dataAdapter(gridSource);
const columns = [
  { text: 'ID', datafield: 'id' },
  { text: 'First Name', datafield: 'first_name' },
];










    return (
      <>
      <div className="container">
      <JqxGrid ref={gridRef} source={dataAdapter} columns={columns} />
      </div>
     {/* <div className="container">
       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
</div>    */}
     </>
    );
  }

  export default Home;