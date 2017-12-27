// Simple React Native specific changes

import "../I18n/I18n";

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  api: {
    videos: {
      list: "https://www.googleapis.com/youtube/v3/search"
    }
  }
};
