import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import makeStyles from "@mui/material";

// Custom styles using makeStyles
const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        background: "linear-gradient(to right, #2c2255, #c239a5)",
        borderRadius: 20,
        color: "#fff",
        position: "relative",
    },
    ribbon: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#a49262",
        width: 70,
        height: "100%",
        borderRadius: "20px 0 0 20px",
    },
    badge: {
        position: "absolute",
        top: 20,
        left: 20,
        width: 50,
        height: 50,
        backgroundColor: "#4b3665",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    lightningIcon: {
        fontSize: 30,
        color: "#fff",
    },
    imageContainer: {
        borderRadius: "50%",
        border: "5px solid #fff",
        padding: 2,
        background: "linear-gradient(to right, #ff4060, #7200da)",
        width: 120,
        height: 120,
        margin: "0 auto",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
    },
    textCenter: {
        textAlign: "center",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subheading: {
        fontSize: 16,
        marginBottom: 10,
    },
    date: {
        fontSize: 14,
    },
    issuedBy: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

const RecognitionCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Box className={classes.ribbon} />

            <Box className={classes.badge}>
                <span role="img" aria-label="lightning" className={classes.lightningIcon}>
                ⚡
                </span>
            </Box>

            <CardContent>
                <Box className={classes.textCenter}>
                <Box className={classes.imageContainer}>
                    <Avatar
                    className={classes.image}
                    src="https://via.placeholder.com/120x120" // Replace with your image URL
                    alt="Employee"
                    />
                </Box>

                <Typography className={classes.heading}>Employee of the Month: Jessica Lange</Typography>
                <Typography className={classes.date}>31 May, 2023</Typography>
                <Typography className={classes.issuedBy}>Issued by PowerStrike Studios</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default RecognitionCard;
