Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            newToDo: "",
            toDos: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ]
        },
        methods: {
            /* funzione per aggiungere alla lista */
            addToDo() {
                if (this.newToDo != "") {
                    this.toDos.push(this.newToDo);
                    this.newToDo = "";
                } else {
                    /* Messaggio nel caso in cui il campo inserito sia vuoto */
                    alert("Inserire almeno 1 carattere");
                }
            },
            /* Funzione per rimuovere dalla lista */
            removeToDo(index) {
                this.toDos.splice(index,1);
            }
        }
    }
)