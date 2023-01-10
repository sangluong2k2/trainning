import {
  configureStore,
  createAsyncThunk as _createAsyncThunk, createSlice
} from "@reduxjs/toolkit"

const createAsyncThunk = (name, callBack, errorCallBack) => {
  return _createAsyncThunk(name, async (payload, thunkAPI) => {
    try {
      const response = await callBack(payload, thunkAPI)
      return response
    } catch (error) {
      let errorResponse = {}
      if (typeof errorCallBack != "undefined") {
        if (typeof error.response == "undefined") {
          errorResponse = await errorCallBack(error, thunkAPI)
        } else {
          errorResponse = await errorCallBack(error.response, thunkAPI)
        }
      }
      return thunkAPI.rejectWithValue(errorResponse)
    }
  })
}

export { createSlice, configureStore, createAsyncThunk }

