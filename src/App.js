import { useState } from "react";

function App() {

    const[serial, setSerial] = useState({})

    return (
        <>
            <h1>Front-end</h1>
            <button onClick={async() => {
                let res = await fetch('http://localhost:2000/api/serial')
                let resJson = await res.json()
                setSerial(resJson);
            }}>Загрузить</button>
            <h2>Сериал: {serial.name}</h2>
        </>
    );
}

export default App;