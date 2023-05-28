import {
    Box,
    Button,
    FormControl,
    Stack,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    InputLabel,
    MenuItem,
    Select,
    IconButton,
    TextField
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marks from "./Marks";
import { ArrowBack } from "@mui/icons-material";

export default function NewStudent({ add }) {
    const navigate = useNavigate();

    const nameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const nrcInput = useRef();
    const addressInput = useRef();
    const hobbyInput = useRef();
    const townshipInput = useRef();

    const [gender, setGender] = useState("Female");

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const [state, setState] = useState("");

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    return (
        <Box sx={{ mx: { lg: "400px", md: "200px", sm: "100px" }, mt: 3 }}>
            <Box sx={{ my: 3 }}>
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBack />
                </IconButton>
            </Box>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();

                    const name = nameInput.current.value;
                    const email = emailInput.current.value;
                    const phone = phoneInput.current.value;
                    const nrc = nrcInput.current.value;
                    const address = addressInput.current.value;
                    const hobby = hobbyInput.current.value;
                    const township = townshipInput.current.value;

                    add(
                        name,
                        email,
                        phone,
                        nrc,
                        gender,
                        address,
                        hobby,
                        state,
                        township
                    );

                    nameInput.current.value = "";
                    emailInput.current.value = "";
                    phoneInput.current.value = "";
                    nrcInput.current.value = "";
                    addressInput.current.value = "";
                    hobbyInput.current.value = "";
                    townshipInput.current.value = "";

                    nameInput.current.focus();
                }}
            >
                <Stack
                    spacing={2}
                >
                    <TextField
                        label="Name"
                        fullWidth
                        inputRef={nameInput}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        inputRef={emailInput}
                    />
                    <TextField
                        label="Phone"
                        fullWidth
                        inputRef={phoneInput}
                    />
                    <TextField
                        label="NRC"
                        fullWidth
                        inputRef={nrcInput}
                    />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            Gender
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <FormControlLabel
                                value="Female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="Male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="Other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label="Address"
                        fullWidth
                        inputRef={addressInput}
                    />
                    <TextField
                        label="Hobby"
                        fullWidth
                        inputRef={hobbyInput}
                    />
                    <FormControl fullWidth>
                        <InputLabel>State</InputLabel>
                        <Select
                            value={state}
                            label="State"
                            onChange={handleStateChange}
                        >
                            <MenuItem value={"Yangon"}>Yangon</MenuItem>
                            <MenuItem value={"Mandalay"}>Mandalay</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Township"
                        fullWidth
                        inputRef={townshipInput}
                    />
                    <Marks />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: "30px" }}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
