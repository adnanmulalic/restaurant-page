import Image from "./images/two-bread-loafs.svg";
function createPage() {
    const contentDiv = document.getElementById("content");
    const headerOne = document.createElement("h1");
    headerOne.innerText = "Best Bakery";
    const breadImage = document.createElement("img");
    breadImage.src = Image;
    breadImage.height = "100"; breadImage.width = "200";
    const textParagraph = document.createElement("p");
    textParagraph.innerText = "Welcome to the best bakery in town. Our products are made by hand, from scratch, with love. We are the home of good baking.";
    const textQuote = document.createElement("q");
    textQuote.innerText = "We bake with love";
    contentDiv.appendChild(headerOne);
    contentDiv.appendChild(breadImage);
    contentDiv.appendChild(textParagraph);
    contentDiv.appendChild(textQuote);
}

export {createPage};
//<h1>Best Bakery</h1>
//<img src="../src/images/two-bread-loafs-svgrepo-com.svg" alt="bread" width="200px" height="100px">
//<p>Welcome to the best bakery in town. Our products are made by hand, from scratch, with love. We are the home of good baking.</p>
//<q>We bake with love</q>