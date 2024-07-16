const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;




function employeeAttendance(empdays) {
    const attendance = [];

    for (let i = 0; i < empdays; i++) {
        const isPresent = Math.random() < 0.5;
        attendance[i] = isPresent ? "present" : "absent";
    }

    attendance.forEach((status, index) => {
        console.log(`Employee ${index + 1}: ${status}`);
    });

    return attendance; 
}


function calculateDailyWage(attendance) {
    const wages = attendance.map(status => {
        if (status === "absent") {
            return 0; 
        }

        const hoursWorked = Math.random() < 0.5 ? PART_TIME_HOURS : FULL_TIME_HOURS; 
        return hoursWorked * WAGE_PER_HOUR; 
    });

    return wages;
}

const empdays = 5; 
const attendance = employeeAttendance(empdays);
const dailyWages = calculateDailyWage(attendance);

dailyWages.forEach((wage, index) => {
    console.log(`Employee ${index + 1} Daily Wage: $${wage}`);
});


/*

output-
Employee 1: present
Employee 2: absent
Employee 3: present
Employee 4: present
Employee 5: absent
Employee 1 Daily Wage: $160
Employee 2 Daily Wage: $0
Employee 3 Daily Wage: $80
Employee 4 Daily Wage: $160
Employee 5 Daily Wage: $0

*/