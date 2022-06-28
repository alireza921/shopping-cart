import Navigation from "../components/navigation/navigation";

const Layout = ({children}) => {
    return ( 
        <div> 
            layout cmp 
            <Navigation /> 
            {children}
        </div>
      );
}
 
export default Layout;