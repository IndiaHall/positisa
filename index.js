function getEnvironmentVariable(variableName) {
  return process.env[variableName];
}

// 示例用法
const nodeEnv = getEnvironmentVariable('NODE_ENV');
console.log("Node.js 环境变量 NODE_ENV:", nodeEnv);

function delayExecution(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// 示例用法
async function exampleDelayedExecution() {
  console.log("开始延迟执行");
  await delayExecution(2000);
  console.log("延迟执行结束");
}

exampleDelayedExecution();

const fs = require('fs');