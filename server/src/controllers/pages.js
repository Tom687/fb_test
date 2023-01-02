import axios from 'axios';
export const getPagesAccessToken = async (req, res, next) => {
  const { accessToken, userId, redirect_uri } = req.body;

  const state = Math.random().toString(36).substring(2);


  const url = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;
  //const url =
  // `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}&redirect_uri=${redirect_uri}&state=${state}`;


  const fetchPages = await axios.get(url, {
    header: {
      authorization: `Bearer ${accessToken}`
    }
  });

  return res.status(200).json({
    userAccessToken: accessToken,
    data: fetchPages.data,
  });
};

export const getPageInsights = async (req, res, next) => {
  const { pageId, metrics, pageAccessToken } = req.body;

  const result = await axios.get(`https://graph.facebook.com/${pageId}/insights?metric=${metrics}&access_token=${pageAccessToken}`);

  console.log({...result.data})

  res.status(200).json({
    data: result.data.data
  })
};