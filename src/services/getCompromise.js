import { siremApi } from "api/siremApi"

export const getCompromise = async () => {
  try {
    const res = await siremApi.get('/get-compromise')
    console.log(res)
    const {data} = res
      return data
  } catch (error) {
    if (error.response) {
      return error.response.data
    } else if (error.request) {
      console.info('Es aqui')
      return {'error': 'No fue posible enviar la petición!'}
    } else {
      throw new Error('Error', error.message)
    }
  }
  
}