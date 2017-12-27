import * as videoActions from "../actions/videos";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchJSON, handleError, queryParams } from "./utils";
import config from "../../Config/AppConfig";
import storage from "../../Config/storage";
import * as consts from "../actions/constants";
import { create } from "apisauce";

// define the api
const youtubeApi = create({
  baseURL: config.api.baseUrl,
  headers: { Accept: "application/json", ContentType: "application/json" },
  timeout: 5000
});

function* getVideos({ payload: { q } }) {
  /*const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors"
  };*/

  let params = {
    q,
    videoSyndicated: true,
    part: "snippet",
    eventType: "completed",
    maxResults: 20,
    type: "video",
    key: config.api.youtubeKey
  };

  try {
    yield put({ type: consts.video.VIDEO_LOADING });
    debugger;

    // start making calls
    console.log("BaseURL: ", config.api.baseUrl);
    console.log("List: ", config.api.videos.list + "?=" + queryParams(params));

    youtubeApi
      .get(config.api.videos.list + "?" + queryParams(params))
      .then(response => {
        debugger;
        response.data[0].commit.message;
      })
      .then(console.log);
    //const { results } = yield call(fetchJSON, config.api.videos.list, options);
    /*yield put({
      type: consts.video.VIDEO_GET_LIST_SUCCESS,
      payload: { results }
    });*/
  } catch (error) {
    let message = handleError(error.status);
    yield put({
      type: consts.video.VIDEO_GET_LIST_FAILURE,
      payload: message
    });
  }
}

function* VideosSaga() {
  yield [takeLatest(consts.video.VIDEO_GET_LIST_REQUEST, getVideos)];
}

export default VideosSaga;
