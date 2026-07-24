import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, CssBaseline } from "@mui/material";

import NavBar from "./component/NavBar.jsx";
import OverviewStats from "./pages/Overview_page.jsx";
import SideBar from "./component/SideBar.jsx";
import LeagueBanner from "./component/LeagueBanner.jsx";

import epl_icon from "./assets/epl_icon.png";
import overview_banner_background from "./assets/overview_banner_background.png";

const appContainerSx = {
    display: "flex", // line up
    minHeight: "100vh", // Make the page fill the whole screen
    // gradient background for the whole page
    backgroundImage: `
        linear-gradient(
            to bottom,
            rgba(7, 21, 43, 1) 0%,
            rgba(7, 21, 43, 0.95) 65%,
            rgba(11, 34, 70, 1) 100%
        )
    `,
};

const mainContentSx = {
    bgcolor: "#f4f5f8", // slightly dark white 
    
    // Round corner
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 2,
    flexGrow: 1, // To make the main content not floating when stretching
};

const bannerDetails = {
    league_name: "ENGLISH PREMIER LEAGUE",
    season: "2025/2026",
    leagueLogo: epl_icon,
    backgroundImage: overview_banner_background,
}

function App() {
    return (
        <Box sx={appContainerSx}>
            {/* removes the browser’s default body margin (white space) */}
            <CssBaseline /> 

            <SideBar />

            <Box component="main" sx={mainContentSx}>
                <NavBar />

                <LeagueBanner
                    leagueName={bannerDetails.league_name}
                    season={bannerDetails.season}
                    leagueLogo={bannerDetails.leagueLogo}
                    backgroundImage={bannerDetails.backgroundImage}
                />

                <Routes>
                    {/* Only showing Overview page for now */}
                    <Route path="/" element={<OverviewStats />} />
                    <Route path="/matches" element={<OverviewStats />} />
                    <Route path="/league-table" element={<OverviewStats />} />
                    <Route path="/players" element={<OverviewStats />} />
                    <Route path="/compare-teams" element={<OverviewStats />} />
                    <Route
                        path="/compare-players"
                        element={<OverviewStats />}
                    />
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
