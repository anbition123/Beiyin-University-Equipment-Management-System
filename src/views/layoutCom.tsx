import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import routers from '../router'

const Layout:React.FC = () => {
    return(
        <Suspense fallback={<>loading ...</>}>
            <Router>
                <Routes>
                {routers.map((item, index) => {
                        return (                       
                                <Route                            
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />                        
                        );
                    })}
                </Routes>
            </Router>
        </Suspense>
    )
}

export default Layout;