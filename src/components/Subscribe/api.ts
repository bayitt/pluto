"use server";

import { subscribeGuest } from "../../api";

export const subscribe = async (
  _: Record<string, string | boolean>,
  formData: FormData
) => {
  const subscriberUuid = await subscribeGuest(
    String(formData.get("email")) ?? ""
  );

  if (!subscriberUuid)
    return {
      status: false,
      message: "There was a problem completing the action",
    };

  return { status: true, message: "You are subscribed successfully!" };
};
