import { Box, Container, Paper, Typography, Button } from "@mui/material";

function Example2() {

    const serviceList = ["Service 1", "Service 2", "Service 3"]

    return ( 
        <Container>
            <Typography variant="h1" sx={{
                my: 4,
                textAlign: "center",
                color: "primary.main"
            }}>Services</Typography>

            <Typography variant="h2">Overview</Typography>

            <Box sx={{
                pt: 4,
                display: "flex", 
                flexDirection: { xs: "column", md: "row"},
                justifyContent: "space-between",
                gap: 4
                }}>
                {serviceList.map(service => {
                    return <Paper elevation={3} sx={{xs: 1, md: 320}}>

                        <Box sx={{m: 3}}>

                            <Typography variant="h3">{service}</Typography>
                            <Typography sx={{mt: 2}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet id distinctio sint nulla eligendi eius nisi numquam earum tempore! Veniam, mollitia ipsam iure quidem velit quis deleniti doloribus distinctio voluptates.
                            </Typography>

                            <Button variant="contained" color="secondary" >Learn more</Button>

                        </Box>
                        
                    </Paper>
                })}
            </Box>

        </Container>
    );
}

export default Example2;