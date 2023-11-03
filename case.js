let grade = 85;
let result;
switch (grade) {
    case 85:
        result = "A (Excellent)";
        break;
    case 75:
        result = "B (Average)";
        break;
    case 50:
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);