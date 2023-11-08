fetch('./data.json')
.then(resp=> resp.json())
.then(data=> {
    const dataList = document.getElementById('data-list');

    //let us get our items and create a list from the datasource
    dataList.array.forEach(item => {
        const itemList = document.createElement('li');
        itemList.innerHTML = `<strong>Name:${item.name}<br><strong> Email:<strong>${name.email}`
        dataList.appendChild(itemList);
    });
})
//try to catch errors
.catch(error=>{
    console.error('Error detected while loading data  from data source',error);
   })