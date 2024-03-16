import {Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./App.css"
import Layout from "./components/Layout.jsx";
import FormPage from "./pages/FormPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<PostsPage/>}/>
                    <Route path={"form"} element={<FormPage/>}/>
                </Route>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default App