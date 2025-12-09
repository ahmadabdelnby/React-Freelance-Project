import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("http://localhost:3000/Freelancing/api/v1/categories");
    const data = await res.json();
    return data;
  }
);

// Fetch all specialties
export const fetchSpecialties = createAsyncThunk(
  "categories/fetchSpecialties",
  async () => {
    const res = await fetch("http://localhost:3000/Freelancing/api/v1/specialties");
    const data = await res.json();
    return data;
  }
);

// Fetch specialties by category
export const fetchSpecialtiesByCategory = createAsyncThunk(
  "specialties/fetchByCategory",
  async (categoryId) => {
    const res = await fetch(`http://localhost:3000/Freelancing/api/v1/specialties/category/${categoryId}`);
    const data = await res.json();
    return { categoryId, specialties: data };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    specialties: [],
    specialtiesByCategory: {}, 
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchSpecialties.fulfilled, (state, action) => {
        state.specialties = action.payload;
      })
      .addCase(fetchSpecialtiesByCategory.fulfilled, (state, action) => {
        const { categoryId, specialties } = action.payload;
        state.specialtiesByCategory[categoryId] = specialties;  
      });
  },
});

export default categoriesSlice.reducer;
