document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Done";
      deleteButton.classList.add("deleteBtn");
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      event.target.parentElement.remove();
    }
  });
});
