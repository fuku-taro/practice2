import React from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import styled from "@emotion/styled";

const StyledTextField = styled(({ 
  fullWidth, multiline, variant, size, ...other 
}) => (
  <TextField 
  fullWidth
  multiline
  variant="outlined"
  size="small"
  {...other} />
))(({ theme }) => ({

}));

export default function AdminVpsTableRow({
  index,
  handleInputChange,
  newRow
}){
  const objKeys = [
    "location1",
    "location2",
    "station",
    "vehicle",
    "station",
    "floor_plan",
    "floor_plan_kind",
    "land_area",
    "driveway_area",
    "building_ex_area",
    "child_school",
    "middle_school",
    "story",
    "land_rights",
    "lease_fee",
    "lease_span",
    "deposit_price",
    "key_money",
    "build_year",
    "building_const",
    "parking",
    "parking_price",
    "city_plan",
    "use_area",
    "building_ratio",
    "topography",
    // "lease_span",
  ]
  const objKey = objKeys[index];
  return(
    <>
      <StyledTextField
      defaultValue={newRow[objKey]}
        onChange={(e) =>
          handleInputChange(e.target.value, objKey)
        }
      />
    </>
  );
}