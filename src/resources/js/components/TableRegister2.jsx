import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import AdminVpsTableRow from "./AdminVpsTableRow";
export default function TableRegister2(props) {

    const handleInputChange = (value, objKey) => {
        props.setEstate(prevState => {
            // Create a new row object by copying the previous state
            const updatedRow = { ...prevState };
            // Update the value for the specific column
            updatedRow[objKey] = value;
            // Return the updated row
            return updatedRow;
        });
    };
    const handleChange = (event) => {
        props.setEstate(event.target.value);
      };
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    {props.columns.map((column, index) => (
                        <TableRow
                            key={column.label}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ bgcolor: "#E7EAEC", width: "30%" }}
                                >
                                    {column.label}
                                </TableCell>
                                <TableCell align="right" sx={{ width: "70%" }}>
                                <AdminVpsTableRow
                                        index={index}
                                        handleInputChange={handleInputChange}
                                        handleChange={handleChange}
                                        estate={props.estate}
                                        objKeys={props.objKeys}
                                    />
                                </TableCell>
                            </>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
