if (document.querySelector(".teaching .collapsible")) {
    document.querySelector(".teaching .collapsible").onclick = (event) => {
        event.target.classList.toggle("active");
        var content = event.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = (content.scrollHeight + 100) + "px";
        }
    };
}

document.querySelector("#menu-button").onclick = () => {
    // toggle menu visibility on mobile
    document.querySelector("#nav-items").classList.toggle("hidden");
};
 
const updateURL = (entry) => {
    const link = entry.querySelector("a");
    if(link) {
        link.href = link.querySelector(".url").innerHTML;
    }
};

const finishedBibtexProcessing = () => {
    const overlay = document.querySelector(".overlay");
    if (overlay)
        overlay.style.display = "none";
    
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorQuery = urlParams.get("author");
        const authorInput = document.querySelector("input#authorinput");
        
        if (authorQuery !== null) {
            authorInput.value = "@author=" + authorQuery;
            const event = new Event('change');
            authorInput.dispatchEvent(event);
        }  
    }, 100);
}

const collapseAll = () => {
    document.querySelectorAll(".home .research-entries li a")
        .forEach(element => element.innerHTML = "Show more");
    document.querySelectorAll(".home .research-entries li .description")
        .forEach(element => element.classList.add("crop"));
}

const showResearch = (name) => {
    const researchElement = Array.from(document.querySelectorAll(".home .research-entries li"))
          .filter(element => element.children[0].innerText === name)[0];
    const showMoreButton = researchElement.querySelector("a");
    const textBeforeCollapse = showMoreButton.innerHTML;

    collapseAll();

    if (textBeforeCollapse === "Show more") {
        researchElement.children[1].classList.remove("crop");
        showMoreButton.innerHTML = "Show less";
    } else {
        researchElement.children[1].classList.add("crop");
        showMoreButton.innerHTML = "Show more";
    }
};

