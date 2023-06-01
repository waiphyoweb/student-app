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
    TextField,
    Divider
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marks from "./Marks";
import { ArrowBack, Add } from "@mui/icons-material";

export default function NewStudent({ add }) {
    const [ firstYr, setFirstYr ] = useState(false);
    const [ secondYr, setSecondYr ] = useState(false);
    const [ thirdYr, setThirdYr ] = useState(false);
    const [ fourthYr, setFourthYr ] = useState(false);

    const navigate = useNavigate();

    const nameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const nrcInput = useRef();
    const addressInput = useRef();
    const hobbyInput = useRef();
    const townshipInput = useRef();

    const subOneOfFirstYrInput = useRef();
    const subTwoOfFirstYrInput = useRef();
    const subThreeOfFirstYrInput = useRef();

    const subOneOfSecondYrInput = useRef();
    const subTwoOfSecondYrInput = useRef();
    const subThreeOfSecondYrInput = useRef();

    const subOneOfThirdYrInput = useRef();
    const subTwoOfThirdYrInput = useRef();
    const subThreeOfThirdYrInput = useRef();

    const subOneOfFourthYrInput = useRef();
    const subTwoOfFourthYrInput = useRef();
    const subThreeOfFourthYrInput = useRef();

    const [gender, setGender] = useState("Female");

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const [state, setState] = useState("");

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    return (
        <Box sx={{ mx: { lg: "400px", md: "200px", sm: "100px" }, my: 3 }}>
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

                    if (fourthYr) {
                        const name = nameInput.current.value;
                        const email = emailInput.current.value;
                        const phone = phoneInput.current.value;
                        const nrc = nrcInput.current.value;
                        const address = addressInput.current.value;
                        const hobby = hobbyInput.current.value;
                        const township = townshipInput.current.value;
                        const subOneOfFirstYr = subOneOfFirstYrInput.current.value;
                        const subTwoOfFirstYr = subTwoOfFirstYrInput.current.value;
                        const subThreeOfFirstYr = subThreeOfFirstYrInput.current.value;
                        const subOneOfSecondYr = subOneOfSecondYrInput.current.value;
                        const subTwoOfSecondYr = subTwoOfSecondYrInput.current.value;
                        const subThreeOfSecondYr = subThreeOfSecondYrInput.current.value;
                        const subOneOfThirdYr = subOneOfThirdYrInput.current.value;
                        const subTwoOfThirdYr = subTwoOfThirdYrInput.current.value;
                        const subThreeOfThirdYr = subThreeOfThirdYrInput.current.value;
                        const subOneOfFourthYr = subOneOfFourthYrInput.current.value;
                        const subTwoOfFourthYr = subTwoOfFourthYrInput.current.value;
                        const subThreeOfFourthYr = subThreeOfFourthYrInput.current.value;

                        add(
                            name,
                            email,
                            phone,
                            nrc,
                            gender,
                            address,
                            hobby,
                            state,
                            township,
                            subOneOfFirstYr,
                            subTwoOfFirstYr,
                            subThreeOfFirstYr,
                            subOneOfSecondYr,
                            subTwoOfSecondYr,
                            subThreeOfSecondYr,
                            subOneOfThirdYr,
                            subTwoOfThirdYr,
                            subThreeOfThirdYr,
                            subOneOfFourthYr,
                            subTwoOfFourthYr,
                            subThreeOfFourthYr,
                        );
                    } else if (thirdYr) {
                        const name = nameInput.current.value;
                        const email = emailInput.current.value;
                        const phone = phoneInput.current.value;
                        const nrc = nrcInput.current.value;
                        const address = addressInput.current.value;
                        const hobby = hobbyInput.current.value;
                        const township = townshipInput.current.value;
                        const subOneOfFirstYr = subOneOfFirstYrInput.current.value;
                        const subTwoOfFirstYr = subTwoOfFirstYrInput.current.value;
                        const subThreeOfFirstYr = subThreeOfFirstYrInput.current.value;
                        const subOneOfSecondYr = subOneOfSecondYrInput.current.value;
                        const subTwoOfSecondYr = subTwoOfSecondYrInput.current.value;
                        const subThreeOfSecondYr = subThreeOfSecondYrInput.current.value;
                        const subOneOfThirdYr = subOneOfThirdYrInput.current.value;
                        const subTwoOfThirdYr = subTwoOfThirdYrInput.current.value;
                        const subThreeOfThirdYr = subThreeOfThirdYrInput.current.value;

                        add(
                            name,
                            email,
                            phone,
                            nrc,
                            gender,
                            address,
                            hobby,
                            state,
                            township,
                            subOneOfFirstYr,
                            subTwoOfFirstYr,
                            subThreeOfFirstYr,
                            subOneOfSecondYr,
                            subTwoOfSecondYr,
                            subThreeOfSecondYr,
                            subOneOfThirdYr,
                            subTwoOfThirdYr,
                            subThreeOfThirdYr,
                        );
                    } else if (secondYr) {
                        const name = nameInput.current.value;
                        const email = emailInput.current.value;
                        const phone = phoneInput.current.value;
                        const nrc = nrcInput.current.value;
                        const address = addressInput.current.value;
                        const hobby = hobbyInput.current.value;
                        const township = townshipInput.current.value;
                        const subOneOfFirstYr = subOneOfFirstYrInput.current.value;
                        const subTwoOfFirstYr = subTwoOfFirstYrInput.current.value;
                        const subThreeOfFirstYr = subThreeOfFirstYrInput.current.value;
                        const subOneOfSecondYr = subOneOfSecondYrInput.current.value;
                        const subTwoOfSecondYr = subTwoOfSecondYrInput.current.value;
                        const subThreeOfSecondYr = subThreeOfSecondYrInput.current.value;

                        add(
                            name,
                            email,
                            phone,
                            nrc,
                            gender,
                            address,
                            hobby,
                            state,
                            township,
                            subOneOfFirstYr,
                            subTwoOfFirstYr,
                            subThreeOfFirstYr,
                            subOneOfSecondYr,
                            subTwoOfSecondYr,
                            subThreeOfSecondYr,
                        );
                    } else {
                        const name = nameInput.current.value;
                        const email = emailInput.current.value;
                        const phone = phoneInput.current.value;
                        const nrc = nrcInput.current.value;
                        const address = addressInput.current.value;
                        const hobby = hobbyInput.current.value;
                        const township = townshipInput.current.value;
                        const subOneOfFirstYr = subOneOfFirstYrInput.current.value;
                        const subTwoOfFirstYr = subTwoOfFirstYrInput.current.value;
                        const subThreeOfFirstYr = subThreeOfFirstYrInput.current.value;

                        add(
                            name,
                            email,
                            phone,
                            nrc,
                            gender,
                            address,
                            hobby,
                            state,
                            township,
                            subOneOfFirstYr,
                            subTwoOfFirstYr,
                            subThreeOfFirstYr,
                        );
                    }

                    nameInput.current.value = "";
                    emailInput.current.value = "";
                    phoneInput.current.value = "";
                    nrcInput.current.value = "";
                    addressInput.current.value = "";
                    hobbyInput.current.value = "";
                    townshipInput.current.value = "";
                    setFirstYr(false);
                    setSecondYr(false);
                    setThirdYr(false);
                    setFourthYr(false);
                    
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
                    <Divider />
                    <Stack direction="row" spacing={3}>
                        <IconButton onClick={() => {
                            setFirstYr(true);
                        }}>
                            <Add />
                        </IconButton>
                        { firstYr && <Marks ref={subOneOfFirstYrInput} subOne={subOneOfFirstYrInput} subTwo={subTwoOfFirstYrInput} subThree={subThreeOfFirstYrInput} />}
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        { firstYr && <IconButton onClick={() => setSecondYr(true)}><Add /></IconButton>}
                        { secondYr && <Marks ref={subOneOfSecondYrInput} subOne={subOneOfSecondYrInput} subTwo={subTwoOfSecondYrInput} subThree={subThreeOfSecondYrInput} />}
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        { secondYr && <IconButton onClick={() => setThirdYr(true)}><Add /></IconButton>}
                        { thirdYr && <Marks ref={subOneOfThirdYrInput} subOne={subOneOfThirdYrInput} subTwo={subTwoOfThirdYrInput} subThree={subThreeOfThirdYrInput} />}
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        { thirdYr && <IconButton onClick={() => setFourthYr(true)}><Add /></IconButton>}
                        { fourthYr && <Marks ref={subOneOfFourthYrInput} subOne={subOneOfFourthYrInput} subTwo={subTwoOfFourthYrInput} subThree={subThreeOfFourthYrInput} />}
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: "100px" }}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
