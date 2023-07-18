import Navbar from "./Navbar";
import Form from "./Form";
import Hero from "./Hero";
import Reasons from "./Reasons";
import SampleButton from "./SampleButton";
import Footer from "./Footer";

const AppContainer = ({children}) => {
    return (
        <>
        <Navbar />
        <Form />
    <Hero />
    <Reasons />
    <SampleButton />
    <Footer />
            {children}
        </>
    )
}

export default AppContainer;