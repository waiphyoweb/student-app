import { Box, Stack, TextField } from "@mui/material";
import { forwardRef } from "react";

const Marks = forwardRef(({ subOne, subTwo, subThree }) => {
    return (
        <Box sx={{ mx: "auto", flexGrow: 1 }}>
            <Stack direction="row" spacing={3}>
                {/* <TextField
                    fullWidth
                    inputRef={academicYear}
                    label="Academic Year ( **** - **** )"
                /> */}
                <TextField
                    fullWidth
                    inputRef={subOne}
                    label="Subject 1"
                />
                <TextField
                    fullWidth
                    inputRef={subTwo}
                    label="Subject 2"
                />
                <TextField
                    fullWidth
                    inputRef={subThree}
                    label="Subject 3"
                />
            </Stack>
        </Box>
    );
});

export default Marks;