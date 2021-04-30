const output = document.querySelector(".output");
const hapus = document.querySelector(".hapus");
const hasil = document.querySelector(".hasil");
const operator = document.querySelectorAll(".operator");
const nomor = document.querySelectorAll(".nomor");

hapus.addEventListener("click", () => {
    output.textContent = "0";
});

nomor.forEach((e) => {
    e.addEventListener("click", () => {
        removeZero();
        output.textContent += e.value;
    });
});

operator.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.value === "+") {
            removeZero();
            output.textContent += e.value;
        }

        if (e.value === "-") {
            removeZero();
            output.textContent += e.value;
        }

        if (e.value === "*") {
            removeZero();
            output.textContent += e.value;
        }

        if (e.value === "/") {
            removeZero();
            output.textContent += e.value;
        }

        if (e.value === "%") {
            removeZero();
            output.textContent /= 100;
        }

        if (e.value === ".") {
            removeZero();
            output.textContent += e.value;
        }
    });
});

hasil.addEventListener("click", () => {
    let eksekusiPersamaan = eval(output.textContent);
    output.textContent = eksekusiPersamaan;
});

function removeZero() {
    let hapusNol = output.textContent;
    if (hapusNol === "0") {
        output.textContent = "";
    }
}
