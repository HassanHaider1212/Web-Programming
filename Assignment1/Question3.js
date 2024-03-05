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

    document.getElementById('submissionform').addEventListener('submit', function(event) {
        
        debugger;
        console.log("Job Application Form Submitted:");
        event.preventDefault(); // Prevent default form submission
            
        var formData = {};
        var formElements = this.elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            if (element.value === "" || element.value === null) {
                
                if (element.name === "EmploymentStartDate" || element.name === "EmploymentEndDate") {
                    debugger;
                    var dateObject = new Date("1111-11-11");
                    element.value  = dateObject.toISOString().split('T')[0];
                }
                else
                {
                    element.value = "null";
                }
            }
            if (element.name && element.value) {
                formData[element.name] = element.value;
            }
        }
        debugger;
        
        var tableBody = document.getElementById('FormData').getElementsByTagName('tbody')[0];
        var newRow = tableBody.insertRow();
      
        Object.entries(formData).forEach(function([key, value]) {
            var cell = newRow.insertCell();
        
            if (key === 'Resume') {
                debugger;
                var resumeFileName = value.split('\\').pop(); // Extract file name from resume path
                // var downloadPath = "C:\\Users\\HP1\\Downloads\\"; // Server-side path
                
                // // Construct the download link with the server-side path
                // var resumeLink = document.createElement('a');
                // resumeLink.href = downloadPath + resumeFileName;
                // resumeLink.download = resumeFileName;
                // resumeLink.textContent = resumeFileName;
                cell.appendChild(document.createTextNode(resumeFileName));
            } else {
                cell.appendChild(document.createTextNode(value));
            }
        });

        //Reset form
        this.reset();
    });
    
    document.getElementById('ViewApplications').onclick = function() {
        var table = document.getElementById('FormData');
         table.style.display = "block";
    }

    document.getElementById('HideApplications').onclick = function() {
        var table = document.getElementById('FormData');
         table.style.display = "none";
    }
});
