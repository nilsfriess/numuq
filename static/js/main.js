document.querySelector("#menu-button").onclick = () => {
  // toggle menu visibility on mobile
  document.querySelector("#nav-items").classList.toggle("hidden");
};

// If on research page, handle author filtering
if (window.location.pathname.split("/")[1] === "research") {
  // extract author from url params (used in personal pages to link to their publications)
  const urlParams = new URLSearchParams(window.location.search);
  const authorQuery = urlParams.get("author");

  // Hide all warnings by default
  document
    .querySelectorAll(".research .warning")
    .forEach(div => (div.style.display = "none"));

  let filterString = "";
  const authorInput = document.querySelector("#authorinput");
  const publications = Array.from(document.querySelectorAll(".research li"));

  const handleOutput = () => {
    publications.forEach(pub => (pub.style.display = "block"));
    filterString = authorInput.value.toLowerCase().trim();
    if (filterString === "") {
      document
        .querySelectorAll(".research .warning")
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
      document.querySelector(".research .preprints .warning").style.display =
        "block";
    else
      document.querySelector(".research .preprints .warning").style.display =
        "none";

    if (journals.length == 0)
      document.querySelector(".research .journals .warning").style.display =
        "block";
    else
      document.querySelector(".research .journals .warning").style.display =
        "none";

    if (books.length == 0)
      document.querySelector(".research .books .warning").style.display =
        "block";
    else
      document.querySelector(".research .books .warning").style.display =
        "none";

    if (proceedings.length == 0)
      document.querySelector(".research .proceedings .warning").style.display =
        "block";
    else
      document.querySelector(".research .proceedings .warning").style.display =
        "none";

    if (theses.length == 0)
      document.querySelector(".research .theses .warning").style.display =
        "block";
    else
      document.querySelector(".research .theses .warning").style.display =
        "none";

    if (other.length == 0)
      document.querySelector(".research .other .warning").style.display =
        "block";
    else
      document.querySelector(".research .other .warning").style.display =
        "none";
  };

  if (authorQuery !== null) {
    authorInput.value = authorQuery;
    handleOutput();
  }

  authorInput.addEventListener("keyup", handleOutput);
}
