import UseToggle from "../hooks/UseToggle";

export default function SwitchComponent() {
    const [isOn, toggleSwitch] = UseToggle(true)

    return (
        <div style={{ margin: "20px"}}> 
            <p>Status Lampu: {isOn ? "Nyala" : "mati"}</p>
            <label style={{ cursor: "pointer" }}>
            <button onClick={toggleSwitch}>Ubah Status</button>
            </label>
        </div>
    )

}

