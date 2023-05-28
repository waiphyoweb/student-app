import { Add } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField } from "@mui/material";

export default function Marks({ addMarkComponent }) {
    return (
        <Box>
            <Stack direction="row" spacing={3}>
                <IconButton onClick={() => addMarkComponent}>
                    <Add />
                </IconButton>
                <TextField
                    required
                    label="Year"
                />
                <TextField
                    required
                    label="Subject 1"
                />
                <TextField
                    required
                    label="Subject 2"
                />
                <TextField
                    required
                    label="Subject 3"
                />
            </Stack>
        </Box>
    );
}
