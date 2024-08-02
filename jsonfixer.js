const jsonFix = require('json-fixer');
const fs = require('fs');

const inputFilePath = 'invalidjson.json'; // Adjust the file path as per your actual file location

try {
  // Read the potentially malformed JSON from file
  const jsonContent = fs.readFileSync(inputFilePath, 'utf-8');

  // Fix the JSON and check if it was changed
  const { data, changed } = jsonFix(jsonContent);

  if (changed) {
    // Optional: Write the fixed JSON back to a file
    const outputFilePath = 'fixed_data.json'; // Adjust the output file path as per your needs
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
    console.log(`Fixed JSON written to ${outputFilePath}`);
  } else {
    console.log('No changes needed in JSON.');
  }
} catch (err) {
  console.error('Error reading or fixing JSON:', err);
}
