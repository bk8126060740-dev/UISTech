import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import './AdminSearch.css';

const AdminSearch = ({ value = '', setValue = () => { } }) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300); // Adjust debounce time as needed

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  // Do something with debouncedValue
  useEffect(() => {
    if (debouncedValue) {
      console.log("Search:", debouncedValue);
      // You can call your API or filtering logic here
    }
  }, [debouncedValue]);

  const handleClear = () => {
    setValue('');
  };

  return (
    <Box className='admin-search-main'>
      <TextField
        id="filled-basic"
        placeholder="Search By title, location or description..."
        variant="filled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleClear} size="small">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} size="small">
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiInputBase-input': {
            padding: '10px 0'
          }
        }}
      />
    </Box>
  );
};

export default AdminSearch;
