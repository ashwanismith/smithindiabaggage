function changeText(){
    const title = document.getElementById("title");

    title.innerText = "Yup Letss Go!";
    title.style.color ="pink";

}

const bags = [{ img: "images/7.png", title: "Product 1", desc: "100% Cotton, Handstiched" }, { img: "images/8.png", title: "Product 2", desc: "100% Cotton, Handstiched" }, { img: "images/9.png", title: "Product 3", desc: "100% Cotton, Handstiched" },{ img: "images/10.png", title: "Product 4", desc: "100% Cotton, Handstiched" },{ img: "images/10.png", title: "Product 5", desc: "100% Cotton, Handstiched" },{ img: "images/10.png", title: "Product 6", desc: "100% Cotton, Handstiched" }]

const shop = document.getElementById("shop")
bags.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.src=item.img;

    const title = document.createElement("h2");
    title.innerText = item.title;

    const desc = document.createElement("p");
    desc.innerText = item.desc;

    const buybut = document.createElement("button");
    buybut.innerText="Buy Now";
    buybut.className="but";
    const addcartbut = document.createElement("button");
    addcartbut.className="but";
    addcartbut.innerText="+ Cart";

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(buybut);
    div.appendChild(addcartbut);

    shop.appendChild(div);

})