import { Box, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/action/courses';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardLayout from '../../components/Layout/DashboardLayout';
import Loading from '../../components/Layout/Loading';
import MainHead from '../../components/Layout/MainHead';

const Courses = () => {
  const dispatch = useDispatch();

  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  console.log(courses)

  const columns = ['Poster','Title', 'Category', 'Creator'];

  const data = courses?.map((course) => [
    <Box>
    <img src={course.poster.url} height={"50px"} />
  </Box>,
    course.title,
    course.category,
    course.createdBy,

    // <Box>
    //   <Link to={`/courses/edit/${course._id}`}>
    //   <Tooltip title="Edit">
    //       <IconButton>
    //         <EditIcon />
    //       </IconButton>
    //       </Tooltip>
    //     </Link>
    //     <Link to={`/courses/view/${course._id}`}>
    //     <Tooltip title="View">
    //       <IconButton>
    //         <VisibilityIcon />
    //       </IconButton>
    //       </Tooltip>
    //     </Link>
    // </Box>
  ]);

  const options = {
    filter: false,
    columns: false,
    selectableRows: 'none',
  };

  return (
    <Box>
       {loading? <Loading/>:null}
       <MainHead heading="Courses List"/>
      <MUIDataTable
        color={'secondary'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default DashboardLayout(Courses);
