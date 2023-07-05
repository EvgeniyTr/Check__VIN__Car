import {Container} from "@chakra-ui/react"
import Navbar from "../pages/Navbar";

const AppContainer = ({children}) => {
    return (
   
        <>
        <Navbar />
            {children}
        </>
    )
}

export default AppContainer;