import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Hi GANZORIG, you did it!!!',
      data: { data: 'Hi GANZORIG, you did it!!!' },
      sound: 'notification.wav', // Provide ONLY the base filename
    },
    trigger: { seconds: 2 },
  });
}
