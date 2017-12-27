export const videoConsts = {
  VIDEO_LOADING: "VIDEO_LOADING",
  VIDEO_GET_LIST_REQUEST: "VIDEO_GET_LIST",
  VIDEO_GET_LIST_SUCCESS: "VIDEO_GET_LIST_SUCCESS",
  VIDEO_GET_LIST_FAILURE: "VIDEO_GET_LIST_FAILURE"
};

export const list = q => ({
  type: videoConsts.VIDEO_GET_LIST_REQUEST,
  payload: { q }
});

export const loading = value => ({
  type: videoConsts.VIDEO_LOADING,
  payload: { value }
});
