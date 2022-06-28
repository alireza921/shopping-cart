import Navigation from "../components/navigation/navigation";

const Layout = ({children}) => {
    return ( 
        <div> 
            <Navigation /> 
            {children}
        </div>
      );
}
 
export default Layout;