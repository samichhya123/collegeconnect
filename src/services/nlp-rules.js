const { NlpManager } = require("node-nlp");
// Initialize NLP Manager
const manager = new NlpManager({ languages: ["en"] });
// Add Rules/Intents
manager.addDocument(
  "en",
  "I want to study %course% in %location%",
  "find.college"
);
manager.addDocument(
  "en",
  "Looking for %course% courses in %location%",
  "find.college"
);
// Train the model
(async () => {
  await manager.train();
  manager.save();
})();
// Extract Entities from User Input
async function processInput(input) {
  const response = await manager.process("en", input);
  return response.entities.reduce((acc, entity) => {
    acc[entity.entity] = entity.option;
    return acc;
  }, {});
}
// Predefined Rules
const rules = [
  {
    course: "engineering",
    location: "Kathmandu",
    recommendations: [
      "Tribhuvan University – Offers various engineering programs.",
      "Kathmandu University – Known for its strong engineering faculty.",
      "Nepal Engineering College – Provides specialized courses in engineering.",
    ],
  },
];
// Match User Input to Rules
function matchRules(entities) {
  return rules.find(
    (rule) =>
      (!rule.course || rule.course === entities.course) &&
      (!rule.location || rule.location === entities.location)
  );
}
module.exports = { processInput, matchRules };
