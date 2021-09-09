Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            colorClass: "green",
            colorClassTwo: "red",
            newToDo: "",
            toDos: [
                {
                    title: "Fare i compiti",
                    done: false
                },
                {
                    title: "Fare la spesa",
                    done: false
                },
                {
                    title: "Fare il bucato",
                    done: false
                }
            ],
        },
        methods: {
            /* Funzione per aggiugere all'array di oggetti */
            addToDo() {
                if (this.newToDo != "") {
                    this.toDos.push({
                        title: this.newToDo,
                        done: false          
                    });
                    this.newToDo = "";
                    console.log(this.toDos)
                } else {
                    alert("Iserisci dei caratteri!");
                }
            },
            /* Funzione per rimuovere dalla lista */
            removeToDo(index) {
                this.toDos.splice(index,1);
            },
            /* Funzione per il check del to do */
            check(i) {
                this.toDos[i].done = !this.toDos[i].done;
            }
        }
    }
)