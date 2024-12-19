async function replaceWithSvg(imgElement) {
    try {
        const svgUrl = imgElement.getAttribute("src");
        const response = await fetch(svgUrl);
        if (!response.ok) {
            throw new Error(`Unable to fetch SVG: ${response.statusText}`);
        }
        const svgText = await response.text();

        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = svgDocument.querySelector("svg");

        if (!svgElement) {
            throw new Error("The provided url is not a SVG.");
        }

        const computedStyle = window.getComputedStyle(imgElement);
        const imgFillColor = computedStyle.fill || imgElement.getAttribute("fsvg") || "#000";

        const elements = svgElement.querySelectorAll("*");
        elements.forEach((el) => {
            if (el.getAttribute("fill") || computedStyle.fill) {
                el.setAttribute("fill", imgFillColor);
            }
        });

        for (const attr of imgElement.attributes) {
            if (attr.name !== "src") {
                svgElement.setAttribute(attr.name, attr.value);
            }
        }

        imgElement.replaceWith(svgElement);
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const imgElements = document.querySelectorAll("div.fsvg");

    imgElements.forEach((imgElement) => {
        replaceWithSvg(imgElement);
    });
});