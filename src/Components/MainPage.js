import { Box, Typography } from "@mui/material";
import Tweet from "./Tweet";

function MainPage() {


    const tweets = [
        {title: "tweet 1", 
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestias eveniet dicta doloremque eligendi, necessitatibus optio fugiat cupiditate sunt ipsam, ullam accusantium error excepturi. Vero iusto aut libero ut officia."},
        {title: "tweet 2",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestias eveniet dicta doloremque eligendi, necessitatibus optio fugiat cupiditate sunt ipsam, ullam accusantium error excepturi. Vero iusto aut libero ut officia."},
        {title: "tweet 3",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestias eveniet dicta doloremque eligendi, necessitatibus optio fugiat cupiditate sunt ipsam, ullam accusantium error excepturi. Vero iusto aut libero ut officia."}
    ]

    
    
    return ( 
        <>
        
        <Box sx={{
            bgcolor: "white",
            height: "100vh",
            width: "75%",
            display: "flex",
            flexDirection: "column"
        }}>

            <Typography variant="h2" sx={{color: "#1DA1F2", alignSelf: "center"}} >Hello User</Typography>

            <Box className="Tweets">
            
                {tweets.map((tweet, key) => (
                    <Tweet tweetInfo={tweet} key={key} />
                ))}

            </Box>


        </Box>

        </>
     );
}

export default MainPage;