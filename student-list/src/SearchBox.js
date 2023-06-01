import { Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";

export default function SearchBox() {
    const [query, setQuery] = useState("");

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault();

                console.log(query);
            }}
        >
            <OutlinedInput
                placeholder="Search"
                fullWidth
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
