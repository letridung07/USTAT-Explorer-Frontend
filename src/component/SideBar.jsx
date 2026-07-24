import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

import { NavLink } from "react-router-dom";

export const sidebarWidth = 180;

const menuItems = [
    {
        title: "Overview",
        path: "/",
        icon: <DashboardOutlinedIcon />,
    },
    {
        title: "Matches",
        path: "/matches",
        icon: <CalendarMonthOutlinedIcon />,
    },
    {
        title: "League Table",
        path: "/league-table",
        icon: <TableChartOutlinedIcon />,
    },
    {
        title: "Players",
        path: "/players",
        icon: <PersonOutlineOutlinedIcon />,
    },
    {
        title: "Compare Teams",
        path: "/compare-teams",
        icon: <PeopleAltOutlinedIcon />,
    },
    {
        title: "Compare Players",
        path: "/compare-players",
        icon: <CompareArrowsOutlinedIcon />,
    },
];

const sidebarSx = {
    width: "max-content", // Makes the sidebar width expand enough to fit its widest content.
    minWidth: 180,
    flexShrink: 0, // Prevents the sidebar from being compressed by the main content

    flexDirection: "column", // Vertical line up

    boxSizing: "border-box",
    paddingLeft: 2,
    paddingTop: 3,

    color: "white",
};

const logoContainerSx = {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    marginBottom: 4,
    paddingLeft: 0.5,
    paddingTop: 4,
};

const logoIconSx = {
    fontSize: 44,
    color: "white",
};

const logoTextSx = {
    fontSize: "22px",
    fontWeight: 800,
    lineHeight: 1.1,
};

const navigationListSx = {
    display: "flex", // Make them line up
    flexDirection: "column", // Flex vertically
    gap: 0.75, // Gap between buttons
    padding: 0, // We already have marginBottom for the component above
};

const navigationButtonSx = {
    minHeight: 52,
    borderRadius: 1.5,
    paddingLeft: 1.5,

    color: "#d8dfeb",

    display: "flex",
    alignItems: "center",
    gap: 1.5,

    "& .MuiListItemIcon-root": {
        minWidth: 34,
        color: "inherit",
    },

    "& .MuiSvgIcon-root": {
        fontSize: 24,
    },

    "& .MuiListItemText-primary": {
        fontSize: "15px",
    },

    "&:hover": {
        bgcolor: "rgba(255, 255, 255, 0.08)",
        color: "white",
    },

    "&.active": {
        bgcolor: "#4a46c7",
        color: "white",
    },

    "&.active:hover": {
        bgcolor: "#5551d3",
    },
};

export default function Sidebar() {
    return (
        <Box component="aside" sx={sidebarSx}>
            {/* Logo and App name */}
            <Box sx={logoContainerSx}>
                <SportsSoccerOutlinedIcon sx={logoIconSx} />

                <Typography sx={logoTextSx}>
                    U-STAT
                    <br />
                    EXPLORER
                </Typography>
            </Box>

            {/* Loop to create buttons */}
            <List sx={navigationListSx}>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.title}
                        component={NavLink}
                        to={item.path}
                        end={item.path === "/"}
                        sx={navigationButtonSx}
                    >
                        {item.icon}

                        <Typography>{item.title}</Typography>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}
