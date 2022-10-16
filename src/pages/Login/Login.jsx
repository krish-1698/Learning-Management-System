import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { textAlign } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({setUserType}) {
  let navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  })


  const handleOnChangeEmail = (event) => {
    setLoginInfo({
      ...loginInfo,
      email: event.target.value,
    })
  }

  const handleOnChangePassword = (event) => {
    setLoginInfo({
      ...loginInfo,
      password: event.target.value,
    })
  }

  //const baseUrl = 'http://localhost:8080/api/v1/user/getUser';
  const loginUser = () => {
    axios
      .get(`http://localhost:8080/api/v1/user/getUser/${loginInfo.email}/${loginInfo.password}`)
      .then((res) => {
        // setCourses(res.data);
        // setName(res.data);
        console.log(res.data);
        if(res.data.role === "Lecturer"){
          setUserType("lecturer")
        }else if(res.data.role === "Student"){
          setUserType("student")
        }else{
          navigate("/login")
        }
        
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <MDBContainer fluid className="p-0 my-0 mx-0 h-custom" style={{scrollbar:'none', maxWidth: '100%', overflowX : 'hidden'}}>
       <MDBRow className="justify-content-center">
        <div className="d-flex flex-column flex-md-row text-center text-md-center justify-content-between pt-2 pb-1 px-4 px-xl-5 bg-primary">

        <div style={{}}>
             <MDBCol className="justify-content-center" col="3">

              <MDBIcon fas icon="brain"  size='2x'/>
              
             </MDBCol> 

             <MDBCol className="justify-content-center" col="9">
        
              <h1 style={{textAlign:'center',color:'white',fontSize:'36px',fontWeight:'bolder'}}>University Learning Management System</h1>

             </MDBCol>   
       </div>

      </div>
        
       </MDBRow>
      <MDBRow>
        
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

          </div>

          <div className="divider d-flex align-items-center my-4">
            
          </div>

            <MDBRow className='d-flex justify-content-center'>
          
              <MDBCol  MDBCol md='6' className='mt-5 text-white'>
            
<<<<<<< HEAD
              <MDBInput wrapperClass='mb-4 w-100 ' name='email' label='Email address' id='email' type='email' size="lg"/>
              
              <MDBInput wrapperClass='mb-4 w-100' name='password' label='Password' id='password' type='password' size="lg"/>
=======
              <MDBInput wrapperClass='mb-4 w-100 ' name='email' onChange={handleOnChangeEmail}  label='Email address' id='email' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' name='password' onChange={handleOnChangePassword} label='Password' id='password' type='password' size="lg"/>
>>>>>>> 7ff28b9074f7d8db39ee9d19427c13452745f686

              <MDBBtn className="mb-0 px-5 w-50 justify-content-start" size='lg' onClick={loginUser} >Login</MDBBtn>
              <p className="small fw-bold mt-5 mr-3 pt-1 mb-2 justify-content-start text-dark" >Don't have an account? <a href="/Register" className="link-danger ml-2" style={{fontSize:"20px"}}>Register</a></p>

           </MDBCol>

        </MDBRow>
    
        </MDBCol>

      </MDBRow>

      <MDBRow className='fixed-bottom'>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0" style={{background:'none'}}>
          Copyright © 2022. All rights reserved.
        </div>

      </div>
       </MDBRow>
    </MDBContainer>
  );
}

export default Login;