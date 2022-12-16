import { SendNotification } from "./send-notification"
import { Notification } from '../entities/notification'

const notifications: Notification[] = [];

const notificationRepository = {
    async create(notification: Notification) {
        //console.log(notification)
        notifications.push(notification);
    },
};

describe('Send notification', () => {
    test('should be able to send notification', async () => {
        const sendNotification = new SendNotification(notificationRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(notification).toBeTruthy();
    });
});