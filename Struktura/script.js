fetch("hraci.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("hraci");

        // projdeme celý JSON objekt
        Object.entries(data.hraci).forEach(([pozice, hraci]) => {
            const section = document.createElement("div");
            section.className = "oblast.section";

            const title = document.createElement("strong");
            title.textContent = pozice.charAt(0).toUpperCase() + pozice.slice(1);

            const list = document.createElement("ul");

            hraci.forEach(jmeno => {
                const li = document.createElement("li");
                li.textContent = jmeno;
                list.appendChild(li);
            });

            section.appendChild(title);
            section.appendChild(list);
            container.appendChild(section);
        });
    })
    .catch(err => console.error("Chyba při načítání JSON:", err));

