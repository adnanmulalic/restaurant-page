function createMenuPage() {
    const contentDiv = document.getElementById("content");
    const headerOne = document.createElement("h1");
    headerOne.innerText = "Here are some of our best bakeries";
    const productOne = document.createElement("h2");
    productOne.innerText = "Bread";
    const productOneDescription = document.createElement("p");
    productOneDescription.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    const productTwo = document.createElement("h2");
    productTwo.innerText = "Cookie";
    const productTwoDescription = document.createElement("p");
    productTwoDescription.innerText = "Accusantium explicabo inventore, eveniet reiciendis laudantium dolor odit quae, ipsum quas corporis minus unde."
    const productThree = document.createElement("h2");
    productThree.innerText = "Cake";
    const productThreeDescription = document.createElement("p");
    productThreeDescription.innerText = "Omnis tenetur dignissimos doloremque adipisci non quis natus!";
    contentDiv.append(headerOne, productOne, productOneDescription, productTwo, productTwoDescription, productThree, productThreeDescription);
}
export {createMenuPage};