 import { useFormik } from 'formik';
const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
        email: '',
        },
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });
    // handleSubmit: A submission handler
    // handleChange: A change handler to pass to each <input>, <select>, or <textarea>
    // values: Our form’s current values
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>
   );
}

export default SignupForm;