// The indiviudal tag buttons variable assignments:
const allTagsFrontend = document.querySelectorAll("[data-info='Frontend']");
const allTagsBackend = document.querySelectorAll("[data-info='Backend']");
const allTagsFullstack = document.querySelectorAll("[data-info='Fullstack']");
const allTagsJunior = document.querySelectorAll("[data-info='Junior']");
const allTagsMidweight = document.querySelectorAll("[data-info='Midweight']");
const allTagsSenior = document.querySelectorAll("[data-info='Senior']");
const allTagsHTML = document.querySelectorAll("[data-info='HTML']");
const allTagsCSS = document.querySelectorAll("[data-info='CSS']");
const allTagsJavaScript = document.querySelectorAll("[data-info='JavaScript']");
const allTagsPython = document.querySelectorAll("[data-info='Python']");
const allTagsRuby = document.querySelectorAll("[data-info='Ruby']");
const allTagsReact = document.querySelectorAll("[data-info='React']");
const allTagsSASS = document.querySelectorAll("[data-info='SASS']");
const allTagsVue = document.querySelectorAll("[data-info='Vue']");
const allTagsDjango = document.querySelectorAll("[data-info='Django']");
const allTagsRoR = document.querySelectorAll("[data-info='RoR']");
// All tags:
const allTags = document.querySelectorAll(".tag");

// The filters div:
const filterContainer = document.querySelector(".filters-container");
// The filters container will be an array of the selected filters:
let filters = [];

allTags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    //  When each tag is clicked, the tagValue is added to the filters array:
    let tagValue = e.target.dataset.info;
    filters.push(tagValue);

    // Each element in the filters array consists of a div containing a span and a 'x' button:
    const tagDiv = document.createElement("div");
    tagDiv.classList.add("tagFilter");
    const tagSpan = document.createElement("span");
    tagSpan.innerHTML = tagValue;
    tagSpan.classList.add("tagValue");
    const tagButton = document.createElement("button");
    tagButton.innerHTML = "X";
    tagButton.classList.add("deleteButton");
    tagDiv.append(tagSpan, tagButton);

    // Display the content of the tag div in the filterContainer div:
    filterContainer.appendChild(tagDiv);

    console.log(tagValue);
    console.log(`type of tag value: ${typeof tagValue}`);
    console.log(filters);
    // console.log(`type of tag value: ${typeof filters}`);
  });
});

// Original approach: targeting each invidual type of tag.
// allTagsJavaScript.forEach((tag) => {
//   tag.addEventListener("click", (e) => {
//     let tagValue = e.target.dataset.info;
//     filterSpan.innerHTML = tagValue;

//     filterContainer.appendChild(filterSpan);

//     console.log(`tag: ${tagValue}`);
//     console.log(`type of tag value: ${typeof tagValue}`);
//   });
// });
