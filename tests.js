// TEST CASES FOR convertIntegerToRoman(num) METHOD

  // 1. Valid input cases

test("convertIntegerToRoman - Valid input cases", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman(58), {value: "LVIII", message: '', result: true}, "TC-5");
  assert.propEqual(convertIntegerToRoman(1990), {value: "MCMXC", message: '', result: true}, "TC-6");
  assert.propEqual(convertIntegerToRoman(2008), {value: "MMVIII", message: '', result: true}, "TC-7");
  assert.propEqual(convertIntegerToRoman(99), {value: "XCIX", message: '', result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman(47), {value: "XLVII", message: '', result: true}, "TC-9");
  assert.propEqual(convertIntegerToRoman(3888), {value: "MMMDCCCLXXXVIII", message: '', result: true}, "TC-10");
});

  // 2. Invalid input cases

test("convertIntegerToRoman - Invalid out of range input values", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-2");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-11");
  assert.propEqual(convertIntegerToRoman(5000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-12");
});

test("convertIntegerToRoman - Invalid integer input values", function(assert) {
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-3");
  assert.propEqual(convertIntegerToRoman(-100), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-13");
});

test("convertIntegerToRoman - Invalid float input values", function(assert) {
  assert.propEqual(convertIntegerToRoman(0.5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-19");
  assert.propEqual(convertIntegerToRoman(3.14159), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-20");
});

test("convertIntegerToRoman - Other invalid input values", function(assert) {
  assert.propEqual(convertIntegerToRoman("one"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-14");
  assert.propEqual(convertIntegerToRoman("123abc"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-15");
  assert.propEqual(convertIntegerToRoman(" "), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-16");
  assert.propEqual(convertIntegerToRoman(null), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-17");
  assert.propEqual(convertIntegerToRoman(undefined), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-18");
});


// TEST CASES FOR convertRomanToInteger(roman) METHOD

  // 1. Valid input cases

test("convertRomanToInteger - Valid input cases", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-21");
  assert.propEqual(convertRomanToInteger("LVIII"), {value: 58, message: '', result: true}, "TC-24");
  assert.propEqual(convertRomanToInteger("MCMXC"), {value: 1990, message: '', result: true}, "TC-25");
  assert.propEqual(convertRomanToInteger("MMVIII"), {value: 2008, message: '', result: true}, "TC-26");
  assert.propEqual(convertRomanToInteger("XCIX"), {value: 99, message: '', result: true}, "TC-27");
  assert.propEqual(convertRomanToInteger("XLVII"), {value: 47, message: '', result: true}, "TC-28");
  assert.propEqual(convertRomanToInteger("MMMDCCCLXXXVIII"), {value: 3888, message: '', result: true}, "TC-29");
  assert.propEqual(convertRomanToInteger("iX"), {value: 9, message: '', result: true}, "TC-42"); // Lowercase roman is also valid option
});

  // 2. Invalid input cases

test("convertRomanToInteger - Invalid roman combinations", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-23");
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-30");
  assert.propEqual(convertRomanToInteger("VV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-31");
  assert.propEqual(convertRomanToInteger("XXXX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-32");
  assert.propEqual(convertRomanToInteger("LL"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-33");
  assert.propEqual(convertRomanToInteger("CCCC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-34");
  assert.propEqual(convertRomanToInteger("DD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-35");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-36");
  assert.propEqual(convertRomanToInteger("IC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-37");
  assert.propEqual(convertRomanToInteger("IM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-38");
  assert.propEqual(convertRomanToInteger("XM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-39");
  assert.propEqual(convertRomanToInteger("LC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-40");
  assert.propEqual(convertRomanToInteger("DM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-41");
  assert.propEqual(convertRomanToInteger("Ixi"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-43"); // Lowercase allowed but not that combination
});

test("convertRomanToInteger - Invalid chars for roman numbers", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-22");
  assert.propEqual(convertRomanToInteger("$X"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-44");
  assert.propEqual(convertRomanToInteger("WXR"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-45");
  assert.propEqual(convertRomanToInteger("IRI"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-46");
  assert.propEqual(convertRomanToInteger("*%#"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-47");
});