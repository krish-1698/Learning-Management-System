import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { textAlign } from '@mui/system';

function Login() {

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
            
              <MDBInput wrapperClass='mb-4 w-100 ' name='email' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' name='password' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-0 px-5 w-50 justify-content-start" size='lg'>Login</MDBBtn>
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