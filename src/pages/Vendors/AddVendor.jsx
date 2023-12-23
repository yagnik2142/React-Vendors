import React, { useEffect } from "react";
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { addVendor } from "../../redux/action/vendor";
import toast from "react-hot-toast";

const AddVendor = () => {
  const { loading, error, message } = useSelector((state) => state.vendor);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    description: "",
    vendorList: [
      {
        vendorName: "",
        varient: "",
        number: "",
      },
    ],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    vendorList: Yup.array().of(
      Yup.object().shape({
        vendorName: Yup.string().required("Required"),
        varient: Yup.string().required("Required"),
        number: Yup.string().required("Required"),
      })
    ),
  });

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
    }
  }, [dispatch, error, message]);

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      dispatch(addVendor(values));
      console.log(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, isValid, dirty }) => (
        <Form>
          <div>
            <TextField
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <TextField
              label="Description"
              type="text"
              name="description"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="description" component="div" />
          </div>

          <FieldArray name="vendorList">
            {({ remove, push }) => (
              <div>
                {values.vendorList.map((vendor, index) => (
                  <div key={index}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr ",
                        margin: "10px 0",
                      }}
                    >
                      <Box>
                        <TextField
                          label="Vendor Name"
                          type="text"
                          name={`vendorList.${index}.vendorName`}
                          variant="outlined"
                          fullWidth
                        />
                        <ErrorMessage
                          name={`vendorList.${index}.vendorName`}
                          component="div"
                        />
                      </Box>

                      <Box>
                        <TextField
                          label="Varient"
                          type="text"
                          name={`vendorList.${index}.varient`}
                          variant="outlined"
                          fullWidth
                        />
                        <ErrorMessage
                          name={`vendorList.${index}.varient`}
                          component="div"
                        />
                      </Box>

                      <Box>
                        <TextField
                          label="Number"
                          type="text"
                          name={`vendorList.${index}.number`}
                          variant="outlined"
                          fullWidth
                        />
                        <ErrorMessage
                          name={`vendorList.${index}.number`}
                          component="div"
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        type="button"
                        onClick={() => remove(index)}
                        variant="outlined"
                        color="error"
                      >
                        Remove
                      </Button>
                    </Box>
                  </div>
                ))}

                <Button
                  sx={{ margin: "10px 0" }}
                  type="button"
                  variant="contained"
                  onClick={() =>
                    push({ vendorName: "", varient: "", number: "" })
                  }
                >
                  Add Vendor
                </Button>
              </div>
            )}
          </FieldArray>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ margin: "10px 0" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DashboardLayout(AddVendor);
