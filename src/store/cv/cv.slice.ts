import { createSlice } from "@reduxjs/toolkit";

interface ICvDataState {
  initials: string;
  jobTitle: string;
  imgSrc: string;
  bgColor: string;
  scale: number;
  aboutMe: string;
  phoneNumber: string;
}

const initialState: ICvDataState = {
  initials: "",
  jobTitle: "",
  imgSrc: "",
  bgColor: "#b23838",
  scale: window.innerWidth / 1000 * 0.7,
  aboutMe: "",
  phoneNumber: "",
};

export const cvDataSlice = createSlice({
  name: "cvData",
  initialState,
  reducers: {
    setInitials: (state, action) => {
      state.initials = action.payload;
    },
    setScale: (state, action) => {
      state.scale = action.payload;
    },
    setImageSrc: (state, action) => {
      state.imgSrc = action.payload;
    },
    setColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload
    },
    setAboutMe: (state, action) => {
      state.aboutMe = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    } 
  },
});

export const { actions, reducer } = cvDataSlice;
