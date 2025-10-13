export default function InputText({ text, onTextChange }) {
    return (
        <>
        <h3>Komponen Input</h3>
        <input 
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Ketik apapun" />
        </>
    )
}