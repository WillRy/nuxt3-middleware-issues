import type { UseFetchOptions } from "nuxt/app";
export function $serverFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$customFetch,
  });
}