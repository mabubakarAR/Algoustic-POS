import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

const Budget = (props) => {
  const [TotalProducts, setPurchases] = useState([]);

  const refresh = () => {
    window.databaseObj.purchases.find({}).sort({ createdAt: -1 }).exec(function (err, docs) {
      setPurchases(docs);
    });
  }

  useEffect(() => {
    console.log('in use effect')
    refresh();
  },[]);
return(
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL PRODUCTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {TotalProducts.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
      </Box>
    </CardContent>
  </Card>
)};

export default Budget;
