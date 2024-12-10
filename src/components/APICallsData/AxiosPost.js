import React, { useState } from 'react';
import axios from 'axios';

const AxiosPost = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async () => {
    setLoading(true);
    setError(null);

    const payload = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={postData} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Data'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AxiosPost;
