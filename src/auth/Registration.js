import React from 'react'
import "./App.css"
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = (props) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: yup.object(
      {
        fullName: yup.string()
          .required("This field is required")
          .strict()
          .trim()
          .min(5, "Minimum 5 characters required")
          .max(15, "Maximum 15 characters only"),

        userName: yup.string()
          .required("This field is required")
          .min(5, "Minimum 5 characters required"),

        email: yup.string()
          .email('Enter valid Email Address')
          .strict()
          .trim()
          .required("This field is required"),

        password: yup.string()
          .strict()
          .trim()
          .required("This field is required"),

        confirmPassword: yup.string()
          .oneOf([yup.ref('password'), null], "Password and Confirm Password must be same")
          .required("This field is required")

      }),
    onSubmit: (data) => {
      console.log(data)
      axios.post('http://localhost:4000/api/register', data)
        .then((res) => {

          res.json(props.history.push('/login'))
          localStorage.setItem("auth", data.userToken);
          
        })
        .catch(err => {
          toast.error(err.response.data);
        })
    }
  });

  console.log('Visited fields',formik.touched)
  return (

    <div class="wrapper" >
      <h4 className='heading mt-5 text-center'>Registration</h4>

      <div className="container" style={{height:"483px"}}>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
          <div className="form-group mt-4">
            <label className="mt-2">FullName:</label>
            <input
              className="form-control"
              type='text'
              name='fullName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {
              formik.touched.fullName && formik.errors.fullName ?
                <div className='text-danger'>{formik.errors.fullName}</div>
                : null
            }
          </div>
          <div className="form-group ">
            <label className="mt-2">UserName:</label>
            <input
              className="form-control"
              type='text'
              name='userName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {
              formik.touched.userName && formik.errors.userName ?
                <div className='text-danger'>{formik.errors.userName}</div>
                : null
            }
          </div>
          <div className="form-group">
            <label className="mt-2">Email:</label>
            <input
              className="form-control"
              type='text'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {
              formik.touched.email && formik.errors.email ?
                <div className='text-danger'>{formik.errors.email}</div>
                : null
            }
          </div>
          <div className="form-group ">
            <label className="mt-2">Password:</label>
            <input
              className="form-control"
              type='password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {
              formik.touched.password && formik.errors.password ?
                <div className='text-danger'>{formik.errors.password}</div>
                : null
            }
          </div>
          <div className="form-group ">
            <label className="mt-2">Confirm Password:</label>
            <input
              className="form-control"
              type='password'
              name='confirmPassword'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {
              formik.touched.confirmPassword && formik.errors.confirmPassword ?
                <div className='text-danger'>{formik.errors.confirmPassword}</div>
                : null
            }
          </div>
          <button className='submit-button mt-3'>Submit</button>
          <a href="#"
            onClick={() => { window.location.href = 'login'; }} className="login-register-link"> <span className='account'>Already have an account?</span>  Login</a>
        </form>


      </div>
      <ToastContainer />
    </div>
  )
}

export default Registration