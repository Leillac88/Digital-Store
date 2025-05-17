import "./index.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
    return (
        <div className="app">
            <Header />
            <Hero />

            <Footer />
        </div>
    )
}