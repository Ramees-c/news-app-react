import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";

function Home() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${POPULAR_URL}${API_KEY}`);
        const json = await response.json();
        setNewsData(json.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return (
      <Container>
        <h1>Data Loading...</h1>
      </Container>
    );
  }

  if(error) {
    return (
        <Container>
            <h1>{error}</h1>
        </Container>
    )
  }
  console.log(error, "erere")
  return (
    <Container>
      {newsData?.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </Container>
  );
}

export default Home;
