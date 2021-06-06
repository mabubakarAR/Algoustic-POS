import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Grid} from '@material-ui/core';
import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  buttonColor: {
    backgroundColor: '#CA0B00',
    color: '#ffffff'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}));

const FormDialog = (props) => {
  const classes = useStyles();
  const handleChange = (event) => {
    props.titleChange(event.target.value);
  }

  const handleFromChange = (event) => {
    props.buyingFromChange(event.target.value);
  }

  const handlePriceChange = (event) => {
    props.buyingPriceChange(event.target.value);
  }

  const handlePhoneChange = (event) => {
    props.buyingPhoneChange(event.target.value);
  }

  const handleDateChange = (event) => {
    props.buyingDateChange(event.target.value);
  }

  const handleQuantityChange = (event) => {
    props.productQuantityChange(event.target.value);
  }

  const handleProductTypeChange = (event) => {
    props.productTypeChange(event.target.value);
  }
    

  return (
    <Dialog open={props.open}> 
      <form onSubmit={props.onSubmit}>
      <Card>
        <CardHeader
          title="New Product"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                onChange={handleChange}
                required
                value={props.title}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Product Type"
                name="producttype"
                onChange={handleProductTypeChange}
                required
                value={props.productType}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Buying From"
                name="from"
                onChange={handleFromChange}
                required
                value={props.buyingFrom}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Buying Price"
                name="price"
                type="number"
                onChange={handlePriceChange}
                required
                value={props.buyingPrice}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handlePhoneChange}
                type="number"
                value={props.buyingPhone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Buying Date"
                name="date"
                onChange={handleDateChange}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={props.buyingDate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Purchasing Quantity"
                name="number"
                helperText={"This will be in kg"}
                onChange={handleQuantityChange}
                type="number"
                value={props.type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input type="hidden" name="status" id="status" value={props.status} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
          mb={'1%'}
        >
          <DialogActions>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
            <Button variant='contained' onClick={props.onClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Card>
      </form>
    </Dialog>
  );
}

export default FormDialog;