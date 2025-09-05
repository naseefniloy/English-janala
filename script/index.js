const loadLessons = () => {
fetch("https://openapi.programming-hero.com/api/levels/all")
.then((res) => res.json())
.then((json) => displayLesson(json.data));
};
const displayLesson = (lessons) => {
const levelcontainer = document.getElementById("level-container");
levelcontainer.innerHTML ="";
for(let lesson of lessons){
    console.log(lesson);
const btnDiv = document.createElement("div");
btnDiv.innerHTML = `
<button class="btn btn-outline btn-primary"
                ><i class="fa-solid fa-book-open-reader"></i>Lesson - ${lesson.level_no}</button
              >
`
levelcontainer.append(btnDiv);
}
};
loadLessons();