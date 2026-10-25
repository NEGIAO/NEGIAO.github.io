function e(e, r) {
	let t = e.length - r, o = 0;
	do {
		for (let t = r; t > 0; t--) e[o + r] += e[o], o++;
		t -= r;
	} while (t > 0);
}
function r(e, r, t) {
	let o = 0, n = e.length;
	const i = n / t;
	for (; n > r;) {
		for (let t = r; t > 0; --t) e[o + r] += e[o], ++o;
		n -= r;
	}
	const a = e.slice();
	for (let l = 0; l < i; ++l) for (let r = 0; r < t; ++r) e[t * l + r] = a[(t - r - 1) * i + l];
}
var t = class {
	constructor(e) {
		this.parameters = e;
	}
	decodeBlock(e) {
		throw new Error("decodeBlock not implemented");
	}
	async decode(t) {
		const o = await this.decodeBlock(t), { tileWidth: n, tileHeight: i, predictor: a, bitsPerSample: l, planarConfiguration: s } = this.parameters;
		if (1 !== a) return function(t, o, n, i, a, l) {
			if (!o || 1 === o) return t;
			for (let e = 0; e < a.length; ++e) {
				if (a[e] % 8 != 0) throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
				if (a[e] !== a[0]) throw new Error("When decoding with predictor, all samples must have the same size.");
			}
			const s = a[0] / 8, c = 2 === l ? 1 : a.length;
			for (let h = 0; h < i && !(h * c * n * s >= t.byteLength); ++h) {
				let i;
				if (2 === o) {
					switch (a[0]) {
						case 8:
							i = new Uint8Array(t, h * c * n * s, c * n * s);
							break;
						case 16:
							i = new Uint16Array(t, h * c * n * s, c * n * s / 2);
							break;
						case 32:
							i = new Uint32Array(t, h * c * n * s, c * n * s / 4);
							break;
						default: throw new Error(`Predictor 2 not allowed with ${a[0]} bits per sample.`);
					}
					e(i, c);
				} else 3 === o && (i = new Uint8Array(t, h * c * n * s, c * n * s), r(i, c, s));
			}
			return t;
		}(o, a, n, i, Array.isArray(l) || ArrayBuffer.isView(l) ? Array.from(l) : [l], s);
		return o;
	}
};
export { t };
