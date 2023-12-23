import { createReducer } from "@reduxjs/toolkit";

export const vendorReducer = createReducer(
  {},
  {
    // Action types for getting all Vendor
    getAllVendorRequest: (state) => {
      state.loading = true;
    },
    getAllVendorSuccess: (state, action) => {
      state.loading = false;
      state.vendor = action.payload;
    },
    getAllVendorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for getting Vendor info
    getVendorInfoRequest: (state) => {
      state.loading = true;
    },
    getVendorInfoSuccess: (state, action) => {
      state.loading = false;
      state.venderInfo = action.payload;
      state.error = null;
    },
    getVendorInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for adding a Vendor
    addVendorRequest: (state) => {
      state.loading = true;
    },
    addVendorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addVendorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for updating a Vendor
    updateVendorRequest: (state) => {
      state.loading = true;
    },
    updateVendorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateVendorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for deleting a Vendor
    deleteVendorRequest: (state) => {
      state.loading = true;
    },
    deleteVendorSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteVendorFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for clearing errors and messages
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
