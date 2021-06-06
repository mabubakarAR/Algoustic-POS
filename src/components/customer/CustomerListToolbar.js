import React, { useState } from 'react';
import {
  Box,
  Button
} from '@material-ui/core';
import Purchases from 'src/model/purchases';
import FormDialog from 'src/components/customer/FormDialog';

const CustomerListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [from, setBuyingFrom] = useState('');
  const [price, setBuyingPrice] = useState('');
  const [status, setStatus] = useState('pending');
  const [date, setBuyingDate] = useState('');
  const [phone, setBuyingPhone] = useState('');
  const [ptype, setProductType] = useState('');
  const [quantity, setProductQuantity] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const productQuantityChange = (quantity) => {
    setProductQuantity(quantity);
  };

  const productTypeChange = (type) => {
     setProductType(type);
  };

  const titleChange = (title) => {
    setTitle(title);
  };

  const buyingDateChange = (date) => {
    setBuyingDate(date);
  };

  const buyingPhoneChange = (phone) => {
    setBuyingPhone(phone);
  };

  const buyingFromChange = (from) => {
    setBuyingFrom(from);
  };

  const buyingPriceChange = (price) => {
    setBuyingPrice(price);
  };

  const statusChange = (status) => {
    setStatus(status);
  };

  const updateResponse = () => {
    alert('Project Created successfully');
  };

  const updateFailResponse = () => {
    alert('Something wet wrong, please try again later');
  };

  const createProjectOnSubmition = () => {
    Purchases.insert(title,from,price,status,date,phone,ptype,quantity,updateResponse,updateFailResponse).then(() => {
      setOpen(false);
      setTitle('');
      setBuyingFrom('');
      setBuyingPrice('');
      setStatus('pending');
      setBuyingDate('');
      setBuyingPhone('');
    }, () => {
      alert('Something went wrong, please try again');
    }).finally(() => {
    });
  };
  return(
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button color="primary" variant="contained" onClick={handleClickOpen}> Add Product </Button>
        <FormDialog open={open} onClose={handleClose} onSubmit={createProjectOnSubmition} title={title} titleChange={titleChange}
         buyingFrom={from} buyingPrice={price} status={status} statusChange={statusChange} buyingPhone={phone} buyingDate={date}
         buyingFromChange={buyingFromChange} buyingPriceChange={buyingPriceChange} buyingDateChange={buyingDateChange}
         buyingPhoneChange={buyingPhoneChange} productQuantityChange={productQuantityChange} productType={ptype}
         buyingQuantity={quantity} productTypeChange={productTypeChange}  />
      </Box>
    </Box>
  );
};

export default CustomerListToolbar;
