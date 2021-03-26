// If there aren't any filters active, hide the filter container:

function renderFilterContainer() {
  if (filterContainer.childElementCount > 0) {
    searchBar.style.display = "flex";
  } else {
    searchBar.style.display = "none";
  }
}
