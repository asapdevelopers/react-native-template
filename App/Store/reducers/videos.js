import * as videoActions from "../actions/videos";
import * as consts from "../actions/constants";

function videosReducer(state = [], { type, payload }) {
  switch (type) {
    case consts.video.VIDEO_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case consts.video.VIDEO_GET_LIST_SUCCESS: {
      return {
        ...state,
        results: payload.items,
        loading: false
      };
    }
    case consts.video.VIDEO_GET_LIST_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case consts.video.VIDEO_CLEAR_LIST: {
      return {
        ...state,
        results:[]
      };
    }
    default:
      return state;
  }
}

export default videosReducer;
