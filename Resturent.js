document.querySelector("button[type='submit']").addEventListener("click", (e) => {
    e.preventDefault();
    const query = document.querySelector("input[type='search']").value;

    fetch(`http://127.0.0.1:5500/html/Resturent.html#?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Update restaurant list dynamically based on search results
            const restaurantList = document.getElementById("restaurant-list");
            restaurantList.innerHTML = ""; // Clear previous results
            data.forEach(restaurant => {
                const card = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
                            <div class="card-body">
                                <h5 class="card-title">${restaurant.name}</h5>
                                <p class="card-text">Cuisine: ${restaurant.cuisine}</p>
                                <a href="#" class="btn btn-danger">Order Now</a>
                            </div>
                        </div>
                    </div>`;
                restaurantList.innerHTML += card;
            });
        })
        .catch(error => console.error("Error searching restaurants:", error));
});
