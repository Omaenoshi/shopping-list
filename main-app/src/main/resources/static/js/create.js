async function create() {
    let item = document.getElementById("text");
    let text = item.value;

    const resp = await fetch("http://localhost:8081/api/add",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        });

    if (resp.ok) {
        window.location.href = '/';
    }
}
