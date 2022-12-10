async function fetchItems() {
    const resp = await fetch("http://localhost:8081/api/items",
        {
            method: 'GET'
        }).then(res => res.json());

    const items = document.getElementById("items");

    for(let i = 0; i < resp.length; i++) {
        let el = document.createElement("li");
        let deleteBtn = addBtn(resp[i].id, 'Delete', deleteItem);
        let buyBtn = addBtn(resp[i].id, 'Buy', buyItem);
        el.append(resp[i].text);
        el.appendChild(deleteBtn);
        el.appendChild(buyBtn);
        items.appendChild(el);
    }
}

function addBtn(id, text, functionOnClick) {
    let btn = document.createElement("button");
    btn.id = id;
    btn.append(text);
    btn.addEventListener('click', functionOnClick);
    return btn;
}

async function deleteItem(event) {
    const resp = await fetch("http://localhost:8081/api/delete",
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event.target.id)
        });

    if (resp.ok) {
        location.reload();
    }
}

async function buyItem(event) {
    const resp = await fetch("http://localhost:8081/api/buy",
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event.target.id)
        })

    if (resp.ok) {
        location.reload();
    }
}

fetchItems();
