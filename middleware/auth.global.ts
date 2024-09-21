
export default defineNuxtRouteMiddleware(async (to, from) => {
  
  const haveLogoutQueryString = to.fullPath.includes("logout");

  if (haveLogoutQueryString) {
    return;
  }

  const { error } = await $serverFetch("/user");

  
  console.log(error);
});
