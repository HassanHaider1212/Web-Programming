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

    document.getElementById('SubmitForm').onclick = function() {
        debugger;
        console.log("Job Application Form Submitted:");
        
        var formElements = document.getElementById('submissionform').elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            var label = document.querySelector('label[for="' + element.id + '"]');
            var labelText = label ? label.innerText.trim() : element.id;
            console.log(labelText + ": " + element.value);
        }
    }
});
