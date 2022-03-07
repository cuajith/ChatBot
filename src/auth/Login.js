import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {toast,ToastContainer  } from 'react-toastify';
import "./Login.css"



const Login = (props) =>{
  const formik = useFormik({
    initialValues: {
     
      email: '',
      password:'',
     
    },
    validationSchema:yup.object({
     
      email:yup.string()
      .email('Enter valid Email Address')
      .strict()
      .trim()
      .required("This field is required"),
      password: yup.string()
      .strict()
      .trim()
      .required("This field is required"),
      
    }),
    onSubmit:(data) => {
      console.log(data)
      axios.post('http://localhost:4000/api/login',data)
      
      .then(res=>{
          toast.success("You are Logged In!");
          localStorage.setItem('auth',JSON.stringify(res.data));
          localStorage.setItem("email",data.email)
          props.history.push('/dashboardmain');
          
      })
      .catch(err=>{
        toast.error("Login Failed");
      })
    }
  });
  const changePassword = ()=>{
    props.history.push('/reset-password')
  }
  console.log('Visited fields',formik.touched)
  return (
    <div className="wrapper">
      <h4 className='heading  mt-5 text-center'>SignIn</h4>

      <div className="login-container" style={{height:"320px"}}>
       <form autoComplete='off' onSubmit={formik.handleSubmit}>
         
         <div className="form-group">
           <label className='mt-4'>Email:</label>
           <input 
           className="form-control"
           type='text'
           name='email'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
           />
           {
             formik.touched.email && formik.errors.email?
             <div className='text-danger'>{formik.errors.email}</div>
             :null
           }
         </div>
         <div className="form-group">
           <label className='mt-2'>Password:</label>
           <input 
           className="form-control"
           type='password'
           name='password'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.password}
           />
           <spna className="forget" onClick={changePassword}>forget password?</spna>
           {
             formik.touched.password && formik.errors.password?
             <div className='text-danger'>{formik.errors.password}</div>
             :null
           }
         </div>
         
         <button className='submit-button '>Submit</button>
         <a href="#"
             onClick={()=>{ window.location.href='register';}} className="login-register-link mt-3"><span className='account'>New User?</span>Register</a>
       </form>
       </div>
       <ToastContainer />
    </div>
  )
}

export default Login