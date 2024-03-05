# Laporan Praktikum
|  | Pemrograman Berbasis Framework 2024 |
| ----------- | --------- |
| NIM | 2141720266 |
| Nama | Alfan Marcel Mulyawan |
| Kelas | TI-3A |

## Jawaban Soal 1
![round](assets\01.png)
perlu menambahkan domain website imgur pada next.config.mjs supaya gambar dapat ditampilkan

## Jawaban Soal 2
![round](assets\01.png)
membuat komponen baru yang bernama {Gallery} dimana isi komponen Gallery adalah memanggil komponen Profile sebanyak 3x dengan columns-3

## Jawaban Soal 3
kode yang benar

    export default function Bio() {
    return (
    <div>
        <div className="intro">
        <h1>Selamat datang di website saya!</h1>
        </div>
        <p className="summary">
            Anda dapat membaca uneg-unegku di sini.
            <br /><br />
            <b>Juga ada <i>foto</i> ilmuwan!</b>
        </p>
    </div>
    );
    }
![round](assets\02.png)

## Jawaban Soal 4
kode yang benar

    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
        backgroundColor: 'black',
        color: 'pink'
        }
    };
    
    export default function TodoList() {
        return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
            />
            <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
        );
    }

dengan menambahkan .name pada {person} pada h1 karena dalam person hanya name yang belum dipanggil