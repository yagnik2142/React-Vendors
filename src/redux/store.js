import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "./reducers/coursesReducer";
import { vendorReducer } from "./reducers/vendorReducer";



const store = configureStore({
  reducer: {
    courses: coursesReducer,
    vendor:vendorReducer,

  },
});

export default store;

export const server = "https://api.skular.in/v1";
export const server2 = "https://odd-plum-coyote-tutu.cyclic.app/api/v1";
export const server3 = "https://tough-pear-nightshirt.cyclic.app/api/v1"