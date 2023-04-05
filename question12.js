let now = new Date();

// YYYY-MM-DD HH:mm format
let yyyyMMddHHmm = now.toISOString().slice(0, 16).replace("T", " ");
console.log("YYYY-MM-DD HH:mm:", yyyyMMddHHmm);

// DD-MM-YYYY HH:mm format
let ddMMyyyyHHmm = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth()+1).toString().padStart(2, '0')}-${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log("DD-MM-YYYY HH:mm:", ddMMyyyyHHmm);

// DD/MM/YYYY HH:mm format
let ddMMyyyySlashHHmm = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log("DD/MM/YYYY HH:mm:", ddMMyyyySlashHHmm);
