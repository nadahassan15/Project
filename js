function addFood(meal) {
    alert("Adding food to " + meal);
}

function quickTools(meal) {
    alert("Accessing quick tools for " + meal);
}

function updateDate() {
    const date = document.getElementById('diaryDate').value;
    document.querySelector('.food-diary-header h1').textContent = 'Your Food Diary For: ' + new Date(date).toLocaleDateString();
}
function searchFood() {
    let query = document.getElementById('foodSearch').value;
    alert('Search for: ' + query);
}

function quickAddCalories() {
    alert('Quick add calories clicked!');
}
