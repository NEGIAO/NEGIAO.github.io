import { t as e } from "./basedecoder-hqrck8Ml.js";
var t = class extends e {
	constructor(e) {
		if (super(e), "undefined" == typeof createImageBitmap) throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
		if ("undefined" == typeof document && "undefined" == typeof OffscreenCanvas) throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
	}
	async decodeBlock(e) {
		const t = new Blob([e]), a = await createImageBitmap(t);
		let n;
		"undefined" != typeof document ? (n = document.createElement("canvas"), n.width = a.width, n.height = a.height) : n = new OffscreenCanvas(a.width, a.height);
		const r = n.getContext("2d");
		r.drawImage(a, 0, 0);
		const o = r.getImageData(0, 0, a.width, a.height).data, d = this.parameters.samplesPerPixel || 4;
		if (4 === d) return o.buffer;
		if (3 === d) {
			const e = new Uint8ClampedArray(a.width * a.height * 3);
			for (let t = 0, a = 0; t < e.length; t += 3, a += 4) e[t] = o[a], e[t + 1] = o[a + 1], e[t + 2] = o[a + 2];
			return e.buffer;
		}
		throw new Error(`Unsupported SamplesPerPixel value: ${d}`);
	}
};
export { t as default };
