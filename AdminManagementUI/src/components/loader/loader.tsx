import { Box, CircularProgress, Typography } from '@mui/material';

export const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" flexDirection="column">
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2 }}>
                Loading users...
            </Typography>
        </Box>
    );
};
