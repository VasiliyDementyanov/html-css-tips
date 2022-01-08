import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";

// Block elements
function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/first-page">First page</Link>
                        </li>
                        <li>
                            <Link to="/second-page">Second page</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/first-page" element={<FirstPage />} />
                <Route path="/second-page" element={<SecondPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
