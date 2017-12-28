import * as videoActions from "../actions/videos";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchJSON, handleError, queryParams } from "./utils";
import config from "../../Config/AppConfig";
import storage from "../../Config/storage";
import * as consts from "../actions/constants";
import { create } from "apisauce";

function* getVideos({ payload: { q } }) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    params:{
      q,
      videoSyndicated: true,
      part: "snippet",
      maxResults: 20,
      type: "video",
      order: "relevance",
      key: config.api.youtubeKey
    }
  };

  try {
    yield put({ type: consts.video.VIDEO_LOADING });

    const { items } = yield call(fetchJSON, config.api.baseUrl +config.api.videos.list, options);
    yield put({
      type: consts.video.VIDEO_GET_LIST_SUCCESS,
      payload: { items }
    });
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
