function App() {
    return (
    <> 
    {/* 1. Classname */}
    <div className="container">Hello World </div>

    {/* 2. Label & input */}
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" />

    {/* 3. Atribut Camelcase */}
    <input type="text" readOnly={true} tabIndex={"1"} />

    {/* 4. atribut Bolean */}
    <button disabled>Tombol dinonaktifkan </button>
    <input type="checkbox" checked={true}/>

    </>
    );
}
export default App;

