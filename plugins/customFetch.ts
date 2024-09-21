
export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp();
    const $customFetch = $fetch.create({
      baseURL: '/api',
      headers: {
        Accept: 'application/json',
      },
      async onRequest({ request, options, error }) {
      },
      async onResponse({ response }) {
        if (response.status == 401) {
          await nuxtApp.runWithContext(() => navigateTo('/login?logout=1'));
        }
      },
    });
    // Expose to useNuxtApp().$customFetch
    return {
      provide: {
        customFetch: $customFetch,
      },
    };
  });