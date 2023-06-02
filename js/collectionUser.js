async function collectionList () {
    const response = await fetch("../json/collectionUser.json")
    const data = await response.json();
    return data
}

async function myCollection (idUser) {
    let collectionList1 = await collectionList();
    let myCollection1 = collectionList1.filter ((element) => {
        return element.idUser == idUser;
    })
    console.log(myCollection1)
}

myCollection(4);
