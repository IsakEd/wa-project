function yyyymmdd(date) {
  // Step 2: Get the individual date components
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var day = String(date.getDate()).padStart(2, "0");

  // Step 3: Assemble the formatted date string
  return year + "-" + month + "-" + day;
}
export default yyyymmdd;
