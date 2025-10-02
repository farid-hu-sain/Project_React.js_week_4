function JSXExpressionDemo() {
    // 1. Simpan JSX dalam variabel
    const welcomeText = <p>Selamat datang di React</p>
    
    // 2. Fungsi Wrapper untuk menerima Childern
    function Wrapper(props) {
        return(
            <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                {props.children}
            </div>
        )
    }

    // 3. Fungsi mengembalikan JSX
    function getGreeting(isLoggedIn) {
        if (isLoggedIn) {
            return <h1>Selamat Datang Kembali</h1>
        } else {
            return <h1>Silahkan masuk</h1>
        }
    }

    // 4. contoh penggunaan Conditional/loop
    const item = ["React", "Vue", "Angular"]
    
    return (
        <div>
            {/* menyimpan JSX dalam variabel */}
            {welcomeText}
            <button>Mulai</button>

            <hr />

            {/* 2. meneruskan JSX sebagai childern */}
             <Wrapper>
                <h1>Ini adalah konten didalam wrapper</h1>
                <p>Konten ini diteruskan sebagai Childern</p>
             </Wrapper>

            <hr />

            {/* 3. mengembalikan JSX dari fungsi */}
            {getGreeting(true)}

            <hr />
            
            {/* 4. contoh penggunaan Conditional/loop */}
            <h2>Framework Populer</h2>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    )


}

export default JSXExpressionDemo;