import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
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
import SalesSection from './SalesSection';

const SalesListing = ({ customers, ...rest }) => {
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
    window.databaseObj.purchases.find({Status: "sold"}).sort({ updatedAt: -1 }).exec(function (err, docs) {
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
                  Product
                </TableCell>
                <TableCell>
                  Sold To
                </TableCell>
                <TableCell>
                  Sold Date
                </TableCell>
                <TableCell>
                  Selling Price
                </TableCell>
                <TableCell>
                  Payment type
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Status
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
                    {customer.SellingTo}
                  </TableCell>
                  <TableCell>
                    {moment(customer.SellingDate ? customer.SellingDate : customer.updatedAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {customer.SellingPrice + " Rs."}
                  </TableCell>
                  <TableCell>
                    {customer.PaymentType}
                  </TableCell>
                  <TableCell>
                    {customer.SellingPhone}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={customer.Status == "sold" ? "secondary" : "primary"}
                      label={customer.Status == "sold" ? "sold" : "pending"}
                      size="small"
                    />
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


export default SalesListing;
