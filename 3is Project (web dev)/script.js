$(document).ready(function() {
  // Fetch reports from the database
  $.ajax({
      type: "GET",
      url: "fetch_reports.php", // Path to PHP script that fetches reports from the database
      dataType: "json",
      success: function(data) {
          // Iterate over each report and generate HTML content
          data.forEach(function(report) {
              var itemName = report.item_name;
              var dateFound = report.item_found_date;
              var name = report.name;
              var grade = report.grade;
              var section = report.section;
              var email = report.email;
              var itemDescription = report.item_description;
              var imageUrl = report.image_path;

              // Display found items only
              if (section === "Found") {
                  var htmlContent = `
                      <div class="collapsible">
                          <div class="collapsible-content">
                              <h2 for="section" class="CCheader">
                                  <div> Item: ${itemName} </div>
                                  <div> Date Found: ${dateFound} </div>
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

                  // Append the HTML content to the input-section
                  $(".input-section").append(htmlContent);
              }
          });
      },
      error: function(xhr, status, error) {
          console.error(xhr.responseText);
      }
  });
});
