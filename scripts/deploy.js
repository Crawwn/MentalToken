async function main() {
  const initial = ethers.parseEther("1000000"); // 1M token
  const cap = ethers.parseEther("10000000");    // 10M token cap

  const Token = await ethers.getContractFactory("MentalToken");
  const token = await Token.deploy(initial, cap);
  await token.waitForDeployment();

  console.log("MentalToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
