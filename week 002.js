

function add(a,b) {
return a+b
}

function multiply(a,b) {
    return a*b
}

function format(s) {
return "£"+s
}

const startingValue = 2

// Why can this code be seen as bad practice? Comment your answer.
//alot of lines also alot of changes on the variable.
let badCode = startingValue
badCode =add(badCode,10)
badCode =multiply(badCode,2)
badCode =format(badCode)
/* BETTER PRACTICE */

let goodCode = format(multiply(add(startingValue,10),2))

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('add function - case 1 works', add(1,3) === 4)
test('add function - case 2 works', add(2.4,5.3) === 7.7)
test('multiply function works', multiply(2,3) === 6)
test('format function works', format(16) === "£16")
test('badCode variable correctly assigned', badCode === "£24")
test('goodCode variable correctly assigned', goodCode === "£24")
