import { Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useState } from "react";

export default function SearchBox({ search }) {
    const [query, setQuery] = useState("");

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault();

                search(query);
            }}
        >
            <OutlinedInput
                placeholder="Search"
                fullWidth
                sx={{ bgcolor: lightBlue[50] }}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                endAdornment={
                    <InputAdornment>
                        <IconButton
                            type="submit"
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Box>
    );
}
