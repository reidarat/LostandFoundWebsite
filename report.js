function updateTertiaryCategory() {
    var gradeValue = document.getElementById("grade").value;
    var sectionGroup = document.getElementById("sectionGroup");
    var sectionselect = document.getElementById("section");
    
    // Clear existing options
    sectionselect.innerHTML = '';
    
    // Show or hide the tertiary category group based on the selection in the Grade dropdown
    if (gradeValue !== "") {
        sectionGroup.style.display = "block";
        // Add options for each grade level
        switch (gradeValue) {
            case "CASA":
                addOptionsToSectionCategory(["CASA1", "CASA2"]);
                break;
            case "1":
                addOptionsToSectionCategory(["Matthew", "Mark"]);
                break;
            case "2":
                addOptionsToSectionCategory(["Acts"]);
                break;
            case "3":
                addOptionsToSectionCategory(["Ephesians"]);
                break;
            case "4":
                addOptionsToSectionCategory(["Thessalonians"]);
                break;
            case "5":
                addOptionsToSectionCategory(["Philemon"]);
                break;
            case "6":
                addOptionsToSectionCategory(["Peter"]);
                break;
            case "7":
                addOptionsToSectionCategory(["Genesis", "Exodus"]);
                break;
            case "8":
                addOptionsToSectionCategory(["Leviticus", "Daniel"]);
                break;
            case "9":
                addOptionsToSectionCategory(["Jeremiah", "Nehemiah"]);
                break;
            case "10":
                addOptionsToSectionCategory(["Psalms", "Proverbs"]);
                break;
            case "11":
                addOptionsToSectionCategory(["Nazareth", "Gethsemane", "Bethlehem"]);
                break;
            case "12":
                addOptionsToSectionCategory(["Jordan", "Galilee"]);
                break;
            default:
                sectionGroup.style.display = "none";
                break;
        }
    } else {
        sectionGroup.style.display = "none";
    }
}

function addOptionsToSectionCategory(options) {
    var sectionselect = document.getElementById("section");
    options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        sectionselect.appendChild(optionElement);
    });
}

document.getElementById("toggleButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("userForm").classList.toggle("active");
});

function toggleForm() {
    var formContainer = document.getElementById("formContainer");
    var formContainer2 = document.getElementById("formContainer2");
    formContainer.classList.toggle("visible");
    formContainer2.classList.remove("visible");
    document.getElementById("toggleButton").classList.toggle("active");
    document.getElementById("toggleButton2").classList.remove("active");
}

function toggleForm2() {
    var formContainer = document.getElementById("formContainer");
    var formContainer2 = document.getElementById("formContainer2");
    formContainer2.classList.toggle("visible");
    formContainer.classList.remove("visible");
    document.getElementById("toggleButton2").classList.toggle("active");
    document.getElementById("toggleButton").classList.remove("active");
}
