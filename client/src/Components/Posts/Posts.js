import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Posts() {
  const myUserToken = 'EAAJWiqdRDFMBAIjYq9ng7ZAmkv38jGMnk2DGHKj6lylVQygvZBThM2QRQGlQUph4ETcIEP5wXwdNSHiWGUZAn7sI1MFGmSCAwzse5wn4HElL3ZBkg7JiaVSPsp4yZB0kmmDqBmHpOFjZBWzQndanYNgdXwHDkVeyIt0FSMHoDmp3wZAiz0q7ArL5qLSZBuiYftFFMyI6zWgX8yIn0UG8umDW5QiidKL6ZCcT1wgmQJbZAIEwKu0sI21Bod';

  const myAppToken = 'EAAJWiqdRDFMBANSOQ78Um66j4CHpUnSeFeY4WiLeTLkJeXyLYJqSkqozZAZAWT9VxqjfthYXkc9AHpjjujkioittRfZAoVbYt5BdXUNG3Ara6GDrtZBi6gqJ8Ayqlj7S39lt3tnDnP8QOY45Kf4Q2X2XejnxmHvkOCVV6ufVZBfeN4s0TKWSP2OerQOyQmDxpa9dzXinJpljELdOGtO3caZAvmfzz0UsTZCQqLRDEDkrZBf7VpapmMD1';

  const pageToken = 'EAARp8RvrcH4BADYoBia1olbTYBMTaPLjaiC9MStIA8qdtuM8DzknDJN20yavs7z2uDX1J9mvpst4xIYrAWkFVCJEXZBakoDyntLDSR2SZCAn7D8tZATPxffqezVlJAv51U7qdTTetM5GwZB7ZAfAuxZAt1PnaSew8mlrVBYojVxZAbYd9WPvekwZBaFQFwThWwWwCTOt2Vj5awZDZD';

  const [posts, setPosts] = useState('');

  const getPosts = async () => {
    try {
      //const res = await axios.get(`https://graph.facebook.com/ncla1ere?fields=id&access_token=${myUserToken}`);
      const res = await axios.get(`https://graph.facebook.com/110201451952871/feed?access_token=${pageToken}`);

      return res.data;
    }
    catch (err) {
      console.log('Err Posts :', err);
    }
  };

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div>
      Test posts :
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