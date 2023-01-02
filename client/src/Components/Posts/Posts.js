import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// TODO : Passer pages en prop ? Pour ça que ça render en double ?
export default function Posts({ isLoggedIn }) {
  const [posts, setPosts] = useState('');

  const [userPages, setUserPages] = useState(JSON.parse(localStorage.getItem('pages')) || []);

  const [selectedPage, setSelectedPage] = useState({});

  const getUserPages = async () => {
    try {
      const pageAccessToken = selectedPage.access_token;
      const pageId = selectedPage.id;

      if (pageAccessToken) {
        const res = await axios.get(`https://graph.facebook.com/v15.0/${pageId}/feed?access_token=${pageAccessToken}&since=0&limit=100`);

        return res.data;
      }
    }
    catch (err) {
      console.log('Err Posts :', err);
    }
  };

  // TODO : Modifier pour vider le state d'abord
  const handlePageSelect = (e) => {
    userPages.forEach((page, i) => {
      if (Object.values(userPages[i]).includes(e.target.value)) {
        console.log({ page });
        setSelectedPage(page);
      }
    });
  };

  // TODO : getPost() après setSelectedPage
  useEffect(() => {
    if ((selectedPage && Object.keys(selectedPage).length > 0) && isLoggedIn) {
      getUserPages()
        .then(res => {
          if (res && res !== undefined) {
            // TODO : Fonction / requête pour récupérer les insights ici ?
            setPosts(res.data);
          }
        });
    }
  }, [selectedPage, isLoggedIn]);

  return (
    <div>
      Test posts :
      <form onSubmit={handlePageSelect}>
        <select
          name="page" id="pageSelect" value={'selectedPage'} onChange={(e) => handlePageSelect(e)} value="options"
        >
          <option disabled={true} selected={true} value="options">Sélectionnez la page</option>
          {
            userPages && Object.keys(userPages).length > 0 && userPages.map((userPage, i) => (
              <option value={userPage.id} key={userPage.id}>{`${userPage.name} - ID : ${userPage.id}`}</option>
            ))
          }
        </select>
      </form>
      <StyledPage>
        <ul>
          {
            selectedPage && Object.keys(selectedPage).length > 0 && (
              <>
                <li key={selectedPage.id}>Nom de la page : {selectedPage.name}</li>
                <li key={selectedPage.id}>ID de la page : {selectedPage.id}</li>
                <li key={selectedPage.id}>Catégorie : {selectedPage.category_list[0].name}</li>
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