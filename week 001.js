

function convertToUSD(euro) {
    return euro*1.4;
}



function convertToBRL(euro) 
{
return euro*5.7;

}

test('convertToBRL function works', convertToBRL(30) === 172.71)
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

test('convertToUSD function works', convertToUSD(32) === 44.8)
test('convertToBRL function works', convertToBRL(30) === 172.71)
