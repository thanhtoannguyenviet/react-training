import withAuth from '../hoc/withAuth';
const AdminHomePage = () => {
    return (
        <div>   <h1>Admin Page</h1> </div>
    );
}
const AdminPage = withAuth(AdminHomePage);
export default AdminPage;