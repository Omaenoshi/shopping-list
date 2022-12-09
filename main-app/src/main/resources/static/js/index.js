fetchItems();

async function fetchItems() {
    const resp = await fetch("http://localhost:8081/api/items",
        {
            method: 'GET'
        }).then(res => res.json());

    const items = document.getElementById("items");

    for(let i = 0; i < resp.length; i++) {
        let el = document.createElement("li")
        el.append(resp[i].text);
        items.appendChild(el);
    }
}
