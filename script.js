function calculateFlames(name1, name2) {
    // Convert names to lowercase and remove spaces
    const processedName1 = name1.toLowerCase().replace(/\s/g, "");
    const processedName2 = name2.toLowerCase().replace(/\s/g, "");

    // Create a map to count the occurrences of each letter in both names
    const letterCount = {};
    (processedName1 + processedName2).split("").forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    // Count the number of common letters
    const commonLetters = Object.values(letterCount).filter(count => count % 2 === 1).length;

    // Define the FLAMES relationship options
    const relationships = ["Friendship", "Love", "Affection", "Marriage", "Enmity", "Sister"];

    // Calculate the index to determine the relationship
    const index = commonLetters % relationships.length;

    // Return the result
    return relationships[index - 1];
}

function calculateRelationship() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    // Check if names are provided
    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    // Perform the FLAMES calculation
    const result = calculateFlames(name1, name2);

    // Display the result
    document.getElementById("result").innerText = `The relationship between ${name1} and ${name2} is: ${result}`;
}
