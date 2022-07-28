import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";

const Layout = ({children}) => {
    return ( 
        <div> 
            <Navigation /> 
            {children}
            <Footer />
        </div>
      );
}
 
export default Layout;