function AddMyAllData(e) {

    e.preventDefault();

    let myFormData = {

        Day: document.getElementById("selectDay").value,
        dataAddNote: document.getElementById("dataAded").value,

    };



    myFormData = JSON.stringify(myFormData);
    return myFormData


    // console.log('myFormData:', myFormData)


}


export { AddMyAllData}