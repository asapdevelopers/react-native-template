#import <Foundation/Foundation.h>
#import "JWPlayerBridge.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation JWPlayerBridge : UIView  {
  RCTEventDispatcher *_eventDispatcher;
  UIView *_childView;
  JWConfig *config;
  int videoWidth;
  int videoHeight;
}

-(void) loadPlayer {
  _player = [[JWPlayerController alloc] initWithConfig:config];
  _player.view.frame = CGRectMake(0, 0, 250, 250);
  _player.forceFullScreenOnLandscape = true;
  [_childView addSubview:_player.view];
  [_childView setNeedsDisplay];
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    //Default values
    _eventDispatcher = eventDispatcher;
    _childView = [[UIView alloc] init];
    [_childView setFrame:CGRectMake(0, 0, videoWidth, videoHeight)];
    
    
    // JWPlayer
    config = [[JWConfig alloc] init];
    config.controls = YES;
    config.repeat = NO;
    
    [self loadPlayer];
    [self setupNotifications];
  }
  
  return self;
}


-(void)layoutSubviews{
  [super layoutSubviews];
  _childView.frame = self.bounds;
  [self addSubview:_childView];
}


// Src property
-(void) setSrc:(NSString *)src{
  if(![src isEqual:_src])
  {
    _src= [src copy];
    config.file = _src;
    [_childView setNeedsDisplay];
  }
}

// Poster property
-(void) setPoster:(NSString *)poster{
  if(![poster isEqual:_poster])
  {
    _poster= [poster copy];
    config.image = _poster;
    [_childView setNeedsDisplay];
  }
}

// Title property
-(void) setTitle:(NSString *)title{
  if(![title isEqual:_title])
  {
    _title= [title copy];
    config.title = _title;
    [_childView setNeedsDisplay];
  }
}


- (void)setupNotifications
{
  NSArray *notifications = @[
                             JWPlayerStateChangedNotification,
                             JWMetaDataAvailableNotification,
                             JWAdActivityNotification,
                             JWErrorNotification,
                             JWCaptionsNotification,
                             JWVideoQualityNotification,
                             JWPlaybackPositionChangedNotification,
                             JWFullScreenStateChangedNotification,
                             JWAdClickNotification];
  
  NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
  [notifications enumerateObjectsUsingBlock:^(NSString *obj, NSUInteger idx, BOOL *stop) {
    [center addObserver:self selector:@selector(handleNotification:) name:obj object:nil];
  }];
  [center addObserver:self selector:@selector(updatePlaybackTimer:) name:JWPlaybackPositionChangedNotification object:nil];
  [center addObserver:self selector:@selector(playerStateChanged:) name:JWPlayerStateChangedNotification object:nil];
  [center addObserver:self selector:@selector(playerStateChanged:) name:JWAdActivityNotification object:nil];
}


// Width property
-(void) setWidth:(int)width{
  if(videoWidth != width)
  {
    videoWidth = width;
    _player.view.frame = CGRectMake(0, 0, (CGFloat)videoWidth, (CGFloat)videoHeight);
    [_childView setFrame:CGRectMake(0, 0, videoWidth, videoHeight)];
    [_childView setNeedsDisplay];
  }
}

// heigth property
-(void) setHeight:(int)height{
  if(videoHeight != height)
  {
    videoHeight= height;
    _player.view.frame = CGRectMake(0, 0, (CGFloat)videoWidth, (CGFloat)videoHeight);
    [_childView setFrame:CGRectMake(0, 0, videoWidth, videoHeight)];
    [_childView setNeedsDisplay];
  }
}

@end

