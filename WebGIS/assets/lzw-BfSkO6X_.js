import { t } from "./basedecoder-hqrck8Ml.js";
function n(t, n) {
	for (let r = n.length - 1; r >= 0; r--) t.push(n[r]);
	return t;
}
function r(t) {
	const r = /* @__PURE__ */ new Uint16Array(4093), e = /* @__PURE__ */ new Uint8Array(4093);
	for (let n = 0; n <= 257; n++) r[n] = 4096, e[n] = n;
	let o = 258, i = 9, c = 0;
	function f() {
		o = 258, i = 9;
	}
	function s(t) {
		const n = function(t, n, r) {
			const e = n % 8, o = Math.floor(n / 8), i = 8 - e, c = n + r - 8 * (o + 1);
			let f = 8 * (o + 2) - (n + r);
			const s = 8 * (o + 2) - n;
			if (f = Math.max(0, f), o >= t.length) return 257;
			let l = t[o] & 2 ** (8 - e) - 1;
			l <<= r - i;
			let u = l;
			if (o + 1 < t.length) {
				let n = t[o + 1] >>> f;
				n <<= Math.max(0, r - s), u += n;
			}
			if (c > 8 && o + 2 < t.length) {
				const e = 8 * (o + 3) - (n + r);
				u += t[o + 2] >>> e;
			}
			return u;
		}(t, c, i);
		return c += i, n;
	}
	function l(t, n) {
		return e[o] = n, r[o] = t, o++, o - 1;
	}
	function u(t) {
		const n = [];
		for (let o = t; 4096 !== o; o = r[o]) n.push(e[o]);
		return n;
	}
	const a = [];
	f();
	const h = new Uint8Array(t);
	let d, w = s(h);
	for (; 257 !== w;) {
		if (256 === w) {
			for (f(), w = s(h); 256 === w;) w = s(h);
			if (257 === w) break;
			if (w > 256) throw new Error(`corrupted code at scanline ${w}`);
			n(a, u(w)), d = w;
		} else if (w < o) {
			const t = u(w);
			n(a, t), void 0 !== d && l(d, t[t.length - 1]), d = w;
		} else {
			if (void 0 === d) throw new Error(`Invalid LZW code: ${w} with no previous code`);
			const t = u(d);
			if (!t) throw new Error(`Bogus entry. Not in dictionary, ${d} / ${o}, position: ${c}`);
			n(a, t), a.push(t[t.length - 1]), l(d, t[t.length - 1]), d = w;
		}
		o + 1 >= 2 ** i && (12 === i ? d = void 0 : i++), w = s(h);
	}
	return new Uint8Array(a);
}
var e = class extends t {
	decodeBlock(t) {
		return r(t).buffer;
	}
};
export { e as default };
