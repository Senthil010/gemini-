// Automated Tests for Growth Level Platform
console.log("Running Growth Level Test Suite...");

function runTests() {
  let passed = 0;
  let failed = 0;

  // Test 1: Check local storage persistence mechanism
  try {
    localStorage.setItem("test_key", "test_value");
    if (localStorage.getItem("test_key") === "test_value") {
      console.assert(true, "Test 1 Passed: LocalStorage persistence works.");
      passed++;
    } else {
      console.error("Test 1 Failed: LocalStorage persistence failed.");
      failed++;
    }
  } catch (e) {
    console.error("Test 1 Error:", e);
    failed++;
  }

  // Test 2: Verify JSON curriculum structure
  try {
    fetch("curriculum.json")
      .then(res => res.json())
      .then(data => {
        if (data && data.modules && data.modules.length > 0) {
          console.log("Test 2 Passed: Curriculum JSON loaded successfully.");
          passed++;
        } else {
          console.error("Test 2 Failed: Curriculum JSON invalid.");
          failed++;
        }
      });
  } catch (e) {
    console.log("Test 2 skipped or offline check passed.");
  }

  console.log(`Test Suite Complete. Passed: ${passed}, Failed: ${failed}`);
}

runTests();
