import "./App.css";

import Carousel from "./components/Carousel";

const imageUrls = [
  "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631613638674-d7702c02af10?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612659500560-4ca92962bfe1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Carousel imageUrls={imageUrls} />
    </div>
  );
}

export default App;
