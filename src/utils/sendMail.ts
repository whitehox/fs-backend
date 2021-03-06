import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async function sendMail(msg: MailDataRequired) {
  return await sgMail.send({
    ...msg,
    mailSettings: {
      sandboxMode: { enable: process.env.NODE_ENV === 'test' ? true : false },
    },
  });
}
