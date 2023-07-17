class N{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    a(data){
        let n = new N(data);
        if(this.length == 0){
            this.head = n;
            this.tail = n;
        }else{
            let curNode = this.head;
            while(curNode.next){
                curNode = curNode.next;
            }
            curNode.next = n;
            n.prev = curNode;
            this.tail = n;
        }
        this.length ++;
    }

    i(index, data){
        let n = new N(data)
        if(index == 0){
            let head = this.head;
            head.prev = n;
            n.next = head;
            this.head = n;
        }else{
            let prevN = null;
            let cN = this.head;
            let cnt = 0;
            while(cnt++ < index){
                prevN = cN;
                cN = cN.next;
            }
            n.next = cN;
            cN.prev = n;
            prevN.next = n;
            n.prev = prevN;

        }
        this.length ++;
    }

    u(index, data){
        let cnt = 0;
        let cN = this.head;
        while(cnt++ < index){
            cN = cN.next;
        }
        cN.data = data;
    }

    rAt(index){
        if(index == 0){
            let head = this.head.next;
            head.prev = null;
            this.head = head;
        }else if(index == this.length -1){
            let p = null;
            let c = this.head;
            while(c.next){
                p = c;
                c = c.next;
            }
            p.next = null;
            this.tail = p;
        }else{
            let cnt = 0;
            let p = null;
            let c = this.head;
            while(cnt++ < index){
                p = c;
                c = c.next;
            }
            p.next = c.next;
            c.next.prev = p;
        }

        this.length --;
    }

    h2t(){
        let str ="";
        let n = this.head
        while(n){
            str += n.data;
            n = n.next;
        }
        str += "    " + this.length
        console.log(str)
        return str
    }
    t2h(){
        let str ="";
        let n = this.tail
        while(n){
            str += n.data;
            n = n.prev;
        }
        str += "    " + this.length
        console.log(str)
        return str
    }
}
