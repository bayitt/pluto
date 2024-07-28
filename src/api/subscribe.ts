import { getClient } from "./client";
import { SUBSCRIBE } from "./mutations";

export const subscribeGuest = async (email: string) => {
  const { data } = await getClient().mutate({
    mutation: SUBSCRIBE,
    variables: { email },
  });

  return data?.subscribe?.uuid;
};
