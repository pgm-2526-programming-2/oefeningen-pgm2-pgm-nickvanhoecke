const {generateRandomData} = require("./data.js")
const {processingLogic, calculateConfusingStatistics, calculateComplexOperations} = require("./proccesing.js")
const {showDataFormatting, showConfusingStatistics, showComplexOperations} = require("./reporting.js")

const randomData = generateRandomData();

const processedData = processingLogic(randomData);

showDataFormatting(processedData);

const confusingStatsData = calculateConfusingStatistics(processedData);
showConfusingStatistics(confusingStatsData.highImportanceCount, confusingStatsData.lowImportanceCount, processedData);


const complexOperationData = calculateComplexOperations(processedData);
showComplexOperations(complexOperationData.highComplexityCount, complexOperationData.lowComplexityCount, processedData);