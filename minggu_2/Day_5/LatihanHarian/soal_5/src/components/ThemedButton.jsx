import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function ThemedButton() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <button onClick={toggleTheme}>
            ganti ke tema {theme === 'light' ? 'gelap' : 'terang'}
        </button>
    )
}