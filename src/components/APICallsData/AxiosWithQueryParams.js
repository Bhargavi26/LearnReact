import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosWithQueryParams = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            userId: 1, // Example parameter
            postId: 2, // Example parameter
          },
        });

        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosWithQueryParams;
