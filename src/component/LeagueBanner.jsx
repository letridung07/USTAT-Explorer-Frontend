import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import animated_banner_background from "../assets/animated_banner_background.mp4";

const bannerVideoSx = {
    position: "absolute", // limit the video to be inside the banner
    inset: 0, // stretch the video across the banner
    width: "100%",
    height: "100%",
    objectFit: "cover", // prevents distortion while cropping excess edges
};

// Use this if the background is an image
//  const bannerSx = (backgroundImage) => ({
//      backgroundImage: `url(${backgroundImage})`,
//      backgroundSize: "cover",
//      backgroundPosition: "center",
//      backgroundRepeat: "no-repeat",
const bannerSx = {
    // width: "100%",
    minHeight: 140,
    boxSizing: "border-box",
    borderRadius: 3,
    overflow: "hidden",
    position: "relative", // This makes the banner the positioning boundary for the video

    display: "flex",
    alignItems: "center",

    paddingX: 3,
    paddingY: 2,

    marginY: 1.5,
    marginX: 2,
};

// Controls the layout of the logo and text.
const bannerContentSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0.5,
    position: "relative",
    zIndex: 1, // make the text sit above the video
};

// Controls the size and position of the league logo.
const leagueLogoSx = {
    width: 80,
    height: 80,
    objectFit: "contain",
    marginBottom: 0.5,
    marginRight: 2,
    position: "relative",
    zIndex: 1, // make the logo sit above the video
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

export default function LeagueBanner({ leagueName, seasonName, leagueLogo }) {
    return (
        <Box sx={bannerSx}>
            <Box
                component="video"
                src={animated_banner_background}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                sx={bannerVideoSx}
            />
            <Box
                component="img"
                src={leagueLogo}
                alt={`${leagueName} logo`}
                sx={leagueLogoSx}
            />
            <Box sx={bannerContentSx}>
                <Typography sx={leagueNameSx}>{leagueName}</Typography>

                <Typography sx={seasonSx}>{seasonName}</Typography>
            </Box>
        </Box>
    );
}
