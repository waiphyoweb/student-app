import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ArrowForward } from "@mui/icons-material";

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

export default function StudentTable({ students }) {
    return (
        <Box sx={{ mx: { lg: "400px", md: "200px", sm: "100px" }, mt: 3 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">
                                Email
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Phone
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Gender
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Detail
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <StyledTableRow
                                key={student._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {student.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.email}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.phone}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {student.gender}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link to={`/students/${student._id}`}>
                                        <ArrowForward
                                            sx={{ color: "grey", mr: 2 }}
                                        />
                                    </Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
