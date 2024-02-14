function calculateAge(birthdate) {
    var today = new Date();
    // console.log(Date());
    var birthDate = new Date(birthdate);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 + months;
    }

    if (days < 0) {
        months--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        console.log(tempDate);
        days = tempDate.getDate() - birthDate.getDate() + today.getDate();
    }

    return { years: years, months: months, days: days };
}
let day = document.querySelector(".Iday");
let month = document.querySelector(".Imonth");
let year = document.querySelector(".Iyear");
let d = day.value;
let m = month.value;
let y = year.value;
// Example usage
 // YYYY-MM-DD format


let img = document.querySelector("img");

img.addEventListener("click", () => {
    var birthdate = `${y}-${m}-${d}`;
    var age = calculateAge(birthdate);
    console.log(age);
})










