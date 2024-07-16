const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const WORKING_MONTHS = 12;

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


function calculateDailyWage() {
    const attendance = Math.floor(Math.random() * 3); 
    const hoursWorked = getWorkHours(attendance);
    return hoursWorked * WAGE_PER_HOUR; 
}

function employeeAttendance(empdays) {
    const attendance = [];
    for (let i = 0; i < empdays; i++) {
        attendance[i] = Math.random() < 0.5 ? "present" : "absent"; 
    }
    attendance.forEach((status, index) => {
        console.log(`Employee day${index + 1}: ${status}`);
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

const empdays = 20; 
const attendance = employeeAttendance(empdays);
const dailyWages = calculateDailyWages(attendance);


dailyWages.forEach((wage, index) => {
    console.log(`day ${index + 1} Daily Wage: $${wage}`);
});


function calculateMonthlyWage() {
    let totalMonthlyWage = 0;

    for (let day = 0; day < WORKING_DAYS; day++) {
        totalMonthlyWage += calculateDailyWage();
    }

    return totalMonthlyWage;
}


const monthlyWage = calculateMonthlyWage();
console.log(`Monthly Wage: $${monthlyWage}`);

function calculateYearlyWage() {
    let totalYearlyWage = 0;

    for (let month = 0; month < WORKING_MONTHS; month++) {
        totalYearlyWage += calculateMonthlyWage();
    }

    return totalYearlyWage;
}

const yearlyWage = calculateYearlyWage();
console.log(`Yearly Wage: $${yearlyWage}`);


/*

output-
Employee day1: present
Employee day2: absent
Employee day3: absent
Employee day4: absent
Employee day5: absent
Employee day6: present
Employee day7: present
Employee day8: absent
Employee day9: present
Employee day10: absent
Employee day11: present
Employee day12: present
Employee day13: absent
Employee day14: present
Employee day15: absent
Employee day16: present
Employee day17: present
Employee day18: absent
Employee day19: present
Employee day20: absent
day 1 Daily Wage: $80
day 2 Daily Wage: $0
day 3 Daily Wage: $0
day 4 Daily Wage: $0
day 5 Daily Wage: $0
day 6 Daily Wage: $80
day 7 Daily Wage: $80
day 8 Daily Wage: $0
day 9 Daily Wage: $160
day 10 Daily Wage: $0
day 11 Daily Wage: $160
day 12 Daily Wage: $160
day 13 Daily Wage: $0
day 14 Daily Wage: $80
day 15 Daily Wage: $0
day 16 Daily Wage: $80
day 17 Daily Wage: $80
day 18 Daily Wage: $0
day 19 Daily Wage: $80
day 20 Daily Wage: $0
Monthly Wage: $1680
Yearly Wage: $18640


*/