// fetch DOM element
const container = document.getElementById('cont')
// let url = 'https://run.mocky.io/v3/4411dcba-5bb7-4bb4-86d2-18aa26af62fc';
// let url = 'https://run.mocky.io/v3/eba48a27-d113-46eb-ba7c-257afe9a1850'
// let url = 'https://run.mocky.io/v3/d2109557-89d2-4a04-8df5-2f8b17daf6ab'
// let url = 'https://run.mocky.io/v3/95f5090b-b3b2-4332-8237-0fd7c633ab28'
// let url = 'https://run.mocky.io/v3/acb97d98-a25b-46e4-be04-4d5164e057f7'
// let url = 'https://run.mocky.io/v3/6129adfa-9dbe-4465-b895-61e413ab75f9'
let url = 'https://run.mocky.io/v3/3bf702c0-f8aa-462c-8c9c-df8a972bc528'

const fetchData = async() => {
    try{
        let data = await fetch(url);
        // console.log(data);
        let employee = await data.json();
        console.log(employee);
        if(data.ok){
            employee.response.forEach((person)=> {
                debugger; 
                // create div for employee detail
                let employeeDetailDiv = document.createElement('div');
                employeeDetailDiv.classList.add('employee-detail');
                // create div for name
                let nameDiv = document.createElement('div');
                // create h2 for showing name
                let nameH2 = document.createElement('h3');
                nameH2.innerHTML = person.name
                nameDiv.classList.add('name');
                nameDiv.appendChild(nameH2)
                // create div for dob
                let dobDiv = document.createElement('div');
                // create h2 for showing dob
                let dobH2 = document.createElement('h3');
                dobH2.innerHTML = person.dob;
                dobDiv.classList.add('dob');

                dobDiv.appendChild(dobH2)
                // create div for address
                let addressDiv = document.createElement('div');
                // create h2 for showing address
                let addressH2 = document.createElement('h3');
                addressH2.innerHTML = person.address;
                addressDiv.classList.add('address');
                addressDiv.appendChild(addressH2)
                //append name div
                employeeDetailDiv.appendChild(nameDiv)
                //append dob div
                employeeDetailDiv.appendChild(dobDiv)
                //append address div
                employeeDetailDiv.appendChild(addressDiv)
                // append container div
                container.appendChild(employeeDetailDiv)
            })
        }
    }catch(error){
        console.log(error)
    }
}

fetchData()