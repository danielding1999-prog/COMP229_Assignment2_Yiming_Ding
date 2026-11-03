import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRouter from "./MainRouter";
import Layout from "./components/Layout";

function App() {
return (
<BrowserRouter>
    <Layout />
    <MainRouter />
</BrowserRouter>
);
}

export default App;