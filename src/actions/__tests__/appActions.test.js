import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { findFalcone, getToken } from "../appActions";
import { GET_TOKEN, FIND_FALCONE_SUCCESS } from "../types";
import { GET_TOKEN_API, FIND_FALCON_API } from "../apis";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe("App Actions", () => {
  let token = "xxxxxxx";
  let planet_name = "XXXXXXXX";
  let falconeResponse = { status: "success", planet_name: planet_name };

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(GET_TOKEN_API, {
      status: 200,
      response: { token }
    });
    moxios.stubRequest(FIND_FALCON_API, {
      status: 200,
      response: falconeResponse
    });
  });
  afterEach(() => moxios.uninstall());

  it("should create the action GET_TOKEN", async done => {
    const expectedAction = [
      {
        type: GET_TOKEN,
        payload: { token }
      }
    ];
    const store = mockStore({});
    await store.dispatch(getToken()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    done();
  });

  it("should create the action FIND_FALCONE_SUCCESS", async done => {
    const expectedAction = [
      {
        type: FIND_FALCONE_SUCCESS,
        payload: planet_name
      }
    ];
    const store = mockStore({});
    await store.dispatch(findFalcone()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    done();
  });
});
