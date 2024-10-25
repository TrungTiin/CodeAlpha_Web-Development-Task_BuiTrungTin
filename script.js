function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1;
    const year = parseInt(document.getElementById("year").value);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerText = "Invalid birthdate!";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = `You are ${age} years old.`;
}
