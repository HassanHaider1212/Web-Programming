$(document).ready(function() {
    
    document.getElementById('AddEmployment').onclick = function() {
        debugger;
        var jobEntry = document.createElement('div');
        jobEntry.classList.add('form-group');
        jobEntry.innerHTML = `
            <label for="EmploymentDetails">Employment Details:</label>
            <textarea class="form-control" id="EmploymentDetails" name="EmploymentDetails" rows="5"></textarea>
        `;

        var jobTitle = document.getElementById('JobTitle').value;
        var companyName = document.getElementById('CompanyName').value;
        var startDate = document.getElementById('EmploymentStartDate').value;
        var endDate = document.getElementById('EmploymentEndDate').value;
        var responsibilities = document.getElementById('JobResponsibilities').value;

        var newContent = `Job Title: ${jobTitle}\nCompany Name: ${companyName}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nResponsibilities: ${responsibilities}`;

        var employmentDetailsTextarea = jobEntry.querySelector('textarea');
        employmentDetailsTextarea.value = newContent;

        document.getElementById('JobDiv').appendChild(jobEntry);
    }

    document.getElementById('AddEducation').onclick = function() {
        debugger;
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('form-group');
        educationEntry.innerHTML = `
            <label for="EducationDetails">Education Details:</label>
            <textarea class="form-control" id="EducationDetails" name="EducationDetails" rows="5"></textarea>
        `;

        var educationLevel = document.getElementById('EducationLevel').value;
        var school = document.getElementById('School').value;
        var major = document.getElementById('major').value;
        var graduationYear = document.getElementById('GraduationYear').value;

        var newContent = `Education Level: ${educationLevel}\nSchool/University: ${school}\nMajor/Area of Study: ${major}\nGraduation Year: ${graduationYear}`;

        var educationDetailsTextarea = educationEntry.querySelector('textarea');
        educationDetailsTextarea.value = newContent;

        document.getElementById('EducationDiv').appendChild(educationEntry);
    }

    // var datatableNotes = $('#FormDatatable').on('error.dt', function (e, settings, techNote, message) {
    //     SessionExpiredRedirect();
    // }).DataTable({
    //     "bServerSide": true,
    //     "bProcessing": true,
    //     "bSearchable": true,
    //     "order": [[0, 'desc']],
    //     "language": {
    //         "emptyTable": "No record found.",
    //         "processing": '<i class="fa fa-spinner fa-spin fa-3x fa-fw" style="color:#2a2b2b;"></i><span class="sr-only">Loading...</span> '
    //     },
    //     "columns": [
    //         { "data": "FirstName" },
    //         { "data": "LastName" },
    //         { "data": "PhoneNumber" },
    //         { "data": "EmailAddress" },
    //         { "data": "Street" },
    //         { "data": "City" },
    //         { "data": "State" },
    //         { "data": "ZipCode" },
    //         { "data": "Resume" },
    //         { "data": "CoverLetter" },
    //         { "data": "EducationLevel" },
    //         { "data": "School" },
    //         { "data": "Major" },
    //         { "data": "GraduationYear" },
    //         { "data": "JobTitle" },
    //         { "data": "CompanyName" },
    //         { "data": "EmploymentStartDate" },
    //         { "data": "EmploymentEndDate" },
    //         { "data": "JobResponsibilities" },
    //         { "data": "Skills" },
    //         { "data": "Certifications" },
    //         { "data": "StartDate" },
    //         { "data": "WorkSchedule" },
    //         { "data": "Relocate" },
    //         { "data": "ReferenceName" },
    //         { "data": "ReferenceContact" },
    //         { "data": "Relationship" },
    //         { "data": "WhyWork" },
    //         { "data": "Agreement" },
    //         { "data": "PrivacyPolicy" }
    //     ]
    // });

    document.getElementById('submissionform').addEventListener('submit', function(event) {
        
        debugger;
        console.log("Job Application Form Submitted:");
        event.preventDefault(); // Prevent the default form submission
            
        // Get form data
        var formData = {};
        var formElements = this.elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            if (element.name && element.value) {
                formData[element.name] = element.value;
            }
        }
        
        // Create a new row in the table
        var tableBody = document.getElementById('FormData').getElementsByTagName('tbody')[0];
        var newRow = tableBody.insertRow();
        Object.values(formData).forEach(function(value) {
            var cell = newRow.insertCell();
            cell.appendChild(document.createTextNode(value));
        });

        // Reset form
        this.reset();
        // var formData = {};
        // var formElements = this.elements;
        
        // for (var i = 0; i < formElements.length; i++) {
        //     var element = formElements[i];
        //     if (element.name && element.value) {
        //         if (element.type === 'checkbox') {
        //             formData[element.name] = element.checked ? 'Yes' : 'No';
        //         } else {
        //             formData[element.name] = element.value;
        //         }
        //     }
        // }
        
        // var formDataArray = [];
        // Object.keys(formData).forEach(function(key) {
        //     formDataArray.push(formData[key]);
        // });
        
        // datatableNotes.row.add(formDataArray).draw();
    
        // console.log("Job Application Form Submitted Successfully!");
        // event.preventDefault(); // Prevent the default form submission behavior
    });
    
    
});
