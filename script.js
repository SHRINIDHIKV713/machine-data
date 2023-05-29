$(document).ready(function () {
  // AJAX request to fetch the machine data
  $.ajax({
    url: "products.json", // Replace 'machines.json' with the path to your JSON file
    dataType: "json",
    success: function (data) {
      // Iterate over each machine object and create a card
      $.each(data, function (index, machine) {
        var statusColor = machine.STATUS === "RUNNING" ? "success" : "danger";
        var cardHtml = `
            <div class="product">
            <div class="card-header bg-${statusColor}">
            <div class="col-12">
            <div class="row">
            <div class="col-8 text-start">
              <h4>Machine: ${machine.MACHINE}</h4>
</div>
<div class="col-4 text-end">
<button class="btn-${statusColor} mt-1 btn-success">${machine.STATUS}</button>
</div>
</div>
              </div>
              </div>
              <div class="col-12">
              <div class="row">
              <div class="col-9">
                <p >Performance:</p>
              </div>
              <div class="col-3">
              <p >${machine.PERFORMANCE}</p>
              </div>
            </div>
            </div>
          <hr>
        
          <div class="col-12">
            <p>${
              machine.STATUS === "RUNNING"
                ? `
                <div class="row">
              <div class="col-7">
                <p> Running Since:</p>
              </div>
              <div class="col-5">
              <p>${machine["RUNNING SINCE"]}</p>
              </div>
              
            `: `
            <div class="col-12">
            <div class="row">
              <div class="col-7">
                <p>Stopped Since:</p>
              </div>
              <div class="col-5">
              <p >${machine["STOPPED SINCE"]}</p>
              </div>
              </div>
              </div>
            <p>
            `
            }
            </p>
          </div>
      <hr>
      <div class="col-12">
      <div class="row">
      <div class="col-9">
        <p>Parts Produced:</p>
  </div>
  <div class="col-3">
  <p>${machine["PARTS PRODUCED"]}</p>
  </div>
</div>
</div>

          `;
        $("#products").append(cardHtml);
      });
    },
    error: function () {
      alert("Failed to fetch machine data.");
    },
  });
});
