import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";
import { deleteCourse, getCourseInfo } from "../../redux/action/courses";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Loading from "../../components/Layout/Loading";
import SecondaryHead from "../../components/Layout/SecondaryHead";
import SchoolIcon from '@mui/icons-material/School';

const ViewCourse = () => {
  const { courseInfo, loading, error, message } = useSelector(
    (state) => state.courses
  );
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteButtonHandler = (courseID) => {
    dispatch(deleteCourse(courseID));
  };

  useEffect(() => {
    dispatch(getCourseInfo(params.id));
  }, [dispatch, params.id]);

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
      navigate("/courses");
    }
  }, [dispatch, error, message]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!courseInfo) {
    return null;
  }

  const { name, code, type, description, } = courseInfo;

  return (
    <Box>
      <SecondaryHead heading="Edit Course" icon={<SchoolIcon/>}/>
      <Box>
        <p>Name: {name}</p>
        <p>Code: {code}</p>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
      </Box>
      <Box my={2}>
        <Link to={`/edit-course/${params.id}`}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              textTransform: "none",
              margin: "0 5px",
              width: "90px",
            }}
          >
            Edit
          </Button>
        </Link>
        <Button
          color="error"
          variant="contained"
          onClick={() => deleteButtonHandler(params.id)}
          startIcon={<DeleteIcon />}
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            textTransform: "none",
            margin: "0 5px",
            width: "90px",
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardLayout(ViewCourse);
