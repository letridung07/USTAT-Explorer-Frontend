import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function ButtonAppBar() {
    const [league, setLeague] = useState("EPL");
    const [season, setSeason] = useState(2025);

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
        color: "white",
        minWidth: 120,

        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.6)",
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },

        "& .MuiSvgIcon-root": {
            color: "white",
        },
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ gap: 2 }}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        U-STAT EXPLORER
                    </Typography>

                    {/* Dropdown menu for leagues*/}
                    <Select
                        value={league}
                        onChange={(event) => setLeague(event.target.value)}
                        size="small"
                        sx={dropdownStyles}
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
                    >
                        {seasons.map((seasonYear) => (
                            <MenuItem key={seasonYear} value={seasonYear}>
                                {/* display season title */}
                                {`${seasonYear}/${seasonYear + 1}`}
                            </MenuItem>
                        ))}
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
