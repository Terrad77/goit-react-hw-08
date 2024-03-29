import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Екшени слайса для використання в dispatch:
    // changeFilter - зміна значення фільтра в властивості name
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

//експорт редюсер та екшени
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
