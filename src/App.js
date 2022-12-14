import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Production from "./pages/production/Production";
import Dashboards from "./pages/dashboards/Dashboards";
import Cameras from "./pages/cameras/Cameras";

import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Login />} />
                        <Route path="home" element={<Home />} />
                        <Route path="production" element={<Production/>} />
                        <Route path="dashboards" element={<Dashboards/>}/>
                        <Route path="cameras" element={<Cameras/>}/>
                    </Route>
                    
                        
                </Routes> 
             
            </BrowserRouter>
        </div>
    )
}

export default App;