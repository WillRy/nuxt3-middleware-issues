export default defineEventHandler(async (event) => {
    // ... Do whatever you want here

    throw createError({
        statusCode: 401,
        statusMessage: 'Unauthenticated',
      })

  })