const { ethers } = require("hardhat");

async function main() {
  const Test = await ethers.getContractFactory(
    "Test"
  );
  const test = await Test.deploy();
  await test.deployed();

  console.log("Test deployed to: ", test.address);

  const x = await test.saveName("BlackAdam");
  const y = await x.wait();
  console.log("Loggg: ", y);

  const a = await test.getName();
  console.log("DEEE: ", a);
  
  

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
