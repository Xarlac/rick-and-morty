import counterReducer, { DashboardState } from "./DashboardSlice";

describe("counter reducer", () => {
  const initialState: DashboardState = {
    pageCount: 0,
    characters: null,
    characterDetail: null,
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 3,
    });
  });
});
