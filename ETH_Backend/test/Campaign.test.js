const ganache = require("ganache-cli");
const assert = require("assert");

const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampgnFac.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");


let factory;
let accounts;
let cmpnAdr;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "100000" });

  // await factory.methods.createCampaign("100").receive({
  await factory.methods.creatCampgn("100").send({
    from: accounts[0],
    gas: "100000",
  });

  [cmpnAdr] = await factory.methods.getDployCampgn().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    cmpnAdr
  );
});

describe("Campaigns", () => {
  it("Quick deploy factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("This marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("This allows people to donate or contribute money & mark them as the approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it("This requires a minimum number of contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        value: "5",
        from: accounts[1],
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("Allows manager to create a payment request", async () => {
    await campaign.methods
      .createRequest("Buy batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "100000",
      });
    const request = await campaign.methods.requests(0).call();

    assert.equal("Buy batteries", request.description);
  });

  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });

    // const manager = await campaign.methods.manager().call();
    // assert.equal(accounts[0], manager);


    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({ from: accounts[0], gas: "100000" });
      // .receive({
      //   from: accounts[0],
      //   gas: "100000",
      // });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "100000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "100000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    // console.log(balance);
    assert(balance > 104);
  });
});
