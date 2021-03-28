

const allTags = document.querySelectorAll(".tag");
const searchBar = document.querySelector(".header-search-bar");
const filterContainer = document.querySelector(".filters-container");
const clearButton = document.querySelector(".clear-button");

let filters = [];

renderFilterContainer();

// Add the clicked tag to the filter container
allTags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    //  When each tag is clicked, the tagValue is added to the filters array:
    let tagValue = e.target.dataset.info;
    filters.push(tagValue);

    // Each element in the filters array consists of a button:
    // The css will stick the 'cross' favicon '::after' the button text.
    const tagButton = document.createElement("button");
    tagButton.innerHTML = tagValue;
    tagButton.classList.add("deleteButton");

    // Display the content of the tag button in the filterContainer div:
    filterContainer.append(tagButton);

    // console.log(tagValue);
    // console.log(`type of tag value: ${typeof tagValue}`);
    // console.log(filters);
    renderFilterContainer();
  });
});

// Clicking clear, clears the filters container
clearButton.addEventListener("click", () => {
  filterContainer.innerHTML = "";
  renderFilterContainer();
});

// Original approach: targeting each invidual type of tag. Incredibly inefficient and slow.
// allTagsJavaScript.forEach((tag) => {
//   tag.addEventListener("click", (e) => {
//     let tagValue = e.target.dataset.info;
//     filterSpan.innerHTML = tagValue;

//     filterContainer.appendChild(filterSpan);

//     console.log(`tag: ${tagValue}`);
//     console.log(`type of tag value: ${typeof tagValue}`);
//   });
// });
