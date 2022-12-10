(async function fetchItems() {
    const resp = await fetch("http://localhost:8081/api/items",
        {
            method: 'GET'
        }).then(res => res.json());

    const items = document.getElementById("items");

    for(let i = 0; i < resp.length; i++) {
        let el = document.createElement("li");
        let btn = document.createElement("button");
        el.append(resp[i].text);
        btn.append("Delete this");
        el.appendChild(btn);
        items.appendChild(el);
    }
})();
