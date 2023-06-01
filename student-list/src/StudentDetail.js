import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    IconButton,
    Typography,
    Paper,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    Person,
    ArrowBack,
    Email,
    ContactPhone,
    Fitbit,
    ContactEmergency,
    Public,
    LocationCity,
    Wc,
    Home,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { lightBlue } from "@mui/material/colors";

const api = "http://localhost:8000";

export default function StudentDetail({ remove }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState("");

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/students/${id}`);
            const student = await res.json();

            setStudent(student);
        })();
    }, [id]);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: lightBlue[600],
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 15,
        },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    return (
        <Box sx={{ mx: { lg: "400px", md: "200px", sm: "100px" } }}>
            <Box sx={{ my: 3 }}>
                <IconButton
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <ArrowBack />
                </IconButton>
            </Box>
            <Paper elevation={3}>
                <List sx={{ m: 3 }}>
                    <ListItem>
                        <ListItemIcon>
                            <Person fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Name : {student.name}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Email : {student.email}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ContactPhone fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Phone : {student.phone}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ContactEmergency fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            NRC : {student.nrc}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Wc fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Gender : {student.gender}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Home fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Address : {student.address}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Fitbit fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Hobby : {student.hobby}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Public fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            State : {student.state}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocationCity fontSize="large" />
                        </ListItemIcon>
                        <Typography variant="h6">
                            Township : {student.township}
                        </Typography>
                    </ListItem>
                    <ListItem>
                    <Button variant="outlined" sx={{ mr: 3, color: lightBlue[50] }}>
                        <Link to={`/students/${student._id}/edit`}>EDIT</Link>
                    </Button>
                    <Button variant="contained" color="error" onClick={() => {
                        remove(id);
                        navigate("/");
                    }}>
                        DELETE
                    </Button>
                    </ListItem>
                </List>
            </Paper>
            <Box sx={{ my: 3 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Year</StyledTableCell>
                                <StyledTableCell align="right">
                                    Subject One
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    Subject Two
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    Subject Three
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {student.firstYr}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.subOneOfFirstYr}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.subTwoOfFirstYr}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.subThreeOfFirstYr}
                                </StyledTableCell>
                            </StyledTableRow>
                            { student.secondYr && 
                                <StyledTableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {student.secondYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subTwoOfSecondYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subTwoOfSecondYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subThreeOfSecondYr}
                                    </StyledTableCell>
                                </StyledTableRow>
                            }
                            { student.thirdYr && 
                                <StyledTableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {student.thirdYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subOneOfThirdYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subTwoOfThirdYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subThreeOfThirdYr}
                                    </StyledTableCell>
                                </StyledTableRow>
                            }
                            { student.fourthYr &&
                                <StyledTableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {student.fourthYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subOneOfFourthYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subTwoOfFourthYr}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {student.subThreeOfFourthYr}
                                    </StyledTableCell>
                                </StyledTableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
