const a = {
    first() {
        return '1'
    }
}

const b = {
    second() {
        return 'nãaaaaaooooo'
    }
}

const c = {
    third(){
        return '3'
    }
}

const obj = {
    ...a,
    ...c
}

console.log(obj);