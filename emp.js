const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


function getWorkHours(attendance) {
    switch (attendance) {
        case 0: 
            return 0; 
        case 1: 
            return PART_TIME_HOURS; 
        case 2: 
            return FULL_TIME_HOURS; 
        default:
            return 0; 
    }
}


function calculateRandomDailyWage() {
    const attendance = Math.floor(Math.random() * 3); 
    const hoursWorked = getWorkHours(attendance);
    return hoursWorked * WAGE_PER_HOUR; 
}

const randomDailyWage = calculateRandomDailyWage();
console.log(`Random Daily Wage: $${randomDailyWage}`);

function employeeAttendance(empCount) {
    const attendance = [];
    for (let i = 0; i < empCount; i++) {
        attendance[i] = Math.random() < 0.5 ? "present" : "absent"; 
    }
    attendance.forEach((status, index) => {
        console.log(`Employee ${index + 1}: ${status}`);
    });
    return attendance; 
}

function calculateDailyWages(attendance) {
    return attendance.map(status => {
        if (status === "absent") {
            return 0; 
        }
       
        const hoursWorked = Math.random() < 0.5 ? PART_TIME_HOURS : FULL_TIME_HOURS; 
        return hoursWorked * WAGE_PER_HOUR; 
    });
}


const empCount = 5; 
const attendance = employeeAttendance(empCount);
const dailyWages = calculateDailyWages(attendance);

dailyWages.forEach((wage, index) => {
    console.log(`Employee ${index + 1} Daily Wage: $${wage}`);
});

/*
output-
Random Daily Wage: $160
Employee 1: present
Employee 2: absent
Employee 3: present
Employee 4: present
Employee 5: absent
Employee 1 Daily Wage: $160
Employee 2 Daily Wage: $0
Employee 3 Daily Wage: $160
Employee 4 Daily Wage: $160
Employee 5 Daily Wage: $0
*/
