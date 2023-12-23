import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import { addCourse } from "../../redux/action/courses";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const AddCourse = () => {
  const { courseInfo, loading, error, message } = useSelector(
    (state) => state.courses
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const dispatch = useDispatch();

  const categories = [
    "Web development",
    "Artificial Intellegence",
    "Data Structure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    } else {
      console.error("Invalid file type.");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);
    dispatch(addCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      setTitle("");
      setDescription("");
      setCreatedBy("");
      setCategory("");
      setImage("");
      setImagePrev("");
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Box p={2}>
      <Box
        m={5}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box fontSize={"40px"} margin={"10px 0"}>
          Create Course
        </Box>
        <Box>
          <Box maxWidth={"500px"}>
            <form onSubmit={submitHandler}>
              <TextField
                
                value={title}
                onChange={(e) => setTitle(e.target.value)}

                id="name"
                margin="normal"
                required
                fullWidth
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
                color="primary"
                variant="filled"
              />
              <TextField
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="creater"
                label="Creator Name"
                name="creator"
                autoComplete="creator"
                color="primary"
                variant="filled"
              />

              <Box width={"100%"} my={1}>
                <FormControl fullWidth color="primary" variant="filled">
                  <InputLabel>Select a category</InputLabel>
                  <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select a category</em>
                    </MenuItem>
                    {categories.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {imagePrev && (
            <img
              src={imagePrev}
              alt="Image Preview"
              style={{ maxHeight: "200px", marginTop: "10px" }}
            />
          )}

              <input
                type="file"
                onChange={changeImageHandler}
                style={{ margin: "5px 0" }}
                accept="image/*"
                required
                className="upload-box"
              />

              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                multiline
                rows={3}
                color="primary"
                variant="filled"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "5px 0",
                  margin: "10px 0",
                  textTransform: "none",
                }}
              >
                Create Course
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout(AddCourse);
