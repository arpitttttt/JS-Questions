// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let seasons=()=>{
    let month=prompt("Enter the month: ").toLowerCase()

    if(month==="september"||month==="october"||month==="november"){
        console.log("The season is Autumn")
    }
    else if(month==="december"||month==="january"||month==="february"){
        console.log("The season is Winter")
    }
    else if(month==="march"||month==="april"||month==="may"){
        console.log("The season is Spring")
    }
    else if(month==="june"||month==="july"||month==="august"){
        console.log("The season is Summer")
    }
    else{
        console.log("Enter a valid month")
    }

}

seasons()