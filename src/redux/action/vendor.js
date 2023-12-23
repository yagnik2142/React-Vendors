import axios from "axios";
import { server, server2, server3 } from "../store";

export const getAllVendor =
  () =>
  async dispatch => {
    try {
      dispatch({ type: 'getAllVendorRequest' });

      const { data } = await axios.get(
        `${server3}/vendor/getall`
      );
      dispatch({ type: 'getAllVendorSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'getAllVendorFail',
        payload: error.response.data.message,
      });
    }
  };


  export const addVendor = formData => async dispatch => {
    try {
      dispatch({ type: 'addVendorRequest' });
  
      const { data } = await axios.post(
        `${server3}/vendor/create`,
        formData,
      );
  
      dispatch({ type: 'addVendorSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'addVendorFail',
        payload: error.response.data.message,
      });
    }
  };



export const getVendorInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getVendorInfoRequest" });

    const { data } = await axios.get(`${server3}/vendor/getvendor/${id}`);

    dispatch({ type: "getVendorInfoSuccess", payload: data });
    console.log(data)
  } catch (error) {
    dispatch({
      type: "getVendorInfoFail",
      payload: error.response.data.message,
    });
  }
};

export const updateCourse = (course_id, jsonData) => async (dispatch) => {
  try {
    dispatch({ type: "updateCourseRequest" });
    const { data } = await axios.patch(`${server}/courses/${course_id}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "updateCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteVendor = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteVendorRequest" });

    const { data } = await axios.delete(`${server3}/vendor/delete/${id}`);

    dispatch({ type: "deleteVendorSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteVendorFail",
      payload: error.response.data.message,
    });
  }
};
