import { NewWPClient } from "../axios";
import { AxiosRequestConfig } from "axios";
import { AxiosInstance } from "axios";
import * as types from "./__generated__/types";
import * as queries from "./queries";

export interface QLResponse<R> {
  data: R;
  errors?: any[];
}

export interface Context {
  headers: { [key: string]: string };
}

interface Options<T = undefined> {
  variables?: T;
  client?: AxiosInstance;
  clientConfig?: () =>
    | Promise<AxiosRequestConfig | undefined>
    | AxiosRequestConfig
    | undefined;
}

const defaultClient = NewWPClient();

async function fetchQuery<R = any, T = any>({
  query,
  variables,
  client,
  clientConfig,
}: Options<T> & { query: string }) {
  const c = client || defaultClient;
  let config: AxiosRequestConfig | undefined = undefined;

  if (clientConfig) {
    config = await clientConfig();
  }

  const result = await c.post<QLResponse<R> | undefined>(
    "/graphql/",
    {
      query,
      variables,
    },
    config,
  );

  if (result.data && result.data.errors) {
    throw result.data.errors[0];
  }

  return result;
}

export function fetchPosts(options?: Options<types.PostsVariables>) {
  return fetchQuery<types.Posts, types.PostsVariables>({
    query: queries.POSTS,
    ...options,
  });
}

export function fetchPost(options?: Options<types.PostVariables>) {
  return fetchQuery<types.Post, types.PostVariables>({
    query: queries.POST,
    ...options,
  });
}

export function fetchRegisterUser(
  options?: Options<types.RegisterUserVariables>,
) {
  return fetchQuery<types.RegisterUser, types.RegisterUserVariables>({
    query: queries.REGISTER_USER,
    ...options,
  });
}

export function fetchLoginUser(options?: Options<types.LoginUserVariables>) {
  return fetchQuery<types.LoginUser, types.LoginUserVariables>({
    query: queries.LOGIN_USER,
    ...options,
  });
}

export function fetchViwer(options?: Options) {
  return fetchQuery<types.Viewer>({
    query: queries.VIEWER,
    ...options,
  });
}

export function fetchCreateStripeSession(
  options?: Options<types.CreateStripeSessionVariables>,
) {
  return fetchQuery<
    types.CreateStripeSession,
    types.CreateStripeSessionVariables
  >({
    query: queries.CREATE_STRIPE_SESSION,
    ...options,
  });
}

export function fetchSendPasswordResetEmail(
  options?: Options<types.SendPasswordResetEmailVariables>,
) {
  return fetchQuery<
    types.SendPasswordResetEmail,
    types.SendPasswordResetEmailVariables
  >({
    query: queries.SEND_PASSWORD_RESET_EMAIL,
    ...options,
  });
}
