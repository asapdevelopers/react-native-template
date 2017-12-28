//  Created by react-native-create-bridge

// import UIKit so you can subclass off UIView
#import <UIKit/UIKit.h>
#import <JWPlayer-SDK/JWPlayerController.h>

@class RCTEventDispatcher;

@interface JWPlayerBridge : UIView
  // Define view properties here with @property
  @property (nonatomic, assign) NSString *title;
  @property (nonatomic, assign) NSString *poster;
  @property (nonatomic, assign) NSString *src;
  @property (nonatomic, assign) int height;
  @property (nonatomic, assign) int width;

  @property JWPlayerController *player;

  // Initializing with the event dispatcher allows us to communicate with JS
  - (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
