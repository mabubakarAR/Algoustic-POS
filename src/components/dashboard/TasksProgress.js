import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const TasksProgress = (props) => {
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
            SOLD PRODUCTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {soldProducts.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
      </Box>
    </CardContent>
  </Card>
)};

export default TasksProgress;
