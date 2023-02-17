function setBorder(menuBorder,current) {
    menuBorder.style.width = current.offsetWidth + 20 + 'px';
    menuBorder.style.left = current.offsetLeft - 10 + 'px';
}

export {setBorder};