import { Box, Button, Container, Typography } from '@mui/material'


function Example1() {
    return (
        <Container sx={{ background: "tomato", height: "100vh"}}>
        <Typography>Hello</Typography>


        <Button variant='outlined' sx={{
            bgcolor: "green", 
            color: "gold",
            ":hover": {bgcolor: "blue", color: "green"}
            }}>Click Me!</Button>
        </Container>
    )
}

export default Example1;