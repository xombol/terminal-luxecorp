import React from "react";
import {Routes, Route} from "react-router-dom"
import {Layout} from "./components/layout/Layout";
import {HomePage} from "./pages/HomePage/HomePage";
import {MainCategory} from "./pages/Categories/MainCategory";
import {RequestPage} from "./pages/Request/RequestPage";
import {SubCategory} from "./pages/Categories/SubCategory";


function App() {

    return (
        <Routes>
            <Route exact path="/" element={<Layout/>}>
                <Route index path="/" element={<HomePage/>}/>
                <Route path="/category">
                    <Route path=":category" element={<MainCategory/>}/>
                    <Route path=":cat1/:cat2" element={<SubCategory/>}/>
                    <Route path=":cat1/:cat2/:cat3" element={<SubCategory/>}/>
                    <Route path=":cat1/:cat2/:cat3/:cat4" element={<SubCategory/>}/>
                    <Route path=":cat1/:cat2/:cat3/:cat4/:cat5" element={<SubCategory/>}/>
                </Route>
                <Route path="/request" element={<RequestPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
