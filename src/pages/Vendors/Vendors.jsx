import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import Loading from '../../components/Layout/Loading';
import MainHead from '../../components/Layout/MainHead';
import { getAllVendor } from '../../redux/action/vendor';

const Vendors = () => {
  const dispatch = useDispatch();

 

  const {vendor, loading} = useSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(getAllVendor());
  }, [dispatch]);

  console.log(vendor ,"List of Vendor")

  const columns = ['Name','Vendors', 'Varients', 'Date', 'Action'];

  const data = vendor
    ? vendor.flatMap((vendorItem) =>
        vendorItem.vendorList.map((vendorDetails) => [
          vendorItem.name,
          vendorDetails.vendorName,
          vendorDetails.varient,
          vendorItem.createdAt,
          <Box key={vendorDetails._id}>
            <Link to={`/vendor/edit/${vendorItem?._id}`}>
              <Tooltip title="Edit">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Link>
            <Link to={`/vendor/view/${vendorItem?._id}`}>
              <Tooltip title="View">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        ])
      )
    : [];

  const options = {
    filter: false,
    columns: false,
    selectableRows: 'none',
  };

  return (
    <Box>
       {loading? <Loading/>:null}
       <MainHead heading="Vendors List"/>
      <MUIDataTable
        color={'secondary'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Vendors);
