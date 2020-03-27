document.querySelector("#menu-button").onclick = () => {
    // toggle menu visibility on mobile
    document.querySelector("#nav-items").classList.toggle("hidden");
};

const updateURL = (entry) => {
    const link = entry.querySelector("a");
    if(link) {
        link.href = link.querySelector(".url").innerHTML;
        console.log(link);
    }
};

// If on research page, handle author filtering
if (window.location.pathname.split("/")[1] === "publications") {
    // if (authorQuery !== null) {
    //     authorInput.value = authorQuery;
    //     handleOutput();
    // }
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

