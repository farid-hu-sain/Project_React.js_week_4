function Ekspresi() {
    
    // 1. menampilkan variabel
    const username = "Alice"

    // 2. operasi matematilka
    const num1 = 10;
    const num2 = 5;

    // 3. Fungsi
    function formatnama(user) {
        return user.firstName + " " + user.lastName;
    }
    const user = {
        firstName: "John",
        lastName: "Doe",
    };
    
    // 4. Objek 
    const person = {
        name: "Alice",
        age: 30
    }

    return (
        <>
        {/* 1. menampilkan variabel*/}
        <h1>Hello {username}</h1>

        {/* 2. operasi matematilka */}
       <p>{num1} + {num2} = {num1 + num2}</p>

       {/* 3. Fungsi */}
       <p>selamat Datang, {formatnama(user)}</p>

       {/* 4. Objek */}
       <p>Nama: {person.name} berumur: {person.age}</p>         
        </>
    )
}
export default Ekspresi;