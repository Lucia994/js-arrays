const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; //Gli array contano da 0, quindi il quarto insegnante è il numero 3
console.log(fourthTeacher);//Outuput: Phil

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick"; //modifica il valore e scrivi tra parentesi [] il numero dell'item da sostituire
console.log(teachers); //Output: ["Nathan", "Ed", "Fabio", "Phil", "Patrick", "Lewis", "Luca"]

// Ricorda che trattandosi di una stringa devi inserire i nomi nelle virgolette

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher =  "Luca";
teachers.pop(); // Output: ["Nathan", "Ed", "Fabio", "Phil", "Patrick", "Lewis"]
console.log(teachers);

// metodo pop elimina l'ultimo item dell'array e non ha bisogno di parametri

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = "Nathan";
teachers.shift(); // Output: ["Ed", "Fabio", "Phil", "Patrick", "Lewis"]
console.log(teachers);

// metodo shift rimuove il primo item dell'array e non ha bisogno di parametri

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); // metodo push aggiunge alla fine dell'array l'item (l'item va inserito nelle parentesi)
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah"); // metodo unshift aggiunge all'inizio  dell'array l'item (l'item va inserito nelle parentesi)
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;