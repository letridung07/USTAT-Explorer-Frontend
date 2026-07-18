import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./component/NavBar.jsx";
import Overview_page from "./pages/Overview_page.jsx"

function App() {
    return (
        <>
            <ButtonAppBar />
            <main>
                <Routes>
                    <Route path="/" element={<Overview_page />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
