import React, { useEffect, useState } from 'react';

const FetchPromiseAll= () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());
      const api2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then((res) => res.json());
      const api3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then((res) => res.json());

      try {
        const data = await Promise.all([api1, api2, api3]);
        setResults(data);
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

export default FetchPromiseAll;
