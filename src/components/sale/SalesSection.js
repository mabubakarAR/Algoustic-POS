import React, { useState } from 'react';
import {
  Box,
  Button
} from '@material-ui/core';
import Purchases from 'src/model/purchases';
import SalesForm from './SalesForm';

const SalesSection = (props) => {
  const [open, setOpen] = useState(false);
  const [payment, setPaymentMethod] = useState('');
  const [to, setSellingTo] = useState('');
  const [price, setSellingPrice] = useState('');
  const [status, setStatus] = useState('sold');
  const [date, setSellingDate] = useState('');
  const [phone, setSellingPhone] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const paymentTypeChange = (payment) => {
    setPaymentMethod(payment);
  };

  const sellingDateChange = (date) => {
    setSellingDate(date);
  };

  const sellingPhoneChange = (phone) => {
    setSellingPhone(phone);
  };

  const sellingToChange = (to) => {
    setSellingTo(to);
  };

  const sellingPriceChange = (price) => {
    setSellingPrice(price);
  };

  const statusChange = (status) => {
    setStatus(status);
  };

  const updateResponse = () => {
    alert('Hoorey, You have sold it!');
  };

  const updateFailResponse = () => {
    alert('Something went wrong, please try again later');
  };

  const saleProduct = () => {
    Purchases.update(props.id,payment,to,price,status,date,phone,updateResponse,updateFailResponse).then(() => {
      setOpen(false);
      setPaymentMethod('');
      setSellingDate('');
      setSellingPhone('');
      setSellingTo('');
      setSellingPrice('');
      setStatus('sold');
    }, () => {
      alert('Something went wrong, please try again');
    }).finally(() => {
    });
  };
  debugger
  return(
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Button size="small" variant="contained" onClick={handleClickOpen}> Sell </Button>
        <SalesForm open={open} onClose={handleClose} onSubmit={saleProduct} payment={payment} paymentTypeChange={paymentTypeChange}
         sellingTo={to} sellingPrice={price} status={status} statusChange={statusChange} sellingPhone={phone} sellingDate={date}
         sellingToChange={sellingToChange} sellingPriceChange={sellingPriceChange} sellingDateChange={sellingDateChange}
         sellingPhoneChange={sellingPhoneChange} />
      </Box>
    </Box>
  );
};

export default SalesSection;
