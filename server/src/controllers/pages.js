import axios from 'axios';
export const getPagesAccessToken = async (req, res, next) => {
  const { client_id, client_secret, fb_exchange_token, accessToken, apiUrl, userId } = req.body;

  //const url =
  // `${apiUrl}&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${fb_exchange_token}`;

  console.log({...req.body})
  const url = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;

  const fetchPagesAccessToken = await axios.get(url, {
    header: {
      authorization: `Bearer ${accessToken}`
    }
  });

  const data = fetchPagesAccessToken.data;

  console.log({...data})

  //const pagesData = data.map((page) => {
  //  return {
  //    pageAccessToken: page.access_token,
  //  }
  //})


  return res.status(200).json({
    userAccessToken: accessToken,
    //pageAccessToken: data.access_token,
    //pageAccessTokenType: data.token_type,
    //expiresIn: data.expires_in,
    data
  });
}