import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { Grid,Container,Box } from '@mui/material';

function Home() {
    return (
            //  <Box sx={{ flexGrow: 1 }}>
        <Container fixed>
            <Grid container>
                <Grid item xs={4}>
                    
                    <TaskInput />
                </Grid>
                <Grid item xs={8}>
                    <TaskList />
                </Grid>
            </Grid>
        </Container>
            // </Box>
    );
}

export default Home;
