import { createSlice } from '@reduxjs/toolkit';

const createForm = {
  customer: '',
  description: '',
  status: '',
  phone: '',
};

const initialState = {
  form: createForm,
};

const slice = createSlice({
  name: 'CreateTicket',
  initialState,
  reducers: {
    setCustomer: (state, { payload }) => {
      state.form.customer = payload;
    },
    setDescription: (state, { payload }) => {
      state.form.description = payload;
    },
    setStatus: (state, { payload }) => {
      state.form.status = payload;
    },
    setPhone: (state, { payload }) => {
      state.form.phone = payload;
    },
  },
});

export const { setCustomer, setDescription, setStatus, setPhone } =
  slice.actions;
export default slice.reducer;
