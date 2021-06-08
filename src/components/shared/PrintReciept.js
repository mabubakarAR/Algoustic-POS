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
          <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{justifyContent: "center"}} mb={3}>
            <Grid item>
              <Typography variant={'h4'} style={{align: "center"}}>
                Minhas Brothers Steel Works
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center" style={{justifyContent: "center"}} >
                <Grid item md={12} xs={12}>
                  <Grid container spacing={5} style={{justifyContent: "center"}} >
                    <Grid item>
                      <Typography>Selling Price: </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{props.sellingPrice}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Grid container spacing={5} style={{justifyContent: "center"}}>
                    <Grid item>
                      <Typography>Selling To: </Typography>
                    </Grid>
                    <Grid item>
                    <Typography>{props.to} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Grid container spacing={5} style={{justifyContent: "center"}}>
                    <Grid item>
                      <Typography>Product: </Typography>
                    </Grid>
                    <Grid item>
                    <Typography>{props.product} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Divider /> */}
          <Grid container direction={"column"} mt={3}>
            <Grid item>
              <Typography>Algoustics POS</Typography>
            </Grid>
            <Grid item>
              <Typography>admin@algoustics.com</Typography>
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