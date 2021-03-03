const nodeMap = {
	"node1": {
		label: "Contact Info",
		value: 100,
		type: "BASIC",
		adjList: ["node2"]
	},
	"node2": {
		label: "NemID",
		value: 95,
		type: "SERVICE",
		adjList: ["node3", "nodeBranch2"]
	},
	"node3": {
		label: "Personal Address",
		value: 95,
		type: "BASIC",
		adjList: []
	},
	"nodeBranch2":  {
		label: "Branch 2",
		value: 55,
		type: "BASIC",
		adjList: ["nodeBranch3"]
		
	},
	"nodeBranch3":  {
		label: "Branch 3",
		value: 25,
		type: "BASIC",
		adjList: []
		
	}
}

export default nodeMap
