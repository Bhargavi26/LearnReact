import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosPromiseAll = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
      const api2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');
      const api3 = axios.get('https://jsonplaceholder.typicode.com/posts/3');

      try {
        const responses = await Promise.all([api1, api2, api3]);
        setResults(responses.map((response) => response.data)); // Extract the data from each response
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
      <h2>Fetched Posts</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>{result.title}</strong>
            <p>{result.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosPromiseAll;
