import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';
import ProductListToolbar from '../components/sale/SalesListing';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
      </Container>
    </Box>
  </>
);

export default ProductList;
