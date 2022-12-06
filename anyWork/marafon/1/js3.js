"use strict";

(function () {
  let updateButton = document.getElementById("updateDetails");
  let cancelButton = document.getElementById("cancel");
  let favDialog = document.getElementById("favDialog");

  // Update button opens a modal dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
})();
