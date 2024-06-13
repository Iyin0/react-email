import * as sendgrid from '@sendgrid/mail';
import { renderToStaticMarkup } from 'react-dom/server';
import WorkspaceInviteEmail from '@/pages/invite';
import ResetPassword from '@/pages/reset-password';

export const sendEmail = async () => {
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

    const htmlBody = renderToStaticMarkup(ResetPassword());

    const options = {
      from: "alex@joinvalley.co",
      to: [
        "p2iyinoluwa@gmail.com",
        "keshav@joinvalley.co",
      ],
      subject: "Welcome to JoinValley",
      html: htmlBody,
    };

    await sendgrid.send(options);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
