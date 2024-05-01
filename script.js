document.addEventListener("DOMContentLoaded", function() {
    // Function to handle collapsible buttons
    function handleCollapsible() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  
    // Apply event listener to existing collapsible buttons
    const coll = document.querySelectorAll(".collapsible");
    coll.forEach((item) => {
      item.addEventListener("click", handleCollapsible);
    });
  
    // Apply event listener to dynamically added collapsible buttons
    document.body.addEventListener("click", function(event) {
      if (event.target.closest(".collapsible") && !event.target.closest(".image-container")) {
        handleCollapsible.call(event.target.closest(".collapsible"));
      }
    });
  });
  
  function addInfoContainer() {
    const mainContent = document.querySelector('.main-content');
  
    // Gather input values
    const name = document.getElementById('nameInput').value;
    const grade = document.getElementById('gradeInput').value;
    const section = document.getElementById('sectionInput').value;
    const email = document.getElementById('emailInput').value;
    const itemName = document.getElementById('itemNameInput').value;
    const dateFound = document.getElementById('dateFoundInput').value;
    const itemDescription = document.getElementById('descriptionInput').value;
  
    // Get the uploaded image file
    const imageFile = document.getElementById('imageInput').files[0];
    let imageUrl = ''; // Default empty URL
  
    // If an image file is uploaded, create a URL for it
    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }
  
    // Create new info container
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infocontainer');
  
    infoContainer.innerHTML = `
      <div class="collapsible">
          <div class="collapsible-content">
              <h2 for="section" class= "CCheader">
              <div> Item:${itemName} </div>
              <div> ${dateFound} </div>
              </h2>
          </div>
      </div>
      <div class="infobox" style="display:none;">
        <div class="secinfo">
          <div class="boxsec1">
              <div class="boxinside1">
                <div class="boxvalues">
                  <div class="boxvalues1">
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Grade:</strong> ${grade}</p>
                      <p><strong>Section:</strong> ${section}</p> 
                  </div> 
                  <div class="boxvalues2">
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Item Name:</strong> ${itemName}</p>
                    <p><strong>Date Found:</strong> ${dateFound}</p>
                  </div>  
                </div>   
                <div class="descriptionbox">
                  <p><strong>Item Description:</strong> ${itemDescription} </p>
                </div>          
              </div>
              <div class="boxinside2">
                <img src="${imageUrl}" alt="Uploaded Image" class="itemimage">
              </div> 
          </div>
        </div>
    </div>
    `;
  
    mainContent.appendChild(infoContainer);
  
    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('gradeInput').value = '';
    document.getElementById('sectionInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('itemNameInput').value = '';
    document.getElementById('dateFoundInput').value = '';
    document.getElementById('descriptionInput').value = '';
    document.getElementById('imageInput').value = ''; // Clear file input value
  }