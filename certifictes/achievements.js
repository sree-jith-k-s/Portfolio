document.addEventListener("DOMContentLoaded", function () {
    fetch("./achievements.json") // Adjust the path if needed
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".box-container");
            container.innerHTML = ""; // Clear existing content

            // Sort achievements by 'issued' date in descending order
            data.achievements.sort((a, b) => new Date(b.issued) - new Date(a.issued));

            data.achievements.forEach(item => {
                const box = document.createElement("div");
                box.classList.add("box");

                // Handle skills
                let skillsHtml = "";
                if (Array.isArray(item.skills) && item.skills.length > 0) {
                    skillsHtml = `<p><strong>Skills:</strong> ${item.skills.join(', ')}</p>`;
                } else if (item.skills && item.skills.includes(".pdf")) {
                    // Handling the PDF link case
                    skillsHtml = `<a href="./assets/credentials/${item.skills}" target="_blank">Show credential</a>`;
                }

                box.innerHTML = `
                    <div class="content">
                        <h3><i class="fas fa-award"></i> ${item.title}</h3>
                        <p><strong>Issuer:</strong> ${item.issuer}</p>
                        <p><strong>Issued:</strong> ${item.issued}</p>
                        ${skillsHtml}
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
