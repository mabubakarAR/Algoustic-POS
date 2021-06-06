import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Chip
} from '@material-ui/core';
import moment from 'moment';
import SalesSection from '../sale/SalesSection';

const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [purchases, setPurchases] = useState([]);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const refresh = () => {
    window.databaseObj.purchases.find({}).sort({ createdAt: -1 }).exec(function (err, docs) {
      setPurchases(docs);
    });
  }

  useEffect(() => {
    console.log('in use effect')
    refresh();
  },[]);

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  From
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Quantity
                </TableCell>
                <TableCell>
                  Buying Date
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((customer) => (
                <TableRow
                  hover
                  key={customer._id}
                  selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.Title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.BuyerFrom}
                  </TableCell>
                  <TableCell>
                    {customer.BuyingPrice + " Rs."}
                  </TableCell>
                  <TableCell>
                    {customer.ProductType}
                  </TableCell>
                  <TableCell>
                    {customer.ProductQuantity}
                  </TableCell>
                  <TableCell>
                    {moment(customer.BuyingDate ? customer.BuyingDate : customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {customer.BuyingPhone}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={customer.Status == "sold" ? "secondary" : "primary"}
                      label={customer.Status == "sold" ? "sold" : "pending"}
                      size="small"
                    />
                  </TableCell> 
                  <TableCell>
                    {
                      customer.Status === "sold" ? <Button variant="contained" size="small" disabled> Sold </Button>
                      :
                      <SalesSection id={customer._id} status={"pending"}/>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={purchases.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default CustomerListResults;
