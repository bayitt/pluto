"use server";

import { subscribeGuest } from "../../api";

export const subscribe = async (formData: FormData) => {
  const subscriberUuid = await subscribeGuest(
    String(formData.get("email")) ?? ""
  );

  if (!subscriberUuid) return "There was a problem completing the action";

  return "You are subscribed successfully!";
};
