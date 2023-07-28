import { IDataProps } from "@/pages/api/contact";

export const sendContactForm = async (data: IDataProps) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};
