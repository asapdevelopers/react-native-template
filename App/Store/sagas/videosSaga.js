import * as videoActions from "../actions/videos";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchJSON, handleError } from "./utils";
import config from "../../Config/AppConfig";
import storage from "../../Config/storage";

function* getVideos({ payload: { q } }) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  try {
    yield put({ type: videoActions.videoConsts.VIDEO_LOADING });
    const { results } = yield call(fetchJSON, config.api.videos.list, options);
    yield put({
      type: videoActions.videoConsts.VIDEO_GET_LIST_SUCCESS,
      payload: { results }
    });
  } catch (error) {
    let message = handleError(error.status);
    yield put({
      type: videoActions.videoConsts.VIDEO_GET_LIST_FAILURE,
      payload: message
    });
  }
}

function* VideosSaga() {
  yield [
    takeLatest(videoActions.videoConsts.VIDEO_GET_LIST_REQUEST, getVideos)
  ];
}

export default VideosSaga;
