 import { useFormik } from 'formik';
 const validate = values => {
   const errors = {};
   if (!values.firstName) {
     errors.firstName = 'Required';
   } else if (values.firstName.length > 5) {
     errors.firstName = 'Must be 5 characters or less';
   }
 
   if (!values.lastName) {
     errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };
const SignupForm = () => {
    const formik = useFormik({
     initialValues: {
       fullname: '',
       phonenumber: '',
       email: '',
       password: ''
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">Full Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.fullname}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
       <label htmlFor="phonenumber">Phone Number</label>
       <input
         id="phonenumber"
         name="phonenumber"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.phonenumber}
       />
       {formik.errors.phonenumber ? <div>{formik.errors.phonenumber}</div> : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
       <button type="submit">Submit</button>
     </form>
   );
}

export default SignupForm;