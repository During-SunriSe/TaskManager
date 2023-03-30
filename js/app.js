const { createApp } = Vue;

createApp({
  data() {
    return {
      inputValue: "",
      notes: [],
      doneNotes: [],
    };
  },
  methods: {
    addNote() {
      if (this.inputValue && this.inputValue.trim()) {
        if (this.inputValue.length > 21) {
          this.inputValue = this.inputValue.slice(0, 20) + "..";
        }
        this.notes.unshift(this.inputValue);
        this.inputValue = "";
      }
    },
    clearNotes() {
      if (
        (this.notes.length || this.doneNotes.length) &&
        confirm("Are you sure?")
      ) {
        while (this.notes.length) {
          this.notes.pop();
        }
        while (this.doneNotes.length) {
          this.doneNotes.pop();
        }
      }
    },
    deleteNote(index, event) {
      if (event.currentTarget.id === "done") {
        this.doneNotes.splice(index, 1);
      } else {
        this.notes.splice(index, 1);
      }
    },
    doneNote(index) {
      this.doneNotes.unshift(this.notes[index]);
      this.notes.splice(index, 1);
    },
    returnNote(index) {
      this.notes.unshift(this.doneNotes[index]);
      this.doneNotes.splice(index, 1);
    },
  },
}).mount("#app");
