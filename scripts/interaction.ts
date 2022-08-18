import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
    //address of the usdt, dai and uniswap router account
    const USDTAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; //0xdAC17F958D2ee523a2206206994597C13D831ec7
    const WETHAdress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    //amount out of 
    // const amountOut = ethers.utils.parseUnits("1900", "18");
    //const amoutnIn = ethers.utils.parseUnits("2000", "18");
    const amountOut = 2000;
    
    //impersonationg of a usdt holder account to be able to use the private
    //key to approve transaction
    const USDTHolder = "0xfbc9d695d419cdf7eb46df979353f5b394227976";
    await helpers.impersonateAccount(USDTHolder);
    const impersonatedSigner = await ethers.getSigner(USDTHolder);

    //
    const USDT = await ethers.getContractAt("IERC20", USDTAddress, impersonatedSigner);
    const weth = await ethers.getContractAt("IERC20", WETHAdress);

    //first function swapTokensForExactTokens
    // await ROUTER.swapTokensForExactTokens( amountOut, 
    //   amoutnIn, 
    //   [USDTAddress, DAIAddress], 
    //   USDTHolder,
    //   Math.floor(Date.now()/1000) + (60*10));

    //const ROUTER = await ethers.getContractAt("IUniswap2", UNIRouter, impersonatedSigner);

    //second function swapExactTokensForETH
    const ROUTER = await ethers.getContractAt("IUniswap", UNIRouter, impersonatedSigner);

    //
    await USDT.approve(UNIRouter, amountOut);

    
    //Getting user/impersonator balanace before transaction
    const usdtBal = await USDT.balanceOf(USDTHolder);
    const wethBal = await weth.balanceOf(USDTHolder);

    console.log("balance before swap", usdtBal, wethBal);
    
    //usinf uniswap router to swap tokens to perform the swap is done
    await ROUTER.swapExactTokensForETH( 1, 
        2000, 
        [USDTAddress, WETHAdress], 
        USDTHolder,
        Math.floor(Date.now()/1000) + (60*10));


    // new approve 
    

    
    //getting user/impersonator balance after swap is done
    const usdtBalAfter = await USDT.balanceOf(USDTHolder);
    const wethBalAfter = await weth.balanceOf(USDTHolder);

    console.log("balance after swap", usdtBalAfter, wethBalAfter);



 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});