import { Box } from "@mui/material";
import MainPage from "./MainPage";

function Background() {
    return ( 
        <Box className="Background" sx={{
            bgcolor: "black",
            height: "100vh",
            p: 5,
            display: "flex",
            justifyContent: "center",
            overflow: "auto"
        }}>



        <MainPage />




        </Box>
     );
}

export default Background;