const pc = {
    ram: 16,
    stockage: 256,
    upgrade: function(){
        this.ram = 18
    }
}

pc.upgrade()

console.log(pc)

const convertedPc = JSON.stringify(pc)

console.log(convertedPc)
rPc = JSON.parse(convertedPc)
console.log(rPc)