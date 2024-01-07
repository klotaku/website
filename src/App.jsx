import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;