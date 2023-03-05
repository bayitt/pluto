import { createClient } from "../../../../utilities";
import { SUBSCRIBE } from "../../../mutations";

export const gqlSubscribe = (variables: { email: string }) =>
  createClient().mutate({ mutation: SUBSCRIBE, variables });
