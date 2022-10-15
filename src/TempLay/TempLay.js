import Header from '../Navbar/pageHeader';
import CommonNavbar from '../Navbar/navbar';
import Footer from '../Footer/footer.js'
import { Outlet } from 'react-router-dom'

function TempLay() {
    // club header and navbar
    return (
        <div>
            <Header />
            <CommonNavbar />
            <Outlet />
            <Footer />
        </div>
    );
}
export default TempLay;