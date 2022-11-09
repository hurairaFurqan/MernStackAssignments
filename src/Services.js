import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:8080/auth';

export const getSignin = createAsyncThunk(
    'signin/getSignin', 
    async (post) => {
        const response = await axios.post(`${BASE_URL}/signin`, post);
        console.log(response.data);
        return response.data;
    }
)