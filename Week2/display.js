function render(content, id){
    let el = document.querySelector(id);
    el.innerHTML = content;
}

export default render;