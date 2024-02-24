import { gql } from "apollo-boost";
import "./App.css";
import { useQuery } from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

interface Book {
  title: string;
  author: string;
}

interface QueryResult {
  test: Book[];
}

function Books() {
  const { loading, error, data } = useQuery<QueryResult>(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data?.test.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title} by {author}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  );
}

export default App;
