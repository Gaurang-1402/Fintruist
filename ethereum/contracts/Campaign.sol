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
    uint public minimum;
    uint public minContrib;
    mapping(address => bool) public approvers;
    address = new Map();
    uint public approverCnt;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campgn(uint minimum, address creator) public {
        manager = creator;
        minContrib = minimum;
    }

    function contribute() public payable {
        require(msg.value > minContrib);
        // approver = msg.sender;
        approvers[msg.sender] = true;
        approverCnt++;
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

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCnt++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCnt > (approverCnt / 2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
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
    
    function getReqstCnt() public view returns (uint) {
        return requests.length;
    }
}