import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentClearanceTable = () => {
  const [studentClearanceRequests, setStudentClearanceRequests] = useState([]);

  useEffect(() => {
    const fetchStudentClearanceRequests = async () => {
      const userType = localStorage.getItem('userType'); // Retrieving 'userType' from local storage
      const userData= localStorage.getItem("staffData")
      const parsedData=JSON.parse(userData)

      if(parsedData.loggedIn===1){
      try {
        const response = await axios.post('https://student-clearance-system.onrender.com/staffrequests', {
          userType: userType
        });

        // Assuming the response data is an array of student clearance requests
        const studentClearanceRequests = response.data.data;

        setStudentClearanceRequests(studentClearanceRequests);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching student clearance requests:', error);
      }
    };
    }
    fetchStudentClearanceRequests();
  }, []);

  const handleAccept = async (request) => {
    // Update the status of the request to "accept" in the backend
    try {
      const response = await axios.put('https://student-clearance-system.onrender.com/staffrequests', {
        requestId: request.id,
        status: 'accept'
      });

      // Assuming the response indicates a successful update
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error updating request status:', error);
    }
  };

  const handleReject = async (request) => {
    // Update the status of the request to "reject" in the backend
    try {
      const response = await axios.put('https://student-clearance-system.onrender.com/staffrequests', {
        requestId: request.id,
        status: 'reject'
      });

      // Assuming the response indicates a successful update
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error updating request status:', error);
    }
  };

  return (
    <div>
      <h2>Student Clearance Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentClearanceRequests.map(request => (
            <tr key={request.id}>
              <td>{request.studentid}</td>
              <td>{request.firstname}</td>
              <td>{request.lastname}</td>
              <td>{request.year}</td>
              <td>{request.semester}</td>
              <td>{request.department}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'pending' && (
                  <>
                    <button onClick={() => handleAccept(request)}>Accept</button>
                    <button onClick={() => handleReject(request)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentClearanceTable;