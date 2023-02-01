const event1 = new CustomEvent('e1', {
    detail: {
        "x": 7,
        "y": 14
    },
    bubbles: true,
    cancelable: true,
    composed: false,
});

$("#myForm").submit((e) => {
    e.preventDefault();
    let elements = document.getElementById("myForm").elements;
    for(element of elements) {
        if(element.type !== "submit") {
            event1.detail[element.name] = element.value;
        }
        
    }
    window.parent.document.dispatchEvent(event1);
});
