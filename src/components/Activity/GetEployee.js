import React,{useState,useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import CPopup from '../CommonPopup/CPopup';

const GetEmployee = () =>
{

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

        const fetchData = async () => {
          try {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setUserData(response.data.data);
          } catch (error) {
            setError(error);
          }
       
        };
    
      //   useEffect(() => {
      //     fetchData();
      // }, []);

      const handleCloseModal = () => setShowModal(false);

      const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };


      return (
        <>
         <button onClick={fetchData}>Fetch Data</button>  
         <button onClick={handleShowModal}>Open Popup</button>          
         <div>
                <h1>User Data</h1>
                {error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    userData.length > 0 ? (
                        <Row>
                            {userData.map(user => (
                                <Col key={user.id} sm={4} style={{ marginBottom: '10px' }}>
                                    <Button variant="primary" onClick={() => handleShowModal(user)}>
                                        {user.first_name} {user.last_name}
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p>No records available</p>
                    )
                )}
            </div>
            <CPopup
            show={showModal}
            onHide={handleCloseModal}
            title="User Details"
            content={
              selectedUser && (
                <div>
                  <p><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Avatar:</strong></p>
                  <img src={selectedUser.avatar} alt="User Avatar" />
                </div>
              )
            }
          />
      </>
      );
}

export default GetEmployee;