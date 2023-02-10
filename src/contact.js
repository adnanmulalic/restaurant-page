function createContactPage() {
    const contentDiv = document.getElementById("content");
    const contact = document.createElement("h1");
    contact.innerText = "Here is our contact information and location of our our bakery."
    const contactInformation = document.createElement("p");
    contactInformation.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo inventore, eveniet reiciendis laudantium dolor odit quae, ipsum quas corporis minus unde."
    contentDiv.append(contact, contactInformation);
}
export {createContactPage};