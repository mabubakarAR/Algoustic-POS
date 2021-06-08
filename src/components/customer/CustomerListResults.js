import React, { useState, useEffect, useRef } from 'react';
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
import ReactToPrint from 'react-to-print';
import PrintReciept from '../shared/PrintReciept';
import PrintMain from '../shared/PrintMain';

const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [purchases, setPurchases] = useState([]);
  const [open, setOpen] = useState(false);
  const componentRef = useRef();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('in use effect')
    refresh();
  },[]);

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

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
                <TableCell>
                  Print
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
                    {/* <ReactToPrint 
                    trigger={()=><Button variant="contained" onClick={handleClickOpen} size="small">Print</Button>}
                    content={() => componentRef.current}
                    /> */}
                    {/* <Button variant="contained" onClick={handleClickOpen} size="small">Print</Button>
                    <PrintReciept open={open} onClose={handleClose} /> */}
                    {/* <div style={{ display: "none" }}><PrintReciept open={open} onClose={handleClose} ref={componentRef} sellingPrice={customer.SellingPrice} /></div> */}
                  {/* <div style={{ display: "none" }}><PrintReciept ref={componentRef} sellingPrice={customer.SellingPrice} /></div>
                    <Button variant="contained" size="small" onClick={handlePrint}>Print</Button> */}
                    {
                      customer.Status === "sold" ? <Button variant="contained" size="small" disabled> Sold </Button>
                      :
                      <SalesSection id={customer._id} status={"pending"}/>
                    }
                  </TableCell>
                  <TableCell>
                    <PrintMain sellingPrice={customer.SellingPrice} sellingTo={customer.SellingTo} product={customer.Title}/>
                  {/* <Button variant="contained" onClick={handleClickOpen} size="small">Print</Button>
                    <PrintReciept open={open} onClose={handleClose} /> */}
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

// export class PrintReciept extends React.Component {
//   render() {
//     debugger
//     console.log("props >>>>>>>>>>", this.props)
//     console.log("props >>> >>>>>>>>>>", this.props.sellingPrice)
//     return (
//       <table>
//         <thead>
//           <th>column 1</th>
//           <th>column 2</th>
//           <th>column 3</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{this.props.sellingPrice}</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }
