alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 3 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`)

let hasil1 = 0;
let hasil2 = 0;
let ronde = 0;
let stop = true;

while (stop) {
    let p1 = prompt(`player 1
    pilih angkah 1 - 3`)
    let p2 = prompt(`player 2
    pilih angkah 1 - 3`)
    let random = Math.floor(Math.random() * 3 + 1)
    let ulangi = validasi(p1, p2)
    if (!ulangi) {
        stop = confirm(`ulangi`)
    } else {
        if (p1 != random && p2 != random) {
            alert("hasil SERI")
        } else {
            if (p1 == random) {
                alert("player 1 WIN")
                hasil1++
            }
            if (p2 == random) {
                alert("player 2 WIN")
                hasil2++
            }
        }

        alert(`
       angka yang di tebak adalah ${random}
       --------------------------------------
       hasil player 1: ${hasil1}
       hasil player 2: ${hasil2}
        `)

        ronde++
        if (ronde <= 3) {
            stop = confirm(`ronde ${ronde} ?`)
        } else {
            if (hasil1 > hasil2) {
                alert("wau pemenangya player 1")
                stop = false;
            } else if (hasil1 < hasil2) {
                alert("wau pemenangnya player 2")
                stop = false;
            } else {
                alert("pertandingan yang sangat sengit")
                hasil1 = 0
                hasil2 = 0
                ronde = 1
                stop = confirm("mau main lagi")
            }
        }
    }
}

function validasi(player1, player2) {
    if (player1 == player2) {
        alert(`player tidak bole mengisi angka yang sama`)
        return false;
    }
    if (player1 < 1 || player2 < 1) {
        alert(`angka tidak bole lebih kecil dari 1`)
        return false;
    }
    if (player1 > 3 || player2 > 3) {
        alert(`angka tidak bole lebih besar dari 1`)
        return false;
    }
    if (isNaN(player1) || isNaN(player2)) {
        alert(`angka tidak bole kosong & tidak boleh huruf abjad`)
        return false;
    }
    return true;
}