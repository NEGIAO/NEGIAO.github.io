var e = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty, s = (s, l, f) => (f = null != s ? e(a(s)) : {}, ((e, a, s, l) => {
	if (a && "object" == typeof a || "function" == typeof a) for (var f, o = i(a), u = 0, c = o.length; u < c; u++) f = o[u], n.call(e, f) || f === s || t(e, f, {
		get: ((e) => a[e]).bind(null, f),
		enumerable: !(l = r(a, f)) || l.enumerable
	});
	return e;
})(!l && s && s.__esModule && n.call(s, "default") ? f : t(f, "default", {
	value: s,
	enumerable: !0
}), s)), f = s(((e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports))((e, t) => {
	(function() {
		var e, r, i, a, n, s, l, f, o, u, c, d, h, m, p, g, x = (e = {
			defaultNoDataValue: -34027999387901484e22,
			decode: function(t, s) {
				var l = (s = s || {}).encodedMaskData || null === s.encodedMaskData, f = n(t, s.inputOffset || 0, l), o = null !== s.noDataValue ? s.noDataValue : e.defaultNoDataValue, u = r(f, s.pixelType || Float32Array, s.encodedMaskData, o, s.returnMask), c = {
					width: f.width,
					height: f.height,
					pixelData: u.resultPixels,
					minValue: u.minValue,
					maxValue: f.pixels.maxValue,
					noDataValue: o
				};
				return u.resultMask && (c.maskData = u.resultMask), s.returnEncodedMask && f.mask && (c.encodedMaskData = f.mask.bitset ? f.mask.bitset : null), s.returnFileInfo && (c.fileInfo = i(f), s.computeUsedBitDepths && (c.fileInfo.bitDepths = a(f))), c;
			}
		}, r = function(e, t, r, i, a) {
			var n, l = 0, f = e.pixels.numBlocksX, o = e.pixels.numBlocksY, u = Math.floor(e.width / f), c = Math.floor(e.height / o), d = 2 * e.maxZError, h = Number.MAX_VALUE;
			r = r || (e.mask ? e.mask.bitset : null);
			var m, p = new t(e.width * e.height);
			a && r && (m = new Uint8Array(e.width * e.height));
			for (var g, x, w = new Float32Array(u * c), k = 0; k <= o; k++) {
				var y = k !== o ? c : e.height % o;
				if (0 !== y) for (var b = 0; b <= f; b++) {
					var v = b !== f ? u : e.width % f;
					if (0 !== v) {
						var U, I, V, M, D = k * e.width * c + b * u, A = e.width - v, B = e.pixels.blocks[l];
						if (B.encoding < 2 ? (0 === B.encoding ? U = B.rawData : (s(B.stuffedData, B.bitsPerPixel, B.numValidPixels, B.offset, d, w, e.pixels.maxValue), U = w), I = 0) : V = 2 === B.encoding ? 0 : B.offset, r) for (x = 0; x < y; x++) {
							for (7 & D && (M = r[D >> 3], M <<= 7 & D), g = 0; g < v; g++) 7 & D || (M = r[D >> 3]), 128 & M ? (m && (m[D] = 1), h = h > (n = B.encoding < 2 ? U[I++] : V) ? n : h, p[D++] = n) : (m && (m[D] = 0), p[D++] = i), M <<= 1;
							D += A;
						}
						else if (B.encoding < 2) for (x = 0; x < y; x++) {
							for (g = 0; g < v; g++) h = h > (n = U[I++]) ? n : h, p[D++] = n;
							D += A;
						}
						else for (h = h > V ? V : h, x = 0; x < y; x++) {
							for (g = 0; g < v; g++) p[D++] = V;
							D += A;
						}
						if (1 === B.encoding && I !== B.numValidPixels) throw "Block and Mask do not match";
						l++;
					}
				}
			}
			return {
				resultPixels: p,
				resultMask: m,
				minValue: h
			};
		}, i = function(e) {
			return {
				fileIdentifierString: e.fileIdentifierString,
				fileVersion: e.fileVersion,
				imageType: e.imageType,
				height: e.height,
				width: e.width,
				maxZError: e.maxZError,
				eofOffset: e.eofOffset,
				mask: e.mask ? {
					numBlocksX: e.mask.numBlocksX,
					numBlocksY: e.mask.numBlocksY,
					numBytes: e.mask.numBytes,
					maxValue: e.mask.maxValue
				} : null,
				pixels: {
					numBlocksX: e.pixels.numBlocksX,
					numBlocksY: e.pixels.numBlocksY,
					numBytes: e.pixels.numBytes,
					maxValue: e.pixels.maxValue,
					noDataValue: e.noDataValue
				}
			};
		}, a = function(e) {
			for (var t = e.pixels.numBlocksX * e.pixels.numBlocksY, r = {}, i = 0; i < t; i++) {
				var a = e.pixels.blocks[i];
				0 === a.encoding ? r.float32 = !0 : 1 === a.encoding ? r[a.bitsPerPixel] = !0 : r[0] = !0;
			}
			return Object.keys(r);
		}, n = function(e, t, r) {
			var i = {}, a = new Uint8Array(e, t, 10);
			if (i.fileIdentifierString = String.fromCharCode.apply(null, a), "CntZImage" !== i.fileIdentifierString.trim()) throw "Unexpected file identifier string: " + i.fileIdentifierString;
			t += 10;
			var n = new DataView(e, t, 24);
			if (i.fileVersion = n.getInt32(0, !0), i.imageType = n.getInt32(4, !0), i.height = n.getUint32(8, !0), i.width = n.getUint32(12, !0), i.maxZError = n.getFloat64(16, !0), t += 24, !r) if (n = new DataView(e, t, 16), i.mask = {}, i.mask.numBlocksY = n.getUint32(0, !0), i.mask.numBlocksX = n.getUint32(4, !0), i.mask.numBytes = n.getUint32(8, !0), i.mask.maxValue = n.getFloat32(12, !0), t += 16, i.mask.numBytes > 0) {
				var s = new Uint8Array(Math.ceil(i.width * i.height / 8)), l = (n = new DataView(e, t, i.mask.numBytes)).getInt16(0, !0), f = 2, o = 0;
				do {
					if (l > 0) for (; l--;) s[o++] = n.getUint8(f++);
					else {
						var u = n.getUint8(f++);
						for (l = -l; l--;) s[o++] = u;
					}
					l = n.getInt16(f, !0), f += 2;
				} while (f < i.mask.numBytes);
				if (-32768 !== l || o < s.length) throw "Unexpected end of mask RLE encoding";
				i.mask.bitset = s, t += i.mask.numBytes;
			} else 0 === (i.mask.numBytes | i.mask.numBlocksY | i.mask.maxValue) && (i.mask.bitset = new Uint8Array(Math.ceil(i.width * i.height / 8)));
			n = new DataView(e, t, 16), i.pixels = {}, i.pixels.numBlocksY = n.getUint32(0, !0), i.pixels.numBlocksX = n.getUint32(4, !0), i.pixels.numBytes = n.getUint32(8, !0), i.pixels.maxValue = n.getFloat32(12, !0), t += 16;
			var c = i.pixels.numBlocksX, d = i.pixels.numBlocksY, h = c + (i.width % c > 0 ? 1 : 0), m = d + (i.height % d > 0 ? 1 : 0);
			i.pixels.blocks = new Array(h * m);
			for (var p = 0, g = 0; g < m; g++) for (var x = 0; x < h; x++) {
				var w = 0, k = e.byteLength - t;
				n = new DataView(e, t, Math.min(10, k));
				var y = {};
				i.pixels.blocks[p++] = y;
				var b = n.getUint8(0);
				if (w++, y.encoding = 63 & b, y.encoding > 3) throw "Invalid block encoding (" + y.encoding + ")";
				if (2 !== y.encoding) {
					if (0 !== b && 2 !== b) {
						if (b >>= 6, y.offsetType = b, 2 === b) y.offset = n.getInt8(1), w++;
						else if (1 === b) y.offset = n.getInt16(1, !0), w += 2;
						else {
							if (0 !== b) throw "Invalid block offset type";
							y.offset = n.getFloat32(1, !0), w += 4;
						}
						if (1 === y.encoding) if (b = n.getUint8(w), w++, y.bitsPerPixel = 63 & b, b >>= 6, y.numValidPixelsType = b, 2 === b) y.numValidPixels = n.getUint8(w), w++;
						else if (1 === b) y.numValidPixels = n.getUint16(w, !0), w += 2;
						else {
							if (0 !== b) throw "Invalid valid pixel count type";
							y.numValidPixels = n.getUint32(w, !0), w += 4;
						}
					}
					var v;
					if (t += w, 3 !== y.encoding) {
						if (0 === y.encoding) {
							var U = (i.pixels.numBytes - 1) / 4;
							if (U !== Math.floor(U)) throw "uncompressed block has invalid length";
							v = /* @__PURE__ */ new ArrayBuffer(4 * U), new Uint8Array(v).set(new Uint8Array(e, t, 4 * U)), y.rawData = new Float32Array(v), t += 4 * U;
						} else if (1 === y.encoding) {
							var I = Math.ceil(y.numValidPixels * y.bitsPerPixel / 8), V = Math.ceil(I / 4);
							v = /* @__PURE__ */ new ArrayBuffer(4 * V), new Uint8Array(v).set(new Uint8Array(e, t, I)), y.stuffedData = new Uint32Array(v), t += I;
						}
					}
				} else t++;
			}
			return i.eofOffset = t, i;
		}, s = function(e, t, r, i, a, n, s) {
			var l, f, o, u = (1 << t) - 1, c = 0, d = 0, h = Math.ceil((s - i) / a), m = 4 * e.length - Math.ceil(t * r / 8);
			for (e[e.length - 1] <<= 8 * m, l = 0; l < r; l++) {
				if (0 === d && (o = e[c++], d = 32), d >= t) f = o >>> d - t & u, d -= t;
				else {
					var p = t - d;
					f = (o & u) << p & u, f += (o = e[c++]) >>> (d = 32 - p);
				}
				n[l] = f < h ? i + f * a : s;
			}
			return n;
		}, e), w = (l = function(e, t, r, i, a, n, s, l) {
			var f, o, u, c, d, h = (1 << r) - 1, m = 0, p = 0, g = 4 * e.length - Math.ceil(r * i / 8);
			if (e[e.length - 1] <<= 8 * g, a) for (f = 0; f < i; f++) 0 === p && (u = e[m++], p = 32), p >= r ? (o = u >>> p - r & h, p -= r) : (o = (u & h) << (c = r - p) & h, o += (u = e[m++]) >>> (p = 32 - c)), t[f] = a[o];
			else for (d = Math.ceil((l - n) / s), f = 0; f < i; f++) 0 === p && (u = e[m++], p = 32), p >= r ? (o = u >>> p - r & h, p -= r) : (o = (u & h) << (c = r - p) & h, o += (u = e[m++]) >>> (p = 32 - c)), t[f] = o < d ? n + o * s : l;
		}, f = function(e, t, r, i, a, n) {
			var s, l = (1 << t) - 1, f = 0, o = 0, u = 0, c = 0, d = 0, h = [], m = 4 * e.length - Math.ceil(t * r / 8);
			e[e.length - 1] <<= 8 * m;
			var p = Math.ceil((n - i) / a);
			for (o = 0; o < r; o++) 0 === c && (s = e[f++], c = 32), c >= t ? (d = s >>> c - t & l, c -= t) : (d = (s & l) << (u = t - c) & l, d += (s = e[f++]) >>> (c = 32 - u)), h[o] = d < p ? i + d * a : n;
			return h.unshift(i), h;
		}, o = function(e, t, r, i, a, n, s, l) {
			var f, o, u, c, d = (1 << r) - 1, h = 0, m = 0, p = 0;
			if (a) for (f = 0; f < i; f++) 0 === m && (u = e[h++], m = 32, p = 0), m >= r ? (o = u >>> p & d, m -= r, p += r) : (o = u >>> p & d, m = 32 - (c = r - m), o |= ((u = e[h++]) & (1 << c) - 1) << r - c, p = c), t[f] = a[o];
			else {
				var g = Math.ceil((l - n) / s);
				for (f = 0; f < i; f++) 0 === m && (u = e[h++], m = 32, p = 0), m >= r ? (o = u >>> p & d, m -= r, p += r) : (o = u >>> p & d, m = 32 - (c = r - m), o |= ((u = e[h++]) & (1 << c) - 1) << r - c, p = c), t[f] = o < g ? n + o * s : l;
			}
			return t;
		}, u = function(e, t, r, i, a, n) {
			var s, l = (1 << t) - 1, f = 0, o = 0, u = 0, c = 0, d = 0, h = 0, m = [], p = Math.ceil((n - i) / a);
			for (o = 0; o < r; o++) 0 === c && (s = e[f++], c = 32, h = 0), c >= t ? (d = s >>> h & l, c -= t, h += t) : (d = s >>> h & l, c = 32 - (u = t - c), d |= ((s = e[f++]) & (1 << u) - 1) << t - u, h = u), m[o] = d < p ? i + d * a : n;
			return m.unshift(i), m;
		}, c = function(e, t, r, i) {
			var a, n, s, l, f = (1 << r) - 1, o = 0, u = 0, c = 4 * e.length - Math.ceil(r * i / 8);
			for (e[e.length - 1] <<= 8 * c, a = 0; a < i; a++) 0 === u && (s = e[o++], u = 32), u >= r ? (n = s >>> u - r & f, u -= r) : (n = (s & f) << (l = r - u) & f, n += (s = e[o++]) >>> (u = 32 - l)), t[a] = n;
			return t;
		}, d = function(e, t, r, i) {
			var a, n, s, l, f = (1 << r) - 1, o = 0, u = 0, c = 0;
			for (a = 0; a < i; a++) 0 === u && (s = e[o++], u = 32, c = 0), u >= r ? (n = s >>> c & f, u -= r, c += r) : (n = s >>> c & f, u = 32 - (l = r - u), n |= ((s = e[o++]) & (1 << l) - 1) << r - l, c = l), t[a] = n;
			return t;
		}, h = {
			HUFFMAN_LUT_BITS_MAX: 12,
			computeChecksumFletcher32: function(e) {
				for (var t = 65535, r = 65535, i = e.length, a = Math.floor(i / 2), n = 0; a;) {
					var s = a >= 359 ? 359 : a;
					a -= s;
					do
						t += e[n++] << 8, r += t += e[n++];
					while (--s);
					t = (65535 & t) + (t >>> 16), r = (65535 & r) + (r >>> 16);
				}
				return 1 & i && (r += t += e[n] << 8), ((r = (65535 & r) + (r >>> 16)) << 16 | (t = (65535 & t) + (t >>> 16))) >>> 0;
			},
			readHeaderInfo: function(e, t) {
				var r = t.ptr, i = new Uint8Array(e, r, 6), a = {};
				if (a.fileIdentifierString = String.fromCharCode.apply(null, i), 0 !== a.fileIdentifierString.lastIndexOf("Lerc2", 0)) throw "Unexpected file identifier string (expect Lerc2 ): " + a.fileIdentifierString;
				r += 6;
				var n, s = new DataView(e, r, 8), l = s.getInt32(0, !0);
				if (a.fileVersion = l, r += 4, l >= 3 && (a.checksum = s.getUint32(4, !0), r += 4), s = new DataView(e, r, 12), a.height = s.getUint32(0, !0), a.width = s.getUint32(4, !0), r += 8, l >= 4 ? (a.numDims = s.getUint32(8, !0), r += 4) : a.numDims = 1, s = new DataView(e, r, 40), a.numValidPixel = s.getUint32(0, !0), a.microBlockSize = s.getInt32(4, !0), a.blobSize = s.getInt32(8, !0), a.imageType = s.getInt32(12, !0), a.maxZError = s.getFloat64(16, !0), a.zMin = s.getFloat64(24, !0), a.zMax = s.getFloat64(32, !0), r += 40, t.headerInfo = a, t.ptr = r, l >= 3 && (n = l >= 4 ? 52 : 48, this.computeChecksumFletcher32(new Uint8Array(e, r - n, a.blobSize - 14)) !== a.checksum)) throw "Checksum failed.";
				return !0;
			},
			checkMinMaxRanges: function(e, t) {
				var r = t.headerInfo, i = this.getDataTypeArray(r.imageType), a = r.numDims * this.getDataTypeSize(r.imageType), n = this.readSubArray(e, t.ptr, i, a), s = this.readSubArray(e, t.ptr + a, i, a);
				t.ptr += 2 * a;
				var l, f = !0;
				for (l = 0; l < r.numDims; l++) if (n[l] !== s[l]) {
					f = !1;
					break;
				}
				return r.minValues = n, r.maxValues = s, f;
			},
			readSubArray: function(e, t, r, i) {
				var a;
				if (r === Uint8Array) a = new Uint8Array(e, t, i);
				else {
					var n = new ArrayBuffer(i);
					new Uint8Array(n).set(new Uint8Array(e, t, i)), a = new r(n);
				}
				return a;
			},
			readMask: function(e, t) {
				var r, i, a = t.ptr, n = t.headerInfo, s = n.width * n.height, l = n.numValidPixel, f = new DataView(e, a, 4), o = {};
				if (o.numBytes = f.getUint32(0, !0), a += 4, (0 === l || s === l) && 0 !== o.numBytes) throw "invalid mask";
				if (0 === l) r = new Uint8Array(Math.ceil(s / 8)), o.bitset = r, i = new Uint8Array(s), t.pixels.resultMask = i, a += o.numBytes;
				else if (o.numBytes > 0) {
					r = new Uint8Array(Math.ceil(s / 8));
					var u = (f = new DataView(e, a, o.numBytes)).getInt16(0, !0), c = 2, d = 0, h = 0;
					do {
						if (u > 0) for (; u--;) r[d++] = f.getUint8(c++);
						else for (h = f.getUint8(c++), u = -u; u--;) r[d++] = h;
						u = f.getInt16(c, !0), c += 2;
					} while (c < o.numBytes);
					if (-32768 !== u || d < r.length) throw "Unexpected end of mask RLE encoding";
					i = new Uint8Array(s);
					var m = 0, p = 0;
					for (p = 0; p < s; p++) 7 & p ? (m = r[p >> 3], m <<= 7 & p) : m = r[p >> 3], 128 & m && (i[p] = 1);
					t.pixels.resultMask = i, o.bitset = r, a += o.numBytes;
				}
				return t.ptr = a, t.mask = o, !0;
			},
			readDataOneSweep: function(e, t, r, i) {
				var a, n = t.ptr, s = t.headerInfo, l = s.numDims, f = s.width * s.height, o = s.imageType, u = s.numValidPixel * h.getDataTypeSize(o) * l, c = t.pixels.resultMask;
				if (r === Uint8Array) a = new Uint8Array(e, n, u);
				else {
					var d = new ArrayBuffer(u);
					new Uint8Array(d).set(new Uint8Array(e, n, u)), a = new r(d);
				}
				if (a.length === f * l) t.pixels.resultPixels = i ? h.swapDimensionOrder(a, f, l, r, !0) : a;
				else {
					t.pixels.resultPixels = new r(f * l);
					var m = 0, p = 0, g = 0, x = 0;
					if (l > 1) {
						if (i) {
							for (p = 0; p < f; p++) if (c[p]) for (x = p, g = 0; g < l; g++, x += f) t.pixels.resultPixels[x] = a[m++];
						} else for (p = 0; p < f; p++) if (c[p]) for (x = p * l, g = 0; g < l; g++) t.pixels.resultPixels[x + g] = a[m++];
					} else for (p = 0; p < f; p++) c[p] && (t.pixels.resultPixels[p] = a[m++]);
				}
				return n += u, t.ptr = n, !0;
			},
			readHuffmanTree: function(e, t) {
				var r = this.HUFFMAN_LUT_BITS_MAX, i = new DataView(e, t.ptr, 16);
				if (t.ptr += 16, i.getInt32(0, !0) < 2) throw "unsupported Huffman version";
				var a = i.getInt32(4, !0), n = i.getInt32(8, !0), s = i.getInt32(12, !0);
				if (n >= s) return !1;
				var l = new Uint32Array(s - n);
				h.decodeBits(e, t, l);
				for (var f, o, u, c = [], d = n; d < s; d++) c[f = d - (d < a ? 0 : a)] = {
					first: l[d - n],
					second: null
				};
				var p = e.byteLength - t.ptr, g = Math.ceil(p / 4), x = /* @__PURE__ */ new ArrayBuffer(4 * g);
				new Uint8Array(x).set(new Uint8Array(e, t.ptr, p));
				var w, k = new Uint32Array(x), y = 0, b = 0;
				for (w = k[0], d = n; d < s; d++) (u = c[f = d - (d < a ? 0 : a)].first) > 0 && (c[f].second = w << y >>> 32 - u, 32 - y >= u ? 32 === (y += u) && (y = 0, w = k[++b]) : (y += u - 32, w = k[++b], c[f].second |= w >>> 32 - y));
				var v = 0, U = 0, I = new m();
				for (d = 0; d < c.length; d++) void 0 !== c[d] && (v = Math.max(v, c[d].first));
				U = v >= r ? r : v;
				var V, M, D, A, B, P = [];
				for (d = n; d < s; d++) if ((u = c[f = d - (d < a ? 0 : a)].first) > 0) if (V = [u, f], u <= U) for (M = c[f].second << U - u, D = 1 << U - u, o = 0; o < D; o++) P[M | o] = V;
				else for (M = c[f].second, B = I, A = u - 1; A >= 0; A--) M >>> A & 1 ? (B.right || (B.right = new m()), B = B.right) : (B.left || (B.left = new m()), B = B.left), 0 !== A || B.val || (B.val = V[1]);
				return {
					decodeLut: P,
					numBitsLUTQick: U,
					numBitsLUT: v,
					tree: I,
					stuffedData: k,
					srcPtr: b,
					bitPos: y
				};
			},
			readHuffman: function(e, t, r, i) {
				var a, n, s, l, f, o, u, c, d, m = t.headerInfo.numDims, p = t.headerInfo.height, g = t.headerInfo.width, x = g * p, w = this.readHuffmanTree(e, t), k = w.decodeLut, y = w.tree, b = w.stuffedData, v = w.srcPtr, U = w.bitPos, I = w.numBitsLUTQick, V = w.numBitsLUT, M = 0 === t.headerInfo.imageType ? 128 : 0, D = t.pixels.resultMask, A = 0;
				U > 0 && (v++, U = 0);
				var B, P = b[v], T = 1 === t.encodeMode, S = new r(x * m), O = S;
				if (m < 2 || T) {
					for (B = 0; B < m; B++) if (m > 1 && (O = new r(S.buffer, x * B, x), A = 0), t.headerInfo.numValidPixel === g * p) for (c = 0, o = 0; o < p; o++) for (u = 0; u < g; u++, c++) {
						if (n = 0, f = l = P << U >>> 32 - I, 32 - U < I && (f = l |= b[v + 1] >>> 64 - U - I), k[f]) n = k[f][1], U += k[f][0];
						else for (f = l = P << U >>> 32 - V, 32 - U < V && (f = l |= b[v + 1] >>> 64 - U - V), a = y, d = 0; d < V; d++) if (!(a = l >>> V - d - 1 & 1 ? a.right : a.left).left && !a.right) {
							n = a.val, U = U + d + 1;
							break;
						}
						U >= 32 && (U -= 32, P = b[++v]), s = n - M, T ? (s += u > 0 ? A : o > 0 ? O[c - g] : A, s &= 255, O[c] = s, A = s) : O[c] = s;
					}
					else for (c = 0, o = 0; o < p; o++) for (u = 0; u < g; u++, c++) if (D[c]) {
						if (n = 0, f = l = P << U >>> 32 - I, 32 - U < I && (f = l |= b[v + 1] >>> 64 - U - I), k[f]) n = k[f][1], U += k[f][0];
						else for (f = l = P << U >>> 32 - V, 32 - U < V && (f = l |= b[v + 1] >>> 64 - U - V), a = y, d = 0; d < V; d++) if (!(a = l >>> V - d - 1 & 1 ? a.right : a.left).left && !a.right) {
							n = a.val, U = U + d + 1;
							break;
						}
						U >= 32 && (U -= 32, P = b[++v]), s = n - M, T ? (u > 0 && D[c - 1] ? s += A : o > 0 && D[c - g] ? s += O[c - g] : s += A, s &= 255, O[c] = s, A = s) : O[c] = s;
					}
				} else for (c = 0, o = 0; o < p; o++) for (u = 0; u < g; u++) if (c = o * g + u, !D || D[c]) for (B = 0; B < m; B++, c += x) {
					if (n = 0, f = l = P << U >>> 32 - I, 32 - U < I && (f = l |= b[v + 1] >>> 64 - U - I), k[f]) n = k[f][1], U += k[f][0];
					else for (f = l = P << U >>> 32 - V, 32 - U < V && (f = l |= b[v + 1] >>> 64 - U - V), a = y, d = 0; d < V; d++) if (!(a = l >>> V - d - 1 & 1 ? a.right : a.left).left && !a.right) {
						n = a.val, U = U + d + 1;
						break;
					}
					U >= 32 && (U -= 32, P = b[++v]), s = n - M, O[c] = s;
				}
				t.ptr = t.ptr + 4 * (v + 1) + (U > 0 ? 4 : 0), t.pixels.resultPixels = S, m > 1 && !i && (t.pixels.resultPixels = h.swapDimensionOrder(S, x, m, r));
			},
			decodeBits: function(e, t, r, i, a) {
				var n = t.headerInfo, s = n.fileVersion, h = 0, m = e.byteLength - t.ptr >= 5 ? 5 : e.byteLength - t.ptr, p = new DataView(e, t.ptr, m), g = p.getUint8(0);
				h++;
				var x = g >> 6, w = 0 === x ? 4 : 3 - x, k = (32 & g) > 0, y = 31 & g, b = 0;
				if (1 === w) b = p.getUint8(h), h++;
				else if (2 === w) b = p.getUint16(h, !0), h += 2;
				else {
					if (4 !== w) throw "Invalid valid pixel count type";
					b = p.getUint32(h, !0), h += 4;
				}
				var v, U, I, V, M, D, A, B, P, T = 2 * n.maxZError, S = n.numDims > 1 ? n.maxValues[a] : n.zMax;
				if (k) {
					for (t.counter.lut++, B = p.getUint8(h), h++, V = Math.ceil((B - 1) * y / 8), M = Math.ceil(V / 4), U = /* @__PURE__ */ new ArrayBuffer(4 * M), I = new Uint8Array(U), t.ptr += h, I.set(new Uint8Array(e, t.ptr, V)), A = new Uint32Array(U), t.ptr += V, P = 0; B - 1 >>> P;) P++;
					V = Math.ceil(b * P / 8), M = Math.ceil(V / 4), U = /* @__PURE__ */ new ArrayBuffer(4 * M), (I = new Uint8Array(U)).set(new Uint8Array(e, t.ptr, V)), v = new Uint32Array(U), t.ptr += V, D = s >= 3 ? u(A, y, B - 1, i, T, S) : f(A, y, B - 1, i, T, S), s >= 3 ? o(v, r, P, b, D) : l(v, r, P, b, D);
				} else t.counter.bitstuffer++, P = y, t.ptr += h, P > 0 && (V = Math.ceil(b * P / 8), M = Math.ceil(V / 4), U = /* @__PURE__ */ new ArrayBuffer(4 * M), (I = new Uint8Array(U)).set(new Uint8Array(e, t.ptr, V)), v = new Uint32Array(U), t.ptr += V, s >= 3 ? null == i ? d(v, r, P, b) : o(v, r, P, b, !1, i, T, S) : null == i ? c(v, r, P, b) : l(v, r, P, b, !1, i, T, S));
			},
			readTiles: function(e, t, r, i) {
				var a = t.headerInfo, n = a.width, s = a.height, l = n * s, f = a.microBlockSize, o = a.imageType, u = h.getDataTypeSize(o), c = Math.ceil(n / f), d = Math.ceil(s / f);
				t.pixels.numBlocksY = d, t.pixels.numBlocksX = c, t.pixels.ptr = 0;
				var m, p, g, x, w, k, y, b, v, U, I = 0, V = 0, M = 0, D = 0, A = 0, B = 0, P = 0, T = 0, S = 0, O = 0, z = 0, F = 0, L = 0, C = 0, X = 0, E = new r(f * f), Y = s % f || f, H = n % f || f, Z = a.numDims, _ = t.pixels.resultMask, j = t.pixels.resultPixels, N = a.fileVersion >= 5 ? 14 : 15, R = a.zMax;
				for (M = 0; M < d; M++) for (A = M !== d - 1 ? f : Y, D = 0; D < c; D++) for (O = M * n * f + D * f, z = n - (B = D !== c - 1 ? f : H), b = 0; b < Z; b++) {
					if (Z > 1 ? (U = j, O = M * n * f + D * f, j = new r(t.pixels.resultPixels.buffer, l * b * u, l), R = a.maxValues[b]) : U = null, P = e.byteLength - t.ptr, p = {}, X = 0, T = (m = new DataView(e, t.ptr, Math.min(10, P))).getUint8(0), X++, v = a.fileVersion >= 5 ? 4 & T : 0, S = T >> 6 & 255, (T >> 2 & N) != (D * f >> 3 & N)) throw "integrity issue";
					if (v && 0 === b) throw "integrity issue";
					if ((w = 3 & T) > 3) throw t.ptr += X, "Invalid block encoding (" + w + ")";
					if (2 !== w) if (0 === w) {
						if (v) throw "integrity issue";
						if (t.counter.uncompressed++, t.ptr += X, F = (F = A * B * u) < (L = e.byteLength - t.ptr) ? F : L, g = new ArrayBuffer(F % u === 0 ? F : F + u - F % u), new Uint8Array(g).set(new Uint8Array(e, t.ptr, F)), x = new r(g), C = 0, _) for (I = 0; I < A; I++) {
							for (V = 0; V < B; V++) _[O] && (j[O] = x[C++]), O++;
							O += z;
						}
						else for (I = 0; I < A; I++) {
							for (V = 0; V < B; V++) j[O++] = x[C++];
							O += z;
						}
						t.ptr += C * u;
					} else if (k = h.getDataTypeUsed(v && o < 6 ? 4 : o, S), y = h.getOnePixel(p, X, k, m), X += h.getDataTypeSize(k), 3 === w) if (t.ptr += X, t.counter.constantoffset++, _) for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) _[O] && (j[O] = v ? Math.min(R, U[O] + y) : y), O++;
						O += z;
					}
					else for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) j[O] = v ? Math.min(R, U[O] + y) : y, O++;
						O += z;
					}
					else if (t.ptr += X, h.decodeBits(e, t, E, y, b), X = 0, v) if (_) for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) _[O] && (j[O] = E[X++] + U[O]), O++;
						O += z;
					}
					else for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) j[O] = E[X++] + U[O], O++;
						O += z;
					}
					else if (_) for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) _[O] && (j[O] = E[X++]), O++;
						O += z;
					}
					else for (I = 0; I < A; I++) {
						for (V = 0; V < B; V++) j[O++] = E[X++];
						O += z;
					}
					else {
						if (v) if (_) for (I = 0; I < A; I++) for (V = 0; V < B; V++) _[O] && (j[O] = U[O]), O++;
						else for (I = 0; I < A; I++) for (V = 0; V < B; V++) j[O] = U[O], O++;
						t.counter.constant++, t.ptr += X;
					}
				}
				Z > 1 && !i && (t.pixels.resultPixels = h.swapDimensionOrder(t.pixels.resultPixels, l, Z, r));
			},
			formatFileInfo: function(e) {
				return {
					fileIdentifierString: e.headerInfo.fileIdentifierString,
					fileVersion: e.headerInfo.fileVersion,
					imageType: e.headerInfo.imageType,
					height: e.headerInfo.height,
					width: e.headerInfo.width,
					numValidPixel: e.headerInfo.numValidPixel,
					microBlockSize: e.headerInfo.microBlockSize,
					blobSize: e.headerInfo.blobSize,
					maxZError: e.headerInfo.maxZError,
					pixelType: h.getPixelType(e.headerInfo.imageType),
					eofOffset: e.eofOffset,
					mask: e.mask ? { numBytes: e.mask.numBytes } : null,
					pixels: {
						numBlocksX: e.pixels.numBlocksX,
						numBlocksY: e.pixels.numBlocksY,
						maxValue: e.headerInfo.zMax,
						minValue: e.headerInfo.zMin,
						noDataValue: e.noDataValue
					}
				};
			},
			constructConstantSurface: function(e, t) {
				var r = e.headerInfo.zMax, i = e.headerInfo.zMin, a = e.headerInfo.maxValues, n = e.headerInfo.numDims, s = e.headerInfo.height * e.headerInfo.width, l = 0, f = 0, o = 0, u = e.pixels.resultMask, c = e.pixels.resultPixels;
				if (u) if (n > 1) {
					if (t) for (l = 0; l < n; l++) for (o = l * s, r = a[l], f = 0; f < s; f++) u[f] && (c[o + f] = r);
					else for (f = 0; f < s; f++) if (u[f]) for (o = f * n, l = 0; l < n; l++) c[o + n] = a[l];
				} else for (f = 0; f < s; f++) u[f] && (c[f] = r);
				else if (n > 1 && i !== r) if (t) for (l = 0; l < n; l++) for (o = l * s, r = a[l], f = 0; f < s; f++) c[o + f] = r;
				else for (f = 0; f < s; f++) for (o = f * n, l = 0; l < n; l++) c[o + l] = a[l];
				else for (f = 0; f < s * n; f++) c[f] = r;
			},
			getDataTypeArray: function(e) {
				var t;
				switch (e) {
					case 0:
						t = Int8Array;
						break;
					case 1:
						t = Uint8Array;
						break;
					case 2:
						t = Int16Array;
						break;
					case 3:
						t = Uint16Array;
						break;
					case 4:
						t = Int32Array;
						break;
					case 5:
						t = Uint32Array;
						break;
					case 6:
					default:
						t = Float32Array;
						break;
					case 7: t = Float64Array;
				}
				return t;
			},
			getPixelType: function(e) {
				var t;
				switch (e) {
					case 0:
						t = "S8";
						break;
					case 1:
						t = "U8";
						break;
					case 2:
						t = "S16";
						break;
					case 3:
						t = "U16";
						break;
					case 4:
						t = "S32";
						break;
					case 5:
						t = "U32";
						break;
					case 6:
					default:
						t = "F32";
						break;
					case 7: t = "F64";
				}
				return t;
			},
			isValidPixelValue: function(e, t) {
				if (null == t) return !1;
				var r;
				switch (e) {
					case 0:
						r = t >= -128 && t <= 127;
						break;
					case 1:
						r = t >= 0 && t <= 255;
						break;
					case 2:
						r = t >= -32768 && t <= 32767;
						break;
					case 3:
						r = t >= 0 && t <= 65536;
						break;
					case 4:
						r = t >= -2147483648 && t <= 2147483647;
						break;
					case 5:
						r = t >= 0 && t <= 4294967296;
						break;
					case 6:
						r = t >= -34027999387901484e22 && t <= 34027999387901484e22;
						break;
					case 7:
						r = t >= -17976931348623157e292 && t <= 17976931348623157e292;
						break;
					default: r = !1;
				}
				return r;
			},
			getDataTypeSize: function(e) {
				var t = 0;
				switch (e) {
					case 0:
					case 1:
						t = 1;
						break;
					case 2:
					case 3:
						t = 2;
						break;
					case 4:
					case 5:
					case 6:
						t = 4;
						break;
					case 7:
						t = 8;
						break;
					default: t = e;
				}
				return t;
			},
			getDataTypeUsed: function(e, t) {
				var r = e;
				switch (e) {
					case 2:
					case 4:
						r = e - t;
						break;
					case 3:
					case 5:
						r = e - 2 * t;
						break;
					case 6:
						r = 0 === t ? e : 1 === t ? 2 : 1;
						break;
					case 7:
						r = 0 === t ? e : e - 2 * t + 1;
						break;
					default: r = e;
				}
				return r;
			},
			getOnePixel: function(e, t, r, i) {
				var a = 0;
				switch (r) {
					case 0:
						a = i.getInt8(t);
						break;
					case 1:
						a = i.getUint8(t);
						break;
					case 2:
						a = i.getInt16(t, !0);
						break;
					case 3:
						a = i.getUint16(t, !0);
						break;
					case 4:
						a = i.getInt32(t, !0);
						break;
					case 5:
						a = i.getUInt32(t, !0);
						break;
					case 6:
						a = i.getFloat32(t, !0);
						break;
					case 7:
						a = i.getFloat64(t, !0);
						break;
					default: throw "the decoder does not understand this pixel type";
				}
				return a;
			},
			swapDimensionOrder: function(e, t, r, i, a) {
				var n = 0, s = 0, l = 0, f = 0, o = e;
				if (r > 1) if (o = new i(t * r), a) for (n = 0; n < t; n++) for (f = n, l = 0; l < r; l++, f += t) o[f] = e[s++];
				else for (n = 0; n < t; n++) for (f = n, l = 0; l < r; l++, f += t) o[s++] = e[f];
				return o;
			}
		}, m = function(e, t, r) {
			this.val = e, this.left = t, this.right = r;
		}, {
			decode: function(e, t) {
				var r = (t = t || {}).noDataValue, i = 0, a = {};
				if (a.ptr = t.inputOffset || 0, a.pixels = {}, h.readHeaderInfo(e, a)) {
					var n = a.headerInfo, s = n.fileVersion, l = h.getDataTypeArray(n.imageType);
					if (s > 5) throw "unsupported lerc version 2." + s;
					h.readMask(e, a), n.numValidPixel === n.width * n.height || a.pixels.resultMask || (a.pixels.resultMask = t.maskData);
					var f = n.width * n.height;
					a.pixels.resultPixels = new l(f * n.numDims), a.counter = {
						onesweep: 0,
						uncompressed: 0,
						lut: 0,
						bitstuffer: 0,
						constant: 0,
						constantoffset: 0
					};
					var o, u = !t.returnPixelInterleavedDims;
					if (0 !== n.numValidPixel) if (n.zMax === n.zMin) h.constructConstantSurface(a, u);
					else if (s >= 4 && h.checkMinMaxRanges(e, a)) h.constructConstantSurface(a, u);
					else {
						var c = new DataView(e, a.ptr, 2), d = c.getUint8(0);
						if (a.ptr++, d) h.readDataOneSweep(e, a, l, u);
						else if (s > 1 && n.imageType <= 1 && Math.abs(n.maxZError - .5) < 1e-5) {
							var m = c.getUint8(1);
							if (a.ptr++, a.encodeMode = m, m > 2 || s < 4 && m > 1) throw "Invalid Huffman flag " + m;
							m ? h.readHuffman(e, a, l, u) : h.readTiles(e, a, l, u);
						} else h.readTiles(e, a, l, u);
					}
					a.eofOffset = a.ptr, t.inputOffset ? (o = a.headerInfo.blobSize + t.inputOffset - a.ptr, Math.abs(o) >= 1 && (a.eofOffset = t.inputOffset + a.headerInfo.blobSize)) : (o = a.headerInfo.blobSize - a.ptr, Math.abs(o) >= 1 && (a.eofOffset = a.headerInfo.blobSize));
					var p = {
						width: n.width,
						height: n.height,
						pixelData: a.pixels.resultPixels,
						minValue: n.zMin,
						maxValue: n.zMax,
						validPixelCount: n.numValidPixel,
						dimCount: n.numDims,
						dimStats: {
							minValues: n.minValues,
							maxValues: n.maxValues
						},
						maskData: a.pixels.resultMask
					};
					if (a.pixels.resultMask && h.isValidPixelValue(n.imageType, r)) {
						var g = a.pixels.resultMask;
						for (i = 0; i < f; i++) g[i] || (p.pixelData[i] = r);
						p.noDataValue = r;
					}
					return a.noDataValue = r, t.returnFileInfo && (p.fileInfo = h.formatFileInfo(a)), p;
				}
			},
			getBandCount: function(e) {
				for (var t = 0, r = 0, i = {
					ptr: 0,
					pixels: {}
				}; r < e.byteLength - 58;) h.readHeaderInfo(e, i), r += i.headerInfo.blobSize, t++, i.ptr = r;
				return t;
			}
		}), k = (p = /* @__PURE__ */ new ArrayBuffer(4), g = new Uint8Array(p), new Uint32Array(p)[0] = 1, 1 === g[0]), y = { decode: function(e, t) {
			if (!k) throw "Big endian system is not supported.";
			var r, i, a = (t = t || {}).inputOffset || 0, n = new Uint8Array(e, a, 10), s = String.fromCharCode.apply(null, n);
			if ("CntZImage" === s.trim()) r = x, i = 1;
			else {
				if ("Lerc2" !== s.substring(0, 5)) throw "Unexpected file identifier string: " + s;
				r = w, i = 2;
			}
			for (var l, f, o, u, c, d, h = 0, m = e.byteLength - 10, p = [], g = {
				width: 0,
				height: 0,
				pixels: [],
				pixelType: t.pixelType,
				mask: null,
				statistics: []
			}, y = 0; a < m;) {
				var b = r.decode(e, {
					inputOffset: a,
					encodedMaskData: l,
					maskData: o,
					returnMask: 0 === h,
					returnEncodedMask: 0 === h,
					returnFileInfo: !0,
					returnPixelInterleavedDims: t.returnPixelInterleavedDims,
					pixelType: t.pixelType || null,
					noDataValue: t.noDataValue || null
				});
				a = b.fileInfo.eofOffset, o = b.maskData, 0 === h && (l = b.encodedMaskData, g.width = b.width, g.height = b.height, g.dimCount = b.dimCount || 1, g.pixelType = b.pixelType || b.fileInfo.pixelType, g.mask = o), i > 1 && (o && p.push(o), b.fileInfo.mask && b.fileInfo.mask.numBytes > 0 && y++), h++, g.pixels.push(b.pixelData), g.statistics.push({
					minValue: b.minValue,
					maxValue: b.maxValue,
					noDataValue: b.noDataValue,
					dimStats: b.dimStats
				});
			}
			if (i > 1 && y > 1) {
				for (d = g.width * g.height, g.bandMasks = p, (o = new Uint8Array(d)).set(p[0]), u = 1; u < p.length; u++) for (f = p[u], c = 0; c < d; c++) o[c] = o[c] & f[c];
				g.maskData = o;
			}
			return g;
		} };
		"function" == typeof define && define.amd ? define([], function() {
			return y;
		}) : void 0 !== t && t.exports ? t.exports = y : this.Lerc = y;
	})();
})(), 1);
const o = f.default && "function" == typeof f.default.decode ? f.default : f.default?.default ?? f.default;
self.onmessage = (e) => {
	const { id: t, buffer: r } = e.data || {};
	try {
		const e = o.decode(r), i = e.pixels[0], a = e.mask;
		if (a) for (let t = 0; t < i.length; t++) a[t] || (i[t] = 0);
		self.postMessage({
			id: t,
			ok: !0,
			width: e.width,
			height: e.height,
			pixels: i
		}, [i.buffer]);
	} catch (i) {
		self.postMessage({
			id: t,
			ok: !1,
			error: String(i && i.message || i)
		});
	}
};
