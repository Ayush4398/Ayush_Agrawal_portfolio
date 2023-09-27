import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Project from "./components/project";
import Exp from "./components/experience";
// import Tools from "./components/animation";
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

function App() {
    return(
        <>
        <BrowserRouter>
            <Header />
            <div className="container content" >
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route  path='/contact' element={<Contact/>} />
                    <Route  path='/exp' element={<Exp/>} />
                    <Route  path='/project' element={<Project/>} />
                </Routes>
            </div>
        </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;