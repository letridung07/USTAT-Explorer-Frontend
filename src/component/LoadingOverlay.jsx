import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const loadingOverlaySx = {
    position: "absolute",
    inset: 0,
    zIndex: 10,

    display: "flex",
    justifyContent: "center",
    marginX: 2,
    marginTop: 2,

    // Place the circle near the top
    alignItems: "flex-start",
    paddingTop: 15,
    boxSizing: "border-box",

    // Dark transparent layer matching your website theme
    backgroundColor: "rgba(7, 21, 43, 0.18)",

    // Slight blur so the old data is still visible
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",

    borderRadius: 3,
};

export default function LoadingOverlay() {
    return (
        <Box sx={loadingOverlaySx}>
            <CircularProgress
                size={100}
                thickness={10}
                sx={{ color: "#4da3ff" }}
            />
        </Box>
    );
}
