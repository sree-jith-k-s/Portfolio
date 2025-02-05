document.addEventListener("DOMContentLoaded", function () {
    fetch("./achievements.json") // Adjust the path if needed
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".box-container");
            container.innerHTML = ""; // Clear existing content

            data.achievements.forEach(item => {
                const box = document.createElement("div");
                box.classList.add("box");

                box.innerHTML = `
                    <div class="content">
                        <h3><i class="fas fa-award"></i> ${item.title}</h3>
                        <p>${item.issuer}</p>
                    </div>
                `;
                container.appendChild(box);
            });

            // Append Back Button
            const backBtnDiv = document.createElement("div");
            backBtnDiv.classList.add("backbtn");
            backBtnDiv.innerHTML = `
            <br/>
               <div class="backbtn">
    <a href="/#education" class="btn">
        <i class="fas fa-arrow-left"></i>
        <span>Back to Home</span>
  </a>
  </div>
            `;
            container.appendChild(backBtnDiv);
        })
        .catch(error => console.error("Error loading achievements:", error));
});
