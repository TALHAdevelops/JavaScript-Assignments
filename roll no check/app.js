let Class_RollNo = [231,3213123,2223,4534,5446,6456,7567,8678,9789,1090];
let rollNo = parseInt(prompt("Enter your roll number (3213123):"));
let name = prompt("Enter your name:");
function markPresent(name, rollNo) {
  if (Class_RollNo.includes(rollNo)) {
    alert(`${name} is marked present.`);
  } else {
    alert(`${name} is not in the class.`);
  }
}
markPresent(name, rollNo);
