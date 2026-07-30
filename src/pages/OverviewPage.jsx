import Box from "@mui/material/Box";

import SummaryCards from "../page_components/overview/SummaryCards";
import ScoringOverview from "../page_components/overview/ScoringOverview";

// Detailed Stats
const detailGridSx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 2,
    paddingBottom: 2,
    paddingX: 2,
};

const detailPanelSx = {
    display: "flex",
    flexDirection: "column",

    minHeight: 360,
    backgroundColor: "white",
    border: "1px solid #e2e7ef",
    borderRadius: 3,
    overflow: "hidden",

    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.08)",
};

export default function OverviewStats() {
    
    return (
        <Box>
            <SummaryCards />

            <Box sx={detailGridSx}>
                <Box sx={detailPanelSx}>
                    <ScoringOverview />
                </Box>
                <Box sx={detailPanelSx}></Box>
                <Box sx={detailPanelSx}></Box>
            </Box>
        </Box>
    );
}
