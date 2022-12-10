async function fetchItems() {
    const resp = await fetch("http://localhost:8081/api/items",
        {
            method: 'GET'
        }).then(res => res.json());

    const items = document.getElementById("items");

    for(let i = 0; i < resp.length; i++) {
        let el = document.createElement("li");
        let btn = document.createElement("button");
        btn.id = resp[i].id;
        btn.addEventListener('click', deleteItem);
        el.append(resp[i].text);
        btn.append("Delete this");
        el.appendChild(btn);
        items.appendChild(el);
    }
}

async function deleteItem(event) {
    await fetch("http://localhost:8081/api/delete",
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event.target.id)
        }).then(location.reload());
}

fetchItems();
