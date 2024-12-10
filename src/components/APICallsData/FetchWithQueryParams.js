import React, { useEffect, useState } from 'react';

const FetchWithQueryParams = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        userId: 1, // Example parameter
        postId: 2, // Example parameter
      });

      const url = `https://jsonplaceholder.typicode.com/comments?${queryParams.toString()}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
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

export default FetchWithQueryParams;
