import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Insights({ selectedPage }) {
  const [pageInsights, setPageInsights] = useState([]);

  const getPageInsights = async () => {
    try {
      const res = await axios.post('http://localhost:1337/pages/insights', {
        pageId: selectedPage.id,
        metrics: 'page_impressions_unique,page_engaged_users',
        pageAccessToken: selectedPage.access_token,
      }, {
        headers: {
          authorization: `Bearer ${selectedPage.access_token}`,
        },
      });

      return res.data.data;
    }
    catch (err) {
      console.log('getPageInsights err', err);
    }
  };

  useEffect(() => {
    if (selectedPage && Object.keys(selectedPage).length > 0) {
      getPageInsights()
        .then(result => {
          setPageInsights(result);
        });
    }
  }, [selectedPage]);

  return (
    <div>
      <ul>
        {
          pageInsights && pageInsights.length > 0 && pageInsights.map((insight, i) => {
            return (
              <React.Fragment key={i}>
                <li>Nom insight : {insight.title}</li>
                <li>Nombre de contenu affiché que les gens ont vu : {insight.values[0].value}</li>
                <br />
                <li>Nom insight : {insight.title}</li>
                <li>Nombre de contenu s'étant engagé sur la page : {insight.values[0].value}</li>
                <br/> <br/>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
}