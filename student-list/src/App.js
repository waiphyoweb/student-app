import {
    AppBar,
    Box,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { indigo, lightBlue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import StudentTable from "./StudentTable";
import NewStudent from "./NewStudent";
import StudentDetail from "./StudentDetail";
import { PersonAdd, School } from "@mui/icons-material";
import StudentEdit from "./StudentEdit";
import SearchBox from "./SearchBox";

const api = "http://localhost:8000";

export default function App() {
    const [students, setSutdents] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/students`);
            const result = await res.json();

            setSutdents(result);
        })();
    }, []);

    const add = (
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
    ) => {
        (async () => {
            const res = await fetch(`${api}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
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
                }),
            });

            const student = await res.json();

            setSutdents([student, ...students]);
        })();
    };

    const update = (
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
    ) => {
        fetch(`${api}/students/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                nrc,
                gender,
                address,
                hobby,
                state,
                township,
            }),
        });

        const result = students.map((student) => {
            if (student._id === id) {
                student.name = name;
                student.email = email;
                student.phone = phone;
                student.nrc = nrc;
                student.gender = gender;
                student.address = address;
                student.hobby = hobby;
                student.state = state;
                student.township = township;
            }
            return student;
        });

        setSutdents(result);
    };

    const remove = (id) => {
        fetch(`${api}/students/${id}`, {
            method: "DELETE",
        });

        const result = students.filter((student) => student._id !== id);
        setSutdents(result);
    };

    // const search = (name) => {
    //     (async (q) => {
    //         const result = await fetch(`${api}/students/search?q=${q}`);

    //     })();
    // }

    return (
        <Box>
            <Box>
                <AppBar position="static" sx={{ bgcolor: indigo[500] }}>
                    <Toolbar
                        sx={{ mx: { lg: "100px", md: "50px", sm: "20px" } }}
                    >
                        <IconButton>
                            <School
                                fontSize="large"
                                sx={{ color: lightBlue[50], ml: 3 }}
                            />
                        </IconButton>
                        <Typography
                            variant="h4"
                            sx={{ flexGrow: 1, color: lightBlue[50] }}
                        >
                            Student List
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <SearchBox />
                            <IconButton>
                                <Link to={"/form"}>
                                    <PersonAdd
                                        sx={{ color: lightBlue[50], mr: 3 }}
                                        fontSize="large"
                                    />
                                </Link>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            <Routes>
                <Route
                    path="/"
                    element={<StudentTable students={students} />}
                />
                <Route
                    path="/students"
                    element={<StudentTable students={students} />}
                />
                <Route
                    path="/students/:id"
                    element={<StudentDetail remove={remove} />}
                />
                <Route path="/form" element={<NewStudent add={add} />} />
                <Route
                    path="/students/:id/edit"
                    element={<StudentEdit update={update} />}
                />
            </Routes>
        </Box>
    );
}
