// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const goal = 10
const CrowdFundingModule = buildModule("ProposalVoteModule", (m) => {

  const crowdFunding = m.contract("Crowdfunding", [goal]);

  return { crowdFunding };

});

export default CrowdFundingModule;