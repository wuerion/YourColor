import {
  runAllTests,
  getTestReport,
  runSingleTest,
} from "./colorimetryTests.js";

console.log("🧪 EJECUTANDO TESTS DE COLORIMETRÍA\n");
console.log("=".repeat(60));

// Primero ejecuta un test individual para ver qué retorna
console.log("\n🔍 DEBUG - Test 1 detallado:\n");
const debugTest = runSingleTest(1);
console.log("Input:", debugTest.input);
console.log("Esperado:", debugTest.expectedResult);
console.log("Actual:", debugTest.actualResult);
console.log("Result details:", debugTest.resultDetails);
console.log("\n" + "=".repeat(60));

// Reporte general
const report = getTestReport();
console.log(`\n📊 REPORTE GENERAL`);
console.log(`Total de tests: ${report.totalTests}`);
console.log(`✅ Pasados: ${report.passedTests}`);
console.log(`❌ Fallidos: ${report.failedTests}`);
console.log(`📈 Éxito: ${report.successPercentage}\n`);

// Detalles de cada test
console.log("=".repeat(60));
console.log("📋 DETALLES DE TESTS\n");

report.results.forEach((test) => {
  const icon = test.passed ? "✅" : "❌";
  console.log(`${icon} Test ${test.testId}: ${test.testName}`);
  console.log(`   Esperado: ${test.expectedResult}`);
  console.log(`   Actual: ${test.actualResult}`);
  if (!test.passed) {
    console.log(`   ⚠️  MISMATCH DETECTADO`);
  }
  console.log();
});

console.log("=".repeat(60));
