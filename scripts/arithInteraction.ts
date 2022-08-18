import { ethers } from "hardhat";

async function main() {
  const DEvaddress = "0x0C5D7fbB6409a3CA7E446d829D9e186c965e547E";

  const Dev = await ethers.getContractAt("arithInterface", DEvaddress);
//   const cont = await ethers.getContractFactory(DEvaddress);


  const getexponet = await Dev.getExponent(5, 6);
  console.log("exponential result ----", getexponet);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});