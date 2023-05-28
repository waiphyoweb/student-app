import { ArrowBack } from "@mui/icons-material";
import {
    Box,
    Stack,
    Button,
    OutlinedInput,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Select,
    MenuItem,
    IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const api = "http://localhost:8000";

export default function StudentEdit({ update }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/students/${id}`);
            const student = await res.json();
            console.log(student);

            setStudent(student);
        })();
    }, [id]);

    const name = student.name;
    const email = student.email;
    const phone = student.phone;
    const nrc = student.nrc;
    const gender = student.gender;
    const address = student.address;
    const hobby = student.hobby;
    const state = student.state;
    const township = student.township;

    return (
        <Box sx={{ mx: { lg: "400px", md: "200px", sm: "100px" }, mt: 3 }}>
            <Box sx={{ my: 3 }}>
                <IconButton
                    onClick={() => navigate(`/students/${id}`)}
                >
                    <ArrowBack />
                </IconButton>
            </Box>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();

                    update(
                        id,
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

                    navigate(`/students/${id}`);
                }}
            >
                <Stack
                    spacing={2}
                >
                    <OutlinedInput
                        fullWidth
                        placeholder="Name"
                        value={name}
                        onChange={(e) =>
                            setStudent({ ...student, name: e.target.value })
                        }
                    />
                    <OutlinedInput
                        fullWidth
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setStudent({ ...student, email: e.target.value })
                        }
                    />
                    <OutlinedInput
                        fullWidth
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) =>
                            setStudent({ ...student, phone: e.target.value })
                        }
                    />
                    <OutlinedInput
                        fullWidth
                        placeholder="NRC"
                        value={nrc}
                        onChange={(e) =>
                            setStudent({ ...student, nrc: e.target.value })
                        }
                    />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            Gender
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) =>
                                setStudent({ ...student, gender: e.target.value })
                            }
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
                    <OutlinedInput
                        fullWidth
                        placeholder="Address"
                        value={address}
                        onChange={(e) =>
                            setStudent({ ...student, address: e.target.value })
                        }
                    />
                    <OutlinedInput
                        fullWidth
                        placeholder="Hobby"
                        value={hobby}
                        onChange={(e) =>
                            setStudent({ ...student, hobby: e.target.value })
                        }
                    />
                    <FormControl fullWidth>
                        <Select
                            value={state}
                            onChange={(e) =>
                                setStudent({ ...student, state: e.target.value })
                            }
                        >
                            <MenuItem value={"Yangon"}>Yangon</MenuItem>
                            <MenuItem value={"Mandalay"}>Mandalay</MenuItem>
                        </Select>
                    </FormControl>
                    <OutlinedInput
                        fullWidth
                        placeholder="Township"
                        value={township}
                        onChange={(e) =>
                            setStudent({ ...student, township: e.target.value })
                        }
                    />
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
