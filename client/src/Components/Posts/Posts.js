import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Posts({ isLoggedIn }) {
  const myUserToken = 'EAAJWiqdRDFMBAIjYq9ng7ZAmkv38jGMnk2DGHKj6lylVQygvZBThM2QRQGlQUph4ETcIEP5wXwdNSHiWGUZAn7sI1MFGmSCAwzse5wn4HElL3ZBkg7JiaVSPsp4yZB0kmmDqBmHpOFjZBWzQndanYNgdXwHDkVeyIt0FSMHoDmp3wZAiz0q7ArL5qLSZBuiYftFFMyI6zWgX8yIn0UG8umDW5QiidKL6ZCcT1wgmQJbZAIEwKu0sI21Bod';

  const myAppToken = 'EAAJWiqdRDFMBANSOQ78Um66j4CHpUnSeFeY4WiLeTLkJeXyLYJqSkqozZAZAWT9VxqjfthYXkc9AHpjjujkioittRfZAoVbYt5BdXUNG3Ara6GDrtZBi6gqJ8Ayqlj7S39lt3tnDnP8QOY45Kf4Q2X2XejnxmHvkOCVV6ufVZBfeN4s0TKWSP2OerQOyQmDxpa9dzXinJpljELdOGtO3caZAvmfzz0UsTZCQqLRDEDkrZBf7VpapmMD1';

  const pageToken = 'EAARp8RvrcH4BABpIx2JgmGGdVgNZAZCI8LsvO1dTZBUtrWv2cFtC8GuTwfdoZAoZBZAK8W4vP5hCxDnLQSstTf5cKx0G5HOgooaF2u2lsE7OXlgqWbJtCCMZCjAuYNKdti18hXeuZCJxBCASc98KtfmZBlhaJhPVD07kvehKr3Es1K13HbZBFicIfStsHst18i1Gm8J1eUZBnZBRJQZDZD';

  const pageAccessToken = localStorage.getItem('pageAccessToken');
  console.log({pageAccessToken})

  const [posts, setPosts] = useState('');
  const [userPages, setUserPages] = useState(JSON.parse(localStorage.getItem('pages')) || []);
  const [selectedPage, setSelectedPage] = useState('');
  
  const getUserPages = async () => {

  };

  useEffect(() => {
    if (localStorage && localStorage.getItem('page0')) {
      //const pages =
    }
  }, [localStorage]);

  const getPosts = async () => {
    try {
      //const res = await axios.get(`https://graph.facebook.com/ncla1ere?fields=id&access_token=${myUserToken}`);
      const pageAccessToken = localStorage.getItem('pageAccessToken');
      console.log({pageAccessToken})

      // TODO : Pour récupérer l
      // FIXME : ID de la page pas bon, comment récupérer la liste des pages de l'user ?
      if (pageAccessToken) {
        const res = await axios.get(`https://graph.facebook.com/110201451952871/feed?access_token=${pageAccessToken}`);

        return res.data;
      }
    }
    catch (err) {
      console.log('Err Posts :', err);
    }
  };

  useEffect(() => {
    getPosts()
      .then(res => {
        if (res !== undefined) {
          setPosts(res.data);
        }
      });
  }, [isLoggedIn]);

  const handlePageSelect = (e) => {
    const page = userPages.map((page, i) => {
      if (page.id === userPages[i].id) {
        setSelectedPage(page);
      }
    });
  };

  console.log({selectedPage})
  return (
    <div>
      Test posts :
      <form onSubmit={handlePageSelect}>
        <select name="page" id="pageSelect" value={'selectedPage'} onChange={(e) => handlePageSelect(e)}>
          {
            userPages && userPages.length > 0 && userPages.map((userPage, i) => (
              //<option value={localStorage.getItem(`pages${i}`)}>{ userPage.id }</option>
              <option value={i}>{ `${userPage.name} - ID : ${userPage.id}` }</option>
            ))
          }
        </select>
      </form>
      <StyledPostsList>
        {
          posts && posts.map((post, i) => (
            <Post key={post.id}>
              {post.message} <br />
              <strong>ID :{post.id} <br /></strong>
              {post.created_time} <br />
            </Post>
          ))
        }
      </StyledPostsList>
    </div>
  );
}

const StyledPostsList = styled.ul`
  text-decoration: none;
  list-style: none;
`;

const Post = styled.li`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 2;
  border: 1px solid blue;
  border-radius: 5px;
`;