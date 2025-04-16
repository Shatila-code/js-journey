
function generateReports(students) {

    
    
    let reports = [];  // O(1) constant
    
    students.forEach(student => {  // O(n) looping throught each student
 
      let total = student.scores.reduce((sum, score) => { // O(m) a built in method that iterates and sums the scores of each student
        return sum + score; 
      }, 0);
      

      let avg = total / student.scores.length;  // 0(1) 
      
      let grade; 

      if (avg >= 90) grade = 'A'; //constant value O(1)
      else if (avg >= 80) grade = 'B'; 
      else if (avg >= 70) grade = 'C';
      else if (avg >= 60) grade = 'D';
      else grade = 'F';  
      

      reports.push({ // O(1) because creating an object doesn't require searching or sorting its constant
        name: student.name,
        average: avg, 
        grade: grade
        
      });
    });
    
    return reports;
  }
  
  const Students = [
    {name: "Alice", scores: [90,85,92]}, 
    {name: "Bob", scores: [70,68,72]},   
    {name: "Charlie", scores: [100,100,100]},
 
];
  
  console.log('Results:', generateReports(Students));