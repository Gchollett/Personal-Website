import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LinkPreview = ({ url } : {url : string}) => {
  const [metadata, setMetadata] = useState({url:"",image:"",title:"",description:""});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get(`https://api.linkpreview.net/?key=1363c40a7b1da958e84b27bbd878b42c&q=${url}`);
        setMetadata(response.data);
      } catch (err : any) {
        console.log(err)
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading preview</div>;
  }

  return (
    <div className="link-preview">
      <a href={metadata.url} target="_blank" rel="noopener noreferrer">
        <img src={metadata.image} alt={metadata.title} />
      </a>
    </div>
  );
};

export default LinkPreview;
