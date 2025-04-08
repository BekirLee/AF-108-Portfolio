// Task1

const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    // console.log(heart)
    const card = heart.parentElement.parentElement;

    const img = card.querySelector('img').src.trim();
    const title = card.querySelector('.cardTitle').textContent;
    const text = card.querySelector('.cardText').textContent;
    const price = card.querySelector('.cardPrice').textContent;

    const product = {
        image: img,
        title: title,
        description: text,
        price: price
    };

    console.log('First try', product);
});


// Task2

hearts.forEach(heart => {
    // console.log(heart)

    const card = heart.closest('.card');

    const img = card.querySelector('img').src.trim();
    const title = card.querySelector('.cardTitle').textContent;
    const text = card.querySelector('.cardText').textContent;
    const price = card.querySelector('.cardPrice').textContent;

    const product = {
        image: img,
        title: title,
        description: text,
        price: price
    };

    console.log('Second try (closest):', product);
});

// Task3

let cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    const title = card.querySelector('.cardTitle');
    const text = card.querySelector('.cardText');
    const price = card.querySelector('.cardPrice');
    const img = card.querySelector('img');

    title.textContent = `New product ${index + 1}`;
    text.textContent = `Everything is aviable in our markets.`;
    price.textContent = `${100 + 5 * 20} AZN`;
    img.src = `https://picsum.photos/200/30${index + 1}`;
});



let main = document.createElement("div");
main.style.width = "300px";
main.style.border = "1px solid #ccc";
main.style.borderRadius = "10px";
main.style.overflow = "hidden";
main.style.fontFamily = "Arial, sans-serif";
main.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
main.style.backgroundColor = "#fff";
main.style.position = 'relative';

const img = document.createElement("img");
img.src = "https://picsum.photos/200/300";
img.style.width = "100%";
img.style.height = "200px";
img.style.objectFit = "cover";
main.appendChild(img);

let heart = document.createElement('i');
// heart.classList.add('fa-regular', 'fa-heart');
heart.className = 'fa-regular fa-heart ';

heart.style.display = 'inline-flex';
heart.style.alignItems = 'center';
heart.style.justifyContent = 'center';
heart.style.width = '30px';
heart.style.height = '30px';
heart.style.borderRadius = '50%';
heart.style.backgroundColor = 'silver';
heart.style.position = 'absolute';
heart.style.top = '15px';
heart.style.right = '15px';
heart.style.cursor = 'pointer';
heart.style.background = 'transparent';
heart.style.color = '#fff';

main.append(heart)

let infoSection = document.createElement("div");
infoSection.style.padding = "16px";

const topTitle = document.createElement("div");
topTitle.textContent = "DETACHED HOUSE • 5Y OLD";
topTitle.style.fontSize = "12px";
topTitle.style.color = "gray";
topTitle.style.marginBottom = "8px";
infoSection.appendChild(topTitle);

let price = document.createElement("div");
price.textContent = "$750,000";
price.style.fontSize = "24px";
price.style.fontWeight = "bold";
price.style.marginBottom = "4px";
infoSection.appendChild(price);

let address = document.createElement("div");
address.textContent = "742 Evergreen Terrace";
address.style.fontSize = "14px";
address.style.color = "#555";
address.style.marginBottom = "16px";
infoSection.appendChild(address);

let roomRow = document.createElement("div");
roomRow.style.display = "flex";
roomRow.style.justifyContent = "space-between";
roomRow.style.marginBottom = "16px";

let bedroom = document.createElement("div");
bedroom.innerHTML = "<i class='fa-solid fa-bed'></i>  <strong>3</strong> Bedrooms";
bedroom.style.fontSize = "14px";
roomRow.appendChild(bedroom);

let bathroom = document.createElement("div");
bathroom.innerHTML = '<i class="fa-solid fa-bath"></i> <strong>2</strong> Bathrooms';
bathroom.style.fontSize = "14px";
roomRow.appendChild(bathroom);

infoSection.appendChild(roomRow);

let realtor = document.createElement("div");
realtor.style.display = "flex";
realtor.style.alignItems = "center";
realtor.style.borderTop = "1px solid #eee";
realtor.style.paddingTop = "12px";

let avatar = document.createElement("img");
avatar.src = "https://picsum.photos/200/300";
avatar.style.width = "40px";
avatar.style.height = "40px";
avatar.style.borderRadius = "50%";
avatar.style.marginRight = "10px";
realtor.appendChild(avatar);

let realInfo = document.createElement("div");

let name = document.createElement("div");
name.textContent = "Tiffany Heffner";
name.style.fontWeight = "bold";
name.style.fontSize = "14px";
realInfo.appendChild(name);

let phone = document.createElement("div");
phone.textContent = "(555)5554321";
phone.style.fontSize = "12px";
phone.style.color = "gray";

realInfo.appendChild(phone);

realtor.appendChild(realInfo);

infoSection.appendChild(realtor);

main.appendChild(infoSection);

document.body.appendChild(main);
