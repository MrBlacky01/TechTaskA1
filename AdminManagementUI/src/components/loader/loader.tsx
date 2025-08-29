import { Box, CircularProgress } from '@mui/material';

interface LoaderProps {
    minHeight?: string;
}

export const Loader = (props: LoaderProps) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={props.minHeight ?? '50vh'} flexDirection="column">
            <CircularProgress />
        </Box>
    );
};
