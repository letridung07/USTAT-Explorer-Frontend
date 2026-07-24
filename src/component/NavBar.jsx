import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function ButtonAppBar() {
    const [league, setLeague] = useState("EPL");
    const [season, setSeason] = useState(2025);
    const [pageTitle, setPageTitle] = useState("Overview")

    const leagues = [
        "EPL",
        "La Liga",
        "Serie A",
        "Bundesliga",
        "Ligue 1",
        "RFPL",
    ];

    const seasons = [
        2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
    ];

    const dropdownStyles = {
        minWidth: 170, // Width of dropmenu
        borderRadius: 1, // Curve coners
        fontSize: 17, // Text size in the dropmenu
        fontWeight: 600,
    };

    const emojiStyles = {
        fontSize: 24,
        marginRight: 1.5,
    };

    return (
        <Box sx={{}}>
            <Toolbar sx={{ alignItems: "center" }}>
                {/* Slash & Title */}
                <Box
                    sx={{
                        flexGrow: 1, // how much an element grows relative to other flexible items
                        display: "flex", // make slash and title stay on the same horizontal
                        gap: 1.5, // gap between slash and title
                        alignItems: "center", // make slash and title align horizontally
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 36,
                            bgcolor: "#2e5ae8",
                            transform: "skew(-10deg)", // make the box tilt so it looks like the slash
                        }}
                    />

                    <Box
                        sx={{
                            width: 6,
                            height: 36,
                            bgcolor: "#2e5ae8",
                            transform: "skew(-10deg)", // make the box tilt so it looks like the slash
                        }}
                    />

                    <Typography
                        component="div"
                        sx={{ fontWeight: 800, fontSize: 25, transform: "scaleY(1.2)"}}
                    >
                        {pageTitle}
                    </Typography>
                </Box>

                {/* 2 select buttons */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {/* Dropdown menu for leagues*/}
                    <Select
                        value={league}
                        onChange={(event) => setLeague(event.target.value)}
                        size="small"
                        sx={dropdownStyles}
                        // Trophy emoji
                        startAdornment={
                            <EmojiEventsOutlinedIcon sx={emojiStyles} />
                        }
                    >
                        {leagues.map((leagueName) => (
                            <MenuItem key={leagueName} value={leagueName}>
                                {leagueName}
                            </MenuItem>
                        ))}
                    </Select>

                    {/* Dropdown menu for seasons*/}
                    <Select
                        value={season}
                        onChange={(event) => setSeason(event.target.value)}
                        size="small"
                        sx={dropdownStyles}
                        // Calendar emoji
                        startAdornment={
                            <CalendarMonthOutlinedIcon sx={emojiStyles} />
                        }
                    >
                        {seasons.map((seasonYear) => (
                            <MenuItem key={seasonYear} value={seasonYear}>
                                {/* display season title */}
                                {`${seasonYear}/${seasonYear + 1}`}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            </Toolbar>
        </Box>
    );
}
