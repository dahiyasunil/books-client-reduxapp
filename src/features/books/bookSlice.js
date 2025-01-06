import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL;

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = await axios.get(`${serverURL}/books`);
  return response.data;
});

export const addBook = createAsyncThunk("book/add", async (bookData) => {
  const response = await axios.post(`${serverURL}/books`, bookData);
  return response.data;
});

export const updateBook = createAsyncThunk(
  "book/update",
  async ({ bookId, bookData }) => {
    const response = await axios.post(`${serverURL}/books/${bookId}`, bookData);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk("book/delete", async (bookId) => {
  console.log(bookId);

  const response = await axios.delete(`${serverURL}/books/${bookId}`);
  return response.data;
});

const initialState = {
  books: [],
  status: "idle",
  error: null,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(addBook.pending, (state) => {
      state.status = "adding";
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.status = "success";
      state.books.push(action.payload);
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(updateBook.pending, (state) => {
      state.status = "updating";
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.status = "success";

      const bookIndex = state.books.findIndex(
        (book) => book._id === action.payload._id
      );
      state.books[bookIndex] = action.payload;
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(deleteBook.pending, (state) => {
      state.status = "deleting";
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.status = "success";
      state.books = state.books.filter(
        (book) => book._id != action.payload._id
      );
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
