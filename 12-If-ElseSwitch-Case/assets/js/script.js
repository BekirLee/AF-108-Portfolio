// task1

const dieselPrice = 0.9;
const regularPrice = 1;
const premiumPrice = 1.5;

let fuelType = prompt("Choose the Fuel:\n1. Diesel\n2. Regular Benzine\n3. Premium Benzin\n Choose (1, 2, 3):");

if (fuelType !== "1" && fuelType !== "2" && fuelType !== "3") {
    alert("PLz choose the correct type of Fuel.");
}

else {
    let quantity = prompt("Plz choose fuel amount(liter) that u want:");
    let balance = parseFloat(prompt("Write ur current money amount:"));

    let fuelPrice;
    switch (fuelType) {
        case "1":
            fuelPrice = dieselPrice;
            break;
        case "2":
            fuelPrice = regularPrice;
            break;
        case "3":
            fuelPrice = premiumPrice;
            break;
    }

    let totalCost = fuelPrice * quantity;

    if (balance >= totalCost) {
        let remainingBalance = balance - totalCost;
        alert("Taken fuel: " + quantity + " litr\nAll amount: " + totalCost + " AZN\nLast amount: " + remainingBalance + " AZN");
    } else {
        let deficit = totalCost - balance;
        alert("General: " + totalCost + " AZN\nUr current amount: " + balance + " AZN\nU cant affort " + deficit);
    }
}


// task2

function showMonthsBySeason(season) {
    
    // her birini eyni sekilde elemek ucun istifade etdim
    
    switch (season.toLowerCase()) {
        case "spring":
            alert("Spring months: March, April, May");
            break;
        case "summer":
            alert("Summer months: June, July, August");
            break;
        case "autumn":
            alert("Autumn months: September, October, November");
            break;
        case "winter":
            alert("Winter months: December, January, February");
            break;
        default:
            alert("Invalid season ! (values: spring, summer, autumn, winter)");
    }
}

let season = prompt("Enter the season (spring, summer, autumn, winter):");
showMonthsBySeason(season);
