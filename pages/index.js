import fetch from "isomorphic-fetch";
import Error from "next/error";

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const response = await fetch(
        "https://node-hnapi.herokuapp.com/news?page=1"
      );
      stories = await response.json();

      return { stories };
    } catch (err) {
      console.log(err);

      return { stories };
    }
  }
  render() {
    const { stories } = this.props;

    if (stories.length === 0) {
      return <Error />;
    }
    return (
      <div>
        <h1>hacker next</h1>
        <div>
          {stories.map((story, index) => (
            <div>{story.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
