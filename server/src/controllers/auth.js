import * as querystring from 'querystring';

export const facebookAuth = async (req, res, next) => {
  // Generate random state token to prevent forgery
  const state = Math.random().toString(36).substring(2);

  // Build the login URL
  const params = querystring.stringify({
    client_id: process.env.APP_ID,
    redirect_uri: process.env.CB_URL,
    state: state,
    scope: 'email,public_profile,read_insights,ads_read,pages_read_engagement,pages_read_user_content',
  });

  const loginURL = `https://www.facebook.com`;
};