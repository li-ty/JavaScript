
/**
 * 解决索引冲突的两种方式。
 * 1、链地址法。storage数组下每个元素是一个数组或链表（推荐）
 * 2、开放地址法。storage直接保存键值对，遇到索引冲突则往后寻找空位置存放
 */
class HashTable{
    constructor(){
        this.storage = [];
        this.length = 7;
        this.count = 0;
    }

    /**
     * 哈希函数
     * 根据字符串计算出索引位置。
     * 哈希函数要满足两个需求：1、高效计算；2、计算出的索引均匀分布；
     */
    hashFun(key, size){
        let hash = 0;
        let prime = 37;//常用质数37作为哈希函数的常量
        for(let i = 0; i < key.length; i++){
            hash = prime * hash + key.charCodeAt(i)
        }
        let index = hash % size;
        return index;
    }

    put(key, value){
        let index = this.hashFun(key, this.length);
        let bucket = this.storage[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                let tuple  = bucket[i];
                if(tuple[0] == key){
                    tuple[1] = value;
                    return true;
                }
            }
            bucket.push([key, value]);
        }else{
            this.storage[index] = [[key, value]];
        }
        this.count++;
        //扩容
        if(this.count > this.length * 0.75){
            this.resize(this.length * 2);
        }
        return true;
    }

    remove(key){
        let index = this.hashFun(key, this.length);
        let bucket = this.storage[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                let tuple = bucket[i];
                if(tuple[0] == key) {
                    bucket.splice(i, 1);
                    this.count--;
                    if(this.count > 7 && this.count < this.length * 0.25){
                        this.resize(Math.floor(this.length / 2));
                    }
                    return tuple[1];
                }
            }
        }
        return null;
    }

    get(key){
        let index = this.hashFun(key, this.length);
        let bucket = this.storage[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                let tuple = bucket[i];
                if(tuple[0] == key) return tuple[1];
            }
        }
        return null;
    }


    //新哈希表长度恒为质数有利于计算出的索引均匀分布，减少索引冲突。
    resize(length){
        //保证新哈希表长度恒为质数
        while(!this.isPrime(length)){
            length++;
        }

        console.log("resize", length, this.isPrime(length))

        let oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.length = length;

        for(let i = 0; i < oldStorage.length; i++){
            let bucket = oldStorage[i];
            if(bucket){
                for(let j = 0; j < bucket.length; j++){
                    let tuple = bucket[j];
                    this.put(tuple[0], tuple[1]);
                }
            }
        }
    }

    isEmpty(){
        return this.count == 0;
    }

    size(){
        return this.count;
    }

    //高效判断质数的方法
    isPrime(num){
        let tmp = parseInt(Math.sqrt(num));
        for(let i = 2; i <= tmp; i++){
            if(num % i == 0) return false;
        }
        return true;
    }
}

let h = new HashTable();
for(let i = 0; i < 10000; i ++){
    h.put(i.toString(), i);
}
console.log(h)
for(let i = 10000; i >= 0; i --){
    h.remove(i.toString());
}
console.log(h)