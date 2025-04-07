let scores = [35, 78, 92, 49, 20, 88, 95, 67, 39, 52];
let passed = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;
  }
  if (scores[i] > 90) {
    scores[i] = 90;
  }
  if (scores[i] >= 50) {
    passed++;
  }
}

console.log("Adjusted Scores:", scores);
console.log("Number of students who passed:", passed);
