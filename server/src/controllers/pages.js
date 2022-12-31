import axios from 'axios';
export const getPosts = async (req, res, next) => {
  console.log({...req.body})
  const { client_id, client_secret, fb_exchange_token, accessToken, url } = req.body;

  //const res = await axios.get('')
  //const res = await axios.get('/')
  const uri = `${url}&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${fb_exchange_token}`;
  console.log({uri})
  const result = await axios.get(uri, {
    header: {
      authorization: `Bearer ${accessToken}`
    }
  })
  console.log({result})
}