var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), t = e((e, t) => {
	t.exports = (e, t, i, n) => {
		let r = 65535 & e, a = e >>> 16 & 65535, o = 0;
		for (; 0 !== i;) {
			o = i > 2e3 ? 2e3 : i, i -= o;
			do
				r = r + t[n++] | 0, a = a + r | 0;
			while (--o);
			r %= 65521, a %= 65521;
		}
		return r | a << 16;
	};
}), i = e((e, t) => {
	const i = new Uint32Array((() => {
		let e, t = [];
		for (var i = 0; i < 256; i++) {
			e = i;
			for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
			t[i] = e;
		}
		return t;
	})());
	t.exports = (e, t, n, r) => {
		const a = i, o = r + n;
		e ^= -1;
		for (let i = r; i < o; i++) e = e >>> 8 ^ a[255 & (e ^ t[i])];
		return -1 ^ e;
	};
}), n = e((e, t) => {
	const i = 16209;
	t.exports = function(e, t) {
		let n, r, a, o, s, l, d, f, h, c, u, w, b, m, k, _, p, g, x, y, v, E, R, A;
		const Z = e.state;
		n = e.next_in, R = e.input, r = n + (e.avail_in - 5), a = e.next_out, A = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), l = Z.dmax, d = Z.wsize, f = Z.whave, h = Z.wnext, c = Z.window, u = Z.hold, w = Z.bits, b = Z.lencode, m = Z.distcode, k = (1 << Z.lenbits) - 1, _ = (1 << Z.distbits) - 1;
		e: do {
			w < 15 && (u += R[n++] << w, w += 8, u += R[n++] << w, w += 8), p = b[u & k];
			t: for (;;) {
				if (g = p >>> 24, u >>>= g, w -= g, g = p >>> 16 & 255, 0 === g) A[a++] = 65535 & p;
				else {
					if (!(16 & g)) {
						if (64 & g) {
							if (32 & g) {
								Z.mode = 16191;
								break e;
							}
							e.msg = "invalid literal/length code", Z.mode = i;
							break e;
						}
						p = b[(65535 & p) + (u & (1 << g) - 1)];
						continue t;
					}
					for (x = 65535 & p, g &= 15, g && (w < g && (u += R[n++] << w, w += 8), x += u & (1 << g) - 1, u >>>= g, w -= g), w < 15 && (u += R[n++] << w, w += 8, u += R[n++] << w, w += 8), p = m[u & _];;) {
						if (g = p >>> 24, u >>>= g, w -= g, g = p >>> 16 & 255, 16 & g) {
							if (y = 65535 & p, g &= 15, w < g && (u += R[n++] << w, w += 8, w < g && (u += R[n++] << w, w += 8)), y += u & (1 << g) - 1, y > l) {
								e.msg = "invalid distance too far back", Z.mode = i;
								break e;
							}
							if (u >>>= g, w -= g, g = a - o, y > g) {
								if (g = y - g, g > f && Z.sane) {
									e.msg = "invalid distance too far back", Z.mode = i;
									break e;
								}
								if (v = 0, E = c, 0 === h) {
									if (v += d - g, g < x) {
										x -= g;
										do
											A[a++] = c[v++];
										while (--g);
										v = a - y, E = A;
									}
								} else if (h < g) {
									if (v += d + h - g, g -= h, g < x) {
										x -= g;
										do
											A[a++] = c[v++];
										while (--g);
										if (v = 0, h < x) {
											g = h, x -= g;
											do
												A[a++] = c[v++];
											while (--g);
											v = a - y, E = A;
										}
									}
								} else if (v += h - g, g < x) {
									x -= g;
									do
										A[a++] = c[v++];
									while (--g);
									v = a - y, E = A;
								}
								for (; x > 2;) A[a++] = E[v++], A[a++] = E[v++], A[a++] = E[v++], x -= 3;
								x && (A[a++] = E[v++], x > 1 && (A[a++] = E[v++]));
							} else {
								v = a - y;
								do
									A[a++] = A[v++], A[a++] = A[v++], A[a++] = A[v++], x -= 3;
								while (x > 2);
								x && (A[a++] = A[v++], x > 1 && (A[a++] = A[v++]));
							}
							break;
						}
						if (64 & g) {
							e.msg = "invalid distance code", Z.mode = i;
							break e;
						}
						p = m[(65535 & p) + (u & (1 << g) - 1)];
					}
				}
				break;
			}
		} while (n < r && a < s);
		x = w >> 3, n -= x, w -= x << 3, u &= (1 << w) - 1, e.next_in = n, e.next_out = a, e.avail_in = n < r ? r - n + 5 : 5 - (n - r), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), Z.hold = u, Z.bits = w;
	};
}), r = e((e, t) => {
	const i = new Uint16Array([
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
	]), n = new Uint8Array([
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
	]), r = new Uint16Array([
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
	]), a = new Uint8Array([
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
	t.exports = (e, t, o, s, l, d, f, h) => {
		const c = h.bits;
		let u, w, b, m, k, _, p = 0, g = 0, x = 0, y = 0, v = 0, E = 0, R = 0, A = 0, Z = 0, S = 0, U = null;
		const T = /* @__PURE__ */ new Uint16Array(16), O = /* @__PURE__ */ new Uint16Array(16);
		let D, I, B, C = null;
		for (p = 0; p <= 15; p++) T[p] = 0;
		for (g = 0; g < s; g++) T[t[o + g]]++;
		for (v = c, y = 15; y >= 1 && 0 === T[y]; y--);
		if (v > y && (v = y), 0 === y) return l[d++] = 20971520, l[d++] = 20971520, h.bits = 1, 0;
		for (x = 1; x < y && 0 === T[x]; x++);
		for (v < x && (v = x), A = 1, p = 1; p <= 15; p++) if (A <<= 1, A -= T[p], A < 0) return -1;
		if (A > 0 && (0 === e || 1 !== y)) return -1;
		for (O[1] = 0, p = 1; p < 15; p++) O[p + 1] = O[p] + T[p];
		for (g = 0; g < s; g++) 0 !== t[o + g] && (f[O[t[o + g]]++] = g);
		if (0 === e ? (U = C = f, _ = 20) : 1 === e ? (U = i, C = n, _ = 257) : (U = r, C = a, _ = 0), S = 0, g = 0, p = x, k = d, E = v, R = 0, b = -1, Z = 1 << v, m = Z - 1, 1 === e && Z > 852 || 2 === e && Z > 592) return 1;
		for (;;) {
			D = p - R, f[g] + 1 < _ ? (I = 0, B = f[g]) : f[g] >= _ ? (I = C[f[g] - _], B = U[f[g] - _]) : (I = 96, B = 0), u = 1 << p - R, w = 1 << E, x = w;
			do
				w -= u, l[k + (S >> R) + w] = D << 24 | I << 16 | B;
			while (0 !== w);
			for (u = 1 << p - 1; S & u;) u >>= 1;
			if (0 !== u ? (S &= u - 1, S += u) : S = 0, g++, 0 === --T[p]) {
				if (p === y) break;
				p = t[o + f[g]];
			}
			if (p > v && (S & m) !== b) {
				for (0 === R && (R = v), k += x, E = p - R, A = 1 << E; E + R < y && (A -= T[E + R], !(A <= 0));) E++, A <<= 1;
				if (Z += 1 << E, 1 === e && Z > 852 || 2 === e && Z > 592) return 1;
				b = S & m, l[b] = v << 24 | E << 16 | k - d;
			}
		}
		return 0 !== S && (l[k + S] = p - R << 24 | 4194304), h.bits = v, 0;
	};
}), a = e((e, t) => {
	t.exports = {
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
}), o = e((e, o) => {
	const s = t(), l = i(), d = n(), f = r(), { Z_FINISH: h, Z_BLOCK: c, Z_TREES: u, Z_OK: w, Z_STREAM_END: b, Z_NEED_DICT: m, Z_STREAM_ERROR: k, Z_DATA_ERROR: _, Z_MEM_ERROR: p, Z_BUF_ERROR: g, Z_DEFLATED: x } = a(), y = 16180, v = 16190, E = 16191, R = 16192, A = 16194, Z = 16199, S = 16200, U = 16206, T = 16209, O = 16210, D = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
	function I() {
		this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = /* @__PURE__ */ new Uint16Array(320), this.work = /* @__PURE__ */ new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
	}
	const B = (e) => {
		if (!e) return 1;
		const t = e.state;
		return !t || t.strm !== e || t.mode < y || t.mode > 16211 ? 1 : 0;
	}, C = (e) => {
		if (B(e)) return k;
		const t = e.state;
		return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = y, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = /* @__PURE__ */ new Int32Array(852), t.distcode = t.distdyn = /* @__PURE__ */ new Int32Array(592), t.sane = 1, t.back = -1, w;
	}, N = (e) => {
		if (B(e)) return k;
		const t = e.state;
		return t.wsize = 0, t.whave = 0, t.wnext = 0, C(e);
	}, F = (e, t) => {
		let i;
		if (B(e)) return k;
		const n = e.state;
		return t < 0 ? (i = 0, t = -t) : (i = 5 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? k : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = i, n.wbits = t, N(e));
	}, M = (e, t) => {
		if (!e) return k;
		const i = new I();
		e.state = i, i.strm = e, i.window = null, i.mode = y;
		const n = F(e, t);
		return n !== w && (e.state = null), n;
	};
	let z, L, H = !0;
	const j = (e) => {
		if (H) {
			z = /* @__PURE__ */ new Int32Array(512), L = /* @__PURE__ */ new Int32Array(32);
			let t = 0;
			for (; t < 144;) e.lens[t++] = 8;
			for (; t < 256;) e.lens[t++] = 9;
			for (; t < 280;) e.lens[t++] = 7;
			for (; t < 288;) e.lens[t++] = 8;
			for (f(1, e.lens, 0, 288, z, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
			f(2, e.lens, 0, 32, L, 0, e.work, { bits: 5 }), H = !1;
		}
		e.lencode = z, e.lenbits = 9, e.distcode = L, e.distbits = 5;
	}, K = (e, t, i, n) => {
		let r;
		const a = e.state;
		return null === a.window && (a.window = new Uint8Array(1 << a.wbits)), 0 === a.wsize && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0), n >= a.wsize ? (a.window.set(t.subarray(i - a.wsize, i), 0), a.wnext = 0, a.whave = a.wsize) : (r = a.wsize - a.wnext, r > n && (r = n), a.window.set(t.subarray(i - n, i - n + r), a.wnext), (n -= r) ? (a.window.set(t.subarray(i - n, i), 0), a.wnext = n, a.whave = a.wsize) : (a.wnext += r, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += r))), 0;
	};
	o.exports.inflateReset = N, o.exports.inflateReset2 = F, o.exports.inflateResetKeep = C, o.exports.inflateInit = (e) => M(e, 15), o.exports.inflateInit2 = M, o.exports.inflate = (e, t) => {
		let i, n, r, a, o, I, C, N, F, M, z, L, H, P, Y, G, X, V, W, $, q, J, Q = 0;
		const ee = /* @__PURE__ */ new Uint8Array(4);
		let te, ie;
		const ne = new Uint8Array([
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
		if (B(e) || !e.output || !e.input && 0 !== e.avail_in) return k;
		i = e.state, i.mode === E && (i.mode = R), o = e.next_out, r = e.output, C = e.avail_out, a = e.next_in, n = e.input, I = e.avail_in, N = i.hold, F = i.bits, M = I, z = C, J = w;
		e: for (;;) switch (i.mode) {
			case y:
				if (0 === i.wrap) {
					i.mode = R;
					break;
				}
				for (; F < 16;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if (2 & i.wrap && 35615 === N) {
					0 === i.wbits && (i.wbits = 15), i.check = 0, ee[0] = 255 & N, ee[1] = N >>> 8 & 255, i.check = l(i.check, ee, 2, 0), N = 0, F = 0, i.mode = 16181;
					break;
				}
				if (i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
					e.msg = "incorrect header check", i.mode = T;
					break;
				}
				if ((15 & N) !== x) {
					e.msg = "unknown compression method", i.mode = T;
					break;
				}
				if (N >>>= 4, F -= 4, q = 8 + (15 & N), 0 === i.wbits && (i.wbits = q), q > 15 || q > i.wbits) {
					e.msg = "invalid window size", i.mode = T;
					break;
				}
				i.dmax = 1 << i.wbits, i.flags = 0, e.adler = i.check = 1, i.mode = 512 & N ? 16189 : E, N = 0, F = 0;
				break;
			case 16181:
				for (; F < 16;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if (i.flags = N, (255 & i.flags) !== x) {
					e.msg = "unknown compression method", i.mode = T;
					break;
				}
				if (57344 & i.flags) {
					e.msg = "unknown header flags set", i.mode = T;
					break;
				}
				i.head && (i.head.text = N >> 8 & 1), 512 & i.flags && 4 & i.wrap && (ee[0] = 255 & N, ee[1] = N >>> 8 & 255, i.check = l(i.check, ee, 2, 0)), N = 0, F = 0, i.mode = 16182;
			case 16182:
				for (; F < 32;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				i.head && (i.head.time = N), 512 & i.flags && 4 & i.wrap && (ee[0] = 255 & N, ee[1] = N >>> 8 & 255, ee[2] = N >>> 16 & 255, ee[3] = N >>> 24 & 255, i.check = l(i.check, ee, 4, 0)), N = 0, F = 0, i.mode = 16183;
			case 16183:
				for (; F < 16;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				i.head && (i.head.xflags = 255 & N, i.head.os = N >> 8), 512 & i.flags && 4 & i.wrap && (ee[0] = 255 & N, ee[1] = N >>> 8 & 255, i.check = l(i.check, ee, 2, 0)), N = 0, F = 0, i.mode = 16184;
			case 16184:
				if (1024 & i.flags) {
					for (; F < 16;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					i.length = N, i.head && (i.head.extra_len = N), 512 & i.flags && 4 & i.wrap && (ee[0] = 255 & N, ee[1] = N >>> 8 & 255, i.check = l(i.check, ee, 2, 0)), N = 0, F = 0;
				} else i.head && (i.head.extra = null);
				i.mode = 16185;
			case 16185:
				if (1024 & i.flags && (L = i.length, L > I && (L = I), L && (i.head && (q = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)), i.head.extra.set(n.subarray(a, a + L), q)), 512 & i.flags && 4 & i.wrap && (i.check = l(i.check, n, L, a)), I -= L, a += L, i.length -= L), i.length)) break e;
				i.length = 0, i.mode = 16186;
			case 16186:
				if (2048 & i.flags) {
					if (0 === I) break e;
					L = 0;
					do
						q = n[a + L++], i.head && q && i.length < 65536 && (i.head.name += String.fromCharCode(q));
					while (q && L < I);
					if (512 & i.flags && 4 & i.wrap && (i.check = l(i.check, n, L, a)), I -= L, a += L, q) break e;
				} else i.head && (i.head.name = null);
				i.length = 0, i.mode = 16187;
			case 16187:
				if (4096 & i.flags) {
					if (0 === I) break e;
					L = 0;
					do
						q = n[a + L++], i.head && q && i.length < 65536 && (i.head.comment += String.fromCharCode(q));
					while (q && L < I);
					if (512 & i.flags && 4 & i.wrap && (i.check = l(i.check, n, L, a)), I -= L, a += L, q) break e;
				} else i.head && (i.head.comment = null);
				i.mode = 16188;
			case 16188:
				if (512 & i.flags) {
					for (; F < 16;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					if (4 & i.wrap && N !== (65535 & i.check)) {
						e.msg = "header crc mismatch", i.mode = T;
						break;
					}
					N = 0, F = 0;
				}
				i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), e.adler = i.check = 0, i.mode = E;
				break;
			case 16189:
				for (; F < 32;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				e.adler = i.check = D(N), N = 0, F = 0, i.mode = v;
			case v:
				if (0 === i.havedict) return e.next_out = o, e.avail_out = C, e.next_in = a, e.avail_in = I, i.hold = N, i.bits = F, m;
				e.adler = i.check = 1, i.mode = E;
			case E: if (t === c || t === u) break e;
			case R:
				if (i.last) {
					N >>>= 7 & F, F -= 7 & F, i.mode = U;
					break;
				}
				for (; F < 3;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				switch (i.last = 1 & N, N >>>= 1, F -= 1, 3 & N) {
					case 0:
						i.mode = 16193;
						break;
					case 1:
						if (j(i), i.mode = Z, t === u) {
							N >>>= 2, F -= 2;
							break e;
						}
						break;
					case 2:
						i.mode = 16196;
						break;
					case 3: e.msg = "invalid block type", i.mode = T;
				}
				N >>>= 2, F -= 2;
				break;
			case 16193:
				for (N >>>= 7 & F, F -= 7 & F; F < 32;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if ((65535 & N) != (N >>> 16 ^ 65535)) {
					e.msg = "invalid stored block lengths", i.mode = T;
					break;
				}
				if (i.length = 65535 & N, N = 0, F = 0, i.mode = A, t === u) break e;
			case A: i.mode = 16195;
			case 16195:
				if (L = i.length, L) {
					if (L > I && (L = I), L > C && (L = C), 0 === L) break e;
					r.set(n.subarray(a, a + L), o), I -= L, a += L, C -= L, o += L, i.length -= L;
					break;
				}
				i.mode = E;
				break;
			case 16196:
				for (; F < 14;) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if (i.nlen = 257 + (31 & N), N >>>= 5, F -= 5, i.ndist = 1 + (31 & N), N >>>= 5, F -= 5, i.ncode = 4 + (15 & N), N >>>= 4, F -= 4, i.nlen > 286 || i.ndist > 30) {
					e.msg = "too many length or distance symbols", i.mode = T;
					break;
				}
				i.have = 0, i.mode = 16197;
			case 16197:
				for (; i.have < i.ncode;) {
					for (; F < 3;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					i.lens[ne[i.have++]] = 7 & N, N >>>= 3, F -= 3;
				}
				for (; i.have < 19;) i.lens[ne[i.have++]] = 0;
				if (i.lencode = i.lendyn, i.lenbits = 7, te = { bits: i.lenbits }, J = f(0, i.lens, 0, 19, i.lencode, 0, i.work, te), i.lenbits = te.bits, J) {
					e.msg = "invalid code lengths set", i.mode = T;
					break;
				}
				i.have = 0, i.mode = 16198;
			case 16198:
				for (; i.have < i.nlen + i.ndist;) {
					for (; Q = i.lencode[N & (1 << i.lenbits) - 1], Y = Q >>> 24, G = Q >>> 16 & 255, X = 65535 & Q, !(Y <= F);) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					if (X < 16) N >>>= Y, F -= Y, i.lens[i.have++] = X;
					else {
						if (16 === X) {
							for (ie = Y + 2; F < ie;) {
								if (0 === I) break e;
								I--, N += n[a++] << F, F += 8;
							}
							if (N >>>= Y, F -= Y, 0 === i.have) {
								e.msg = "invalid bit length repeat", i.mode = T;
								break;
							}
							q = i.lens[i.have - 1], L = 3 + (3 & N), N >>>= 2, F -= 2;
						} else if (17 === X) {
							for (ie = Y + 3; F < ie;) {
								if (0 === I) break e;
								I--, N += n[a++] << F, F += 8;
							}
							N >>>= Y, F -= Y, q = 0, L = 3 + (7 & N), N >>>= 3, F -= 3;
						} else {
							for (ie = Y + 7; F < ie;) {
								if (0 === I) break e;
								I--, N += n[a++] << F, F += 8;
							}
							N >>>= Y, F -= Y, q = 0, L = 11 + (127 & N), N >>>= 7, F -= 7;
						}
						if (i.have + L > i.nlen + i.ndist) {
							e.msg = "invalid bit length repeat", i.mode = T;
							break;
						}
						for (; L--;) i.lens[i.have++] = q;
					}
				}
				if (i.mode === T) break;
				if (0 === i.lens[256]) {
					e.msg = "invalid code -- missing end-of-block", i.mode = T;
					break;
				}
				if (i.lenbits = 9, te = { bits: i.lenbits }, J = f(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, te), i.lenbits = te.bits, J) {
					e.msg = "invalid literal/lengths set", i.mode = T;
					break;
				}
				if (i.distbits = 6, i.distcode = i.distdyn, te = { bits: i.distbits }, J = f(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, te), i.distbits = te.bits, J) {
					e.msg = "invalid distances set", i.mode = T;
					break;
				}
				if (i.mode = Z, t === u) break e;
			case Z: i.mode = S;
			case S:
				if (I >= 6 && C >= 258) {
					e.next_out = o, e.avail_out = C, e.next_in = a, e.avail_in = I, i.hold = N, i.bits = F, d(e, z), o = e.next_out, r = e.output, C = e.avail_out, a = e.next_in, n = e.input, I = e.avail_in, N = i.hold, F = i.bits, i.mode === E && (i.back = -1);
					break;
				}
				for (i.back = 0; Q = i.lencode[N & (1 << i.lenbits) - 1], Y = Q >>> 24, G = Q >>> 16 & 255, X = 65535 & Q, !(Y <= F);) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if (G && !(240 & G)) {
					for (V = Y, W = G, $ = X; Q = i.lencode[$ + ((N & (1 << V + W) - 1) >> V)], Y = Q >>> 24, G = Q >>> 16 & 255, X = 65535 & Q, !(V + Y <= F);) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					N >>>= V, F -= V, i.back += V;
				}
				if (N >>>= Y, F -= Y, i.back += Y, i.length = X, 0 === G) {
					i.mode = 16205;
					break;
				}
				if (32 & G) {
					i.back = -1, i.mode = E;
					break;
				}
				if (64 & G) {
					e.msg = "invalid literal/length code", i.mode = T;
					break;
				}
				i.extra = 15 & G, i.mode = 16201;
			case 16201:
				if (i.extra) {
					for (ie = i.extra; F < ie;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					i.length += N & (1 << i.extra) - 1, N >>>= i.extra, F -= i.extra, i.back += i.extra;
				}
				i.was = i.length, i.mode = 16202;
			case 16202:
				for (; Q = i.distcode[N & (1 << i.distbits) - 1], Y = Q >>> 24, G = Q >>> 16 & 255, X = 65535 & Q, !(Y <= F);) {
					if (0 === I) break e;
					I--, N += n[a++] << F, F += 8;
				}
				if (!(240 & G)) {
					for (V = Y, W = G, $ = X; Q = i.distcode[$ + ((N & (1 << V + W) - 1) >> V)], Y = Q >>> 24, G = Q >>> 16 & 255, X = 65535 & Q, !(V + Y <= F);) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					N >>>= V, F -= V, i.back += V;
				}
				if (N >>>= Y, F -= Y, i.back += Y, 64 & G) {
					e.msg = "invalid distance code", i.mode = T;
					break;
				}
				i.offset = X, i.extra = 15 & G, i.mode = 16203;
			case 16203:
				if (i.extra) {
					for (ie = i.extra; F < ie;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					i.offset += N & (1 << i.extra) - 1, N >>>= i.extra, F -= i.extra, i.back += i.extra;
				}
				if (i.offset > i.dmax) {
					e.msg = "invalid distance too far back", i.mode = T;
					break;
				}
				i.mode = 16204;
			case 16204:
				if (0 === C) break e;
				if (L = z - C, i.offset > L) {
					if (L = i.offset - L, L > i.whave && i.sane) {
						e.msg = "invalid distance too far back", i.mode = T;
						break;
					}
					L > i.wnext ? (L -= i.wnext, H = i.wsize - L) : H = i.wnext - L, L > i.length && (L = i.length), P = i.window;
				} else P = r, H = o - i.offset, L = i.length;
				L > C && (L = C), C -= L, i.length -= L;
				do
					r[o++] = P[H++];
				while (--L);
				0 === i.length && (i.mode = S);
				break;
			case 16205:
				if (0 === C) break e;
				r[o++] = i.length, C--, i.mode = S;
				break;
			case U:
				if (i.wrap) {
					for (; F < 32;) {
						if (0 === I) break e;
						I--, N |= n[a++] << F, F += 8;
					}
					if (z -= C, e.total_out += z, i.total += z, 4 & i.wrap && z && (e.adler = i.check = i.flags ? l(i.check, r, z, o - z) : s(i.check, r, z, o - z)), z = C, 4 & i.wrap && (i.flags ? N : D(N)) !== i.check) {
						e.msg = "incorrect data check", i.mode = T;
						break;
					}
					N = 0, F = 0;
				}
				i.mode = 16207;
			case 16207:
				if (i.wrap && i.flags) {
					for (; F < 32;) {
						if (0 === I) break e;
						I--, N += n[a++] << F, F += 8;
					}
					if (4 & i.wrap && N !== (4294967295 & i.total)) {
						e.msg = "incorrect length check", i.mode = T;
						break;
					}
					N = 0, F = 0;
				}
				i.mode = 16208;
			case 16208:
				J = b;
				break e;
			case T:
				J = _;
				break e;
			case O: return p;
			default: return k;
		}
		return e.next_out = o, e.avail_out = C, e.next_in = a, e.avail_in = I, i.hold = N, i.bits = F, (i.wsize || z !== e.avail_out && i.mode < T && (i.mode < U || t !== h)) && K(e, e.output, e.next_out, z - e.avail_out) ? (i.mode = O, p) : (M -= e.avail_in, z -= e.avail_out, e.total_in += M, e.total_out += z, i.total += z, 4 & i.wrap && z && (e.adler = i.check = i.flags ? l(i.check, r, z, e.next_out - z) : s(i.check, r, z, e.next_out - z)), e.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === E ? 128 : 0) + (i.mode === Z || i.mode === A ? 256 : 0), (0 === M && 0 === z || t === h) && J === w && (J = g), J);
	}, o.exports.inflateEnd = (e) => {
		if (B(e)) return k;
		let t = e.state;
		return t.window && (t.window = null), e.state = null, w;
	}, o.exports.inflateGetHeader = (e, t) => {
		if (B(e)) return k;
		const i = e.state;
		return 2 & i.wrap ? (i.head = t, t.done = !1, w) : k;
	}, o.exports.inflateSetDictionary = (e, t) => {
		const i = t.length;
		let n, r, a;
		return B(e) ? k : (n = e.state, 0 !== n.wrap && n.mode !== v ? k : n.mode === v && (r = 1, r = s(r, t, i, 0), r !== n.check) ? _ : (a = K(e, t, i, i), a ? (n.mode = O, p) : (n.havedict = 1, w)));
	}, o.exports.inflateInfo = "pako inflate (from Nodeca project)";
}), s = e((e, t) => {
	const i = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
	t.exports.assign = function(e) {
		const t = Array.prototype.slice.call(arguments, 1);
		for (; t.length;) {
			const n = t.shift();
			if (n) {
				if ("object" != typeof n) throw new TypeError(n + "must be non-object");
				for (const t in n) i(n, t) && (e[t] = n[t]);
			}
		}
		return e;
	}, t.exports.flattenChunks = (e) => {
		let t = 0;
		for (let n = 0, r = e.length; n < r; n++) t += e[n].length;
		const i = new Uint8Array(t);
		for (let n = 0, r = 0, a = e.length; n < a; n++) {
			let t = e[n];
			i.set(t, r), r += t.length;
		}
		return i;
	};
}), l = e((e, t) => {
	let i = !0;
	try {
		String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
	} catch (r) {
		i = !1;
	}
	const n = /* @__PURE__ */ new Uint8Array(256);
	for (let a = 0; a < 256; a++) n[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
	n[254] = n[255] = 1, t.exports.string2buf = (e) => {
		if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
		let t, i, n, r, a, o = e.length, s = 0;
		for (r = 0; r < o; r++) i = e.charCodeAt(r), 55296 == (64512 & i) && r + 1 < o && (n = e.charCodeAt(r + 1), 56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), s += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
		for (t = new Uint8Array(s), a = 0, r = 0; a < s; r++) i = e.charCodeAt(r), 55296 == (64512 & i) && r + 1 < o && (n = e.charCodeAt(r + 1), 56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320), r++)), i < 128 ? t[a++] = i : i < 2048 ? (t[a++] = 192 | i >>> 6, t[a++] = 128 | 63 & i) : i < 65536 ? (t[a++] = 224 | i >>> 12, t[a++] = 128 | i >>> 6 & 63, t[a++] = 128 | 63 & i) : (t[a++] = 240 | i >>> 18, t[a++] = 128 | i >>> 12 & 63, t[a++] = 128 | i >>> 6 & 63, t[a++] = 128 | 63 & i);
		return t;
	};
	t.exports.buf2string = (e, t) => {
		const r = t || e.length;
		if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, t));
		let a, o;
		const s = new Array(2 * r);
		for (o = 0, a = 0; a < r;) {
			let t = e[a++];
			if (t < 128) {
				s[o++] = t;
				continue;
			}
			let i = n[t];
			if (i > 4) s[o++] = 65533, a += i - 1;
			else {
				for (t &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && a < r;) t = t << 6 | 63 & e[a++], i--;
				i > 1 ? s[o++] = 65533 : t < 65536 ? s[o++] = t : (t -= 65536, s[o++] = 55296 | t >> 10 & 1023, s[o++] = 56320 | 1023 & t);
			}
		}
		return ((e, t) => {
			if (t < 65534 && e.subarray && i) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
			let n = "";
			for (let i = 0; i < t; i++) n += String.fromCharCode(e[i]);
			return n;
		})(s, o);
	}, t.exports.utf8border = (e, t) => {
		(t = t || e.length) > e.length && (t = e.length);
		let i = t - 1;
		for (; i >= 0 && 128 == (192 & e[i]);) i--;
		return i < 0 || 0 === i ? t : i + n[e[i]] > t ? i : t;
	};
}), d = e((e, t) => {
	t.exports = {
		2: "need dictionary",
		1: "stream end",
		0: "",
		"-1": "file error",
		"-2": "stream error",
		"-3": "data error",
		"-4": "insufficient memory",
		"-5": "buffer error",
		"-6": "incompatible version"
	};
}), f = e((e, t) => {
	t.exports = function() {
		this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
	};
}), h = e((e, t) => {
	t.exports = function() {
		this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
	};
}), c = e((e, t) => {
	const i = o(), n = s(), r = l(), c = d(), u = f(), w = h(), b = Object.prototype.toString, { Z_NO_FLUSH: m, Z_FINISH: k, Z_OK: _, Z_STREAM_END: p, Z_NEED_DICT: g, Z_STREAM_ERROR: x, Z_DATA_ERROR: y, Z_MEM_ERROR: v, Z_BUF_ERROR: E } = a(), R = {
		chunkSize: 65536,
		windowBits: 15,
		to: ""
	};
	function A(e) {
		this.options = n.assign({}, R, e || {});
		const t = this.options;
		t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
		let a = i.inflateInit2(this.strm, t.windowBits);
		if (a !== _) throw new Error(c[a]);
		if (this.header = new w(), i.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = r.string2buf(t.dictionary) : "[object ArrayBuffer]" === b.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (a = i.inflateSetDictionary(this.strm, t.dictionary), a !== _))) throw new Error(c[a]);
	}
	function Z(e, t) {
		const i = new A(t);
		if (i.push(e, !0), i.err) throw i.msg || c[i.err];
		return i.result;
	}
	A.prototype.push = function(e, t) {
		const n = this.strm, a = this.options.chunkSize, o = this.options.dictionary;
		let s, l, d;
		if (this.ended) return !1;
		for (l = t === ~~t ? t : !0 === t ? k : m, "[object ArrayBuffer]" === b.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;;) {
			for (0 === n.avail_out && (n.output = new Uint8Array(a), n.next_out = 0, n.avail_out = a), s = i.inflate(n, l), s === g && o && (s = i.inflateSetDictionary(n, o), s === _ ? s = i.inflate(n, l) : s === y && (s = g)); n.avail_in > 0 && s === p && 2 & n.state.wrap && 0 !== n.state.flags && 0 !== n.input[n.next_in];) i.inflateReset(n), s = i.inflate(n, l);
			switch (s) {
				case x:
				case y:
				case g:
				case v: return this.onEnd(s), this.ended = !0, !1;
			}
			if (d = n.avail_out, n.next_out && (0 === n.avail_out || s === p || l > 0)) if ("string" === this.options.to) {
				let e = r.utf8border(n.output, n.next_out), t = n.next_out - e, i = r.buf2string(n.output, e);
				n.next_out = t, n.avail_out = a - t, t && n.output.set(n.output.subarray(e, e + t), 0), this.onData(i);
			} else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out)), n.avail_out = 0, n.next_out = 0;
			if (s !== _ && s !== E || 0 !== d) {
				if (s === p) return s = i.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
				if (0 === n.avail_in) {
					if (l === k) return s = i.inflateEnd(this.strm), this.onEnd(s === _ ? E : s), this.ended = !0, !1;
					break;
				}
			}
		}
		return !0;
	}, A.prototype.onData = function(e) {
		this.chunks.push(e);
	}, A.prototype.onEnd = function(e) {
		e === _ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}, t.exports.Inflate = A, t.exports.inflate = Z, t.exports.inflateRaw = function(e, t) {
		return (t = t || {}).raw = !0, Z(e, t);
	}, t.exports.ungzip = Z, t.exports.constants = a();
})();
const u = self;
u.onmessage = (e) => {
	const { id: t, buffer: i, dataType: n, width: r, height: a } = e.data || {};
	try {
		if (!i || i.byteLength < 1e3) throw new Error("invalid terrain data");
		const e = function(e, t, i, n) {
			const r = "float" === t ? 4 : 2;
			if (e.length !== 22500 * r) throw new Error(`invalid terrain payload: ${e.length}`);
			const a = new ArrayBuffer(r), o = new DataView(a), s = new Uint8Array(i * n * 4);
			for (let l = 0; l < n; l++) for (let t = 0; t < i; t++) {
				const a = r * (150 * Math.floor(149 * l / (n - 1)) + Math.floor(149 * t / (i - 1)));
				let d;
				4 === r ? (o.setInt8(0, e[a]), o.setInt8(1, e[a + 1]), o.setInt8(2, e[a + 2]), o.setInt8(3, e[a + 3]), d = o.getFloat32(0, !0)) : d = (e[a] | e[a + 1] << 8) << 16 >> 16, (d > 1e4 || d < -2e3) && (d = 0);
				const f = (d + 1e3) / .001, h = 4 * (l * i + t);
				s[h] = f / 65536, s[h + 1] = (f - 256 * s[h] * 256) / 256, s[h + 2] = f - 256 * s[h] * 256 - 256 * s[h + 1], s[h + 3] = 255;
			}
			return s;
		}((0, c.inflate)(new Uint8Array(i)), n, r, a);
		u.postMessage({
			id: t,
			ok: !0,
			pixels: e
		}, [e.buffer]);
	} catch (o) {
		const e = o instanceof Error ? o.message : String(o);
		u.postMessage({
			id: t,
			ok: !1,
			error: e
		});
	}
};
