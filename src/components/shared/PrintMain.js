import React, { useState } from 'react';
import {
  Box,
  Button
} from '@material-ui/core';
import PrintReciept from '../shared/PrintReciept'

const PrintMain = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return(
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Button variant="contained" onClick={handleClickOpen} size="small">Print</Button>
        <PrintReciept sellingPrice={props.sellingPrice} to={props.sellingTo} product={props.product} open={open} onClose={handleClose} />
      </Box>
    </Box>
  );
};

export default PrintMain;
