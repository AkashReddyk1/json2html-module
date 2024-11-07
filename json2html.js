// json2html.js
export default function json2html(data) {
    // Extract all unique keys across objects to define the table headers
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    // Generate the HTML table as a string
    let html = `<table data-user="akashreddyengineer@gmail.com">\n  <thead>\n    <tr>`;
    html += headers.map(header => `<th>${header}</th>`).join("");
    html += `</tr>\n  </thead>\n  <tbody>\n`;

    // Generate table rows
    data.forEach(row => {
        html += `    <tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += `</tr>\n`;
    });

    html += `  </tbody>\n</table>`;
    return html;
}
