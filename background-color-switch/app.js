function changeBackgroundColor(event) {
    document.body.style.backgroundColor = event.target.id;
}

document.onclick = changeBackgroundColor;
