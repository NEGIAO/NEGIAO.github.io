import { t as e } from "./basedecoder-hqrck8Ml.js";
var t = class extends e {
	decodeBlock(e) {
		const t = new DataView(e), r = [];
		for (let s = 0; s < e.byteLength; ++s) {
			let e = t.getInt8(s);
			if (e < 0) {
				const n = t.getUint8(s + 1);
				e = -e;
				for (let t = 0; t <= e; ++t) r.push(n);
				s += 1;
			} else {
				for (let n = 0; n <= e; ++n) r.push(t.getUint8(s + n + 1));
				s += e + 1;
			}
		}
		return new Uint8Array(r).buffer;
	}
};
export { t as default };
