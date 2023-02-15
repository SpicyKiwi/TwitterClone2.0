import { Paper, Box, Typography, Button } from "@mui/material";

function Tweet(tweet) {

    const {title, body} = tweet.tweetInfo
    console.log(title)

    return ( 
        <Paper elevation={3} sx={{mx: 10}}>

            <Box sx={{m: 4, py: 2, px: 1}}>

                <Typography variant="h5" sx={{mb: 2}}>{title}</Typography>

                <Typography>{body}</Typography>

                {/* <Button variant="contained" >Learn more</Button> */}

            </Box>
            
        </Paper>
     );
}

export default Tweet;