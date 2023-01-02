import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Posts({ isLoggedIn, pages, setPages }) {
  const [posts, setPosts] = useState('');

  //const [userPages, setUserPages] = useState(JSON.parse(localStorage.getItem('pages')) || []);
  const [userPages, setUserPages] = useState(pages || []);

  const [selectedPage, setSelectedPage] = useState();
  const [id, setId] = useState('');

  const getUserPages = async () => {

  };
  console.log({userPages})

  const getPosts = async (pageId) => {
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
    userPages.forEach((page, i) => {
      if (Object.values(userPages[i]).includes(e.target.value)) {
        setSelectedPage(page);
        setId(page.id);
      }
    });
  };
  console.log({selectedPage})
  console.log({id})

  return (
    <div>
      Test posts :
      <form onSubmit={handlePageSelect}>
        <select name="page" id="pageSelect" value={'selectedPage'} onChange={(e) => handlePageSelect(e)} value="options">
          <option disabled={true} selected={true} value='options'>Sélectionnez la page</option>
          {
            userPages && Object.keys(userPages).length > 0 && userPages.map((userPage, i) => (
              <option value={userPage.id} key={userPage.id}>{ `${userPage.name} - ID : ${userPage.id}` }</option>
            ))
          }
        </select>
      </form>
      <StyledPage>
        <ul>
          {
            selectedPage && Object.keys(selectedPage).length > 0 && (
              <>
                <li key={selectedPage.id}>Nom de la page : { selectedPage.name }</li>
                <li key={selectedPage.id}>ID de la page : { selectedPage.id }</li>
                <li key={selectedPage.id}>Catégorie : { selectedPage.category_list[0].name }</li>
              </>
            )
          }
        </ul>
      </StyledPage>
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

const StyledPage = styled.div`
`;