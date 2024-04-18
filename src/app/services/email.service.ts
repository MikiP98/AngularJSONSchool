import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor() { }

    sendEmail(recipient: string, category: string, title: string, body: string, engine: string) {
        const encodedCategory = encodeURIComponent(category);
        const encodedTitle = encodeURIComponent(title);
        const encodedBody = encodeURIComponent(body);
        const encodedRecipient = encodeURIComponent(recipient);
        const subject = `${encodedCategory} - ${encodedTitle}`;

        let emailBody;

        switch (engine) {
            case 'gmail':
                emailBody = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedRecipient}&su=${subject}&body=${encodedBody}`;
                break;
            case 'outlook':
                emailBody = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${encodedBody}&to=${encodedRecipient}`;
                break;
            default:
                emailBody = `mailto:${encodedRecipient}?subject=${subject}&body=${encodedBody}`;
                break;
        }

        window.open(emailBody, '_blank');
    }
}
