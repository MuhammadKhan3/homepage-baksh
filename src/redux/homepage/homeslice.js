import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 floorData:{
    floor:"First Floor",
    square:58000,
    shop:"F1",
    shopFeet:763.75,
    totalPrice:44297500
  },
  GroundFloor:[
    {
      floor:"Ground Floor",
      square: 99000,
      shop:"G1",
      shopFeet:692.50 ,
      totalPrice:68557500
    },
    {
      floor:"Ground Floor",
      square:99000,
      shop:"G2",
      shopFeet:651.25 ,
      totalPrice: 64473750,
      sold:true,
    },
    {
      floor:"Ground Floor",
      square:99000 ,
      shop:"G3",
      shopFeet:651.25 ,
      totalPrice: 64473750
    },
    {
      floor:"Ground Floor",
      square:99000,
      shop:"G4",
      shopFeet:692.50  ,
      totalPrice: 68557500,

    }
  ],
  LowerGround:[

      {
        floor:"Lower Ground",
        square:68500,
        shop:"L1",
        shopFeet:658.33 ,
        totalPrice:45095605
      },
      {
        floor:"Lower Ground",
        square:68500,
        shop:"L2",
        shopFeet:620.83 ,
        totalPrice: 42526855
      },
      {
        floor:"Lower Ground",
        square:68500,
        shop:"L3",
        shopFeet:620.83 ,
        totalPrice: 42526855
      },
      {
        floor:"Lower Ground",
        square:68500,
        shop:"L4",
        shopFeet:612.81  ,
        totalPrice: 73608730,
        sold:true
      }
  ],
  Mezzanine:[
    {
      floor:"Mezzanine",
      square: 73500,
      shop:"M1", 
      shopFeet:763.75 ,
      totalPrice:56135625,
      sold:true,
    },
    {
      floor:"Mezzanine",
      square:73500,
      shop:"M2",
      shopFeet:714.37,
      totalPrice:52506195,
    },
    {
      floor:"Mezzanine",
      square:73500,
      shop:"M3",
      shopFeet:714.37,
      totalPrice: 52506195
    },
    {
      floor:"Mezzanine",
      square:73500,
      shop:"M4",
      shopFeet:763.75,
      totalPrice: 56135625,
    }
  ],
  FirstFloor:[
    {
      floor:"First Floor",
      square: 58000,
      shop:"F1", 
      shopFeet:763.75 ,
      totalPrice: 44297500,
      sold:true,
    },
    {
      floor:"First Floor",
      square:58000,
      shop:"F2",
      shopFeet:714.37,
      totalPrice:41433460,
    },
    {
      floor:"First Floor",
      square:58000,
      shop:"F3",
      shopFeet:714.37,
      totalPrice: 41433460,
      sold:true,
    },
    {
      floor:"First Floor",
      square:58000,
      shop:"F4",
      shopFeet:763.75,
      totalPrice: 44297500,
    }
  ],
  SecondFloor:[
    {
      floor:"Second Floor",
      square: 58000,
      shop:"S1", 
      shopFeet:763.75 ,
      totalPrice: 44297500,
      sold:true,
    },
    {
      floor:"Second Floor",
      square:58000,
      shop:"S2",
      shopFeet:714.37,
      totalPrice:41433460,
    },
    {
      floor:"Second Floor",
      square:58000,
      shop:"S3",
      shopFeet:714.37,
      totalPrice: 41433460,
      sold:true,
    },
    {
      floor:"Second Floor",
      square:58000,
      shop:"S4",
      shopFeet:763.75,
      totalPrice: 44297500,
    }
  ]
}

export const HomeSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    updateFloor: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.floorData=action.payload;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { updateFloor } = HomeSlice.actions

export default HomeSlice.reducer