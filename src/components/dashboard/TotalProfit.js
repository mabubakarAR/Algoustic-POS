import { useState, useEffect } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props) => {
  const [soldProducts, setPurchases] = useState([]);

  const refresh = () => {
    window.databaseObj.purchases.find({Status: "sold"}).sort({ createdAt: -1 }).exec(function (err, docs) {
      setPurchases(docs);
    });
  }

  useEffect(() => {
    console.log('in use effect')
    refresh();
  },[]);
return(
  <Card {...props}>
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
            TOTAL EARNING
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            Rs {soldProducts.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};

export default TotalProfit;
