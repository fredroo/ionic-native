import { Cordova, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface OSNotification {
  /**
   * Was app in focus.
   */
  isAppInFocus: boolean;
  /**
   * Was notification shown to the user. Will be false for silent notifications.
   */
  shown: boolean;
  /**
   * **ANDROID** - Android Notification assigned to the notification. Can be used to cancel or replace the notification.
   */
  androidNotificationId?: number;
  /**
   * Payload received from OneSignal.
   */
  payload: OSNotificationPayload;
  /**
   * How the notification was displayed to the user. Can be set to `Notification`, `InAppAlert`, or `None` if it was not displayed.
   */
  displayType: OSDisplayType;
  /**
   * **ANDROID** - Notification is a summary notification for a group this will contain all notification payloads it was created from.
   */
  groupedNotifications?: OSNotificationPayload[];
  app_id?: string;
  contents: any;
  headings?: any;
  isIos?: boolean;
  isAndroid?: boolean;
  isWP?: boolean;
  isWP_WNS?: boolean;
  isAdm?: boolean;
  isChrome?: boolean;
  isChromeWeb?: boolean;
  isSafari?: boolean;
  isAnyWeb?: boolean;
  included_segments?: string[];
  excluded_segments?: string[];
  include_player_ids?: string[];
  include_ios_tokens?: string[];
  include_android_reg_ids?: string[];
  include_wp_uris?: string[];
  include_wp_wns_uris?: string[];
  include_amazon_reg_ids?: string[];
  include_chrome_reg_ids?: string[];
  include_chrome_web_reg_ids?: string[];
  app_ids?: string[];
  tags?: any[];
  ios_badgeType?: string;
  ios_badgeCount?: number;
  ios_sound?: string;
  android_sound?: string;
  adm_sound?: string;
  wp_sound?: string;
  wp_wns_sound?: string;
  data?: any;
  buttons?: any;
  small_icon?: string;
  large_icon?: string;
  big_picture?: string;
  adm_small_icon?: string;
  adm_large_icon?: string;
  adm_big_picture?: string;
  chrome_icon?: string;
  chrome_big_picture?: string;
  chrome_web_icon?: string;
  firefox_icon?: string;
  url?: string;
  send_after?: string;
  delayed_option?: string;
  delivery_time_of_day?: string;
  android_led_color?: string;
  android_accent_color?: string;
  android_visibility?: number;
  content_available?: boolean;
  amazon_background_data?: boolean;
  template_id?: string;
  android_group?: string;
  android_group_message?: any;
  adm_group?: string;
  adm_group_message?: any;
  ttl?: number;
  priority?: number;
  ios_category?: string;
}

/**
 * **ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */
export enum OSLockScreenVisibility {
  /**
   * Fully visible (default)
   */
  Public = 1,
  /**
   * Contents are hidden
   */
  Private = 0,
  /**
   * Not shown
   */
  Secret = -1
}

/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
export enum OSDisplayType {
  /**
   * notification is silent, or inFocusDisplaying is disabled.
   */
  None = 0,
  /**
   * (**DEFAULT**) - native alert dialog display.
   */
  InAppAlert = 1,
  /**
   * native notification display.
   */
  Notification = 2
}

/**
 * Contents and settings of the notification the user received.
 */
export interface OSNotificationPayload {
  /**
   * OneSignal notification UUID.
   */
  notificationID: string;
  /**
   * Title of the notification.
   */
  title: string;
  /**
   * Body of the notification.
   */
  body: string;
  /**
   * Custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data
   * or with the 'data' field on the REST API.
   */
  additionalData?: any;
  /**
   * **ANDROID** - Small icon resource name set on the notification.
   */
  smallIcon?: string;
  /**
   * **ANDROID** - Large icon set on the notification.
   */
  largeIcon?: string;
  /**
   * **ANDROID** - Big picture image set on the notification.
   */
  bigPicture?: string;
  /**
   * **ANDROID** - Accent color shown around small notification icon on Android 5+ devices. ARGB format.
   */
  smallIconAccentColor?: string;
  /**
   * URL to open when opening the notification.
   */
  launchUrl?: string;
  /**
   * Sound resource to play when the notification is shown.
   */
  sound: string;
  /**
   * **ANDROID** - Devices that have a notification LED will blink in this color. ARGB format.
   */
  ledColor?: string;
  lockScreenVisibility?: OSLockScreenVisibility;
  /**
   * **ANDROID** - Notifications with this same key will be grouped together as a single summary notification.
   */
  groupKey?: string;
  /**
   * **ANDROID** - Summary text displayed in the summary notification.
   */
  groupMessage?: string;
  /**
   * List of action buttons on the notification.
   */
  actionButtons: OSActionButton[];
  /**
   * **ANDROID** - The Google project number the notification was sent under.
   */
  fromProjectNumber?: string;
  /**
   * **ANDROID** - If a background image was set this object will be available.
   */
  backgroundImageLayout?: OSBackgroundImageLayout;
  priority?: number;
  /**
   * List of action buttons on the notification.
   */
  rawPayload: string;
}

/**
 * List of action buttons on the notification.
 */
export interface OSActionButton {
  /**
   * Id assigned to the button.
   */
  id: string;
  /**
   * Text show on the button to the user.
   */
  text: string;
  /**
   * **ANDROID** - Icon shown on the button.
   */
  icon: string;
}

/**
 * **ANDROID** - If a background image was set, this object will be available.
 */
export interface OSBackgroundImageLayout {
  /**
   * Image URL or name used as the background image.
   */
  image: string;
  /**
   * Text color of the title on the notification. ARGB Format.
   */
  titleTextColor: string;
  /**
   * Text color of the body on the notification. ARGB Format.
   */
  bodyTextColor: string;
}

/**
 * The information returned from a notification the user received.
 */
export interface OSNotificationOpenedResult {
  action: {
    /**
     * Was the notification opened normally (`Opened`) or was a button pressed on the notification (`ActionTaken`).
     */
    type: OSActionType;
    /**
     * If `type` == `ActionTaken` then this will contain the id of the button pressed.
     */
    actionID?: string;
  };
  notification: OSNotification;
}

export enum OSActionType {
  Opened = 0,
  ActionTake = 1
}

/**
 * @name OneSignal
 * @description
 * The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
 * OneSignal is a simple implementation for delivering push notifications.
 *
 * Requires Cordova plugin: `onesignal-cordova-plugin`. For more info, please see the [OneSignal Cordova Docs](https://documentation.onesignal.com/docs/phonegap-sdk-installation).
 *
 * @usage
 * ```typescript
 * import { OneSignal } from '@ionic-native/onesignal';
 *
 * OneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
 *
 * OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
 *
 * OneSignal.handleNotificationReceived().subscribe(() => {
 *  // do something when notification is received
 * });
 *
 * OneSignal.handleNotificationOpened().subscribe(() => {
 *   // do something when a notification is opened
 * });
 *
 * OneSignal.endInit();
 * ```
 * @interfaces
 * OSNotification
 * OSLockScreenVisibility
 * OSDisplayType
 * OSNotificationPayload
 * OSActionButton
 * OSBackgroundImageLayout
 * OSNotificationOpenedResult
 * OSActionType
 */
@Plugin({
  pluginName: 'OneSignal',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'plugins.OneSignal',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS', 'Windows', 'FireOS']
})
export class OneSignal {

  /**
   * constants to use in inFocusDisplaying()
   */
  static OSInFocusDisplayOption = {
    None: 0,
    InAppAlert : 1,
    Notification : 2
  };

  /**
   * Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.
   *
   * @param {string} appId Your OneSignal app id
   * @param {string} googleProjectNumber **ANDROID** - your Google project number; only required for Android GCM/FCM pushes.
   * @returns {any}
   */
  @Cordova({ sync: true })
  static startInit(appId: string, googleProjectNumber?: string): any { return; }

  /**
   * Callback to run when a notification is received, whether it was displayed or not.
   *
   * @return {Observable<OneSignalReceivedNotification>}
   */
  @Cordova({
    observable: true
  })
  static handleNotificationReceived(): Observable<OSNotification> { return; }

  /**
   * Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
   * center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
   * inFocusDisplaying).
   *
   * @return {Observable<OneSignalOpenedNotification>}
   */
  @Cordova({
    observable: true
  })
  static handleNotificationOpened(): Observable<OSNotificationOpenedResult> { return; }

  /**
   * **iOS** - Settings for iOS apps
   *
   * @param settings
   *  kOSSettingsKeyAutoPrompt: boolean = true
   *  Auto prompt user for notification permissions.
   *
   *  kOSSettingsKeyInAppLaunchURL: boolean = false
   *  Launch notifications with a launch URL as an in app webview.
   * @returns {any}
   */
  @Cordova({ sync: true })
  static iOSSettings(settings: {
    kOSSettingsKeyAutoPrompt: boolean;
    kOSSettingsKeyInAppLaunchURL: boolean;
  }): any { return; }

  /**
   * Must be called after `startInit` to complete initialization of OneSignal.
   *
   * @returns {any}
   */
  @Cordova({ sync: true })
  static endInit(): any { return; }

  /**
   * Retrieve a list of tags that have been set on the user from the OneSignal server.
   *
   * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
   */
  @Cordova()
  static getTags(): Promise<any> { return; }

  /**
   * Lets you retrieve the OneSignal user id and device token.
   * Your handler is called after the device is successfully registered with OneSignal.
   *
   * @returns {Promise<Object>} Returns a Promise that resolves if the device was successfully registered.
   *
   *  userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)
   *
   *  pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
   */
  @Cordova()
  static getIds(): Promise<{userId: string; pushToken: string}> { return; }


  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {string} Key of your choosing to create or update.
   * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
   */
  @Cordova({ sync: true })
  static sendTag(key: string, value: string): void { }

  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
   */
  @Cordova({ sync: true })
  static sendTags(json: any): void { }

  /**
   * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
   *
   * @param {string} Key to remove.
   */
  @Cordova({ sync: true })
  static deleteTag(key: string): void { }

  /**
   * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
   *
   * @param {Array<string>} Keys to remove.
   */
  @Cordova({ sync: true })
  static deleteTags(keys: string[]): void { }

  /**
   * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
   * Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`
   */
  @Cordova({ sync: true })
  static registerForPushNotifications(): void { }

  /**
  * Warning:
  * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
  *
  * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
  * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
  *
  * @param {boolean} false to disable vibrate, true to re-enable it.
  */
  @Cordova({ sync: true })
  static enableVibrate(enable: boolean): void { }

  /**
  * Warning:
  * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
  *
  * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
  * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
  *
  * @param {boolean} false to disable sound, true to re-enable it.
  */
  @Cordova({ sync: true })
  static enableSound(enable: boolean): void { }

  /**
  *
  * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
  *
  * @param {DisplayType} displayOption
  * @returns {any}
  */
  @Cordova({ sync: true })
  static inFocusDisplaying(displayOption: OSDisplayType): any { return; }

  /**
  * You can call this method with false to opt users out of receiving all notifications through OneSignal.
  * You can pass true later to opt users back into notifications.
  *
  * @param {boolean} enable
  */
  @Cordova({ sync: true })
  static setSubscription(enable: boolean): void { }

  /**
  *
  * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
  * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
  */
  @Cordova()
  static postNotification(notificationObj: OSNotification): Promise<any> { return; }

  /**
  * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
  */
  @Cordova({ sync: true })
  static promptLocation(): void { }

  /**
   *
   * @param email {string}
   */
  @Cordova({ sync: true })
  static syncHashedEmail(email: string): void { }

  /**
  * Enable logging to help debug if you run into an issue setting up OneSignal.
  * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose

  * The higher the value the more information is shown.
  *
  * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
  */
  @Cordova({ sync: true })
  static setLogLevel(logLevel: {
    logLevel: number,
    visualLevel: number
  }): void { }

}