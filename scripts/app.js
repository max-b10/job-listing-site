// The indiviudal tag buttons variable assignments:
// const allTagsFrontend = document.querySelectorAll("[data-info='Frontend']");
// const allTagsBackend = document.querySelectorAll("[data-info='Backend']");
// const allTagsFullstack = document.querySelectorAll("[data-info='Fullstack']");
// const allTagsJunior = document.querySelectorAll("[data-info='Junior']");
// const allTagsMidweight = document.querySelectorAll("[data-info='Midweight']");
// const allTagsSenior = document.querySelectorAll("[data-info='Senior']");
// const allTagsHTML = document.querySelectorAll("[data-info='HTML']");
// const allTagsCSS = document.querySelectorAll("[data-info='CSS']");
// const allTagsJavaScript = document.querySelectorAll("[data-info='JavaScript']");
// const allTagsPython = document.querySelectorAll("[data-info='Python']");
// const allTagsRuby = document.querySelectorAll("[data-info='Ruby']");
// const allTagsReact = document.querySelectorAll("[data-info='React']");
// const allTagsSASS = document.querySelectorAll("[data-info='SASS']");
// const allTagsVue = document.querySelectorAll("[data-info='Vue']");
// const allTagsDjango = document.querySelectorAll("[data-info='Django']");
// const allTagsRoR = document.querySelectorAll("[data-info='RoR']");

const allTags = document.querySelectorAll(".tag");
const searchBar = document.querySelector(".header-search-bar");
const filterContainer = document.querySelector(".filters-container");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelectorAll(".deleteButton");
const itemsContainer = document.querySelector(".items-container");
let filters = [];
renderFilterContainer();

// Add the clicked tag to the filter container
allTags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    //  When each tag is clicked, the tagValue is added to the filters array:
    let tagValue = e.target.dataset.info;

    // Each element in the filters array consists of a button:
    // The css will stick the 'cross' favicon '::after' the button text.
    const tagButton = document.createElement("button");
    tagButton.innerHTML = tagValue;
    tagButton.classList.add("deleteButton");

    // If tag isn't selected already, add it to filters array and container:
    if (!filters.includes(tagValue)) {
      filters.push(tagValue);
      filterContainer.append(tagButton);
    } else {
      alert("Filter already selected");
    }

    // Remove filter from filter container and filters array when it's clicked:
    tagButton.addEventListener("click", (e) => {
      // Remove from filter container:
      const tagValue = e.target;
      filterContainer.removeChild(tagValue);

      // Remove from filters array:
      const tagIndex = filters.indexOf(tagValue);
      filters.splice(tagIndex, 1);

      renderFilterContainer();
    });

    let eachItem = document.querySelectorAll(".item");
    eachItem = [...eachItem];
    // console.log(eachItem);

    const tagDataInfo = tag.getAttribute("data-info");
    // console.log(tagDataInfo);

    eachItem.forEach((item) => {
      const tagsDiv = item.lastElementChild;
      const tagsDivChildren = tagsDiv.children;

      for (let i = 0; i < tagsDivChildren.length; i++) {
        const individualTags = tagsDivChildren[i].innerHTML;
        // console.log(individualTags);
        if (tagDataInfo === tagButton.innerHTML) {
          item.style.display = "block";
          console.log(tagDataInfo);
          // console.log(typeof tagDataInfo);
        } else {
          item.style.display = "none";
        }
      }

      // const tagButton = tags.lastElementChild;
      // console.log(tagButton);
      // const tagInfo = tagButton.innerHTML;
      // console.log(tagInfo);
      // let everyTag = document.querySelectorAll(".tag");
      // everyTag = [...everyTag];
      // console.log(everyTag);

      // console.log(filters);
      renderFilterContainer();
    });
    // console.log(tagButton);

    renderFilterContainer();
  });

  // Clicking clear, clears the filters container:
  clearButton.addEventListener("click", () => {
    filterContainer.innerHTML = "";
    filters = [];
    renderFilterContainer();
  });
});
