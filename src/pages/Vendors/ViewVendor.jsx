import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { deleteVendor, getVendorInfo } from '../../redux/action/vendor';
import { Box, Button } from '@mui/material';
import toast from 'react-hot-toast';


function ViewVendor() {
    const { venderInfo, loading, error, message } = useSelector(
        (state) => state.vendor
      );

      console.log(venderInfo)

      const params = useParams();
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const deleteButtonHandler = (id) => {
        dispatch(deleteVendor(id));
      };

      useEffect(() => {
        dispatch(getVendorInfo(params.id));
      }, [dispatch]);


      useEffect(() => {
        if (error) {
          console.log("Error:", error);
          toast.error(error);
          dispatch({ type: "clearError" });
        }
    
        if (message) {
          console.log("Success:", message);
          toast.success(message);
          dispatch({ type: "clearMessage" });
          navigate("/vendors");
        }
      }, [dispatch, error, message]);

  return (
    <div>
    {loading && <p>Loading...</p>}

    {venderInfo && (
      <div>
        <h1>{venderInfo?.name}</h1>
        <p>{venderInfo?.description}</p>

        <h2>Vendor List:</h2>
        <ul>
          {venderInfo?.vendorList.map((vendor) => (
            <li key={vendor?._id}>
              <strong>Vendor Name:</strong> {vendor?.vendorName}<br />
              <strong>Variant:</strong> {vendor?.varient}<br />
              <strong>Number:</strong> {vendor?.number}
            </li>
          ))}
        </ul>

        <p>Created At: {venderInfo?.createdAt}</p>
      </div>
    )}

    <Box my={5} display={"flex"} gap={2}>
        <Link to={`/vendor/edit/${params.id}`}>
        <Button variant='contained'>Edit</Button>
        </Link>
       
        <Button variant='outlined' color='error' onClick={() => deleteButtonHandler(params.id)}>Delete</Button>
    </Box>
  </div>
  )
}

export default DashboardLayout(ViewVendor)