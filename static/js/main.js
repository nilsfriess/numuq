document.querySelector("#menu-button").onclick = () => {
    // toggle menu visibility on mobile
    document.querySelector("#nav-items").classList.toggle("hidden");
};

// If on research page, handle author filtering
if (window.location.pathname.split("/")[1] === "publications") {
    // extract author from url params (used in personal pages to link to their publications) 
    const urlParams = new URLSearchParams(window.location.search);
    const authorQuery = urlParams.get("author");

    // Hide all warnings by default
    document
        .querySelectorAll(".publications .warning")
        .forEach(div => (div.style.display = "none"));

    let filterString = "";
    const authorInput = document.querySelector("#authorinput");
    const publications = Array.from(document.querySelectorAll(".publications li"));

    const handleOutput = () => {
        publications.forEach(pub => (pub.style.display = "block"));
        filterString = authorInput.value.toLowerCase().trim();
        if (filterString === "") {
            document
                .querySelectorAll(".publications .warning")
                .forEach(div => (div.style.display = "none"));
            return;
        }

        const filteredPubs = publications.filter(
            item => !item.dataset.authors.toLowerCase().includes(filterString)
        );

        const nonFilteredPubs = publications.filter(item =>
                                                    item.dataset.authors.toLowerCase().includes(filterString)
                                                   );

        filteredPubs.forEach(pub => (pub.style.display = "none"));
        
        const preprints = nonFilteredPubs.filter(item => {
            return item.dataset.type === "preprint";
        });
        
        const journals = nonFilteredPubs.filter(item => {
            return item.dataset.type === "journal";
        });

        const books = nonFilteredPubs.filter(item => {
            return item.dataset.type === "book";
        });

        const proceedings = nonFilteredPubs.filter(item => {
            return item.dataset.type === "proceedings";
        });

        const theses = nonFilteredPubs.filter(item => {
            return item.dataset.type === "thesis";
        });

        const other = nonFilteredPubs.filter(item => {
            return item.dataset.type === "other";
        });

        if (preprints.length == 0)
            document.querySelector(".publications .preprints .warning").style.display =
            "block";
        else
            document.querySelector(".publications .preprints .warning").style.display =
            "none";

        if (journals.length == 0)
            document.querySelector(".publications .journals .warning").style.display =
            "block";
        else
            document.querySelector(".publications .journals .warning").style.display =
            "none";

        if (books.length == 0)
            document.querySelector(".publications .books .warning").style.display =
            "block";
        else
            document.querySelector(".publications .books .warning").style.display =
            "none";

        if (proceedings.length == 0)
            document.querySelector(".publications .proceedings .warning").style.display =
            "block";
        else
            document.querySelector(".publications .proceedings .warning").style.display =
            "none";

        if (theses.length == 0)
            document.querySelector(".publications .theses .warning").style.display =
            "block";
        else
            document.querySelector(".publications .theses .warning").style.display =
            "none";

        if (other.length == 0)
            document.querySelector(".publications .other .warning").style.display =
            "block";
        else
            document.querySelector(".publications .other .warning").style.display =
            "none";
    };

    if (authorQuery !== null) {
        authorInput.value = authorQuery;
        handleOutput();
    }

    authorInput.addEventListener("keyup", handleOutput);
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

