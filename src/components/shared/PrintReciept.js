import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Grid, Typography} from '@material-ui/core';
import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import { useReactToPrint } from 'react-to-print';

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

const PrintReciept = (props) => {
  // debugger 
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    

  return (
    <Dialog open={props.open} onClose={props.onClose}> 
      {/* <form onSubmit={props.onSubmit}> */}
      <Card>
        <CardHeader
          title="Print Reciept"
        />
        <Divider />
        <CardContent ref={componentRef}>
          <Grid container spacing={2} direction="column" mb={3}>
            <Grid container xs={12}>
              <Typography style={{fontSize: "12px"}}>
                <b>Minhas Brothers Steel Works</b>
              </Typography>
            </Grid>
            <Grid container item md={12} xs={12}>
              <Grid container direction="row" >
                <Grid item md={12} xs={12}>
                  <Grid container spacing={5} >
                    <Grid item>
                      <Typography style={{fontSize: "14px"}}>Selling Price: </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{fontSize: "14px"}}>{props.sellingPrice}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Typography style={{fontSize: "14px"}}>Selling To: </Typography>
                    </Grid>
                    <Grid item>
                    <Typography style={{fontSize: "14px"}}>{props.to} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Grid container spacing={5}>
                    <Grid item>
                      <Typography style={{fontSize: "14px"}}>Product: </Typography>
                    </Grid>
                    <Grid item>
                    <Typography style={{fontSize: "14px"}}>{props.product} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Divider /> */}
          <Grid container direction={"column"} mt={3}>
            <Grid item>
              <Typography style={{fontSize: "12px"}}><b>Algoustics POS</b></Typography>
            </Grid>
            <Grid item>
              <Typography style={{fontSize: "12px"}}><b>admin@algoustics.com</b></Typography>
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
            <Button onClick={handlePrint} color="primary" variant="contained" type="submit">
              Print
            </Button>
            <Button variant='contained' onClick={props.onClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Box>
      </Card>
      {/* </form> */}
    </Dialog>
  );
}

export default PrintReciept;