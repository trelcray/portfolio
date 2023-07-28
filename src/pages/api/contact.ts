import { NextApiRequest, NextApiResponse } from "next";

import { mailOptions, transporter } from "@/config/node-mailer";
import { emailTemplate } from "@/templates/email";

export interface IDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface IMessage {
  message: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IDataProps | IMessage>
) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    const htmlContent = emailTemplate(`
    <p><strong>name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Descrição:</strong> ${message}</p>
    `);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Message from ${subject}`,
        html: htmlContent,
      });

      return res.status(200).json({ message: "sended" });
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message });
    }
  }
  res.status(400).json({ message: "Bad request" });
};

export default handler;
