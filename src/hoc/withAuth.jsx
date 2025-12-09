import { Navigate } from 'react-router-dom';
const withAuth = (WrappedComponent, props) => {
    const auth = (props) => {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
        return <Navigate to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
    return auth;
}
export default withAuth;