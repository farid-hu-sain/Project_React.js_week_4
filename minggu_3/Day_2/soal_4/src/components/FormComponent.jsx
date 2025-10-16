import useForm from "../hooks/useForm.js";

export default function FormComponent() {
    const { values, handleChange, resetForm } = useForm({
        name: "",
        email: "",
    });

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2>Form Input dengan useForm Hook</h2>

            <label>
                Nama : 
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="masukkan nama"
                />
            </label>

            <br /><br />

            <label>
                Email :
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="masukkan email"
                />
            </label>

            <br /><br />
            <button onClick={resetForm}>Reset</button>

            <hr />
            <h3>Data Real-time</h3>
            <p><strong>Nama:</strong> {values.name || "belum diisi"}</p>
            <p><strong>Email:</strong> {values.email || "belum diisi"}</p>
        </div>
    );
}
