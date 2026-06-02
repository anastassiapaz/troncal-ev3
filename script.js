window.addEventListener("DOMContentLoaded", function () {

new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA EN LA UNIACC", x: 3, y: 4210000 },
                    { name: "DISEÑO DE INTERIORES Y AMBIENTES EN LA UNIACC", x: 3, y: 4030000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL EN LA UTEM", x: 4, y: 4763300 },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC", x: 3, y: 4210000 },
                    { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                    { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});

// ── Segundo gráfico: gratuidad por nivel de acreditación ──
// Pregunta: ¿Qué proporción de programas de Diseño ofrece
// gratuidad según el nivel de acreditación de su universidad?

const gratuidad = [
    { acred: 3, gratuidad: false }, // DISEÑO DE IMAGEN - UNIACC
    { acred: 3, gratuidad: false }, // DISEÑO DE INTERIORES - UNIACC
    { acred: 3, gratuidad: true  }, // DISEÑO GRÁFICO MULTIMEDIA - UNIACC (Sí)
    { acred: 4, gratuidad: false }, // DISEÑO - U. VIÑA DEL MAR
    { acred: 4, gratuidad: false }, // DISEÑO EXP. INMERSIVAS - U. GABRIELA MISTRAL
    { acred: 4, gratuidad: false }, // DISEÑO DE VIDEOJUEGOS - U. GABRIELA MISTRAL
    { acred: 4, gratuidad: false }, // DISEÑO EN ANIMACIÓN DIGITAL - U. GABRIELA MISTRAL
    { acred: 4, gratuidad: true  }, // DISEÑO EN COMUNICACIÓN VISUAL - UTEM
    { acred: 4, gratuidad: false }, // DISEÑO EN INTERACCIÓN DIGITAL - U. GABRIELA MISTRAL
    { acred: 4, gratuidad: false }, // DISEÑO EN MARKETING DIGITAL - U. GABRIELA MISTRAL
    { acred: 4, gratuidad: true  }, // DISEÑO INDUSTRIAL - UTEM
    { acred: 5, gratuidad: true  }, // BACHILLERATO ARTES - U. FINIS TERRAE
    { acred: 5, gratuidad: true  }, // DISEÑO - U. CATÓLICA DE TEMUCO
    { acred: 5, gratuidad: true  }, // DISEÑO - U. DE LA SERENA
    { acred: 5, gratuidad: true  }, // DISEÑO - U. DE LAS AMÉRICAS
    { acred: 5, gratuidad: true  }, // DISEÑO - U. DE PLAYA ANCHA
    { acred: 5, gratuidad: true  }, // DISEÑO DE MODA Y MANAGEMENT - U. FINIS TERRAE
    { acred: 5, gratuidad: true  }, // DISEÑO - U. DE LAS AMÉRICAS (2a sede)
    { acred: 5, gratuidad: true  }, // DISEÑO - U. FINIS TERRAE
    { acred: 5, gratuidad: true  }, // DISEÑO GRÁFICO - U. DEL BÍO-BÍO
    { acred: 5, gratuidad: false }, // DISEÑO GRÁFICO MENCIÓN ESTRATÉGICO - U. ANTOFAGASTA
    { acred: 5, gratuidad: true  }, // DISEÑO INDUSTRIAL - U. DEL BÍO-BÍO
    { acred: 5, gratuidad: true  }, // DISEÑO MENCIÓN - U. MAYOR
    { acred: 5, gratuidad: true  }, // INGENIERÍA REALIDAD VIRTUAL - U. BERNARDO O'HIGGINS
    { acred: 6, gratuidad: false }, // BACHILLERATO DISEÑO - U. DEL DESARROLLO
    { acred: 6, gratuidad: true  }, // DISEÑO - U. AUSTRAL DE CHILE
    { acred: 6, gratuidad: true  }, // DISEÑO - U. DE TALCA
    { acred: 6, gratuidad: true  }, // DISEÑO - U. DE VALPARAÍSO
    { acred: 6, gratuidad: false }, // DISEÑO DE JUEGOS DIGITALES - UNAB (Las Condes)
    { acred: 6, gratuidad: false }, // DISEÑO DE JUEGOS DIGITALES - UNAB (Concepción)
    { acred: 6, gratuidad: false }, // DISEÑO DE VESTUARIO Y TEXTIL - UNAB
    { acred: 6, gratuidad: false }, // DISEÑO GRÁFICO - UNAB
    { acred: 6, gratuidad: false }, // DISEÑO - U. DEL DESARROLLO (Santiago)
    { acred: 6, gratuidad: false }, // DISEÑO - U. DEL DESARROLLO (Concepción)
    { acred: 6, gratuidad: true  }, // DISEÑO - U. DIEGO PORTALES
    { acred: 6, gratuidad: true  }, // DISEÑO MULTIMEDIA - U. DE TARAPACÁ
    { acred: 6, gratuidad: true  }, // ING. EN DISEÑO DE PRODUCTOS - UTFSM
    { acred: 6, gratuidad: false }, // ING. EN DISEÑO - U. ADOLFO IBÁÑEZ
    { acred: 6, gratuidad: true  }, // ING. EN FABRICACIÓN Y DISEÑO - UTFSM
    { acred: 7, gratuidad: true  }, // DISEÑO - U. DE CHILE
    { acred: 7, gratuidad: true  }, // DISEÑO EN COMUNICACIÓN VISUAL - USACH
    { acred: 7, gratuidad: true  }, // DISEÑO - PUC
    { acred: 7, gratuidad: true  }, // DISEÑO - PUCV
    { acred: 7, gratuidad: true  }, // DISEÑO INDUSTRIAL - USACH
    { acred: 7, gratuidad: true  }, // DISEÑO TEATRAL - U. DE CHILE
];

const niveles = [3, 4, 5, 6, 7];

const conGratuidad    = niveles.map(n => gratuidad.filter(d => d.acred === n && d.gratuidad).length);
const sinGratuidad    = niveles.map(n => gratuidad.filter(d => d.acred === n && !d.gratuidad).length);
const totalesPorNivel = niveles.map(n => gratuidad.filter(d => d.acred === n).length);

new Chart(document.getElementById("barras"), {
    type: "bar",
    data: {
        labels: niveles.map(n => n + " años"),
        datasets: [
            {
                label: "Con gratuidad",
                data: conGratuidad,
                backgroundColor: "rgba(190,60,15,0.85)",
                borderRadius: 3,
                borderSkipped: false,
            },
            {
                label: "Sin gratuidad",
                data: sinGratuidad,
                backgroundColor: "rgba(241,200,120,0.7)",
                borderRadius: 3,
                borderSkipped: false,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                },
            },
            y: {
                stacked: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    stepSize: 1,
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value : null;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                align: "end",
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                    boxWidth: 12,
                    boxHeight: 12,
                    padding: 16,
                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    title: function (items) {
                        return "Acreditación: " + items[0].label;
                    },
                    label: function (context) {
                        const n = niveles[context.dataIndex];
                        const total = totalesPorNivel[context.dataIndex];
                        const pct = Math.round((context.raw / total) * 100);
                        return context.dataset.label + ": " + context.raw + " programas (" + pct + "%)";
                    },
                    footer: function (items) {
                        return "Total: " + totalesPorNivel[items[0].dataIndex] + " programas";
                    },
                },
            },
        },
    },
});

}); // fin DOMContentLoaded
