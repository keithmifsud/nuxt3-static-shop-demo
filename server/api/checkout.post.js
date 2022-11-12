export default defineEventHandler(async (event) => {

  const requestBody = await readBody(event)

  async function checkout () {
  }

  return {
    result: requestBody,
  }
})
