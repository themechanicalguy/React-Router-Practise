// import Timer from "./Timer";
import ZenQuote from "./ZenQuote";
import "./App.css";
import GithubUserInfo from "./GithubUserInfo";

function App() {
  return (
    <div className="App">
      {/* <ZenQuote /> */}
      <GithubUserInfo username="facebook" />
      <GithubUserInfo username="themechanicalguy" />
    </div>
  );
}

export default App;
