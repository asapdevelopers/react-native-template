//  Created by react-native-create-bridge

package com.reactnativetemplate.jwplayerbridge;


import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;
import com.longtailvideo.jwplayer.configuration.PlayerConfig;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

public class JWPlayerBridgeManager extends SimpleViewManager<AsapJWPlayer> {

    public static final String REACT_CLASS = "JWPlayerBridge";

    private PlayerConfig playerConfig;
    private ThemedReactContext mContext;
    AsapJWPlayer playerView = null;
    PlaylistItem pi = null;

    //Props
    String src = "";
    String poster = "";
    String title = "";
    String description = "";

    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    public AsapJWPlayer createViewInstance(ThemedReactContext context) {

        mContext = context;
        playerConfig = new PlayerConfig.Builder()
                //.autostart(true)
                .build();

        playerView = new AsapJWPlayer(mContext.getCurrentActivity(), playerConfig);
        return playerView;
    }

    @ReactProp(name = "src")
    public void setSrc(View view, String prop) {
        if (src!=prop) {
            src = prop;
            playerView.stop();
            pi = new PlaylistItem.Builder()
                    .file(src)
                    .title(title)
                    .description(description)
                    .image(poster)

                    .build();
            playerView.load(pi);

        }
    }

    @ReactProp(name = "poster")
    public void setPoster(View view, String prop) {
        if(poster!=prop) {
            poster = prop;
            playerView.stop();
            pi = new PlaylistItem.Builder()
                    .file(src)
                    .title(title)
                    .description(description)
                    .image(poster)
                    .build();

            playerView.load(pi);
        }
    }

    @ReactProp(name = "title")
    public void setTitle(View view, String prop) {
        if(title!=prop) {
            title = prop;
            playerView.stop();
            pi = new PlaylistItem.Builder()
                    .file(src)
                    .title(title)
                    .description(description)
                    .image(poster)
                    .build();

            playerView.load(pi);
        }
    }

    @ReactProp(name = "description")
    public void setDescription(View view, String prop) {
        if(description!=prop) {
            description = prop;
            playerView.stop();
            pi = new PlaylistItem.Builder()
                    .file(src)
                    .title(title)
                    .description(description)
                    .image(poster)
                    .build();

            playerView.load(pi);
        }
    }


}
