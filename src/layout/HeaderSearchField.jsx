import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import "./layout.css";

const HeaderSearchField = () => {
  return (
    <div className="headerSearchContainer">
      <TextField
        variant="outlined"
        // label="Search"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "40px",
            width: "100%",
            backgroundColor: "rgba(173, 216, 230,0.3)",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "blue",
            },
            "& .MuiInputBase-input": {
              //   padding: '10px 14px',
            },
          },
          "& .MuiInputLabel-root": {
            top: "-5px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <TuneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default HeaderSearchField;
