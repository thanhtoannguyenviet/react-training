import withAuth from '../hoc/withAuth';
const AdminHomePage = () => {
    return (
        <div>   <h1>Admin Page</h1> 
        <button onClick={() => {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }}>
        Logout
        </button>
        </div>
    );
}
const AdminPage = withAuth(AdminHomePage);
export default AdminPage;