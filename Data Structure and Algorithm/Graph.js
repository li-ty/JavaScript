const Queue = require("./Queue");
class Graph{
    constructor(){
        this.vertexes = [];
        this.edges = {};
    }

    addVertex(v){
        this.vertexes.push(v);
        this.edges[v] = [];
    }

    addEdge(v1, v2){
        this.edges[v1].push(v2);
        this.edges[v2].push(v1);
    }

    toString(){
        let str = "";
        for(let v of this.vertexes){
            str += v + "=>";
            for(let e of this.edges[v]){
                str += e;
            }
            str += "\n";
        }
        return str;
    }


    //遍历
    initColor(){
        let colors = {};
        for(let v of this.vertexes){
            colors[v] = 'white';
        }
        return colors;
    }
    //Breadth-First Search
    bfs(v){
        let colors = this.initColor();
        let queue = new Queue();
        queue.enqueue(v);
        while(!queue.isEmpty()){
            let v = queue.dequeue();
            let vs = this.edges[v];
            colors[v] = 'gray';
            for(let e of vs){
                if(colors[e] == "white"){
                    colors[e] = "gray";
                    queue.enqueue(e);
                }
            }

            console.log(v);
            colors[v] = 'black';
        }
    }
    //Depth-First Search
    dfs(v){
        let colors = this.initColor();
        this._dfs(v, colors);
    }

    _dfs(v, colors){
        colors[v] = 'gray';
        console.log(v);
        let vs = this.edges[v];
        for(let v of vs){
            if(colors[v] == 'white'){
                this._dfs(v, colors);
            }
        }
    }
}


var g = new Graph();
let vs = ["A","B","C","D","E","F", "G", "H", "I"];


for(let i of vs){
    g.addVertex(i)
}


g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("C","D");
g.addEdge("C","G");
g.addEdge("D","G");
g.addEdge("D","H");
g.addEdge("B","E");
g.addEdge("B","F");
g.addEdge("E","I");

console.log(g.toString())
//g.bfs(g.vertexes[0]);
g.dfs(g.vertexes[0]);