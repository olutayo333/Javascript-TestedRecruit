let UN='coalition';
let PW='skills-test';
let endpoint='https://fedskillstest.coalitiontechnologies.workers.dev';
let auth = btoa(`${UN}:${PW}`);
let patients= [];
let Jessica={};
let jan2024Systolic, feb2024Systolic, march2024Systolic, dec2023Systolic, nov2023Systolic, oct2023Systolic, sep2023Systolic, aug2023Systolic, jul2023Systolic;
let jan2024Diastolic, feb2024Diastolic, march2024Diastolic, dec2023Diastolic, nov2023Diastolic, oct2023Diastolic, sep2023Diastolic, aug2023Diastolic, jul2023Diastolic;
let allSystolic, allDiastolic;
let diastolic;

 loadData= ()=>{
    fetch(endpoint, {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        patients = data;
        console.log(patients);
        Jessica = data.find(u=>u.name="Jessica Taylor");
        console.log(Jessica);
        let content = "";
        patients.map(u=>(content +=`<button class="btn btn-sm"> 
                                        <small class="mt-0"> 
                                            <img width="40" src=${u.profile_picture} /> 
                                        </small> <small class="ms-0"><b>${u.name} </b></small> </br>  
                                        <small class="ms-0"> ${u.gender} ${u.age} </small>  
                                    </button>`
                    ))
        displayPatients.innerHTML = content;
        jessica_details.innerHTML = `
                                    <div class=" pt-3">
                                        <p class="text-center mx-auto"> <img width="100" src=${Jessica.profile_picture} /> </p> 
                                        <p class="text-center"><b>${Jessica.name} </b></p>
                                        <div class="px-3">
                                            Date of Birth
                                            <p><b>${Jessica.date_of_birth}</b></p>

                                            Gender
                                            <p><b>${Jessica.gender}</b></p>

                                            Contact Info
                                            <p><b>${Jessica.phone_number}</b> </p>

                                            Emergency Contacts
                                            <p><b>${Jessica.emergency_contact
                                                }</b></p>
                                            Insurance Provider
                                            <p><b>${Jessica.insurance_type}</b></p>
                                        </div>
                                    </div>
                                    `
        // Jessica Diastolic and Systolic Readings
        jan2024Systolic =Jessica.diagnosis_history[2].blood_pressure.systolic.value
        feb2024Systolic =Jessica.diagnosis_history[1].blood_pressure.systolic.value
        march2024Systolic =Jessica.diagnosis_history[0].blood_pressure.systolic.value
        dec2023Systolic =Jessica.diagnosis_history[3].blood_pressure.systolic.value
        nov2023Systolic =Jessica.diagnosis_history[4].blood_pressure.systolic.value
        oct2023Systolic =Jessica.diagnosis_history[5].blood_pressure.systolic.value
        sep2023Systolic =Jessica.diagnosis_history[6].blood_pressure.systolic.value
        aug2023Systolic =Jessica.diagnosis_history[7].blood_pressure.systolic.value
        jul2023Systolic =Jessica.diagnosis_history[8].blood_pressure.systolic.value
        allSystolic=[jan2024Systolic, feb2024Systolic, march2024Systolic, dec2023Systolic, 
                    nov2023Systolic, oct2023Systolic, sep2023Systolic, aug2023Systolic, jul2023Systolic
                    ]
         
        jan2024Diastolic =Jessica.diagnosis_history[2].blood_pressure.diastolic.value
        feb2024Diastolic =Jessica.diagnosis_history[1].blood_pressure.diastolic.value
        march2024Diastolic =Jessica.diagnosis_history[0].blood_pressure.diastolic.value
        dec2023Diastolic =Jessica.diagnosis_history[3].blood_pressure.diastolic.value
        nov2023Diastolic =Jessica.diagnosis_history[4].blood_pressure.diastolic.value
        oct2023Diastolic =Jessica.diagnosis_history[5].blood_pressure.diastolic.value
        sep2023Diastolic =Jessica.diagnosis_history[6].blood_pressure.diastolic.value
        aug2023Diastolic =Jessica.diagnosis_history[7].blood_pressure.diastolic.value
        jul2023Diastolic =Jessica.diagnosis_history[8].blood_pressure.diastolic.value
        allDiastolic=[jan2024Diastolic, feb2024Diastolic, march2024Diastolic, dec2023Diastolic, nov2023Diastolic,
                        oct2023Diastolic, sep2023Diastolic, aug2023Diastolic, jul2023Diastolic
                    ]
        localStorage.setItem('systolic', allSystolic); localStorage.setItem('diastolic', allDiastolic);
        console.log(allSystolic); 
    }).catch(function (error) {
        console.warn(error);
    }); 
}



    