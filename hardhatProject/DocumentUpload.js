const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("DocumentUpload");
  const upload = await Upload.deploy();

  await upload.deployed;

  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
