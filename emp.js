function employeeattendance(empcount){
    const attendence=[];

    for(let i=0;i<empcount;i++){
        const isPresent=Math.random() <0.5 ;
        attendence[i]=isPresent ? "present" : "absent";
    }

    attendence.forEach((status,index)=>{
        console.log(`Employee ${index +1} : ${status}`)

    }
    )
}

employeeattendance(5);