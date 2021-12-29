import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Characters, Character } from "../../utils/Characters";

export interface DashboardState {
  pageCount: number;
  characters: Characters | null;
  characterDetail: Character | null;
}

const initialState: DashboardState = {
  pageCount: 1,
  characters: null,
  characterDetail: null,
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearDashboardData: (state) => {
      Object.assign(state, initialState);
    },
    setPageCount: (state, { payload }: PayloadAction<number>) => {
      state.pageCount = payload;
    },
    setCharacters: (state, { payload }: PayloadAction<Characters>) => {
      if (state.characters == null) {
        state.characters = payload;
      } else {
        state.characters.info = payload.info;
        state.characters.results = state.characters.results.concat(
          payload.results
        );
      }
      state.pageCount += 1;
    },
    setCharacterDetail: (state, { payload }: PayloadAction<Character>) => {
      state.characterDetail = payload;
    },
  },
});

export const {
  clearDashboardData,
  setPageCount,
  setCharacters,
  setCharacterDetail,
} = DashboardSlice.actions;

export const selectPageCount = (state: RootState): number =>
  state.dashboard.pageCount;
export const selectCharacters = (state: RootState): Characters | null =>
  state.dashboard.characters;
export const selectCharacterDetail = (state: RootState): Character | null =>
  state.dashboard.characterDetail;

export default DashboardSlice.reducer;
