$(document).ready(function() {
    
    // document.getElementById('AddEmployment').onclick = function() {
    //     debugger;
    //     var jobEntry = document.createElement('div');
    //     jobEntry.classList.add('form-group');
    //     jobEntry.innerHTML = `
    //         <label for="EmploymentDetails">Employment Details:</label>
    //         <textarea class="form-control" id="EmploymentDetails" name="EmploymentDetails" rows="5"></textarea>
    //     `;

    //     var jobTitle = document.getElementById('JobTitle').value;
    //     var companyName = document.getElementById('CompanyName').value;
    //     var startDate = document.getElementById('EmploymentStartDate').value;
    //     var endDate = document.getElementById('EmploymentEndDate').value;
    //     var responsibilities = document.getElementById('JobResponsibilities').value;

    //     var newContent = `Job Title: ${jobTitle}\nCompany Name: ${companyName}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nResponsibilities: ${responsibilities}`;

    //     var employmentDetailsTextarea = jobEntry.querySelector('textarea');
    //     employmentDetailsTextarea.value = newContent;

    //     document.getElementById('JobDiv').appendChild(jobEntry);
    // }

    // document.getElementById('AddEducation').onclick = function() {
    //     debugger;
    //     var educationEntry = document.createElement('div');
    //     educationEntry.classList.add('form-group');
    //     educationEntry.innerHTML = `
    //         <label for="EducationDetails">Education Details:</label>
    //         <textarea class="form-control" id="EducationDetails" name="EducationDetails" rows="5"></textarea>
    //     `;

    //     var educationLevel = document.getElementById('EducationLevel').value;
    //     var school = document.getElementById('School').value;
    //     var major = document.getElementById('Major').value;
    //     var graduationYear = document.getElementById('GraduationYear').value;

    //     var newContent = `Education Level: ${educationLevel}\nSchool/University: ${school}\nMajor/Area of Study: ${major}\nGraduation Year: ${graduationYear}`;

    //     var educationDetailsTextarea = educationEntry.querySelector('textarea');
    //     educationDetailsTextarea.value = newContent;

    //     document.getElementById('EducationDiv').appendChild(educationEntry);

    // }

    function validatePhoneNumber(phoneNumber) {
        var phoneRegex = /^03\d{9}$/;
        return phoneRegex.test(phoneNumber);
    }

    function validateEmailAddress(emailAddress) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|org|net|gov|edu)$/;
        return emailRegex.test(emailAddress);
    }    

    function checkValidationForm() {
        var phoneNumberInput = document.getElementById('PhoneNumber');
        var emailAddressInput = document.getElementById('EmailAddress');
        var phoneNumber = phoneNumberInput.value.trim();
        var emailAddress = emailAddressInput.value.trim();
        var phoneNumberError = document.getElementById('phoneNumberError');
        var emailAddressError = document.getElementById('emailAddressError');
        var isValid = true;
    
        // Validate phone number
        if (!validatePhoneNumber(phoneNumber)) {
            phoneNumberError.textContent = 'Please enter a valid phone number (e.g., 03XXXXXXXXX)';
            phoneNumberInput.classList.add('error-input');
            isValid = false;
        } else {
            phoneNumberError.textContent = '';
            phoneNumberInput.classList.remove('error-input');
        }
    
        // Validate email address
        if (!validateEmailAddress(emailAddress)) {
            emailAddressError.textContent = 'Please enter a valid email address';
            emailAddressInput.classList.add('error-input');
            isValid = false;
        } else {
            emailAddressError.textContent = '';
            emailAddressInput.classList.remove('error-input');
        }
    
        // Scroll to the first error if any
        if (!isValid) {
            if (!validatePhoneNumber(phoneNumber)) {
                phoneNumberInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            if (!validateEmailAddress(emailAddress)) {
                emailAddressInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            // Hide error messages after 10 seconds
            setTimeout(function() {
                phoneNumberError.textContent = '';
                emailAddressError.textContent = '';
                phoneNumberInput.classList.remove('error-input');
                emailAddressInput.classList.remove('error-input');
            }, 10000);
        } 

        return isValid;
    }
    
    document.getElementById('submissionform').addEventListener('submit', function(event) {
        if (!checkValidationForm()) {
            event.preventDefault();
        }
        else
        {   
            debugger;
            event.preventDefault();
            console.log("Job Application Form Submitted:");                
            var formData = {};
            var formElements = this.elements;
            for (var i = 0; i < formElements.length; i++) {
                var element = formElements[i];
                if (element.value === "" || element.value === null) {
                    
                    if (element.name === "EmploymentStartDate" || element.name === "EmploymentEndDate" || element.name === "StartDate") {
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
                    var resumeFileName = value.split('\\').pop(); 
                    cell.appendChild(document.createTextNode(resumeFileName));
                } else{
                    cell.appendChild(document.createTextNode(value));
                }
            });

            this.reset();
        }
    });
    
    document.getElementById('ViewApplications').onclick = function() {
        debugger;
        var table = document.getElementById('FormData');
        table.style.display = "block";
    }

    document.getElementById('HideApplications').onclick = function() {
        debugger;
        var table = document.getElementById('FormData');
        table.style.display = "none";
    }
});
