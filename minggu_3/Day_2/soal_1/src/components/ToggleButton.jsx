import UseToggle from "../hooks/UseToggle";

export default function ToggleButton() {
    const [isVisible, toggleVisible] = UseToggle(false)

    return (
        <div style={{ margin: "20px"}}>
            <button onClick={toggleVisible}>
                {isVisible ? "sembunyikan pesan" : "tampilkan pesan"}
            </button>
                {isVisible && <p> Toggle telah diaktifkan</p>}
        </div>
    )

}