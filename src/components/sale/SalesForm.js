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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'

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
  },
  formControl: {
    minWidth: 220,
  }
}));

const SalesForm = (props) => {
  const classes = useStyles();

  const handleSellingToChange = (event) => {
    props.sellingToChange(event.target.value);
  }

  const handlePriceChange = (event) => {
    props.sellingPriceChange(event.target.value);
  }

  const handlePhoneChange = (event) => {
    props.sellingPhoneChange(event.target.value);
  }

  const handleDateChange = (event) => {
    props.sellingDateChange(event.target.value);
  }

  const handlePaymentChange = (event) => {
    props.paymentTypeChange(event.target.value);
  }
    

  return (
    <Dialog open={props.open}> 
      <form onSubmit={props.onSubmit}>
      <Card>
        <CardHeader
          title="Sell this product"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Sell To"
                name="to"
                onChange={handleSellingToChange}
                required
                value={props.sellingTo}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Selling Date"
                name="date"
                onChange={handleDateChange}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={props.sellingDate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Selling Price"
                name="price"
                type="number"
                onChange={handlePriceChange}
                required
                value={props.sellingPrice}
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
                value={props.sellingPhone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl variant='outlined' >
                <InputLabel>Payment Method</InputLabel>
                <Select value={props.payment} className={classes.formControl} onChange={handlePaymentChange} label="Payment Type">
                  <MenuItem value={'Cash'}>Cash</MenuItem>
                  <MenuItem value={'Online'}>Online</MenuItem>
                </Select>
              </FormControl>
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

export default SalesForm;