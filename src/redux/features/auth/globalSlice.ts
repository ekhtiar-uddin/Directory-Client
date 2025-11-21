import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import { TQueryParam } from "../../../types";

interface InitialStateTypes {
  globalParams: TQueryParam[] | undefined;
}

export const initialState: InitialStateTypes = {
  globalParams: undefined,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalParams: (
      state,
      action: PayloadAction<TQueryParam[] | undefined>
    ) => {
      if (!action.payload) {
        state.globalParams = undefined;
      } else {
        const existingParams = state.globalParams || [];
        const newParams = action.payload;
        // Remove existing params with same names as new ones, then add new ones
        const filteredExisting = existingParams.filter(
          (existing) =>
            !newParams.some((newParam) => newParam.name === existing.name)
        );
        state.globalParams = [...filteredExisting, ...newParams];
      }
    },
  },
});

export const { setGlobalParams } = globalSlice.actions;
export const selectGlobalParams = (state: RootState) =>
  state.global.globalParams;
export default globalSlice.reducer;
