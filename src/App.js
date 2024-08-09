import React from "react";
import Article from "./Article";
import Comment from "./Comment";
//Now that we have these components written, all we need to do is make sure some other component is making use of them in its return statement. 
function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;
