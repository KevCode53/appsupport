import { fetchWithToken } from 'helpers/fetch'


export const getCompromise = async () => {
  let data = await fetchWithToken('get-compromise')
  return data.res.then(data => data)

}