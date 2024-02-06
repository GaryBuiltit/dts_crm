import "./output.css";
import Navbar from "./components/navbar";
import Sellers from "./routes/Sellers";

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <Navbar />
      <Sellers />
    </div>
  );
}

export default App;
