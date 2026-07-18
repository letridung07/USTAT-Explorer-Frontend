import { Box, Typography } from "@mui/material";

function Overview_page() {
  return (
    <Box
      sx={{
        width: 300,
        padding: 3,
        margin: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h1">
        Overview
      </Typography>
    </Box>
  );
}

export default Overview_page;