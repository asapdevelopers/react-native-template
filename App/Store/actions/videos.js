import * as consts from "./constants";

export const list = q => ({
  type: consts.video.VIDEO_GET_LIST_REQUEST,
  payload: { q }
});

export const loading = value => ({
  type: consts.video.VIDEO_LOADING,
  payload: { value }
});

export const clear = () => ({
  type: consts.video.VIDEO_CLEAR_LIST
});
