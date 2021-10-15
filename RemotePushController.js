import { useEffect } from 'react'

import PushNotification from 'react-native-push-notification';
import { saveTokenDevice, getTokenDevie } from './helpers/token-helper';

export const RemotePushController = () => {

  useEffect(() => {
    PushNotification.getChannels(function(channels_id) {
      console.log(channels_id)
    });
    PushNotification.configure({
      onRegister: async function(token) {
        console.log("Token", token)
        const deviceToken = await getTokenDevie()
        if(!deviceToken) await saveTokenDevice(token.token)
      },
      onNotification: function(notification) {
        console.log("Notification", notification)
        if (notification.foreground) {
          PushNotification.localNotification({
            title:notification.title,
            message:notification.message,
            channelId: 'miscellaneous',
            priority: "high", // (optional) set notification priority, default: high
            visibility: "private",
            actions: ["Aceptar"]
          });
        }

        //notification.finish(PushNotificationIOS.FetchResult.NoData)
      },
      onAction: function(notification) {
        console.log('Action', notification.action)
        console.log('Notification', notification)
      },
      onRegistrationError: function(err) {
        console.log(err.message.err)
      },
      senderID: "812063707664",
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true
    });

  },[])

  return null
}
