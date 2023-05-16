import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllCountriesData = createAsyncThunk(
  'data/fetchCountriesData',
  async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = response.json();
    return data;
  }
);

export const fetchSearchedCountriesData = createAsyncThunk(
  'data/fetchSearchedCountriesData',
  async (name, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const fetchFullDataByCode = createAsyncThunk(
  'data/fetchFullDataByCode',
  async (code, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const initialState = {
  countriesData: [],
  countryDataByCode: [],
  searchName: '',
  filterOption: 'All',
  loading: false,
  error: false,
  errorMessage: '',
};

export const dataSlice = createSlice({
  name: 'countries-data',
  initialState,
  reducers: {
    reset: (state) => {
      state.countriesData = [];
      state.countryDataByCode = [];
      state.loading = false;
      state.error = false;
      state.errorMessage = '';
    },
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountriesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCountriesData.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.error = false;
      })
      .addCase(fetchAllCountriesData.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      })
      //search by name
      .addCase(fetchSearchedCountriesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchedCountriesData.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.error = false;
      })
      .addCase(fetchSearchedCountriesData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      //search by code
      .addCase(fetchFullDataByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFullDataByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDataByCode = action.payload;
        state.error = false;
      })
      .addCase(fetchFullDataByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export default dataSlice.reducer;
export const { reset, setSearchName, setFilterOption } = dataSlice.actions;
