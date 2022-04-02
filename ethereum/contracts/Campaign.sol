pragma solidity ^0.5.2;

contract CampgnFac {
    address[] public dployCamgns;
    function creatCampgn(uint minimum) public {
        address newCampgn = new Campgn(minimum, msg.sender);
        dployCamgns.push(newCampgn);
    }
    function getDployCampgn() public view returns (address[]) {
        return dployCamgns;
    }
}

contract Campgn {
    struct Request {
        string description;
        uint value;
        address recipient;
        uint approvalCnt;
        bool complete;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    // uint public minimum;
    uint public minContrib;
    mapping(address => bool) public approvers;
    // address = new Map();
    uint public approverCnt;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campgn(uint minimum, address creator) public {
        manager = creator;
        minContrib = minimum;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCnt: 0
        });

        requests.push(newRequest);
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minContrib,
          this.balance,
          requests.length,
          approverCnt,
          manager
        );
    }

}