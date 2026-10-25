function t(t) {
	let e = t.length;
	for (; --e >= 0;) t[e] = 0;
}
const e = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0
]), a = new Uint8Array([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13
]), i = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	2,
	3,
	7
]), n = new Uint8Array([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), s = new Array(576);
t(s);
const r = new Array(60);
t(r);
const o = new Array(512);
t(o);
const l = new Array(256);
t(l);
const h = new Array(29);
t(h);
const _ = new Array(30);
function d(t, e, a, i, n) {
	this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = i, this.max_length = n, this.has_stree = t && t.length;
}
let c, u, f;
function w(t, e) {
	this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
}
t(_);
const m = (t) => t < 256 ? o[t] : o[256 + (t >>> 7)], b = (t, e) => {
	t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
}, g = (t, e, a) => {
	t.bi_valid > 16 - a ? (t.bi_buf |= e << t.bi_valid & 65535, b(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += a - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a);
}, p = (t, e, a) => {
	g(t, a[2 * e], a[2 * e + 1]);
}, k = (t, e) => {
	let a = 0;
	do
		a |= 1 & t, t >>>= 1, a <<= 1;
	while (--e > 0);
	return a >>> 1;
}, v = (t, e, a) => {
	const i = new Array(16);
	let n, s, r = 0;
	for (n = 1; n <= 15; n++) r = r + a[n - 1] << 1, i[n] = r;
	for (s = 0; s <= e; s++) {
		let e = t[2 * s + 1];
		0 !== e && (t[2 * s] = k(i[e]++, e));
	}
}, y = (t) => {
	let e = 0;
	for (; e < 286; e++) t.dyn_ltree[2 * e] = 0;
	for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
	for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
	t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.sym_next = t.matches = 0;
}, x = (t) => {
	t.bi_valid > 8 ? b(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
}, z = (t, e, a, i) => {
	const n = 2 * e, s = 2 * a;
	return t[n] < t[s] || t[n] === t[s] && i[e] <= i[a];
}, A = (t, e, a) => {
	const i = t.heap[a];
	let n = a << 1;
	for (; n <= t.heap_len && (n < t.heap_len && z(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !z(e, i, t.heap[n], t.depth));) t.heap[a] = t.heap[n], a = n, n <<= 1;
	t.heap[a] = i;
}, E = (t, i, n) => {
	let s, r, o, d, c = 0;
	if (0 !== t.sym_next) do
		s = 255 & t.pending_buf[t.sym_buf + c++], s += (255 & t.pending_buf[t.sym_buf + c++]) << 8, r = t.pending_buf[t.sym_buf + c++], 0 === s ? p(t, r, i) : (o = l[r], p(t, o + 256 + 1, i), d = e[o], 0 !== d && (r -= h[o], g(t, r, d)), s--, o = m(s), p(t, o, n), d = a[o], 0 !== d && (s -= _[o], g(t, s, d)));
	while (c < t.sym_next);
	p(t, 256, i);
}, R = (t, e) => {
	const a = e.dyn_tree, i = e.stat_desc.static_tree, n = e.stat_desc.has_stree, s = e.stat_desc.elems;
	let r, o, l, h = -1;
	for (t.heap_len = 0, t.heap_max = 573, r = 0; r < s; r++) 0 !== a[2 * r] ? (t.heap[++t.heap_len] = h = r, t.depth[r] = 0) : a[2 * r + 1] = 0;
	for (; t.heap_len < 2;) l = t.heap[++t.heap_len] = h < 2 ? ++h : 0, a[2 * l] = 1, t.depth[l] = 0, t.opt_len--, n && (t.static_len -= i[2 * l + 1]);
	for (e.max_code = h, r = t.heap_len >> 1; r >= 1; r--) A(t, a, r);
	l = s;
	do
		r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], A(t, a, 1), o = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = o, a[2 * l] = a[2 * r] + a[2 * o], t.depth[l] = (t.depth[r] >= t.depth[o] ? t.depth[r] : t.depth[o]) + 1, a[2 * r + 1] = a[2 * o + 1] = l, t.heap[1] = l++, A(t, a, 1);
	while (t.heap_len >= 2);
	t.heap[--t.heap_max] = t.heap[1], ((t, e) => {
		const a = e.dyn_tree, i = e.max_code, n = e.stat_desc.static_tree, s = e.stat_desc.has_stree, r = e.stat_desc.extra_bits, o = e.stat_desc.extra_base, l = e.stat_desc.max_length;
		let h, _, d, c, u, f, w = 0;
		for (c = 0; c <= 15; c++) t.bl_count[c] = 0;
		for (a[2 * t.heap[t.heap_max] + 1] = 0, h = t.heap_max + 1; h < 573; h++) _ = t.heap[h], c = a[2 * a[2 * _ + 1] + 1] + 1, c > l && (c = l, w++), a[2 * _ + 1] = c, _ > i || (t.bl_count[c]++, u = 0, _ >= o && (u = r[_ - o]), f = a[2 * _], t.opt_len += f * (c + u), s && (t.static_len += f * (n[2 * _ + 1] + u)));
		if (0 !== w) {
			do {
				for (c = l - 1; 0 === t.bl_count[c];) c--;
				t.bl_count[c]--, t.bl_count[c + 1] += 2, t.bl_count[l]--, w -= 2;
			} while (w > 0);
			for (c = l; 0 !== c; c--) for (_ = t.bl_count[c]; 0 !== _;) d = t.heap[--h], d > i || (a[2 * d + 1] !== c && (t.opt_len += (c - a[2 * d + 1]) * a[2 * d], a[2 * d + 1] = c), _--);
		}
	})(t, e), v(a, h, t.bl_count);
}, Z = (t, e, a) => {
	let i, n, s = -1, r = e[1], o = 0, l = 7, h = 4;
	for (0 === r && (l = 138, h = 3), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++) n = r, r = e[2 * (i + 1) + 1], ++o < l && n === r || (o < h ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, s = n, 0 === r ? (l = 138, h = 3) : n === r ? (l = 6, h = 3) : (l = 7, h = 4));
}, U = (t, e, a) => {
	let i, n, s = -1, r = e[1], o = 0, l = 7, h = 4;
	for (0 === r && (l = 138, h = 3), i = 0; i <= a; i++) if (n = r, r = e[2 * (i + 1) + 1], !(++o < l && n === r)) {
		if (o < h) do
			p(t, n, t.bl_tree);
		while (0 !== --o);
		else 0 !== n ? (n !== s && (p(t, n, t.bl_tree), o--), p(t, 16, t.bl_tree), g(t, o - 3, 2)) : o <= 10 ? (p(t, 17, t.bl_tree), g(t, o - 3, 3)) : (p(t, 18, t.bl_tree), g(t, o - 11, 7));
		o = 0, s = n, 0 === r ? (l = 138, h = 3) : n === r ? (l = 6, h = 3) : (l = 7, h = 4);
	}
};
let S = !1;
const T = (t, e, a, i) => {
	g(t, 0 + (i ? 1 : 0), 3), x(t), b(t, a), b(t, ~a), a && t.pending_buf.set(t.window.subarray(e, e + a), t.pending), t.pending += a;
};
var D = {
	_tr_init: (t) => {
		S || ((() => {
			let t, n, w, m, b;
			const g = new Array(16);
			for (w = 0, m = 0; m < 28; m++) for (h[m] = w, t = 0; t < 1 << e[m]; t++) l[w++] = m;
			for (l[w - 1] = m, b = 0, m = 0; m < 16; m++) for (_[m] = b, t = 0; t < 1 << a[m]; t++) o[b++] = m;
			for (b >>= 7; m < 30; m++) for (_[m] = b << 7, t = 0; t < 1 << a[m] - 7; t++) o[256 + b++] = m;
			for (n = 0; n <= 15; n++) g[n] = 0;
			for (t = 0; t <= 143;) s[2 * t + 1] = 8, t++, g[8]++;
			for (; t <= 255;) s[2 * t + 1] = 9, t++, g[9]++;
			for (; t <= 279;) s[2 * t + 1] = 7, t++, g[7]++;
			for (; t <= 287;) s[2 * t + 1] = 8, t++, g[8]++;
			for (v(s, 287, g), t = 0; t < 30; t++) r[2 * t + 1] = 5, r[2 * t] = k(t, 5);
			c = new d(s, e, 257, 286, 15), u = new d(r, a, 0, 30, 15), f = new d(new Array(0), i, 0, 19, 7);
		})(), S = !0), t.l_desc = new w(t.dyn_ltree, c), t.d_desc = new w(t.dyn_dtree, u), t.bl_desc = new w(t.bl_tree, f), t.bi_buf = 0, t.bi_valid = 0, y(t);
	},
	_tr_stored_block: T,
	_tr_flush_block: (t, e, a, i) => {
		let o, l, h = 0;
		t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = ((t) => {
			let e = 4093624447, a = 0;
			for (; a <= 31; a++, e >>>= 1) if (1 & e && 0 !== t.dyn_ltree[2 * a]) return 0;
			if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
			for (a = 32; a < 256; a++) if (0 !== t.dyn_ltree[2 * a]) return 1;
			return 0;
		})(t)), R(t, t.l_desc), R(t, t.d_desc), h = ((t) => {
			let e;
			for (Z(t, t.dyn_ltree, t.l_desc.max_code), Z(t, t.dyn_dtree, t.d_desc.max_code), R(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * n[e] + 1]; e--);
			return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
		})(t), o = t.opt_len + 3 + 7 >>> 3, l = t.static_len + 3 + 7 >>> 3, l <= o && (o = l)) : o = l = a + 5, a + 4 <= o && -1 !== e ? T(t, e, a, i) : 4 === t.strategy || l === o ? (g(t, 2 + (i ? 1 : 0), 3), E(t, s, r)) : (g(t, 4 + (i ? 1 : 0), 3), ((t, e, a, i) => {
			let s;
			for (g(t, e - 257, 5), g(t, a - 1, 5), g(t, i - 4, 4), s = 0; s < i; s++) g(t, t.bl_tree[2 * n[s] + 1], 3);
			U(t, t.dyn_ltree, e - 1), U(t, t.dyn_dtree, a - 1);
		})(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, h + 1), E(t, t.dyn_ltree, t.dyn_dtree)), y(t), i && x(t);
	},
	_tr_tally: (t, e, a) => (t.pending_buf[t.sym_buf + t.sym_next++] = e, t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8, t.pending_buf[t.sym_buf + t.sym_next++] = a, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (l[a] + 256 + 1)]++, t.dyn_dtree[2 * m(e)]++), t.sym_next === t.sym_end),
	_tr_align: (t) => {
		g(t, 2, 3), p(t, 256, s), ((t) => {
			16 === t.bi_valid ? (b(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
		})(t);
	}
};
var O = (t, e, a, i) => {
	let n = 65535 & t, s = t >>> 16 & 65535, r = 0;
	for (; 0 !== a;) {
		r = a > 2e3 ? 2e3 : a, a -= r;
		do
			n = n + e[i++] | 0, s = s + n | 0;
		while (--r);
		n %= 65521, s %= 65521;
	}
	return n | s << 16;
};
const F = new Uint32Array((() => {
	let t, e = [];
	for (var a = 0; a < 256; a++) {
		t = a;
		for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
		e[a] = t;
	}
	return e;
})());
var L = (t, e, a, i) => {
	const n = F, s = i + a;
	t ^= -1;
	for (let r = i; r < s; r++) t = t >>> 8 ^ n[255 & (t ^ e[r])];
	return -1 ^ t;
}, B = {
	2: "need dictionary",
	1: "stream end",
	0: "",
	"-1": "file error",
	"-2": "stream error",
	"-3": "data error",
	"-4": "insufficient memory",
	"-5": "buffer error",
	"-6": "incompatible version"
}, N = {
	Z_NO_FLUSH: 0,
	Z_PARTIAL_FLUSH: 1,
	Z_SYNC_FLUSH: 2,
	Z_FULL_FLUSH: 3,
	Z_FINISH: 4,
	Z_BLOCK: 5,
	Z_TREES: 6,
	Z_OK: 0,
	Z_STREAM_END: 1,
	Z_NEED_DICT: 2,
	Z_ERRNO: -1,
	Z_STREAM_ERROR: -2,
	Z_DATA_ERROR: -3,
	Z_MEM_ERROR: -4,
	Z_BUF_ERROR: -5,
	Z_NO_COMPRESSION: 0,
	Z_BEST_SPEED: 1,
	Z_BEST_COMPRESSION: 9,
	Z_DEFAULT_COMPRESSION: -1,
	Z_FILTERED: 1,
	Z_HUFFMAN_ONLY: 2,
	Z_RLE: 3,
	Z_FIXED: 4,
	Z_DEFAULT_STRATEGY: 0,
	Z_BINARY: 0,
	Z_TEXT: 1,
	Z_UNKNOWN: 2,
	Z_DEFLATED: 8
};
const { _tr_init: I, _tr_stored_block: C, _tr_flush_block: M, _tr_tally: H, _tr_align: j } = D, { Z_NO_FLUSH: K, Z_PARTIAL_FLUSH: P, Z_FULL_FLUSH: Y, Z_FINISH: G, Z_BLOCK: X, Z_OK: W, Z_STREAM_END: q, Z_STREAM_ERROR: J, Z_DATA_ERROR: Q, Z_BUF_ERROR: V, Z_DEFAULT_COMPRESSION: $, Z_FILTERED: tt, Z_HUFFMAN_ONLY: et, Z_RLE: at, Z_FIXED: it, Z_DEFAULT_STRATEGY: nt, Z_UNKNOWN: st, Z_DEFLATED: rt } = N, ot = 258, lt = 262, ht = 42, _t = 113, dt = 666, ct = (t, e) => (t.msg = B[e], e), ut = (t) => 2 * t - (t > 4 ? 9 : 0), ft = (t) => {
	let e = t.length;
	for (; --e >= 0;) t[e] = 0;
}, wt = (t) => {
	let e, a, i, n = t.w_size;
	e = t.hash_size, i = e;
	do
		a = t.head[--i], t.head[i] = a >= n ? a - n : 0;
	while (--e);
	e = n, i = e;
	do
		a = t.prev[--i], t.prev[i] = a >= n ? a - n : 0;
	while (--e);
};
let mt = (t, e, a) => (e << t.hash_shift ^ a) & t.hash_mask;
const bt = (t, e) => {
	let a;
	if (t.legacy_hash) a = t.ins_h = mt(t, t.ins_h, t.window[e + 3 - 1]);
	else {
		const i = t.window, n = i[e] | i[e + 1] << 8 | i[e + 2] << 16 | i[e + 3] << 24;
		a = t.ins_h = Math.imul(n, 66521) + 66521 >>> 16 & t.hash_mask;
	}
	const i = t.prev[e & t.w_mask] = t.head[a];
	return t.head[a] = e, i;
}, gt = (t) => {
	const e = t.state;
	let a = e.pending;
	a > t.avail_out && (a = t.avail_out), 0 !== a && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + a), t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0));
}, pt = (t, e) => {
	M(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, gt(t.strm);
}, kt = (t, e) => {
	t.pending_buf[t.pending++] = e;
}, vt = (t, e) => {
	t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
}, yt = (t, e, a, i) => {
	let n = t.avail_in;
	return n > i && (n = i), 0 === n ? 0 : (t.avail_in -= n, e.set(t.input.subarray(t.next_in, t.next_in + n), a), 1 === t.state.wrap ? t.adler = O(t.adler, e, n, a) : 2 === t.state.wrap && (t.adler = L(t.adler, e, n, a)), t.next_in += n, t.total_in += n, n);
}, xt = (t, e) => {
	let a, i, n = t.max_chain_length, s = t.strstart, r = t.prev_length, o = t.nice_match;
	const l = t.strstart > t.w_size - lt ? t.strstart - (t.w_size - lt) : 0, h = t.window, _ = t.w_mask, d = t.prev, c = t.strstart + ot;
	let u = h[s + r - 1], f = h[s + r];
	t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
	do
		if (a = e, h[a + r] === f && h[a + r - 1] === u && h[a] === h[s] && h[++a] === h[s + 1]) {
			s += 2, a++;
			do;
			while (h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && s < c);
			if (i = ot - (c - s), s = c - ot, i > r) {
				if (t.match_start = e, r = i, i >= o) break;
				u = h[s + r - 1], f = h[s + r];
			}
		}
	while ((e = d[e & _]) > l && 0 !== --n);
	return r <= t.lookahead ? r : t.lookahead;
}, zt = (t) => {
	const e = t.w_size;
	let a, i, n;
	do {
		if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - lt) && (t.window.set(t.window.subarray(e, e + e - i), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, t.insert > t.strstart && (t.insert = t.strstart), wt(t), i += e), 0 === t.strm.avail_in) break;
		if (a = yt(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += a, t.legacy_hash) {
			if (t.lookahead + t.insert >= 3) for (n = t.strstart - t.insert, t.ins_h = t.window[n], t.ins_h = mt(t, t.ins_h, t.window[n + 1]); t.insert && (bt(t, n), n++, t.insert--, !(t.lookahead + t.insert < 3)););
		} else if (t.lookahead + t.insert > 3) for (n = t.strstart - t.insert; t.insert && (bt(t, n), n++, t.insert--, !(t.lookahead + t.insert <= 3)););
	} while (t.lookahead < lt && 0 !== t.strm.avail_in);
}, At = (t, e) => {
	let a, i, n, s = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, r = 0, o = t.strm.avail_in;
	do {
		if (a = 65535, n = t.bi_valid + 42 >> 3, t.strm.avail_out < n) break;
		if (n = t.strm.avail_out - n, i = t.strstart - t.block_start, a > i + t.strm.avail_in && (a = i + t.strm.avail_in), a > n && (a = n), a < s && (0 === a && e !== G || e === K || a !== i + t.strm.avail_in)) break;
		r = e === G && a === i + t.strm.avail_in ? 1 : 0, C(t, 0, 0, r), t.pending_buf[t.pending - 4] = a, t.pending_buf[t.pending - 3] = a >> 8, t.pending_buf[t.pending - 2] = ~a, t.pending_buf[t.pending - 1] = ~a >> 8, gt(t.strm), i && (i > a && (i = a), t.strm.output.set(t.window.subarray(t.block_start, t.block_start + i), t.strm.next_out), t.strm.next_out += i, t.strm.avail_out -= i, t.strm.total_out += i, t.block_start += i, a -= i), a && (yt(t.strm, t.strm.output, t.strm.next_out, a), t.strm.next_out += a, t.strm.avail_out -= a, t.strm.total_out += a);
	} while (0 === r);
	return o -= t.strm.avail_in, o && (o >= t.w_size ? (t.matches = 2, t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0), t.strstart = t.w_size, t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, t.insert > t.strstart && (t.insert = t.strstart)), t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart), t.strstart += o, t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o), t.block_start = t.strstart), t.high_water < t.strstart && (t.high_water = t.strstart), r ? 4 : e !== K && e !== G && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (n = t.window_size - t.strstart, t.strm.avail_in > n && t.block_start >= t.w_size && (t.block_start -= t.w_size, t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, n += t.w_size, t.insert > t.strstart && (t.insert = t.strstart)), n > t.strm.avail_in && (n = t.strm.avail_in), n && (yt(t.strm, t.window, t.strstart, n), t.strstart += n, t.insert += n > t.w_size - t.insert ? t.w_size - t.insert : n), t.high_water < t.strstart && (t.high_water = t.strstart), n = t.bi_valid + 42 >> 3, n = t.pending_buf_size - n > 65535 ? 65535 : t.pending_buf_size - n, s = n > t.w_size ? t.w_size : n, i = t.strstart - t.block_start, (i >= s || (i || e === G) && e !== K && 0 === t.strm.avail_in && i <= n) && (a = i > n ? n : i, r = e === G && 0 === t.strm.avail_in && a === i ? 1 : 0, C(t, t.block_start, a, r), t.block_start += a, gt(t.strm)), r ? 3 : 1);
}, Et = (t, e) => {
	let a, i;
	for (;;) {
		if (t.lookahead < lt) {
			if (zt(t), t.lookahead < lt && e === K) return 1;
			if (0 === t.lookahead) break;
		}
		if (a = 0, t.lookahead >= 3 && (a = bt(t, t.strstart)), 0 !== a && t.strstart - a <= t.w_size - lt && (t.match_length = xt(t, a)), t.match_length >= 3) if (i = H(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
			t.match_length--;
			do
				t.strstart++, a = bt(t, t.strstart);
			while (0 !== --t.match_length);
			t.strstart++;
		} else t.strstart += t.match_length, t.match_length = 0, t.legacy_hash && (t.ins_h = t.window[t.strstart], t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 1]));
		else i = H(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
		if (i && (pt(t, !1), 0 === t.strm.avail_out)) return 1;
	}
	return t.insert = t.strstart < 2 ? t.strstart : 2, e === G ? (pt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (pt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
}, Rt = (t, e) => {
	let a, i, n;
	for (;;) {
		if (t.lookahead < lt) {
			if (zt(t), t.lookahead < lt && e === K) return 1;
			if (0 === t.lookahead) break;
		}
		if (a = 0, t.lookahead >= 3 && (a = bt(t, t.strstart)), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - lt && (t.match_length = xt(t, a), t.match_length <= 5 && (t.strategy === tt || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
			n = t.strstart + t.lookahead - 3, i = H(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
			do
				++t.strstart <= n && (a = bt(t, t.strstart));
			while (0 !== --t.prev_length);
			if (t.match_available = 0, t.match_length = 2, t.strstart++, i && (pt(t, !1), 0 === t.strm.avail_out)) return 1;
		} else if (t.match_available) {
			if (i = H(t, 0, t.window[t.strstart - 1]), i && pt(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1;
		} else t.match_available = 1, t.strstart++, t.lookahead--;
	}
	return t.match_available && (i = H(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === G ? (pt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (pt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
};
function Zt(t, e, a, i, n) {
	this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = i, this.func = n;
}
const Ut = [
	new Zt(0, 0, 0, 0, At),
	new Zt(4, 4, 8, 4, Et),
	new Zt(4, 5, 16, 8, Et),
	new Zt(4, 6, 32, 32, Et),
	new Zt(4, 4, 16, 16, Rt),
	new Zt(8, 16, 32, 32, Rt),
	new Zt(8, 16, 128, 128, Rt),
	new Zt(8, 32, 128, 256, Rt),
	new Zt(32, 128, 258, 1024, Rt),
	new Zt(32, 258, 258, 4096, Rt)
];
function St() {
	this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = rt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.legacy_hash = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = /* @__PURE__ */ new Uint16Array(1146), this.dyn_dtree = /* @__PURE__ */ new Uint16Array(122), this.bl_tree = /* @__PURE__ */ new Uint16Array(78), ft(this.dyn_ltree), ft(this.dyn_dtree), ft(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = /* @__PURE__ */ new Uint16Array(16), this.heap = /* @__PURE__ */ new Uint16Array(573), ft(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = /* @__PURE__ */ new Uint16Array(573), ft(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Tt = (t) => {
	if (!t) return 1;
	const e = t.state;
	return !e || e.strm !== t || e.status !== ht && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== _t && e.status !== dt ? 1 : 0;
}, Dt = (t) => {
	if (Tt(t)) return ct(t, J);
	t.total_in = t.total_out = 0, t.data_type = st;
	const e = t.state;
	return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = 2 === e.wrap ? 57 : e.wrap ? ht : _t, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = -2, I(e), W;
}, Ot = (t) => {
	const e = Dt(t);
	var a;
	return e === W && ((a = t.state).window_size = 2 * a.w_size, ft(a.head), a.max_lazy_match = Ut[a.level].max_lazy, a.good_match = Ut[a.level].good_length, a.nice_match = Ut[a.level].nice_length, a.max_chain_length = Ut[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = 2, a.match_available = 0, a.ins_h = 0), e;
}, Ft = (t, e, a, i, n, s, r) => {
	if (!t) return J;
	let o = 1;
	if (e === $ && (e = 6), i < 0 ? (o = 0, i = -i) : i > 15 && (o = 2, i -= 16), n < 1 || n > 9 || a !== rt || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > it || 8 === i && 1 !== o) return ct(t, J);
	8 === i && (i = 9);
	const l = new St();
	return t.state = l, l.strm = t, l.status = ht, l.wrap = o, l.gzhead = null, l.w_bits = i, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.legacy_hash = r ? 1 : 0, l.hash_bits = n + 7, !l.legacy_hash && l.hash_bits < 15 && (l.hash_bits = 15), l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3), l.window = new Uint8Array(2 * l.w_size), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << n + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new Uint8Array(l.pending_buf_size), l.sym_buf = l.lit_bufsize, l.sym_end = 3 * (l.lit_bufsize - 1), l.level = e, l.strategy = s, l.method = a, Ot(t);
};
var Lt = Ft, Bt = (t, e) => Tt(t) || 2 !== t.state.wrap ? J : (t.state.gzhead = e, W), Nt = (t, e) => {
	if (Tt(t) || e > X || e < 0) return t ? ct(t, J) : J;
	const a = t.state;
	if (!t.output || 0 !== t.avail_in && !t.input || a.status === dt && e !== G) return ct(t, 0 === t.avail_out ? V : J);
	const i = a.last_flush;
	if (a.last_flush = e, 0 !== a.pending) {
		if (gt(t), 0 === t.avail_out) return a.last_flush = -1, W;
	} else if (0 === t.avail_in && ut(e) <= ut(i) && e !== G) return ct(t, V);
	if (a.status === dt && 0 !== t.avail_in) return ct(t, V);
	if (a.status === ht && 0 === a.wrap && (a.status = _t), a.status === ht) {
		let e = rt + (a.w_bits - 8 << 4) << 8, i = -1;
		if (i = a.strategy >= et || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3, e |= i << 6, 0 !== a.strstart && (e |= 32), e += 31 - e % 31, vt(a, e), 0 !== a.strstart && (vt(a, t.adler >>> 16), vt(a, 65535 & t.adler)), t.adler = 1, a.status = _t, gt(t), 0 !== a.pending) return a.last_flush = -1, W;
	}
	if (57 === a.status) {
		if (t.adler = 0, kt(a, 31), kt(a, 139), kt(a, 8), a.gzhead) kt(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), kt(a, 255 & a.gzhead.time), kt(a, a.gzhead.time >> 8 & 255), kt(a, a.gzhead.time >> 16 & 255), kt(a, a.gzhead.time >> 24 & 255), kt(a, 9 === a.level ? 2 : a.strategy >= et || a.level < 2 ? 4 : 0), kt(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (kt(a, 255 & a.gzhead.extra.length), kt(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (t.adler = L(t.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69;
		else if (kt(a, 0), kt(a, 0), kt(a, 0), kt(a, 0), kt(a, 0), kt(a, 9 === a.level ? 2 : a.strategy >= et || a.level < 2 ? 4 : 0), kt(a, 3), a.status = _t, gt(t), 0 !== a.pending) return a.last_flush = -1, W;
	}
	if (69 === a.status) {
		if (a.gzhead.extra) {
			let e = a.pending, i = (65535 & a.gzhead.extra.length) - a.gzindex;
			for (; a.pending + i > a.pending_buf_size;) {
				let n = a.pending_buf_size - a.pending;
				if (a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex, a.gzindex + n), a.pending), a.pending = a.pending_buf_size, a.gzhead.hcrc && a.pending > e && (t.adler = L(t.adler, a.pending_buf, a.pending - e, e)), a.gzindex += n, gt(t), 0 !== a.pending) return a.last_flush = -1, W;
				e = 0, i -= n;
			}
			let n = new Uint8Array(a.gzhead.extra);
			a.pending_buf.set(n.subarray(a.gzindex, a.gzindex + i), a.pending), a.pending += i, a.gzhead.hcrc && a.pending > e && (t.adler = L(t.adler, a.pending_buf, a.pending - e, e)), a.gzindex = 0;
		}
		a.status = 73;
	}
	if (73 === a.status) {
		if (a.gzhead.name) {
			let e, i = a.pending;
			do {
				if (a.pending === a.pending_buf_size) {
					if (a.gzhead.hcrc && a.pending > i && (t.adler = L(t.adler, a.pending_buf, a.pending - i, i)), gt(t), 0 !== a.pending) return a.last_flush = -1, W;
					i = 0;
				}
				e = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, kt(a, e);
			} while (0 !== e);
			a.gzhead.hcrc && a.pending > i && (t.adler = L(t.adler, a.pending_buf, a.pending - i, i)), a.gzindex = 0;
		}
		a.status = 91;
	}
	if (91 === a.status) {
		if (a.gzhead.comment) {
			let e, i = a.pending;
			do {
				if (a.pending === a.pending_buf_size) {
					if (a.gzhead.hcrc && a.pending > i && (t.adler = L(t.adler, a.pending_buf, a.pending - i, i)), gt(t), 0 !== a.pending) return a.last_flush = -1, W;
					i = 0;
				}
				e = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, kt(a, e);
			} while (0 !== e);
			a.gzhead.hcrc && a.pending > i && (t.adler = L(t.adler, a.pending_buf, a.pending - i, i));
		}
		a.status = 103;
	}
	if (103 === a.status) {
		if (a.gzhead.hcrc) {
			if (a.pending + 2 > a.pending_buf_size && (gt(t), 0 !== a.pending)) return a.last_flush = -1, W;
			kt(a, 255 & t.adler), kt(a, t.adler >> 8 & 255), t.adler = 0;
		}
		if (a.status = _t, gt(t), 0 !== a.pending) return a.last_flush = -1, W;
	}
	if (0 !== t.avail_in || 0 !== a.lookahead || e !== K && a.status !== dt) {
		let i = 0 === a.level ? At(a, e) : a.strategy === et ? ((t, e) => {
			let a;
			for (;;) {
				if (0 === t.lookahead && (zt(t), 0 === t.lookahead)) {
					if (e === K) return 1;
					break;
				}
				if (t.match_length = 0, a = H(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (pt(t, !1), 0 === t.strm.avail_out)) return 1;
			}
			return t.insert = 0, e === G ? (pt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (pt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
		})(a, e) : a.strategy === at ? ((t, e) => {
			let a, i, n, s;
			const r = t.window;
			for (;;) {
				if (t.lookahead <= ot) {
					if (zt(t), t.lookahead <= ot && e === K) return 1;
					if (0 === t.lookahead) break;
				}
				if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (n = t.strstart - 1, i = r[n], i === r[++n] && i === r[++n] && i === r[++n])) {
					s = t.strstart + ot;
					do;
					while (i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && n < s);
					t.match_length = ot - (s - n), t.match_length > t.lookahead && (t.match_length = t.lookahead);
				}
				if (t.match_length >= 3 ? (a = H(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = H(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (pt(t, !1), 0 === t.strm.avail_out)) return 1;
			}
			return t.insert = 0, e === G ? (pt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (pt(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
		})(a, e) : Ut[a.level].func(a, e);
		if (3 !== i && 4 !== i || (a.status = dt), 1 === i || 3 === i) return 0 === t.avail_out && (a.last_flush = -1), W;
		if (2 === i && (e === P ? j(a) : e !== X && (C(a, 0, 0, !1), e === Y && (ft(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), gt(t), 0 === t.avail_out)) return a.last_flush = -1, W;
	}
	return e !== G ? W : a.wrap <= 0 ? q : (2 === a.wrap ? (kt(a, 255 & t.adler), kt(a, t.adler >> 8 & 255), kt(a, t.adler >> 16 & 255), kt(a, t.adler >> 24 & 255), kt(a, 255 & t.total_in), kt(a, t.total_in >> 8 & 255), kt(a, t.total_in >> 16 & 255), kt(a, t.total_in >> 24 & 255)) : (vt(a, t.adler >>> 16), vt(a, 65535 & t.adler)), gt(t), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? W : q);
}, It = (t) => {
	if (Tt(t)) return J;
	const e = t.state.status;
	return t.state = null, e === _t ? ct(t, Q) : W;
}, Ct = (t, e) => {
	let a = e.length;
	if (Tt(t)) return J;
	const i = t.state, n = i.wrap;
	if (2 === n || 1 === n && i.status !== ht || i.lookahead) return J;
	if (1 === n && (t.adler = O(t.adler, e, a, 0)), i.wrap = 0, a >= i.w_size) {
		0 === n && (ft(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
		let t = new Uint8Array(i.w_size);
		t.set(e.subarray(a - i.w_size, a), 0), e = t, a = i.w_size;
	}
	const s = t.avail_in, r = t.next_in, o = t.input;
	for (t.avail_in = a, t.next_in = 0, t.input = e, zt(i); i.lookahead >= 3;) {
		let t = i.strstart, e = i.lookahead - 2;
		do
			bt(i, t), t++;
		while (--e);
		i.strstart = t, i.lookahead = 2, zt(i);
	}
	return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, t.next_in = r, t.input = o, t.avail_in = s, i.wrap = n, W;
};
const Mt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var Ht = function(t) {
	const e = Array.prototype.slice.call(arguments, 1);
	for (; e.length;) {
		const a = e.shift();
		if (a) {
			if ("object" != typeof a) throw new TypeError(a + "must be non-object");
			for (const e in a) Mt(a, e) && (t[e] = a[e]);
		}
	}
	return t;
}, jt = (t) => {
	let e = 0;
	for (let i = 0, n = t.length; i < n; i++) e += t[i].length;
	const a = new Uint8Array(e);
	for (let i = 0, n = 0, s = t.length; i < s; i++) {
		let e = t[i];
		a.set(e, n), n += e.length;
	}
	return a;
};
let Kt = !0;
try {
	String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
} catch (za) {
	Kt = !1;
}
const Pt = /* @__PURE__ */ new Uint8Array(256);
for (let Aa = 0; Aa < 256; Aa++) Pt[Aa] = Aa >= 252 ? 6 : Aa >= 248 ? 5 : Aa >= 240 ? 4 : Aa >= 224 ? 3 : Aa >= 192 ? 2 : 1;
Pt[254] = Pt[255] = 1;
var Yt = (t) => {
	if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t);
	let e, a, i, n, s, r = t.length, o = 0;
	for (n = 0; n < r; n++) a = t.charCodeAt(n), 55296 == (64512 & a) && n + 1 < r && (i = t.charCodeAt(n + 1), 56320 == (64512 & i) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++)), o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
	for (e = new Uint8Array(o), s = 0, n = 0; s < o; n++) a = t.charCodeAt(n), 55296 == (64512 & a) && n + 1 < r && (i = t.charCodeAt(n + 1), 56320 == (64512 & i) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++)), a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : a < 65536 ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
	return e;
}, Gt = (t, e) => {
	const a = e || t.length;
	if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t.subarray(0, e));
	let i, n;
	const s = new Array(2 * a);
	for (n = 0, i = 0; i < a;) {
		let e = t[i++];
		if (e < 128) {
			s[n++] = e;
			continue;
		}
		let r = Pt[e];
		if (r > 4) s[n++] = 65533, i += r - 1;
		else {
			for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < a;) e = e << 6 | 63 & t[i++], r--;
			r > 1 ? s[n++] = 65533 : e < 65536 ? s[n++] = e : (e -= 65536, s[n++] = 55296 | e >> 10 & 1023, s[n++] = 56320 | 1023 & e);
		}
	}
	return ((t, e) => {
		if (e < 65534 && t.subarray && Kt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
		let a = "";
		for (let i = 0; i < e; i++) a += String.fromCharCode(t[i]);
		return a;
	})(s, n);
}, Xt = (t, e) => {
	(e = e || t.length) > t.length && (e = t.length);
	let a = e - 1;
	for (; a >= 0 && 128 == (192 & t[a]);) a--;
	return a < 0 || 0 === a ? e : a + Pt[t[a]] > e ? a : e;
};
var Wt = function() {
	this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
};
const qt = Object.prototype.toString, { Z_NO_FLUSH: Jt, Z_SYNC_FLUSH: Qt, Z_FULL_FLUSH: Vt, Z_FINISH: $t, Z_OK: te, Z_STREAM_END: ee, Z_DEFAULT_COMPRESSION: ae, Z_DEFAULT_STRATEGY: ie, Z_DEFLATED: ne } = N, se = {
	level: ae,
	method: ne,
	chunkSize: 16384,
	windowBits: 15,
	memLevel: 8,
	strategy: ie,
	legacyHash: !0
};
function re(t) {
	this.options = Ht({}, se, t || {});
	let e = this.options;
	e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Wt(), this.strm.avail_out = 0;
	let a = Lt(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy, e.legacyHash);
	if (a !== te) throw new Error(B[a]);
	if (e.header && Bt(this.strm, e.header), e.dictionary) {
		let t;
		if (t = "string" == typeof e.dictionary ? Yt(e.dictionary) : "[object ArrayBuffer]" === qt.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, a = Ct(this.strm, t), a !== te) throw new Error(B[a]);
		this._dict_set = !0;
	}
}
function oe(t, e) {
	const a = new re(e);
	if (a.push(t, !0), a.err) throw a.msg || B[a.err];
	return a.result;
}
re.prototype.push = function(t, e) {
	const a = this.strm, i = this.options.chunkSize;
	let n, s;
	if (this.ended) return !1;
	for (s = e === ~~e ? e : !0 === e ? $t : Jt, "string" == typeof t ? a.input = Yt(t) : "[object ArrayBuffer]" === qt.call(t) ? a.input = new Uint8Array(t) : a.input = t, a.next_in = 0, a.avail_in = a.input.length;;) if (0 === a.avail_out && (a.output = new Uint8Array(i), a.next_out = 0, a.avail_out = i), (s === Qt || s === Vt) && a.avail_out <= 6) this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0;
	else {
		if (n = Nt(a, s), n === ee) return a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)), n = It(this.strm), this.onEnd(n), this.ended = !0, n === te;
		if (0 !== a.avail_out) {
			if (s > 0 && a.next_out > 0) this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0;
			else if (0 === a.avail_in) break;
		} else this.onData(a.output);
	}
	return !0;
}, re.prototype.onData = function(t) {
	this.chunks.push(t);
}, re.prototype.onEnd = function(t) {
	t === te && (this.result = jt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
};
var le = {
	Deflate: re,
	deflate: oe,
	deflateRaw: function(t, e) {
		return (e = e || {}).raw = !0, oe(t, e);
	},
	gzip: function(t, e) {
		return (e = e || {}).gzip = !0, oe(t, e);
	},
	constants: N
};
const he = 16209;
var _e = function(t, e) {
	let a, i, n, s, r, o, l, h, _, d, c, u, f, w, m, b, g, p, k, v, y, x, z, A;
	const E = t.state;
	a = t.next_in, z = t.input, i = a + (t.avail_in - 5), n = t.next_out, A = t.output, s = n - (e - t.avail_out), r = n + (t.avail_out - 257), o = E.dmax, l = E.wsize, h = E.whave, _ = E.wnext, d = E.window, c = E.hold, u = E.bits, f = E.lencode, w = E.distcode, m = (1 << E.lenbits) - 1, b = (1 << E.distbits) - 1;
	t: do {
		u < 15 && (c += z[a++] << u, u += 8, c += z[a++] << u, u += 8), g = f[c & m];
		e: for (;;) {
			if (p = g >>> 24, c >>>= p, u -= p, p = g >>> 16 & 255, 0 === p) A[n++] = 65535 & g;
			else {
				if (!(16 & p)) {
					if (64 & p) {
						if (32 & p) {
							E.mode = 16191;
							break t;
						}
						t.msg = "invalid literal/length code", E.mode = he;
						break t;
					}
					g = f[(65535 & g) + (c & (1 << p) - 1)];
					continue e;
				}
				for (k = 65535 & g, p &= 15, p && (u < p && (c += z[a++] << u, u += 8), k += c & (1 << p) - 1, c >>>= p, u -= p), u < 15 && (c += z[a++] << u, u += 8, c += z[a++] << u, u += 8), g = w[c & b];;) {
					if (p = g >>> 24, c >>>= p, u -= p, p = g >>> 16 & 255, 16 & p) {
						if (v = 65535 & g, p &= 15, u < p && (c += z[a++] << u, u += 8, u < p && (c += z[a++] << u, u += 8)), v += c & (1 << p) - 1, v > o) {
							t.msg = "invalid distance too far back", E.mode = he;
							break t;
						}
						if (c >>>= p, u -= p, p = n - s, v > p) {
							if (p = v - p, p > h && E.sane) {
								t.msg = "invalid distance too far back", E.mode = he;
								break t;
							}
							if (y = 0, x = d, 0 === _) {
								if (y += l - p, p < k) {
									k -= p;
									do
										A[n++] = d[y++];
									while (--p);
									y = n - v, x = A;
								}
							} else if (_ < p) {
								if (y += l + _ - p, p -= _, p < k) {
									k -= p;
									do
										A[n++] = d[y++];
									while (--p);
									if (y = 0, _ < k) {
										p = _, k -= p;
										do
											A[n++] = d[y++];
										while (--p);
										y = n - v, x = A;
									}
								}
							} else if (y += _ - p, p < k) {
								k -= p;
								do
									A[n++] = d[y++];
								while (--p);
								y = n - v, x = A;
							}
							for (; k > 2;) A[n++] = x[y++], A[n++] = x[y++], A[n++] = x[y++], k -= 3;
							k && (A[n++] = x[y++], k > 1 && (A[n++] = x[y++]));
						} else {
							y = n - v;
							do
								A[n++] = A[y++], A[n++] = A[y++], A[n++] = A[y++], k -= 3;
							while (k > 2);
							k && (A[n++] = A[y++], k > 1 && (A[n++] = A[y++]));
						}
						break;
					}
					if (64 & p) {
						t.msg = "invalid distance code", E.mode = he;
						break t;
					}
					g = w[(65535 & g) + (c & (1 << p) - 1)];
				}
			}
			break;
		}
	} while (a < i && n < r);
	k = u >> 3, a -= k, u -= k << 3, c &= (1 << u) - 1, t.next_in = a, t.next_out = n, t.avail_in = a < i ? i - a + 5 : 5 - (a - i), t.avail_out = n < r ? r - n + 257 : 257 - (n - r), E.hold = c, E.bits = u;
};
const de = new Uint16Array([
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258,
	0,
	0
]), ce = new Uint8Array([
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	16,
	199,
	75
]), ue = new Uint16Array([
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577,
	0,
	0
]), fe = new Uint8Array([
	16,
	16,
	16,
	16,
	17,
	17,
	18,
	18,
	19,
	19,
	20,
	20,
	21,
	21,
	22,
	22,
	23,
	23,
	24,
	24,
	25,
	25,
	26,
	26,
	27,
	27,
	28,
	28,
	29,
	29,
	64,
	64
]);
var we = (t, e, a, i, n, s, r, o) => {
	const l = o.bits;
	let h, _, d, c, u, f, w = 0, m = 0, b = 0, g = 0, p = 0, k = 0, v = 0, y = 0, x = 0, z = 0, A = null;
	const E = /* @__PURE__ */ new Uint16Array(16), R = /* @__PURE__ */ new Uint16Array(16);
	let Z, U, S, T = null;
	for (w = 0; w <= 15; w++) E[w] = 0;
	for (m = 0; m < i; m++) E[e[a + m]]++;
	for (p = l, g = 15; g >= 1 && 0 === E[g]; g--);
	if (p > g && (p = g), 0 === g) return n[s++] = 20971520, n[s++] = 20971520, o.bits = 1, 0;
	for (b = 1; b < g && 0 === E[b]; b++);
	for (p < b && (p = b), y = 1, w = 1; w <= 15; w++) if (y <<= 1, y -= E[w], y < 0) return -1;
	if (y > 0 && (0 === t || 1 !== g)) return -1;
	for (R[1] = 0, w = 1; w < 15; w++) R[w + 1] = R[w] + E[w];
	for (m = 0; m < i; m++) 0 !== e[a + m] && (r[R[e[a + m]]++] = m);
	if (0 === t ? (A = T = r, f = 20) : 1 === t ? (A = de, T = ce, f = 257) : (A = ue, T = fe, f = 0), z = 0, m = 0, w = b, u = s, k = p, v = 0, d = -1, x = 1 << p, c = x - 1, 1 === t && x > 852 || 2 === t && x > 592) return 1;
	for (;;) {
		Z = w - v, r[m] + 1 < f ? (U = 0, S = r[m]) : r[m] >= f ? (U = T[r[m] - f], S = A[r[m] - f]) : (U = 96, S = 0), h = 1 << w - v, _ = 1 << k, b = _;
		do
			_ -= h, n[u + (z >> v) + _] = Z << 24 | U << 16 | S;
		while (0 !== _);
		for (h = 1 << w - 1; z & h;) h >>= 1;
		if (0 !== h ? (z &= h - 1, z += h) : z = 0, m++, 0 === --E[w]) {
			if (w === g) break;
			w = e[a + r[m]];
		}
		if (w > p && (z & c) !== d) {
			for (0 === v && (v = p), u += b, k = w - v, y = 1 << k; k + v < g && (y -= E[k + v], !(y <= 0));) k++, y <<= 1;
			if (x += 1 << k, 1 === t && x > 852 || 2 === t && x > 592) return 1;
			d = z & c, n[d] = p << 24 | k << 16 | u - s;
		}
	}
	return 0 !== z && (n[u + z] = w - v << 24 | 4194304), o.bits = p, 0;
};
const { Z_FINISH: me, Z_BLOCK: be, Z_TREES: ge, Z_OK: pe, Z_STREAM_END: ke, Z_NEED_DICT: ve, Z_STREAM_ERROR: ye, Z_DATA_ERROR: xe, Z_MEM_ERROR: ze, Z_BUF_ERROR: Ae, Z_DEFLATED: Ee } = N, Re = 16180, Ze = 16190, Ue = 16191, Se = 16192, Te = 16194, De = 16199, Oe = 16200, Fe = 16206, Le = 16209, Be = (t) => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
function Ne() {
	this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = /* @__PURE__ */ new Uint16Array(320), this.work = /* @__PURE__ */ new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Ie = (t) => {
	if (!t) return 1;
	const e = t.state;
	return !e || e.strm !== t || e.mode < Re || e.mode > 16211 ? 1 : 0;
}, Ce = (t) => {
	if (Ie(t)) return ye;
	const e = t.state;
	return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = Re, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = /* @__PURE__ */ new Int32Array(852), e.distcode = e.distdyn = /* @__PURE__ */ new Int32Array(592), e.sane = 1, e.back = -1, pe;
}, Me = (t) => {
	if (Ie(t)) return ye;
	const e = t.state;
	return e.wsize = 0, e.whave = 0, e.wnext = 0, Ce(t);
}, He = (t, e) => {
	let a;
	if (Ie(t)) return ye;
	const i = t.state;
	return e < 0 ? (a = 0, e = -e) : (a = 5 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? ye : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = a, i.wbits = e, Me(t));
}, je = (t, e) => {
	if (!t) return ye;
	const a = new Ne();
	t.state = a, a.strm = t, a.window = null, a.mode = Re;
	const i = He(t, e);
	return i !== pe && (t.state = null), i;
};
let Ke, Pe, Ye = !0;
const Ge = (t) => {
	if (Ye) {
		Ke = /* @__PURE__ */ new Int32Array(512), Pe = /* @__PURE__ */ new Int32Array(32);
		let e = 0;
		for (; e < 144;) t.lens[e++] = 8;
		for (; e < 256;) t.lens[e++] = 9;
		for (; e < 280;) t.lens[e++] = 7;
		for (; e < 288;) t.lens[e++] = 8;
		for (we(1, t.lens, 0, 288, Ke, 0, t.work, { bits: 9 }), e = 0; e < 32;) t.lens[e++] = 5;
		we(2, t.lens, 0, 32, Pe, 0, t.work, { bits: 5 }), Ye = !1;
	}
	t.lencode = Ke, t.lenbits = 9, t.distcode = Pe, t.distbits = 5;
}, Xe = (t, e, a, i) => {
	let n;
	const s = t.state;
	return null === s.window && (s.window = new Uint8Array(1 << s.wbits)), 0 === s.wsize && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0), i >= s.wsize ? (s.window.set(e.subarray(a - s.wsize, a), 0), s.wnext = 0, s.whave = s.wsize) : (n = s.wsize - s.wnext, n > i && (n = i), s.window.set(e.subarray(a - i, a - i + n), s.wnext), (i -= n) ? (s.window.set(e.subarray(a - i, a), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0;
};
var We = Me, qe = je, Je = (t, e) => {
	let a, i, n, s, r, o, l, h, _, d, c, u, f, w, m, b, g, p, k, v, y, x, z = 0;
	const A = /* @__PURE__ */ new Uint8Array(4);
	let E, R;
	const Z = new Uint8Array([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]);
	if (Ie(t) || !t.output || !t.input && 0 !== t.avail_in) return ye;
	a = t.state, a.mode === Ue && (a.mode = Se), r = t.next_out, n = t.output, l = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, h = a.hold, _ = a.bits, d = o, c = l, x = pe;
	t: for (;;) switch (a.mode) {
		case Re:
			if (0 === a.wrap) {
				a.mode = Se;
				break;
			}
			for (; _ < 16;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if (2 & a.wrap && 35615 === h) {
				0 === a.wbits && (a.wbits = 15), a.check = 0, A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = L(a.check, A, 2, 0), h = 0, _ = 0, a.mode = 16181;
				break;
			}
			if (a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
				t.msg = "incorrect header check", a.mode = Le;
				break;
			}
			if ((15 & h) !== Ee) {
				t.msg = "unknown compression method", a.mode = Le;
				break;
			}
			if (h >>>= 4, _ -= 4, y = 8 + (15 & h), 0 === a.wbits && (a.wbits = y), y > 15 || y > a.wbits) {
				t.msg = "invalid window size", a.mode = Le;
				break;
			}
			a.dmax = 1 << a.wbits, a.flags = 0, t.adler = a.check = 1, a.mode = 512 & h ? 16189 : Ue, h = 0, _ = 0;
			break;
		case 16181:
			for (; _ < 16;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if (a.flags = h, (255 & a.flags) !== Ee) {
				t.msg = "unknown compression method", a.mode = Le;
				break;
			}
			if (57344 & a.flags) {
				t.msg = "unknown header flags set", a.mode = Le;
				break;
			}
			a.head && (a.head.text = h >> 8 & 1), 512 & a.flags && 4 & a.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = L(a.check, A, 2, 0)), h = 0, _ = 0, a.mode = 16182;
		case 16182:
			for (; _ < 32;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			a.head && (a.head.time = h), 512 & a.flags && 4 & a.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, A[2] = h >>> 16 & 255, A[3] = h >>> 24 & 255, a.check = L(a.check, A, 4, 0)), h = 0, _ = 0, a.mode = 16183;
		case 16183:
			for (; _ < 16;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			a.head && (a.head.xflags = 255 & h, a.head.os = h >> 8), 512 & a.flags && 4 & a.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = L(a.check, A, 2, 0)), h = 0, _ = 0, a.mode = 16184;
		case 16184:
			if (1024 & a.flags) {
				for (; _ < 16;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				a.length = h, a.head && (a.head.extra_len = h), 512 & a.flags && 4 & a.wrap && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = L(a.check, A, 2, 0)), h = 0, _ = 0;
			} else a.head && (a.head.extra = null);
			a.mode = 16185;
		case 16185:
			if (1024 & a.flags && (u = a.length, u > o && (u = o), u && (a.head && (y = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(i.subarray(s, s + u), y)), 512 & a.flags && 4 & a.wrap && (a.check = L(a.check, i, u, s)), o -= u, s += u, a.length -= u), a.length)) break t;
			a.length = 0, a.mode = 16186;
		case 16186:
			if (2048 & a.flags) {
				if (0 === o) break t;
				u = 0;
				do
					y = i[s + u++], a.head && y && a.length < 65536 && (a.head.name += String.fromCharCode(y));
				while (y && u < o);
				if (512 & a.flags && 4 & a.wrap && (a.check = L(a.check, i, u, s)), o -= u, s += u, y) break t;
			} else a.head && (a.head.name = null);
			a.length = 0, a.mode = 16187;
		case 16187:
			if (4096 & a.flags) {
				if (0 === o) break t;
				u = 0;
				do
					y = i[s + u++], a.head && y && a.length < 65536 && (a.head.comment += String.fromCharCode(y));
				while (y && u < o);
				if (512 & a.flags && 4 & a.wrap && (a.check = L(a.check, i, u, s)), o -= u, s += u, y) break t;
			} else a.head && (a.head.comment = null);
			a.mode = 16188;
		case 16188:
			if (512 & a.flags) {
				for (; _ < 16;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				if (4 & a.wrap && h !== (65535 & a.check)) {
					t.msg = "header crc mismatch", a.mode = Le;
					break;
				}
				h = 0, _ = 0;
			}
			a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = Ue;
			break;
		case 16189:
			for (; _ < 32;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			t.adler = a.check = Be(h), h = 0, _ = 0, a.mode = Ze;
		case Ze:
			if (0 === a.havedict) return t.next_out = r, t.avail_out = l, t.next_in = s, t.avail_in = o, a.hold = h, a.bits = _, ve;
			t.adler = a.check = 1, a.mode = Ue;
		case Ue: if (e === be || e === ge) break t;
		case Se:
			if (a.last) {
				h >>>= 7 & _, _ -= 7 & _, a.mode = Fe;
				break;
			}
			for (; _ < 3;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			switch (a.last = 1 & h, h >>>= 1, _ -= 1, 3 & h) {
				case 0:
					a.mode = 16193;
					break;
				case 1:
					if (Ge(a), a.mode = De, e === ge) {
						h >>>= 2, _ -= 2;
						break t;
					}
					break;
				case 2:
					a.mode = 16196;
					break;
				case 3: t.msg = "invalid block type", a.mode = Le;
			}
			h >>>= 2, _ -= 2;
			break;
		case 16193:
			for (h >>>= 7 & _, _ -= 7 & _; _ < 32;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if ((65535 & h) != (h >>> 16 ^ 65535)) {
				t.msg = "invalid stored block lengths", a.mode = Le;
				break;
			}
			if (a.length = 65535 & h, h = 0, _ = 0, a.mode = Te, e === ge) break t;
		case Te: a.mode = 16195;
		case 16195:
			if (u = a.length, u) {
				if (u > o && (u = o), u > l && (u = l), 0 === u) break t;
				n.set(i.subarray(s, s + u), r), o -= u, s += u, l -= u, r += u, a.length -= u;
				break;
			}
			a.mode = Ue;
			break;
		case 16196:
			for (; _ < 14;) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if (a.nlen = 257 + (31 & h), h >>>= 5, _ -= 5, a.ndist = 1 + (31 & h), h >>>= 5, _ -= 5, a.ncode = 4 + (15 & h), h >>>= 4, _ -= 4, a.nlen > 286 || a.ndist > 30) {
				t.msg = "too many length or distance symbols", a.mode = Le;
				break;
			}
			a.have = 0, a.mode = 16197;
		case 16197:
			for (; a.have < a.ncode;) {
				for (; _ < 3;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				a.lens[Z[a.have++]] = 7 & h, h >>>= 3, _ -= 3;
			}
			for (; a.have < 19;) a.lens[Z[a.have++]] = 0;
			if (a.lencode = a.lendyn, a.lenbits = 7, E = { bits: a.lenbits }, x = we(0, a.lens, 0, 19, a.lencode, 0, a.work, E), a.lenbits = E.bits, x) {
				t.msg = "invalid code lengths set", a.mode = Le;
				break;
			}
			a.have = 0, a.mode = 16198;
		case 16198:
			for (; a.have < a.nlen + a.ndist;) {
				for (; z = a.lencode[h & (1 << a.lenbits) - 1], m = z >>> 24, b = z >>> 16 & 255, g = 65535 & z, !(m <= _);) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				if (g < 16) h >>>= m, _ -= m, a.lens[a.have++] = g;
				else {
					if (16 === g) {
						for (R = m + 2; _ < R;) {
							if (0 === o) break t;
							o--, h += i[s++] << _, _ += 8;
						}
						if (h >>>= m, _ -= m, 0 === a.have) {
							t.msg = "invalid bit length repeat", a.mode = Le;
							break;
						}
						y = a.lens[a.have - 1], u = 3 + (3 & h), h >>>= 2, _ -= 2;
					} else if (17 === g) {
						for (R = m + 3; _ < R;) {
							if (0 === o) break t;
							o--, h += i[s++] << _, _ += 8;
						}
						h >>>= m, _ -= m, y = 0, u = 3 + (7 & h), h >>>= 3, _ -= 3;
					} else {
						for (R = m + 7; _ < R;) {
							if (0 === o) break t;
							o--, h += i[s++] << _, _ += 8;
						}
						h >>>= m, _ -= m, y = 0, u = 11 + (127 & h), h >>>= 7, _ -= 7;
					}
					if (a.have + u > a.nlen + a.ndist) {
						t.msg = "invalid bit length repeat", a.mode = Le;
						break;
					}
					for (; u--;) a.lens[a.have++] = y;
				}
			}
			if (a.mode === Le) break;
			if (0 === a.lens[256]) {
				t.msg = "invalid code -- missing end-of-block", a.mode = Le;
				break;
			}
			if (a.lenbits = 9, E = { bits: a.lenbits }, x = we(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, E), a.lenbits = E.bits, x) {
				t.msg = "invalid literal/lengths set", a.mode = Le;
				break;
			}
			if (a.distbits = 6, a.distcode = a.distdyn, E = { bits: a.distbits }, x = we(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, E), a.distbits = E.bits, x) {
				t.msg = "invalid distances set", a.mode = Le;
				break;
			}
			if (a.mode = De, e === ge) break t;
		case De: a.mode = Oe;
		case Oe:
			if (o >= 6 && l >= 258) {
				t.next_out = r, t.avail_out = l, t.next_in = s, t.avail_in = o, a.hold = h, a.bits = _, _e(t, c), r = t.next_out, n = t.output, l = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, h = a.hold, _ = a.bits, a.mode === Ue && (a.back = -1);
				break;
			}
			for (a.back = 0; z = a.lencode[h & (1 << a.lenbits) - 1], m = z >>> 24, b = z >>> 16 & 255, g = 65535 & z, !(m <= _);) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if (b && !(240 & b)) {
				for (p = m, k = b, v = g; z = a.lencode[v + ((h & (1 << p + k) - 1) >> p)], m = z >>> 24, b = z >>> 16 & 255, g = 65535 & z, !(p + m <= _);) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				h >>>= p, _ -= p, a.back += p;
			}
			if (h >>>= m, _ -= m, a.back += m, a.length = g, 0 === b) {
				a.mode = 16205;
				break;
			}
			if (32 & b) {
				a.back = -1, a.mode = Ue;
				break;
			}
			if (64 & b) {
				t.msg = "invalid literal/length code", a.mode = Le;
				break;
			}
			a.extra = 15 & b, a.mode = 16201;
		case 16201:
			if (a.extra) {
				for (R = a.extra; _ < R;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				a.length += h & (1 << a.extra) - 1, h >>>= a.extra, _ -= a.extra, a.back += a.extra;
			}
			a.was = a.length, a.mode = 16202;
		case 16202:
			for (; z = a.distcode[h & (1 << a.distbits) - 1], m = z >>> 24, b = z >>> 16 & 255, g = 65535 & z, !(m <= _);) {
				if (0 === o) break t;
				o--, h += i[s++] << _, _ += 8;
			}
			if (!(240 & b)) {
				for (p = m, k = b, v = g; z = a.distcode[v + ((h & (1 << p + k) - 1) >> p)], m = z >>> 24, b = z >>> 16 & 255, g = 65535 & z, !(p + m <= _);) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				h >>>= p, _ -= p, a.back += p;
			}
			if (h >>>= m, _ -= m, a.back += m, 64 & b) {
				t.msg = "invalid distance code", a.mode = Le;
				break;
			}
			a.offset = g, a.extra = 15 & b, a.mode = 16203;
		case 16203:
			if (a.extra) {
				for (R = a.extra; _ < R;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				a.offset += h & (1 << a.extra) - 1, h >>>= a.extra, _ -= a.extra, a.back += a.extra;
			}
			if (a.offset > a.dmax) {
				t.msg = "invalid distance too far back", a.mode = Le;
				break;
			}
			a.mode = 16204;
		case 16204:
			if (0 === l) break t;
			if (u = c - l, a.offset > u) {
				if (u = a.offset - u, u > a.whave && a.sane) {
					t.msg = "invalid distance too far back", a.mode = Le;
					break;
				}
				u > a.wnext ? (u -= a.wnext, f = a.wsize - u) : f = a.wnext - u, u > a.length && (u = a.length), w = a.window;
			} else w = n, f = r - a.offset, u = a.length;
			u > l && (u = l), l -= u, a.length -= u;
			do
				n[r++] = w[f++];
			while (--u);
			0 === a.length && (a.mode = Oe);
			break;
		case 16205:
			if (0 === l) break t;
			n[r++] = a.length, l--, a.mode = Oe;
			break;
		case Fe:
			if (a.wrap) {
				for (; _ < 32;) {
					if (0 === o) break t;
					o--, h |= i[s++] << _, _ += 8;
				}
				if (c -= l, t.total_out += c, a.total += c, 4 & a.wrap && c && (t.adler = a.check = a.flags ? L(a.check, n, c, r - c) : O(a.check, n, c, r - c)), c = l, 4 & a.wrap && (a.flags ? h : Be(h)) !== a.check) {
					t.msg = "incorrect data check", a.mode = Le;
					break;
				}
				h = 0, _ = 0;
			}
			a.mode = 16207;
		case 16207:
			if (a.wrap && a.flags) {
				for (; _ < 32;) {
					if (0 === o) break t;
					o--, h += i[s++] << _, _ += 8;
				}
				if (4 & a.wrap && h !== (4294967295 & a.total)) {
					t.msg = "incorrect length check", a.mode = Le;
					break;
				}
				h = 0, _ = 0;
			}
			a.mode = 16208;
		case 16208:
			x = ke;
			break t;
		case Le:
			x = xe;
			break t;
		case 16210: return ze;
		default: return ye;
	}
	return t.next_out = r, t.avail_out = l, t.next_in = s, t.avail_in = o, a.hold = h, a.bits = _, (a.wsize || c !== t.avail_out && a.mode < Le && (a.mode < Fe || e !== me)) && Xe(t, t.output, t.next_out, c - t.avail_out), d -= t.avail_in, c -= t.avail_out, t.total_in += d, t.total_out += c, a.total += c, 4 & a.wrap && c && (t.adler = a.check = a.flags ? L(a.check, n, c, t.next_out - c) : O(a.check, n, c, t.next_out - c)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === Ue ? 128 : 0) + (a.mode === De || a.mode === Te ? 256 : 0), (0 === d && 0 === c || e === me) && x === pe && (x = Ae), x;
}, Qe = (t) => {
	if (Ie(t)) return ye;
	let e = t.state;
	return e.window && (e.window = null), t.state = null, pe;
}, Ve = (t, e) => {
	if (Ie(t)) return ye;
	const a = t.state;
	return 2 & a.wrap ? (a.head = e, e.done = !1, pe) : ye;
}, $e = (t, e) => {
	const a = e.length;
	let i, n, s;
	return Ie(t) ? ye : (i = t.state, 0 !== i.wrap && i.mode !== Ze ? ye : i.mode === Ze && (n = 1, n = O(n, e, a, 0), n !== i.check) ? xe : (s = Xe(t, e, a, a), s ? (i.mode = 16210, ze) : (i.havedict = 1, pe)));
};
var ta = function() {
	this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
};
const ea = Object.prototype.toString, { Z_NO_FLUSH: aa, Z_FINISH: ia, Z_OK: na, Z_STREAM_END: sa, Z_NEED_DICT: ra, Z_STREAM_ERROR: oa, Z_DATA_ERROR: la, Z_MEM_ERROR: ha, Z_BUF_ERROR: _a } = N, da = {
	chunkSize: 65536,
	windowBits: 15,
	to: ""
};
function ca(t) {
	this.options = Ht({}, da, t || {});
	const e = this.options;
	e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (15 & e.windowBits || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Wt(), this.strm.avail_out = 0;
	let a = qe(this.strm, e.windowBits);
	if (a !== na) throw new Error(B[a]);
	if (this.header = new ta(), Ve(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Yt(e.dictionary) : "[object ArrayBuffer]" === ea.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (a = $e(this.strm, e.dictionary), a !== na))) throw new Error(B[a]);
}
function ua(t, e) {
	const a = new ca(e);
	if (a.push(t, !0), a.err) throw a.msg || B[a.err];
	return a.result;
}
ca.prototype.push = function(t, e) {
	const a = this.strm, i = this.options.chunkSize, n = this.options.dictionary;
	let s, r, o;
	if (this.ended) return !1;
	for (r = e === ~~e ? e : !0 === e ? ia : aa, "[object ArrayBuffer]" === ea.call(t) ? a.input = new Uint8Array(t) : a.input = t, a.next_in = 0, a.avail_in = a.input.length;;) {
		for (0 === a.avail_out && (a.output = new Uint8Array(i), a.next_out = 0, a.avail_out = i), s = Je(a, r), s === ra && n && (s = $e(a, n), s === na ? s = Je(a, r) : s === la && (s = ra)); a.avail_in > 0 && s === sa && 2 & a.state.wrap && 0 !== a.state.flags && 0 !== a.input[a.next_in];) We(a), s = Je(a, r);
		switch (s) {
			case oa:
			case la:
			case ra:
			case ha: return this.onEnd(s), this.ended = !0, !1;
		}
		if (o = a.avail_out, a.next_out && (0 === a.avail_out || s === sa || r > 0)) if ("string" === this.options.to) {
			let t = Xt(a.output, a.next_out), e = a.next_out - t, n = Gt(a.output, t);
			a.next_out = e, a.avail_out = i - e, e && a.output.set(a.output.subarray(t, t + e), 0), this.onData(n);
		} else this.onData(a.output.length === a.next_out ? a.output : a.output.subarray(0, a.next_out)), a.avail_out = 0, a.next_out = 0;
		if (s !== na && s !== _a || 0 !== o) {
			if (s === sa) return s = Qe(this.strm), this.onEnd(s), this.ended = !0, !0;
			if (0 === a.avail_in) {
				if (r === ia) return s = Qe(this.strm), this.onEnd(s === na ? _a : s), this.ended = !0, !1;
				break;
			}
		}
	}
	return !0;
}, ca.prototype.onData = function(t) {
	this.chunks.push(t);
}, ca.prototype.onEnd = function(t) {
	t === na && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = jt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
};
var fa = {
	Inflate: ca,
	inflate: ua,
	inflateRaw: function(t, e) {
		return (e = e || {}).raw = !0, ua(t, e);
	},
	ungzip: ua,
	constants: N
};
const { Deflate: wa, deflate: ma, deflateRaw: ba, gzip: ga } = le, { Inflate: pa, inflate: ka, inflateRaw: va, ungzip: ya } = fa;
var xa = ka;
export { xa as t };
