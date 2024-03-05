import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import AdminVpsTableRow from "./AdminVpsTableRow";
export default function TableRegister(props) {
    const newRow = {
        location1: '',
        location2: '',
        station: '',
        vehicle: '',
        floor_plan: '',
        floor_plan_kind: '',
        land_area: '',
        driveway_area: '',
        building_ex_area: '',

        child_school: '',
        middle_school: '',
        story: '',
        land_rights: '',
        lease_fee: '',
        topography: '',
        lease_span: '',
        deposit_price: '',
        key_money: '',
        build_year: '',
        building_const: '',
        parking: '',
        parking_price: '',
        city_plan: '',
        use_area: '',
        
        building_ratio: '',

        // front_direction: '',
        // front_direction_way: '',
        // build_date: '',
        // land_extention: '',
      };
    //   const handleInputChange = (value) => {
    //     const updatedRow = { ...newRow }; // Copy current estate values
    //     //updatedRow[ updatedRow,columnName] = value; // Update the value for the specific column
    //     props.setEstate([updatedRow]); // Update the estate with the modified row
    // };
    // const handleInputChange = (value, objKey) => {
    //     const updatedRow = { ...newRow }; // Copy current estate values
    //     updatedRow[objKey] = value; // Update the value for the specific column
    //     props.setEstate(updatedRow); // Update the estate with the modified row
    // };
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
                                    {/* <TextField
                                        fullWidth
                                        multiline
                                        variant="outlined"
                                        size="small"
                                        
                                        onChange={(e) =>
                                            handleInputChange(e.target.value,column)
                                        }
                                    /> */}
                                <AdminVpsTableRow
                                        index={index}
                                        handleInputChange={handleInputChange}
                                        handleChange={handleChange}
                                        newRow={newRow}
                                        estate={props.estate}
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
