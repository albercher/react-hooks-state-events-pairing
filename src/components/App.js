import video from "../data/video.js";
import Header from "./Header.js";
import React, {useState} from "react";
import CommentsList from "./CommentsList.js";

function App() {
  const [hiddenComments, setHiddenComments] = useState(false);

  function handleHide(){
      setHiddenComments((hiddenComments) => !hiddenComments);
  }

  return (
    <div className="App">
      <Header video={video} />
      <br />
      <button onClick={handleHide}>{hiddenComments ? "Show Comments" : "Hide Comments"}</button>
      <hr />
      {hiddenComments ? null: <CommentsList comments={video.comments} />}
    </div>
  );
}

export default App;
