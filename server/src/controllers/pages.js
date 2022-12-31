import axios from 'axios';
export const getPagesAccessToken = async (req, res, next) => {
  const { client_id, client_secret, fb_exchange_token, accessToken, apiUrl } = req.body;

  const url = `${apiUrl}&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${fb_exchange_token}`;

  const fetchAccessToken = await axios.get(url, {
    header: {
      authorization: `Bearer ${accessToken}`
    }
  });

  const data = fetchAccessToken.data;

  return res.status(200).json({
    userAccessToken: accessToken,
    pageAccessToken: data.access_token,
    pageAccessTokenType: data.token_type,
    expiresIn: data.expires_in
  });
}