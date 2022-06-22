//BAI 1
function findMin() {
    for (var e = 0, t = 0, n = 1; n < 1e4; n++)
        if (e += n,
        console.log(e),
        e > 1e4) {
            console.log(n),
            t = n;
            break
        }
    document.getElementById("ketQua").innerHTML = "Số nguyên dương nhỏ nhất: " + t
}
//BAI 2
function tinhTong() {
    for (var e = document.getElementById("inputX").value, t = document.getElementById("inputN").value, n = 0, o = 1; o <= t; o++)
        n += Math.pow(e, o);
    document.getElementById("tinhTong").innerHTML = "Tổng: " + n
}
//BAI 3
function tinhGT() {
    for (var e = document.getElementById("inputN1").value, t = 1, n = 1; n <= e; n++)
        t *= n;
    document.getElementById("tinh").innerHTML = "Giai thừa: " + t
}
//BAI 4
function taoDiv() {
    for (var e = "", t = 1; t <= 10; t++)
        e += t % 2 == 0 ? "<div class='bg-danger text-white p-2'>Div chẵn</div>" : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
    document.getElementById("taoThe").innerHTML = e
}