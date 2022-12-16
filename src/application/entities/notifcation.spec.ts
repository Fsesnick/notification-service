import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification', () => {
    test('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitacao de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(notification).toBeTruthy();
    });


})


//run  npm run test