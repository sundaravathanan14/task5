var resumeData ={
    "basics": {
      "name": "sundaravathanan",
      
      "email": "sundar.aero11@gmail.com",
      "phone": "+91-8610617807",
      
      
      "summary": "Full stack developer ",
      "location": {
        "address": "Bnagalore",
        "postalCode": "560043",
        "city": "bangalore ",
        "countryCode": "India",
        "region": "Karnataka"
      }
    },
    "work": [
      {
        "company": "Guvi",
        "position": "Full stack developer ",
        "website": "guvi,in",
        "startDate": "01-01-2023",
        "summary": "Full stock developer ",
        "highlights": [
          "smart cart automation.",
          "medicine delivery app",
          "static website development",
          "travels website development "
        ]
      },
      {
        "company": "test",
        "position": "Full stack developer ",
        "website": "guvi,in",
        "startDate": "01-01-2023",
        "summary": "Full stock developer ",
        "highlights": [
          "smart cart automation.",
          "medicine delivery app",
          "static website development",
          "travels website development "
        ]
      }
    ],
    "education": [
      {
        "institution": "P.B college of engineering",
        "area": "B.E(aeronatical engineer)",
        "studyType": " Full time ",
        "Garde": "First class",
        "endDate": "Apr 2011"
        
      },
      {
        "institution": "All win Hr.sec school-thanjavur",
        "area": "12th (bio-maths)",
        "studyType": " Full time ",
        "Garde": "First class",
        "endDate": "may 2007"       
      },
      {
        "institution": "St.Antonys  Hr.sec school-thanjavur",
        "area": "1oth ",
        "studyType": " Full time ",
        "Garde": "First class",
        "endDate": "may 2005"
        
      }
    ],
    "skills": [
        "HTML","CSS","JS","BOOTSTRAP","ReactJs"],
    "languages": [
      {
        "language": "Tamil,English ",
        "fluency": "Native"
      }
    ],
    "interests": [
      {
        "name": "Full statck development "
      }
        
        ]
      };

// Iteration using For loop
 // Work
for(var i=0;i<resumeData.work.length;i++){
   console.log("Company-", resumeData.work[i].company);
   console.log("Position-",resumeData.work[i].position);
   console.log("Website-", resumeData.work[i].website);
   console.log("Start Date-",resumeData.work[i].startDate);
   console.log("Summary-", resumeData.work[i].summary);
   for(var j=0;j<resumeData.work[i].highlights.length;j++){
    console.log("highlights-",resumeData.work[i].highlights[j]);
   }
   
}
 
// Iteration using For in loop
for(var i in resumeData.basics){
    console.log("Basic Details",resumeData.basics[i]);
}

//  Iteration using For of loop

for(var i of resumeData.skills){
    console.log("Skills",i)
}

// Iteration using forEach 
 resumeData.work.forEach((data)=>{
    console.log("Company-", data.company);
    console.log("Position-",data.position);
    console.log("Website-", data.website);
    console.log("Start Date-",data.startDate);
    console.log("Summary-", data.summary);
});
