import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// This must be a function because backgroundImage can change.
const bannerSx = (backgroundImage) => ({
    // width: "100%",
    minHeight: 140,
    boxSizing: "border-box",
    borderRadius: 3,
    overflow: "hidden",
    

    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    alignItems: "center",

    paddingX: 3,
    paddingY: 2,

    marginY: 1.5,
    marginX: 2,

});

// Controls the layout of the logo and text.
const bannerContentSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0.5,
};

// Controls the size and position of the league logo.
const leagueLogoSx = {
    width: 50,
    height: 50,
    objectFit: "contain",
    marginBottom: 0.5,
};

// Styles the league name.
const leagueNameSx = {
    color: "white",
    fontSize: "0.85rem",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 0.5,
};

// Styles the season text.
const seasonSx = {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: 1,
};

export default function LeagueBanner({
    leagueName,
    season,
    leagueLogo,
    backgroundImage,
}) {
    return (
        <Box sx={bannerSx(backgroundImage)}>
            <Box sx={bannerContentSx}>
                <Box
                    component="img"
                    src={leagueLogo}
                    alt={`${leagueName} logo`}
                    sx={leagueLogoSx}
                />

                <Typography sx={leagueNameSx}>
                    {leagueName}
                </Typography>

                <Typography sx={seasonSx}>
                    {season}
                </Typography>
            </Box>
        </Box>
    );
}