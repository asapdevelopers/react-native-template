import * as videoActions from "../actions/videos";

function videosReducer(state = [], { type, payload }) {
  switch (type) {
    case videoActions.videoConsts.VIDEO_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case videoActions.videoConsts.VIDEO_GET_LIST_SUCCESS: {
      return {
        ...state,
        videos: payload,
        loading: false
      };
    }
    case videoActions.videoConsts.VIDEO_GET_LIST_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
}

export default videosReducer;
