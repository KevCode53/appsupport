import { fetchWithToken } from 'helpers/fetch'
import { useUser } from 'hooks/useUser'


export const getCompromise = async () => {
  const response = await fetchWithToken('get-compromise')
  const body = await response.json()
  const {status} = await response

  return {body, status}
}