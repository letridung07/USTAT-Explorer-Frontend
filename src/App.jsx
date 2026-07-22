import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./component/NavBar.jsx";
import OverviewStats from "./pages/Overview_page.jsx";

function App() {
    return (
        <>
            <ButtonAppBar />
            <main>
                <Routes>
                    <Route path="/" element={<OverviewStats />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
