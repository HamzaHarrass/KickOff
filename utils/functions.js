export const calculateAge =(dateOfBirth)=> {
    const dob = new Date(dateOfBirth);
    const now = new Date();
  
    const diffInMs = now - dob;
  
    const ageDate = new Date(diffInMs);
    const year = ageDate.getUTCFullYear();
  
    return Math.abs(year - 1970);
 }