import { Character } from "../../utils/Characters";
import counterReducer, {
  clearDashboardData,
  DashboardState,
  setPageCount,
  setCharacters,
  setCharacterDetail,
} from "./DashboardSlice";

describe("Dashboard reducer", () => {
  const initialState: DashboardState = {
    pageCount: 1,
    characters: null,
    characterDetail: null,
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      pageCount: 1,
      characters: null,
      characterDetail: null,
    });
  });

  const changedState: DashboardState = {
    pageCount: 10,
    characters: null,
    characterDetail: null,
  };
  it("should set data to initial state", () => {
    const actual = counterReducer(changedState, clearDashboardData());
    expect(actual).toEqual(initialState);
  });

  it("should set Page Count", () => {
    const actual = counterReducer(initialState, setPageCount(15));
    expect(actual).toEqual({
      pageCount: 15,
      characters: null,
      characterDetail: null,
    });
  });

  it("should set Page Count", () => {
    const actual = counterReducer(initialState, setPageCount(15));
    expect(actual).toEqual({
      pageCount: 15,
      characters: null,
      characterDetail: null,
    });
  });

  const character: Character = {
    id: "10",
    created: "2017-11-04T20:19:09.017Z",
    episode: ["https://rickandmortyapi.com/api/episode/25"],
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    location: {
      name: "Worldender's lair",
      url: "https://rickandmortyapi.com/api/location/4",
    },
    name: "Alan Rails",
    origin: { name: "unknown", url: "" },
    species: "Human",
    status: "Dead",
    type: "Superhuman (Ghost trains summoner)",
    url: "https://rickandmortyapi.com/api/character/10",
  };
  it("should set character detail", () => {
    const actual = counterReducer(initialState, setCharacterDetail(character));
    expect(actual).toEqual({
      pageCount: 1,
      characters: null,
      characterDetail: character,
    });
  });
});
