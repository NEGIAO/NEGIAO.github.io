(function () {
	const BUTTON_CLASS = "webgis-back-to-index";
	const BUTTON_TEXT = "返回中转站";
	const BUTTON_HREF = "../index.html";

	function ensureButton() {
		if (document.querySelector(`.${BUTTON_CLASS}`)) return;

		const link = document.createElement("a");
		link.className = BUTTON_CLASS;
		link.href = BUTTON_HREF;
		link.textContent = BUTTON_TEXT;
		link.setAttribute("aria-label", BUTTON_TEXT);

		Object.assign(link.style, {
			position: "fixed",
			top: "16px",
			left: "16px",
			zIndex: "9999",
			padding: "10px 14px",
			background: "#0f172a",
			color: "#fff",
			textDecoration: "none",
			fontFamily: "sans-serif",
			fontSize: "14px",
			borderRadius: "6px",
			boxShadow: "0 2px 8px rgba(0, 0, 0, 0.18)",
		});

		document.body.appendChild(link);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", ensureButton, { once: true });
	} else {
		ensureButton();
	}
})();
