document.addEventListener("DOMContentLoaded", function () {

    fetch("data.json") 
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {

                const container = document.querySelector(`#right_line_${index + 1}`);

                // Update the content within the container
                const titleElement = container.querySelector(".right_line_title");
                const scoreElement = container.querySelector("#json_data");

                titleElement.textContent = item.category;
                scoreElement.textContent = `${item.score}`;
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
