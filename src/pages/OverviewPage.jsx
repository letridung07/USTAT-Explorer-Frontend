import Box from "@mui/material/Box";

import SummaryCards from "../page_components/overview/SummaryCards";
import ScoringOverview from "../page_components/overview/ScoringOverview";
import MatchOutcomes from "../page_components/overview/MatchOutcomes";
import LoadingOverlay from "../component/LoadingOverlay.jsx";

import { useOverview } from "../context/OverviewContext.jsx";

import SeasonSummaryTest from "../test_components/SeasonSummaryTest.jsx";

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

export default function OverviewPage() {
    const { seasonSummary, isLoading, error } = useOverview();

    // Initial load: there is no old data to display yet.
    if (!seasonSummary) {
        return (
            <Box sx={{ position: "relative", minHeight: 400 }}>
                {isLoading && <LoadingOverlay />}
                {!isLoading && error && <p>Failed to load overview: {error}</p>}
            </Box>
        );
    }

    // Refresh: keep old data visible beneath the overlay.
    return (
        <Box sx={{ position: "relative" }}>
            {isLoading && <LoadingOverlay />}

            <SummaryCards />

            <Box sx={detailGridSx}>
                <Box sx={detailPanelSx}>
                    <ScoringOverview />
                </Box>
                <Box sx={detailPanelSx}>
                    <MatchOutcomes />
                </Box>
                <Box sx={detailPanelSx}></Box>
            </Box>

            <SeasonSummaryTest />
        </Box>
    );
}
