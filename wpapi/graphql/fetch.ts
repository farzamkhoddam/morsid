import Axios from "../axios";
import { AxiosInstance } from "axios";
import * as types from "./__generated__/types";
import * as queries from "./queries";

export interface QLResponse<R> {
  data: R;
  errors?: any[];
}

interface Options<T = undefined> {
  variables?: T;
  client?: AxiosInstance;
}

async function fetchQuery<R = any, T = any>({
  query,
  variables,
  client,
}: Options<T> & { query: string }) {
  const c = client || Axios;
  const result = await c.post<QLResponse<R> | undefined>("/graphql/", {
    query,
    variables,
  });

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
