async function fetchItems() {
    const resp = await fetch("http://localhost:8081/api/items",
        {
            method: 'GET'
        }).then(res => res.json());

    sortResp(resp);

    const items = document.getElementById("items");

    for(let i = 0; i < resp.length; i++) {
        let el = document.createElement("li");
        let deleteBtn = addBtn(resp[i].id, 'Delete', deleteItem);

        if (resp[i].purchased) {
            el.append(resp[i].text + ' (Bought)');
        }
        else {
            let buyBtn = addBtn(resp[i].id, 'Buy', buyItem);
            el.append(resp[i].text);
            el.appendChild(buyBtn);
        }

        el.appendChild(deleteBtn);

        items.appendChild(el);
    }
}

function sortResp(resp) {
    resp.sort(function(a,b){
        let x = a.purchased;
        let y = b.purchased;

        if(x>y){return 1;}
        if(x<y){return -1;}

        return 0;
    });
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
