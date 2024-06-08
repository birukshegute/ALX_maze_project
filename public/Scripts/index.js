document.addEventListener("DOMContentLoaded", () => {

const auth = window.firebaseAuth;
const db = window.firestoreDB;
const onAuthStateChanged = window.onAuthStateChanged;
const signOut = window.signOut;
const collection = window.collection;
const query = window.query;
const orderBy = window.orderBy;
const getDocs = window.getDocs;
const doc = window.doc;
const addDoc = window.addDoc;
const updateDoc = window.updateDoc;
const where = window.where;
const deleteDoc = window.deleteDoc;


  const signedInElement = document.getElementById("signedin");
  const signedOutElement = document.getElementById("signedout");
  const signOutButton = document.querySelector(".sgnout");
  const addTaskButton = document.querySelector("#signedin .wrapper button");

  if (!auth || !onAuthStateChanged || !signOut || !db) {
    console.error("Firebase auth or methods are not available");
    return;
  }

  signedInElement.hidden = true;
  signedOutElement.hidden = true;

  console.log("Initial state: both sections hidden");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      signedInElement.hidden = false;
      signedOutElement.hidden = true;
      loadTasks(user.uid);
    } else {
      signedInElement.hidden = true;
      signedOutElement.hidden = false;
    }
  });

  signOutButton.addEventListener("click", (event) => {
    event.stopPropagation();
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  });

  addTaskButton.addEventListener("click", addTask);

  function addTask() {
    const user = auth.currentUser;
    if (!user) return;

    const taskName = document.getElementById("Box").value;
    const prioritySelect = document.getElementById("pri");
    let priority = prioritySelect.value;

    if (!taskName) {
      alert("Task name cannot be empty.");
      return;
    }
    if (!priority) {
      priority = "low"; // Default priority set here
    }
  

    const tasksRef = collection(db, "users", user.uid, "tasks");

    // Check for duplicate task names
    const duplicateQuery = query(tasksRef, where("taskName", "==", taskName));
    getDocs(duplicateQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          alert("Task with the same name already exists.");
        } else {
          // Add new task to Firestore
          addDoc(tasksRef, {
            taskName: taskName,
            priority: priority,
            createdAt: new Date(),
            updatedAt: new Date(),
            completed: false
          }).then(() => {
            loadTasks(user.uid);
            prioritySelect.value = "low";
          }).catch((error) => {
            console.error("Error adding task: ", error);
          });
        }
      })
      .catch((error) => {
        console.error("Error checking duplicate task: ", error);
      });
  }

  function loadTasks(userId) {
    const tasksRef = collection(db, "users", userId, "tasks");
    const tasksQuery = query(tasksRef, orderBy("createdAt"));
    
    getDocs(tasksQuery)
      .then((querySnapshot) => {
        const tasksList = document.querySelector("#signedin .tasks .check");
        tasksList.innerHTML = "";

        querySnapshot.forEach((doc) => {
          const task = doc.data();
          const taskElement = document.createElement("li");

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = task.completed;
          checkbox.addEventListener("change", (event) => toggleTaskCompletion(doc.id, event.target.checked));
          taskElement.appendChild(checkbox);

          const taskContent = document.createElement("span");
          taskContent.textContent = task.taskName;
          if (task.completed) {
            taskContent.style.textDecoration = "line-through";
          }
          taskElement.appendChild(taskContent);

          const priorityImg = document.createElement("img");
          priorityImg.src = getPriorityIcon(task.priority);
          priorityImg.alt = task.priority;
          taskElement.appendChild(priorityImg);

          const editButton = document.createElement("button");
          editButton.innerHTML = '<img src="images/edit.png" alt="Edit" id="edt">';
          editButton.addEventListener("click", () => editTask(doc.id, task));
          taskElement.appendChild(editButton);

          const deleteButton = document.createElement("button");
          deleteButton.innerHTML = '<img src="images/delete.png" alt="Delete" id="dlt">';
          deleteButton.addEventListener("click", () => deleteTask(doc.id));
          taskElement.appendChild(deleteButton);

          tasksList.appendChild(taskElement);
        });
      })
      .catch((error) => {
        console.error("Error loading tasks: ", error);
      });
  }

  function getPriorityIcon(priority) {
    switch (priority) {
      case "low":
        return "images/low.jpg";
      case "medium":
        return "images/medium.jpg";
      case "high":
        return "images/high.jpg";
      default:
        return "";
    }
  }

  function toggleTaskCompletion(taskId, completed) {
    const user = auth.currentUser;
    if (!user) return;

    const taskDocRef = doc(db, "users", user.uid, "tasks", taskId);
    updateDoc(taskDocRef, { completed: completed })
      .then(() => {
        loadTasks(user.uid);
      })
      .catch((error) => {
        console.error("Error updating task completion: ", error);
      });
  }

  function editTask(taskId, task) {
    const newTaskName = prompt("Edit task name:", task.taskName);
    if (!newTaskName) return;

    const user = auth.currentUser;
    if (!user) return;

    const taskDocRef = doc(db, "users", user.uid, "tasks", taskId);
    updateDoc(taskDocRef, { taskName: newTaskName })
      .then(() => {
        loadTasks(user.uid);
      })
      .catch((error) => {
        console.error("Error updating task: ", error);
      });
  }

  function deleteTask(taskId) {
    const user = auth.currentUser;
    if (!user) return;

    const taskDocRef = doc(db, "users", user.uid, "tasks", taskId);
    if (confirm("Are you sure you want to delete this task?")) {
      deleteDoc(taskDocRef)
        .then(() => {
          loadTasks(user.uid);
        })
        .catch((error) => {
          console.error("Error deleting task: ", error);
        });
    }
  }
});