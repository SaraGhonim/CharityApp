import { Notifier, NotifierComponents } from 'react-native-notifier';

export const notify = (title, description, type) => {
  Notifier.showNotification({
    title,
    description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type,
    },
  });
};
