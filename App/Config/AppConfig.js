// Simple React Native specific changes

import "../I18n/I18n";

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  api: {
    baseUrl: "https://www.googleapis.com/youtube/v3",
    youtubeKey: "AIzaSyAf0Mz8NDWuKaKUNphzO9Q7_E-cY3GOfrA",
    videos: {
      list: "/search"
    }
  }
};
