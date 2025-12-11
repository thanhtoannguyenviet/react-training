 import { useFormik } from 'formik';
 import { useContext } from 'react';
  import { AuthContext } from '../context/AuthContext';
  import { Navigate } from 'react-router-dom';
 const validate = values => {
   const errors = {};
   if (!values.fullname) {
     errors.fullname = 'Required';
   } else if (values.fullname.length > 5) {
     errors.fullname = 'Must be 5 characters or less';
   }
 
   if (!values.phonenumber) {
     errors.phonenumber = 'Required';
   } else if (values.phonenumber.length > 20) {
     errors.phonenumber = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
  if (!values.password) {
     errors.password = 'Required';
   } 
   return errors;
 };
const SignupForm = () => {
    const { addUser } = useContext(AuthContext);
    const formik = useFormik({
     initialValues: {
       fullname: '',
       phonenumber: '',
       email: '',
       password: ''
     },
     validate,
     onSubmit: values => {
       addUser(values);
       return <Navigate to="/login" />
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
      <div>
       <label htmlFor="fullname">Full Name</label>
       <input
         id="fullname"
         name="fullname"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullname}
       />
       {formik.touched.fullname ? <div style={{ color: 'red'}}>{formik.errors.fullname}</div> : null}
 </div>
      <div> 
       <label htmlFor="phonenumber">Phone Number</label>
       <input
         id="phonenumber"
         name="phonenumber"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phonenumber}
       />
       {formik.touched.phonenumber ? <div style={{ color: 'red'}}>{formik.errors.phonenumber}</div> : null}
 </div>
 <div>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email ? <div style={{ color: 'red'}}>{formik.errors.email}</div> : null}
 </div>
 <div>
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password ? <div style={{ color: 'red'}}>{formik.errors.password}</div> : null}
       </div>
       <button type="submit">Submit</button>
     </form>
   );
}

export default SignupForm;