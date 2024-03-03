$(document).ready(function() {
    // Function to add job entry fields dynamically
    document.getElementById('AddEmployment').onclick = function() {
        debugger;
        var jobEntry = document.createElement('div');
        jobEntry.classList.add('form-group');
        jobEntry.innerHTML = `
            <label for="EmploymentDetails">Employment Details:</label>
            <textarea class="form-control" id="EmploymentDetails" name="EmploymentDetails" rows="5"></textarea>
        `;

        // Get the values of the input fields
        var jobTitle = document.getElementById('JobTitle').value;
        var companyName = document.getElementById('CompanyName').value;
        var startDate = document.getElementById('EmploymentStartDate').value;
        var endDate = document.getElementById('EmploymentEndDate').value;
        var responsibilities = document.getElementById('JobResponsibilities').value;

        // Concatenate the new job entry details with newline characters
        var newContent = `Job Title: ${jobTitle}\nCompany Name: ${companyName}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nResponsibilities: ${responsibilities}`;

        // Set the content of the textarea
        var employmentDetailsTextarea = jobEntry.querySelector('textarea');
        employmentDetailsTextarea.value = newContent;

        // Append the jobEntry to the JobDiv
        document.getElementById('JobDiv').appendChild(jobEntry);
    }

    // Function to add job entry fields dynamically
    document.getElementById('AddEducation').onclick = function() {
        debugger;
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('form-group');
        educationEntry.innerHTML = `
            <label for="EducationDetails">Education Details:</label>
            <textarea class="form-control" id="EducationDetails" name="EducationDetails" rows="5"></textarea>
        `;

        // Get the values of the input fields
        var educationLevel = document.getElementById('EducationLevel').value;
        var school = document.getElementById('School').value;
        var major = document.getElementById('major').value;
        var graduationYear = document.getElementById('GraduationYear').value;

        // Concatenate the new education entry details with newline characters
        var newContent = `Education Level: ${educationLevel}\nSchool/University: ${school}\nMajor/Area of Study: ${major}\nGraduation Year: ${graduationYear}`;

        // Set the content of the textarea
        var educationDetailsTextarea = educationEntry.querySelector('textarea');
        educationDetailsTextarea.value = newContent;

        // Append the educationEntry to the EducationDiv
        document.getElementById('EducationDiv').appendChild(educationEntry);
    }

    document.getElementById('SubmitForm').onclick = function() {
        debugger;
        console.log("Job Application Form Submitted:");
        
        // Loop through all form elements
        var formElements = document.getElementById('submissionform').elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            
            // Check if the element is an input, textarea, or select
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                // Log the element's label (if exists) and value
                var label = document.querySelector('label[for="' + element.id + '"]');
                var labelText = label ? label.innerText.trim() : element.id;
                console.log(labelText + ": " + element.value);
            }
        }
    }
});
