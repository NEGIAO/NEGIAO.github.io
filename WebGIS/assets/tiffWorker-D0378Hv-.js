var e = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), o = (s, o, l) => (l = null != s ? e(a(s)) : {}, ((e, a, s, o) => {
	if (a && "object" == typeof a || "function" == typeof a) for (var l, h = i(a), g = 0, c = h.length; g < c; g++) l = h[g], n.call(e, l) || l === s || t(e, l, {
		get: ((e) => a[e]).bind(null, l),
		enumerable: !(o = r(a, l)) || o.enumerable
	});
	return e;
})(!o && s && s.__esModule && n.call(s, "default") ? l : t(l, "default", {
	value: s,
	enumerable: !0
}), s));
function l(e) {
	return (t, ...r) => g(e, t, r);
}
function h(e, t) {
	return l(d(e, t).get);
}
const { apply: g, construct: c, defineProperty: f, get: u, getOwnPropertyDescriptor: d, getPrototypeOf: y, has: p, ownKeys: w, set: m, setPrototypeOf: A } = Reflect, { EPSILON: S, MAX_SAFE_INTEGER: T, isFinite: I, isNaN: O } = Number, { iterator: b, species: P, toStringTag: E, for: G } = Symbol, F = Object, { create: D, defineProperty: R, freeze: M, is: N } = F, U = F.prototype;
U.__lookupGetter__ && U.__lookupGetter__, F.hasOwn || U.hasOwnProperty;
const V = Array, x = (V.isArray, V.prototype), C = (x.join, x.push, x.toLocaleString, x[b]), _ = l(C), { abs: B, trunc: H } = Math, j = ArrayBuffer, K = (j.isView, j.prototype), k = (K.slice, h(K, "byteLength"), "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : null), v = (k && h(k.prototype, "byteLength"), y(Uint8Array)), W = (v.from, v.prototype), z = (W[b], W.keys, W.values, W.entries, W.set, W.reverse, W.fill, W.copyWithin, W.sort, W.slice, W.subarray, h(W, "buffer"), h(W, "byteOffset"), h(W, "length"), h(W, E), Uint8Array), $ = Uint16Array, Y = Uint32Array, q = Float32Array, J = y([][b]()), X = l(J.next), Z = l(function* () {}().next), Q = y(J), ee = DataView.prototype, te = l(ee.getUint16);
ee.setUint16;
const ie = WeakSet.prototype, ae = (ie.add, ie.has, WeakMap), ne = ae.prototype, se = l(ne.get), oe = (ne.has, l(ne.set)), le = new ae(), he = D(null, {
	next: { value: function() {
		const e = se(le, this);
		return X(e);
	} },
	[b]: { value: function() {
		return this;
	} }
});
const ge = new ae(), ce = D(Q, { next: {
	value: function() {
		const e = se(ge, this);
		return Z(e);
	},
	writable: !0,
	configurable: !0
} });
for (const yt of w(J)) "next" !== yt && R(ce, yt, d(J, yt));
const fe = new j(4), ue = new q(fe), de = new Y(fe), ye = new $(512), pe = new z(512);
for (let yt = 0; yt < 256; ++yt) {
	const e = yt - 127;
	e < -24 ? (ye[yt] = 0, ye[256 | yt] = 32768, pe[yt] = 24, pe[256 | yt] = 24) : e < -14 ? (ye[yt] = 1024 >> -e - 14, ye[256 | yt] = 1024 >> -e - 14 | 32768, pe[yt] = -e - 1, pe[256 | yt] = -e - 1) : e <= 15 ? (ye[yt] = e + 15 << 10, ye[256 | yt] = e + 15 << 10 | 32768, pe[yt] = 13, pe[256 | yt] = 13) : e < 128 ? (ye[yt] = 31744, ye[256 | yt] = 64512, pe[yt] = 24, pe[256 | yt] = 24) : (ye[yt] = 31744, ye[256 | yt] = 64512, pe[yt] = 13, pe[256 | yt] = 13);
}
const we = new Y(2048);
for (let yt = 1; yt < 1024; ++yt) {
	let e = yt << 13, t = 0;
	for (; !(8388608 & e);) e <<= 1, t -= 8388608;
	e &= -8388609, t += 947912704, we[yt] = e | t;
}
for (let yt = 1024; yt < 2048; ++yt) we[yt] = 939524096 + (yt - 1024 << 13);
const me = new Y(64);
for (let yt = 1; yt < 31; ++yt) me[yt] = yt << 23;
me[31] = 1199570944, me[32] = 2147483648;
for (let yt = 33; yt < 63; ++yt) me[yt] = 2147483648 + (yt - 32 << 23);
me[63] = 3347054592;
const Ae = new $(64);
for (let yt = 1; yt < 64; ++yt) 32 !== yt && (Ae[yt] = 1024);
function Se(e, t, ...r) {
	return function(e) {
		const t = e >> 10;
		return de[0] = we[Ae[t] + (1023 & e)] + me[t], ue[0];
	}(te(e, t, ...function(e) {
		if (e[b] === C && J.next === X) return e;
		const t = D(he);
		return oe(le, t, _(e)), t;
	}(r)));
}
function Te(e, t, r) {
	r && r.debug;
	const i = "object" == typeof e ? e.outer : e, a = i.slice(0, i.indexOf(">") + 1), n = ["\"", "'"];
	for (let s = 0; s < n.length; s++) {
		const e = n[s], r = new RegExp(t + "\\=" + e + "([^" + e + "]*)" + e).exec(a);
		if (r) return r[1];
	}
}
function Ie(e, t, r) {
	const i = new RegExp(t).exec(e.slice(r));
	return i ? r + i.index + i[0].length - 1 : -1;
}
function Oe(e, t) {
	const r = new RegExp(t, "g"), i = e.match(r);
	return i ? i.length : 0;
}
function be(e, t, r) {
	r && r.debug;
	const i = !(r && !1 === typeof r.nested), a = function(e, t, r) {
		const i = new RegExp(t).exec(e.slice(r));
		return i ? r + i.index : -1;
	}(e, `<${t}[ \n>/]`, r && r.startIndex || 0);
	if (-1 === a) return;
	const n = e.slice(a + t.length);
	let s = Ie(n, "^[^<]*[ /]>", 0);
	const o = -1 !== s && "/" === n[s - 1];
	if (!1 === o) if (i) {
		let e = 0, r = 1, i = 0;
		for (; -1 !== (s = Ie(n, "[ /]" + t + ">", e));) {
			const a = n.substring(e, s + 1);
			if (r += Oe(a, "<" + t + "[ \n	>]"), i += Oe(a, "</" + t + ">"), i >= r) break;
			e = s;
		}
	} else s = Ie(n, "[ /]" + t + ">", 0);
	const l = a + t.length + s + 1;
	if (-1 === l) return;
	const h = e.slice(a, l);
	let g;
	return g = o ? null : h.slice(h.indexOf(">") + 1, h.lastIndexOf("<")), {
		inner: g,
		outer: h,
		start: a,
		end: l
	};
}
const Pe = {
	BYTE: 1,
	ASCII: 2,
	SHORT: 3,
	LONG: 4,
	RATIONAL: 5,
	SBYTE: 6,
	UNDEFINED: 7,
	SSHORT: 8,
	SLONG: 9,
	SRATIONAL: 10,
	FLOAT: 11,
	DOUBLE: 12,
	IFD: 13,
	LONG8: 16,
	SLONG8: 17,
	IFD8: 18
}, Ee = {
	[Pe.BYTE]: 1,
	[Pe.ASCII]: 1,
	[Pe.SBYTE]: 1,
	[Pe.UNDEFINED]: 1,
	[Pe.SHORT]: 2,
	[Pe.SSHORT]: 2,
	[Pe.LONG]: 4,
	[Pe.SLONG]: 4,
	[Pe.FLOAT]: 4,
	[Pe.IFD]: 4,
	[Pe.RATIONAL]: 8,
	[Pe.SRATIONAL]: 8,
	[Pe.DOUBLE]: 8,
	[Pe.LONG8]: 8,
	[Pe.SLONG8]: 8,
	[Pe.IFD8]: 8
};
function Ge(e) {
	const t = Ee[e];
	if (void 0 === t) throw new RangeError(`Invalid field type: ${e}`);
	return t;
}
const Fe = {
	NewSubfileType: {
		tag: 254,
		type: Pe.LONG,
		eager: !0
	},
	SubfileType: {
		tag: 255,
		type: Pe.SHORT,
		eager: !0
	},
	ImageWidth: {
		tag: 256,
		type: Pe.SHORT,
		eager: !0
	},
	ImageLength: {
		tag: 257,
		type: Pe.SHORT,
		eager: !0
	},
	BitsPerSample: {
		tag: 258,
		type: Pe.SHORT,
		isArray: !0,
		eager: !0
	},
	Compression: {
		tag: 259,
		type: Pe.SHORT,
		eager: !0
	},
	PhotometricInterpretation: {
		tag: 262,
		type: Pe.SHORT,
		eager: !0
	},
	Threshholding: {
		tag: 263,
		type: Pe.SHORT
	},
	CellWidth: {
		tag: 264,
		type: Pe.SHORT
	},
	CellLength: {
		tag: 265,
		type: Pe.SHORT
	},
	FillOrder: {
		tag: 266,
		type: Pe.SHORT
	},
	DocumentName: {
		tag: 269,
		type: Pe.ASCII
	},
	ImageDescription: {
		tag: 270,
		type: Pe.ASCII
	},
	Make: {
		tag: 271,
		type: Pe.ASCII
	},
	Model: {
		tag: 272,
		type: Pe.ASCII
	},
	StripOffsets: {
		tag: 273,
		type: Pe.SHORT,
		isArray: !0
	},
	Orientation: {
		tag: 274,
		type: Pe.SHORT
	},
	SamplesPerPixel: {
		tag: 277,
		type: Pe.SHORT,
		eager: !0
	},
	RowsPerStrip: {
		tag: 278,
		type: Pe.SHORT,
		eager: !0
	},
	StripByteCounts: {
		tag: 279,
		type: Pe.LONG,
		isArray: !0
	},
	MinSampleValue: {
		tag: 280,
		type: Pe.SHORT,
		isArray: !0
	},
	MaxSampleValue: {
		tag: 281,
		type: Pe.SHORT,
		isArray: !0
	},
	XResolution: {
		tag: 282,
		type: Pe.RATIONAL
	},
	YResolution: {
		tag: 283,
		type: Pe.RATIONAL
	},
	PlanarConfiguration: {
		tag: 284,
		type: Pe.SHORT,
		eager: !0
	},
	PageName: {
		tag: 285,
		type: Pe.ASCII
	},
	XPosition: {
		tag: 286,
		type: Pe.RATIONAL
	},
	YPosition: {
		tag: 287,
		type: Pe.RATIONAL
	},
	FreeOffsets: {
		tag: 288,
		type: Pe.LONG
	},
	FreeByteCounts: {
		tag: 289,
		type: Pe.LONG
	},
	GrayResponseUnit: {
		tag: 290,
		type: Pe.SHORT
	},
	GrayResponseCurve: {
		tag: 291,
		type: Pe.SHORT,
		isArray: !0
	},
	T4Options: {
		tag: 292,
		type: Pe.LONG
	},
	T6Options: {
		tag: 293,
		type: Pe.LONG
	},
	ResolutionUnit: {
		tag: 296,
		type: Pe.SHORT
	},
	PageNumber: {
		tag: 297,
		type: Pe.SHORT,
		isArray: !0
	},
	TransferFunction: {
		tag: 301,
		type: Pe.SHORT,
		isArray: !0
	},
	Software: {
		tag: 305,
		type: Pe.ASCII
	},
	DateTime: {
		tag: 306,
		type: Pe.ASCII
	},
	Artist: {
		tag: 315,
		type: Pe.ASCII
	},
	HostComputer: {
		tag: 316,
		type: Pe.ASCII
	},
	Predictor: {
		tag: 317,
		type: Pe.SHORT
	},
	WhitePoint: {
		tag: 318,
		type: Pe.RATIONAL,
		isArray: !0
	},
	PrimaryChromaticities: {
		tag: 319,
		type: Pe.RATIONAL,
		isArray: !0
	},
	ColorMap: {
		tag: 320,
		type: Pe.SHORT,
		isArray: !0
	},
	HalftoneHints: {
		tag: 321,
		type: Pe.SHORT,
		isArray: !0
	},
	TileWidth: {
		tag: 322,
		type: Pe.SHORT,
		eager: !0
	},
	TileLength: {
		tag: 323,
		type: Pe.SHORT,
		eager: !0
	},
	TileOffsets: {
		tag: 324,
		type: Pe.LONG,
		isArray: !0
	},
	TileByteCounts: {
		tag: 325,
		type: Pe.SHORT,
		isArray: !0
	},
	InkSet: {
		tag: 332,
		type: Pe.SHORT
	},
	InkNames: {
		tag: 333,
		type: Pe.ASCII
	},
	NumberOfInks: {
		tag: 334,
		type: Pe.SHORT
	},
	DotRange: {
		tag: 336,
		type: Pe.BYTE,
		isArray: !0
	},
	TargetPrinter: {
		tag: 337,
		type: Pe.ASCII
	},
	ExtraSamples: {
		tag: 338,
		type: Pe.BYTE,
		isArray: !0,
		eager: !0
	},
	SampleFormat: {
		tag: 339,
		type: Pe.SHORT,
		isArray: !0,
		eager: !0
	},
	SMinSampleValue: {
		tag: 340,
		isArray: !0
	},
	SMaxSampleValue: {
		tag: 341,
		isArray: !0
	},
	TransferRange: {
		tag: 342,
		type: Pe.SHORT,
		isArray: !0
	},
	JPEGProc: {
		tag: 512,
		type: Pe.SHORT
	},
	JPEGInterchangeFormat: {
		tag: 513,
		type: Pe.LONG
	},
	JPEGInterchangeFormatLngth: {
		tag: 514,
		type: Pe.LONG
	},
	JPEGRestartInterval: {
		tag: 515,
		type: Pe.SHORT
	},
	JPEGLosslessPredictors: {
		tag: 517,
		type: Pe.SHORT,
		isArray: !0
	},
	JPEGPointTransforms: {
		tag: 518,
		type: Pe.SHORT,
		isArray: !0
	},
	JPEGQTables: {
		tag: 519,
		type: Pe.LONG,
		isArray: !0
	},
	JPEGDCTables: {
		tag: 520,
		type: Pe.LONG,
		isArray: !0
	},
	JPEGACTables: {
		tag: 521,
		type: Pe.LONG,
		isArray: !0
	},
	YCbCrCoefficients: {
		tag: 529,
		type: Pe.RATIONAL,
		isArray: !0
	},
	YCbCrSubSampling: {
		tag: 530,
		type: Pe.SHORT,
		isArray: !0
	},
	YCbCrPositioning: {
		tag: 531,
		type: Pe.SHORT
	},
	ReferenceBlackWhite: {
		tag: 532,
		type: Pe.LONG,
		isArray: !0
	},
	Copyright: {
		tag: 33432,
		type: Pe.ASCII
	},
	BadFaxLines: { tag: 326 },
	CleanFaxData: { tag: 327 },
	ClipPath: { tag: 343 },
	ConsecutiveBadFaxLines: { tag: 328 },
	Decode: { tag: 433 },
	DefaultImageColor: { tag: 434 },
	Indexed: { tag: 346 },
	JPEGTables: {
		tag: 347,
		isArray: !0,
		eager: !0
	},
	StripRowCounts: {
		tag: 559,
		isArray: !0
	},
	SubIFDs: {
		tag: 330,
		isArray: !0
	},
	XClipPathUnits: { tag: 344 },
	YClipPathUnits: { tag: 345 },
	ApertureValue: { tag: 37378 },
	ColorSpace: { tag: 40961 },
	DateTimeDigitized: { tag: 36868 },
	DateTimeOriginal: { tag: 36867 },
	ExifIFD: {
		tag: 34665,
		name: "Exif IFD",
		type: Pe.LONG
	},
	ExifVersion: { tag: 36864 },
	ExposureTime: { tag: 33434 },
	FileSource: { tag: 41728 },
	Flash: { tag: 37385 },
	FlashpixVersion: { tag: 40960 },
	FNumber: { tag: 33437 },
	ImageUniqueID: { tag: 42016 },
	LightSource: { tag: 37384 },
	MakerNote: { tag: 37500 },
	ShutterSpeedValue: { tag: 37377 },
	UserComment: { tag: 37510 },
	IPTC: { tag: 33723 },
	CZ_LSMINFO: { tag: 34412 },
	ICCProfile: {
		tag: 34675,
		name: "ICC Profile"
	},
	XMP: { tag: 700 },
	GDAL_METADATA: { tag: 42112 },
	GDAL_NODATA: {
		tag: 42113,
		type: Pe.ASCII,
		eager: !0
	},
	Photoshop: { tag: 34377 },
	ModelPixelScale: {
		tag: 33550,
		type: Pe.DOUBLE,
		isArray: !0,
		eager: !0
	},
	ModelTiepoint: {
		tag: 33922,
		type: Pe.DOUBLE,
		isArray: !0,
		eager: !0
	},
	ModelTransformation: {
		tag: 34264,
		type: Pe.DOUBLE,
		isArray: !0,
		eager: !0
	},
	GeoKeyDirectory: {
		tag: 34735,
		type: Pe.SHORT,
		isArray: !0,
		eager: !0
	},
	GeoDoubleParams: {
		tag: 34736,
		type: Pe.DOUBLE,
		isArray: !0,
		eager: !0
	},
	GeoAsciiParams: {
		tag: 34737,
		type: Pe.ASCII,
		eager: !0
	},
	LercParameters: {
		tag: 50674,
		eager: !0
	}
}, De = {}, Re = {};
function Me(e, t, r, i = !1, a = !1) {
	De[t] = e, Re[e] = {
		tag: e,
		name: t,
		type: "string" == typeof r ? Pe[r] : r,
		isArray: i,
		eager: a
	};
}
for (const [yt, pt] of Object.entries(Fe)) {
	const e = pt;
	Me(e.tag, e.name || yt, e.type, e.isArray, e.eager);
}
function Ne(e) {
	return "number" == typeof e ? e : De[e];
}
const Ue = 0, Le = 1, Ve = 2, xe = 3, Ce = 5, _e = 6, Be = 8, He = 0, je = {
	Version: 0,
	AddCompression: 1
}, Ke = {
	None: 0,
	Deflate: 1,
	Zstandard: 2
}, ke = {
	1024: "GTModelTypeGeoKey",
	1025: "GTRasterTypeGeoKey",
	1026: "GTCitationGeoKey",
	2048: "GeographicTypeGeoKey",
	2049: "GeogCitationGeoKey",
	2050: "GeogGeodeticDatumGeoKey",
	2051: "GeogPrimeMeridianGeoKey",
	2052: "GeogLinearUnitsGeoKey",
	2053: "GeogLinearUnitSizeGeoKey",
	2054: "GeogAngularUnitsGeoKey",
	2055: "GeogAngularUnitSizeGeoKey",
	2056: "GeogEllipsoidGeoKey",
	2057: "GeogSemiMajorAxisGeoKey",
	2058: "GeogSemiMinorAxisGeoKey",
	2059: "GeogInvFlatteningGeoKey",
	2060: "GeogAzimuthUnitsGeoKey",
	2061: "GeogPrimeMeridianLongGeoKey",
	2062: "GeogTOWGS84GeoKey",
	3072: "ProjectedCSTypeGeoKey",
	3073: "PCSCitationGeoKey",
	3074: "ProjectionGeoKey",
	3075: "ProjCoordTransGeoKey",
	3076: "ProjLinearUnitsGeoKey",
	3077: "ProjLinearUnitSizeGeoKey",
	3078: "ProjStdParallel1GeoKey",
	3079: "ProjStdParallel2GeoKey",
	3080: "ProjNatOriginLongGeoKey",
	3081: "ProjNatOriginLatGeoKey",
	3082: "ProjFalseEastingGeoKey",
	3083: "ProjFalseNorthingGeoKey",
	3084: "ProjFalseOriginLongGeoKey",
	3085: "ProjFalseOriginLatGeoKey",
	3086: "ProjFalseOriginEastingGeoKey",
	3087: "ProjFalseOriginNorthingGeoKey",
	3088: "ProjCenterLongGeoKey",
	3089: "ProjCenterLatGeoKey",
	3090: "ProjCenterEastingGeoKey",
	3091: "ProjCenterNorthingGeoKey",
	3092: "ProjScaleAtNatOriginGeoKey",
	3093: "ProjScaleAtCenterGeoKey",
	3094: "ProjAzimuthAngleGeoKey",
	3095: "ProjStraightVertPoleLongGeoKey",
	3096: "ProjRectifiedGridAngleGeoKey",
	4096: "VerticalCSTypeGeoKey",
	4097: "VerticalCitationGeoKey",
	4098: "VerticalDatumGeoKey",
	4099: "VerticalUnitsGeoKey"
}, ve = {};
for (const [yt, pt] of Object.entries(ke)) ve[pt] = parseInt(yt, 10);
const We = /* @__PURE__ */ new Map();
async function ze(e) {
	const t = !e.hasTag("StripOffsets");
	return {
		tileWidth: t ? await e.loadValue("TileWidth") : await e.loadValue("ImageWidth"),
		tileHeight: t ? await e.loadValue("TileLength") : await e.loadValue("RowsPerStrip") || await e.loadValue("ImageLength"),
		planarConfiguration: await e.loadValue("PlanarConfiguration"),
		bitsPerSample: await e.loadValue("BitsPerSample"),
		predictor: await e.loadValue("Predictor") || 1
	};
}
function $e(e, t, r = ze, i = !0) {
	Array.isArray(e) || (e = [e]), e.forEach((e) => {
		We.set(e, {
			importFn: t,
			decoderParameterFn: r,
			preferWorker: i
		});
	});
}
const Ye = [
	{
		cases: [void 0, 1],
		importFn: () => import("./raw-C_iByRq1.js").then((e) => e.default),
		preferWorker: !1
	},
	{
		cases: 5,
		importFn: () => import("./lzw-BfSkO6X_.js").then((e) => e.default)
	},
	{
		cases: 6,
		importFn: () => {
			throw new Error("old style JPEG compression is not supported.");
		}
	},
	{
		cases: 7,
		importFn: () => import("./jpeg-Dm3McJf9.js").then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await ze(e),
			JPEGTables: await e.loadValue("JPEGTables")
		})
	},
	{
		cases: [8, 32946],
		importFn: () => import("./deflate-gqyAIUm8.js").then((e) => e.default)
	},
	{
		cases: 32773,
		importFn: () => import("./packbits-Ds84M-mj.js").then((e) => e.default)
	},
	{
		cases: 34887,
		importFn: () => import("./lerc-BwEOjR2V.js").then(async (e) => (await e.zstd.init(), e)).then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await ze(e),
			LercParameters: await e.loadValue("LercParameters")
		})
	},
	{
		cases: 5e4,
		importFn: () => import("./zstd-CRQCtqZy.js").then(async (e) => (await e.zstd.init(), e)).then((e) => e.default)
	},
	{
		cases: 50001,
		importFn: () => import("./webimage-kRaMceks.js").then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await ze(e),
			samplesPerPixel: Number(await e.loadValue("SamplesPerPixel")) || 4
		}),
		preferWorker: !1
	}
];
for (const yt of Ye) {
	const { cases: e, importFn: t, decoderParameterFn: r, preferWorker: i } = yt;
	$e(e, t, r, i);
}
function qe(e, t, r, i = 1) {
	return new (Object.getPrototypeOf(e)).constructor(t * r * i);
}
function Je(e, t, r) {
	return (1 - r) * e + r * t;
}
function Xe(e, t, r, i, a, n = "nearest") {
	switch (n.toLowerCase()) {
		case "nearest": return function(e, t, r, i, a) {
			const n = t / i, s = r / a;
			return e.map((e) => {
				const o = qe(e, i, a);
				for (let l = 0; l < a; ++l) {
					const a = Math.min(Math.round(s * l), r - 1);
					for (let r = 0; r < i; ++r) {
						const s = Math.min(Math.round(n * r), t - 1), h = e[a * t + s];
						o[l * i + r] = h;
					}
				}
				return o;
			});
		}(e, t, r, i, a);
		case "bilinear":
		case "linear": return function(e, t, r, i, a) {
			const n = t / i, s = r / a;
			return e.map((e) => {
				const o = qe(e, i, a);
				for (let l = 0; l < a; ++l) {
					const a = s * l, h = Math.floor(a), g = Math.min(Math.ceil(a), r - 1);
					for (let r = 0; r < i; ++r) {
						const s = n * r, c = s % 1, f = Math.floor(s), u = Math.min(Math.ceil(s), t - 1), d = e[h * t + f], y = e[h * t + u], p = e[g * t + f], w = e[g * t + u], m = Je(Je(d, y, c), Je(p, w, c), a % 1);
						o[l * i + r] = m;
					}
				}
				return o;
			});
		}(e, t, r, i, a);
		default: throw new Error(`Unsupported resampling method: '${n}'`);
	}
}
function Ze(e, t, r, i, a, n, s = "nearest") {
	switch (s.toLowerCase()) {
		case "nearest": return function(e, t, r, i, a, n) {
			const s = t / i, o = r / a, l = qe(e, i, a, n);
			for (let h = 0; h < a; ++h) {
				const a = Math.min(Math.round(o * h), r - 1);
				for (let r = 0; r < i; ++r) {
					const o = Math.min(Math.round(s * r), t - 1);
					for (let s = 0; s < n; ++s) {
						const g = e[a * t * n + o * n + s];
						l[h * i * n + r * n + s] = g;
					}
				}
			}
			return l;
		}(e, t, r, i, a, n);
		case "bilinear":
		case "linear": return function(e, t, r, i, a, n) {
			const s = t / i, o = r / a, l = qe(e, i, a, n);
			for (let h = 0; h < a; ++h) {
				const a = o * h, g = Math.floor(a), c = Math.min(Math.ceil(a), r - 1);
				for (let r = 0; r < i; ++r) {
					const o = s * r, f = o % 1, u = Math.floor(o), d = Math.min(Math.ceil(o), t - 1);
					for (let s = 0; s < n; ++s) {
						const o = e[g * t * n + u * n + s], y = e[g * t * n + d * n + s], p = e[c * t * n + u * n + s], w = e[c * t * n + d * n + s], m = Je(Je(o, y, f), Je(p, w, f), a % 1);
						l[h * i * n + r * n + s] = m;
					}
				}
			}
			return l;
		}(e, t, r, i, a, n);
		default: throw new Error(`Unsupported resampling method: '${s}'`);
	}
}
function Qe(e, t, r) {
	let i = 0;
	for (let a = t; a < r; ++a) i += e[a];
	return i;
}
function et(e, t, r) {
	let i;
	switch (e) {
		case 1:
			t <= 8 ? i = Uint8Array : t <= 16 ? i = Uint16Array : t <= 32 && (i = Uint32Array);
			break;
		case 2:
			8 === t ? i = Int8Array : 16 === t ? i = Int16Array : 32 === t && (i = Int32Array);
			break;
		case 3: switch (t) {
			case 16:
			case 32:
				i = Float32Array;
				break;
			case 64: i = Float64Array;
		}
	}
	if (i) {
		if ("number" == typeof r) return new i(r);
		if (r instanceof ArrayBuffer) return new i(r);
	}
	throw Error("Unsupported data format/bitsPerSample");
}
var tt = class {
	constructor(e, t, r, i) {
		this.fileDirectory = e, this.littleEndian = t, this.tiles = r ? [] : null, this.isTiled = !e.hasTag("StripOffsets");
		const a = e.getValue("PlanarConfiguration") ?? 1;
		if (1 !== a && 2 !== a) throw new Error("Invalid planar configuration.");
		this.planarConfiguration = a, this.source = i;
	}
	getFileDirectory() {
		return this.fileDirectory;
	}
	getGeoKeys() {
		return this.fileDirectory.parseGeoKeyDirectory();
	}
	getWidth() {
		return this.fileDirectory.getValue("ImageWidth") || 0;
	}
	getHeight() {
		return this.fileDirectory.getValue("ImageLength") || 0;
	}
	getSamplesPerPixel() {
		return this.fileDirectory.getValue("SamplesPerPixel") ?? 1;
	}
	getTileWidth() {
		return this.isTiled ? this.fileDirectory.getValue("TileWidth") || 0 : this.getWidth();
	}
	getTileHeight() {
		if (this.isTiled) return this.fileDirectory.getValue("TileLength") || 0;
		const e = this.fileDirectory.hasTag("RowsPerStrip") && this.fileDirectory.getValue("RowsPerStrip");
		return e ? Math.min(e, this.getHeight()) : this.getHeight();
	}
	getBlockWidth() {
		return this.getTileWidth();
	}
	getBlockHeight(e) {
		return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
	}
	getBytesPerPixel() {
		let e = 0;
		const t = this.fileDirectory.getValue("BitsPerSample") || [];
		for (let r = 0; r < t.length; ++r) e += this.getSampleByteSize(r);
		return e;
	}
	getSampleByteSize(e) {
		const t = this.fileDirectory.getValue("BitsPerSample") || [];
		if (e >= t.length) throw new RangeError(`Sample index ${e} is out of range.`);
		return Math.ceil(t[e] / 8);
	}
	getReaderForSample(e) {
		const t = this.fileDirectory.getValue("SampleFormat"), r = t ? t[e] : 1, i = (this.fileDirectory.getValue("BitsPerSample") || [])[e];
		switch (r) {
			case 1:
				if (i <= 8) return DataView.prototype.getUint8;
				if (i <= 16) return DataView.prototype.getUint16;
				if (i <= 32) return DataView.prototype.getUint32;
				break;
			case 2:
				if (i <= 8) return DataView.prototype.getInt8;
				if (i <= 16) return DataView.prototype.getInt16;
				if (i <= 32) return DataView.prototype.getInt32;
				break;
			case 3: switch (i) {
				case 16: return function(e, t) {
					return Se(this, e, t);
				};
				case 32: return DataView.prototype.getFloat32;
				case 64: return DataView.prototype.getFloat64;
			}
		}
		throw Error("Unsupported data format/bitsPerSample");
	}
	getSampleFormat(e = 0) {
		const t = this.fileDirectory.getValue("SampleFormat");
		return t ? t[e] : 1;
	}
	getBitsPerSample(e = 0) {
		const t = this.fileDirectory.getValue("BitsPerSample");
		return t ? t[e] : 0;
	}
	getArrayForSample(e, t) {
		return et(this.getSampleFormat(e), this.getBitsPerSample(e), t);
	}
	async getTileOrStrip(e, t, r, i, a) {
		const n = Math.ceil(this.getWidth() / this.getTileWidth()), s = Math.ceil(this.getHeight() / this.getTileHeight());
		let o;
		const { tiles: l } = this;
		if (1 === this.planarConfiguration ? o = t * n + e : 2 === this.planarConfiguration && (o = r * n * s + t * n + e), void 0 === o) throw new Error("Could not determine tile or strip index.");
		let h, g;
		if (this.isTiled ? (h = Number(await this.fileDirectory.loadValueIndexed("TileOffsets", o)), g = Number(await this.fileDirectory.loadValueIndexed("TileByteCounts", o))) : (h = Number(await this.fileDirectory.loadValueIndexed("StripOffsets", o)), g = Number(await this.fileDirectory.loadValueIndexed("StripByteCounts", o))), 0 === g) {
			const i = this.getBlockHeight(t) * this.getTileWidth(), a = 2 === this.planarConfiguration ? this.getSampleByteSize(r) : this.getBytesPerPixel(), n = new ArrayBuffer(i * a);
			return this.getArrayForSample(r, n).fill(this.getGDALNoData() || 0), {
				x: e,
				y: t,
				sample: r,
				data: n
			};
		}
		const c = (await this.source.fetch([{
			offset: h,
			length: g
		}], a))[0];
		let f;
		return null !== l && l[o] ? f = l[o] : (f = (async () => {
			let e = await i.decode(c);
			const r = this.getSampleFormat(), a = this.getBitsPerSample();
			return function(e, t) {
				return (1 !== e && 2 !== e || !(t <= 32) || t % 8 != 0) && (3 !== e || 16 !== t && 32 !== t && 64 !== t);
			}(r, a) && (e = function(e, t, r, i, a, n, s) {
				const o = new DataView(e), l = 2 === r ? 1 : i, h = et(t, a, 2 === r ? s * n : s * n * i), g = parseInt("1".repeat(a), 2);
				if (1 === t) {
					let e;
					e = 1 === r ? i * a : a;
					let t = n * e;
					7 & t && (t = t + 7 & -8);
					for (let r = 0; r < s; ++r) {
						const e = r * t;
						for (let t = 0; t < n; ++t) {
							const i = e + t * l * a;
							for (let e = 0; e < l; ++e) {
								const s = i + e * a, c = (r * n + t) * l + e, f = Math.floor(s / 8), u = s % 8;
								h[c] = u + a <= 8 ? o.getUint8(f) >> 8 - a - u & g : u + a <= 16 ? o.getUint16(f) >> 16 - a - u & g : u + a <= 24 ? (o.getUint16(f) << 8 | o.getUint8(f + 2)) >> 24 - a - u & g : o.getUint32(f) >> 32 - a - u & g;
							}
						}
					}
				}
				return h.buffer;
			}(e, r, this.planarConfiguration, this.getSamplesPerPixel(), a, this.getTileWidth(), this.getBlockHeight(t))), e;
		})(), null !== l && (l[o] = f)), {
			x: e,
			y: t,
			sample: r,
			data: await f
		};
	}
	async _readRaster(e, t, r, i, a, n, s, o, l) {
		const h = this.getTileWidth(), g = this.getTileHeight(), c = this.getWidth(), f = this.getHeight(), u = Math.max(Math.floor(e[0] / h), 0), d = Math.min(Math.ceil(e[2] / h), Math.ceil(c / h)), y = Math.max(Math.floor(e[1] / g), 0), p = Math.min(Math.ceil(e[3] / g), Math.ceil(f / g)), w = e[2] - e[0];
		let m = this.getBytesPerPixel();
		const A = [], S = [];
		for (let b = 0; b < t.length; ++b) {
			if (1 === this.planarConfiguration) {
				const e = await this.fileDirectory.loadValue("BitsPerSample");
				if ("object" != typeof e) throw new Error("Expected BitsPerSample to be an array or typed array.");
				A.push(Qe(e, 0, t[b]) / 8);
			} else A.push(0);
			S.push(this.getReaderForSample(t[b]));
		}
		const T = [], { littleEndian: I } = this;
		for (let b = y; b < p; ++b) for (let n = u; n < d; ++n) {
			let s;
			1 === this.planarConfiguration && (s = this.getTileOrStrip(n, b, 0, a, l));
			for (let o = 0; o < t.length; ++o) {
				const u = o, d = t[o];
				if (2 === this.planarConfiguration && (m = this.getSampleByteSize(d), s = this.getTileOrStrip(n, b, d, a, l)), !s) throw new Error("Could not get tile or strip data.");
				const y = s.then((a) => {
					const n = a.data, s = new DataView(n), o = this.getBlockHeight(a.y), l = a.y * g, d = a.x * h, y = l + o, p = (a.x + 1) * h, T = S[u], O = Math.min(o, o - (y - e[3]), f - l), b = Math.min(h, h - (p - e[2]), c - d);
					for (let g = Math.max(0, e[1] - l); g < O; ++g) for (let a = Math.max(0, e[0] - d); a < b; ++a) {
						const n = (g * h + a) * m, o = T.call(s, n + A[u], I);
						let c;
						i ? (c = (g + l - e[1]) * w * t.length + (a + d - e[0]) * t.length + u, r[c] = o) : (c = (g + l - e[1]) * w + a + d - e[0], r[u][c] = o);
					}
				});
				T.push(y);
			}
		}
		if (await Promise.all(T), n && e[2] - e[0] !== n || s && e[3] - e[1] !== s) {
			let a;
			a = i ? Ze(r, e[2] - e[0], e[3] - e[1], n, s, t.length, o) : Xe(r, e[2] - e[0], e[3] - e[1], n, s, o);
			const l = a;
			return l.width = n ?? e[2] - e[0], l.height = s ?? e[3] - e[1], l;
		}
		const O = r;
		return O.width = n || e[2] - e[0], O.height = s || e[3] - e[1], O;
	}
	async readRasters(e = {}) {
		const { window: t, samples: r = [], pool: i = null, width: a, height: n, resampleMethod: s, fillValue: o, signal: l } = e, h = "interleave" in e && e.interleave, g = t || [
			0,
			0,
			this.getWidth(),
			this.getHeight()
		];
		if (g[0] > g[2] || g[1] > g[3]) throw new Error("Invalid subsets");
		const c = (g[2] - g[0]) * (g[3] - g[1]), f = this.getSamplesPerPixel();
		if (r && r.length) {
			for (let w = 0; w < r.length; ++w) if (r[w] >= f) return Promise.reject(/* @__PURE__ */ new RangeError(`Invalid sample index '${r[w]}'.`));
		} else for (let w = 0; w < f; ++w) r.push(w);
		let u;
		if (h) {
			const { fileDirectory: e } = this, t = e.getValue("SampleFormat"), i = t ? Math.max.apply(null, Array.from(t)) : 1;
			if (1 !== i && 2 !== i && 3 !== i) throw new Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");
			const a = e.getValue("BitsPerSample");
			if (u = et(i, a ? Math.max.apply(null, Array.from(a)) : 8, c * r.length), o) {
				if (Array.isArray(o)) throw new Error("When reading interleaved data, fillValue must be a single number.");
				u.fill(o);
			}
		} else {
			u = [];
			for (let e = 0; e < r.length; ++e) {
				const t = this.getArrayForSample(r[e], c);
				Array.isArray(o) && e < o.length ? t.fill(o[e]) : o && !Array.isArray(o) && t.fill(o), u.push(t);
			}
		}
		const d = this.fileDirectory.getValue("Compression") || 1, y = await async function(e, t) {
			if (!We.has(e)) throw new Error(`Unknown compression method identifier: ${e}`);
			const { decoderParameterFn: r } = We.get(e);
			return r(t);
		}(d, this.fileDirectory), p = i ? i.bindParameters(d, y) : await async function(e, t) {
			if (!We.has(e)) throw new Error(`Unknown compression method identifier: ${e}`);
			const { importFn: r } = We.get(e);
			return new (await (r()))(t);
		}(d, y);
		return await this._readRaster(g, r, u, h, p, a, n, s, l);
	}
	async readRGB(e = {}) {
		const { window: t, pool: r = null, width: i, height: a, resampleMethod: n, enableAlpha: s = !1, signal: o } = e, l = ("interleave" in e && e.interleave) ?? !1, h = t || [
			0,
			0,
			this.getWidth(),
			this.getHeight()
		];
		if (h[0] > h[2] || h[1] > h[3]) throw new Error("Invalid subsets");
		const g = this.fileDirectory.getValue("PhotometricInterpretation");
		if (g === Ve) {
			let e = [
				0,
				1,
				2
			];
			const h = this.fileDirectory.getValue("ExtraSamples");
			if (h && h[0] !== He && s) {
				e = [];
				const t = this.fileDirectory.getValue("BitsPerSample") || [];
				for (let r = 0; r < t.length; r += 1) e.push(r);
			}
			return this.readRasters({
				window: t,
				interleave: l,
				samples: e,
				pool: r,
				width: i,
				height: a,
				resampleMethod: n,
				signal: o
			});
		}
		let c;
		switch (g) {
			case Ue:
			case Le:
			case xe:
				c = [0];
				break;
			case Ce:
				c = [
					0,
					1,
					2,
					3
				];
				break;
			case _e:
			case Be:
				c = [
					0,
					1,
					2
				];
				break;
			default: throw new Error("Invalid or unsupported photometric interpretation.");
		}
		const f = {
			window: h,
			interleave: !0,
			samples: c,
			pool: r,
			width: i,
			height: a,
			resampleMethod: n,
			signal: o
		}, { fileDirectory: u } = this, d = await this.readRasters(f), y = 2 ** this.getBitsPerSample(0);
		let p;
		switch (g) {
			case Ue:
				p = function(e, t) {
					const { width: r, height: i } = e, a = new Uint8Array(r * i * 3);
					let n;
					for (let s = 0, o = 0; s < e.length; ++s, o += 3) n = 256 - e[s] / t * 256, a[o] = n, a[o + 1] = n, a[o + 2] = n;
					return a;
				}(d, y);
				break;
			case Le:
				p = function(e, t) {
					const { width: r, height: i } = e, a = new Uint8Array(r * i * 3);
					let n;
					for (let s = 0, o = 0; s < e.length; ++s, o += 3) n = e[s] / t * 256, a[o] = n, a[o + 1] = n, a[o + 2] = n;
					return a;
				}(d, y);
				break;
			case xe:
				p = function(e, t) {
					const { width: r, height: i } = e, a = new Uint8Array(r * i * 3), n = t.length / 3, s = t.length / 3 * 2;
					for (let o = 0, l = 0; o < e.length; ++o, l += 3) {
						const r = e[o];
						a[l] = t[r] / 65536 * 256, a[l + 1] = t[r + n] / 65536 * 256, a[l + 2] = t[r + s] / 65536 * 256;
					}
					return a;
				}(d, await u.loadValue("ColorMap"));
				break;
			case Ce:
				p = function(e) {
					const { width: t, height: r } = e, i = new Uint8Array(t * r * 3);
					for (let a = 0, n = 0; a < e.length; a += 4, n += 3) {
						const t = e[a], r = e[a + 1], s = e[a + 2], o = e[a + 3];
						i[n] = (255 - t) / 256 * 255 * ((255 - o) / 256), i[n + 1] = (255 - r) / 256 * 255 * ((255 - o) / 256), i[n + 2] = (255 - s) / 256 * 255 * ((255 - o) / 256);
					}
					return i;
				}(d);
				break;
			case _e:
				p = function(e) {
					const { width: t, height: r } = e, i = new Uint8ClampedArray(t * r * 3);
					for (let a = 0, n = 0; a < e.length; a += 3, n += 3) {
						const t = e[a], r = e[a + 1], s = e[a + 2];
						i[n] = t + 1.402 * (s - 128), i[n + 1] = t - .34414 * (r - 128) - .71414 * (s - 128), i[n + 2] = t + 1.772 * (r - 128);
					}
					return i;
				}(d);
				break;
			case Be:
				p = function(e) {
					const { width: t, height: r } = e, i = new Uint8Array(t * r * 3);
					for (let a = 0, n = 0; a < e.length; a += 3, n += 3) {
						let t, r, s, o = (e[a + 0] + 16) / 116, l = (e[a + 1] << 24 >> 24) / 500 + o, h = o - (e[a + 2] << 24 >> 24) / 200;
						l = .95047 * (l * l * l > .008856 ? l * l * l : (l - 16 / 116) / 7.787), o = 1 * (o * o * o > .008856 ? o * o * o : (o - 16 / 116) / 7.787), h = 1.08883 * (h * h * h > .008856 ? h * h * h : (h - 16 / 116) / 7.787), t = 3.2406 * l + -1.5372 * o + -.4986 * h, r = -.9689 * l + 1.8758 * o + .0415 * h, s = .0557 * l + -.204 * o + 1.057 * h, t = t > .0031308 ? 1.055 * t ** (1 / 2.4) - .055 : 12.92 * t, r = r > .0031308 ? 1.055 * r ** (1 / 2.4) - .055 : 12.92 * r, s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : 12.92 * s, i[n] = 255 * Math.max(0, Math.min(1, t)), i[n + 1] = 255 * Math.max(0, Math.min(1, r)), i[n + 2] = 255 * Math.max(0, Math.min(1, s));
					}
					return i;
				}(d);
				break;
			default: throw new Error("Unsupported photometric interpretation.");
		}
		if (!l) {
			const e = new Uint8Array(p.length / 3), t = new Uint8Array(p.length / 3), r = new Uint8Array(p.length / 3);
			for (let i = 0, a = 0; i < p.length; i += 3, ++a) e[a] = p[i], t[a] = p[i + 1], r[a] = p[i + 2];
			p = [
				e,
				t,
				r
			];
		}
		const w = p;
		return w.width = d.width, w.height = d.height, w;
	}
	async getTiePoints() {
		if (!this.fileDirectory.hasTag("ModelTiepoint")) return [];
		const e = await this.fileDirectory.loadValue("ModelTiepoint");
		if ("object" != typeof e) throw new Error("Expected ModelTiepoint to be an array or typed array.");
		const t = [];
		for (let r = 0; r < e.length; r += 6) t.push({
			i: e[r],
			j: e[r + 1],
			k: e[r + 2],
			x: e[r + 3],
			y: e[r + 4],
			z: e[r + 5]
		});
		return t;
	}
	async getGDALMetadata(e = null) {
		const t = {};
		if (!this.fileDirectory.hasTag("GDAL_METADATA")) return null;
		let r = function(e, t, r) {
			const i = [], a = r && r.debug || !1, n = !r || "boolean" != typeof r.nested || r.nested;
			let s, o = r && r.startIndex || 0;
			for (; s = be(e, t, {
				debug: a,
				startIndex: o
			});) o = n ? s.start + 1 + t.length : s.end, i.push(s);
			return i;
		}(await this.fileDirectory.loadValue("GDAL_METADATA"), "Item");
		r = null === e ? r.filter((e) => void 0 === Te(e, "sample")) : r.filter((t) => Number(Te(t, "sample")) === e);
		for (let i = 0; i < r.length; ++i) {
			const e = r[i];
			t[Te(e, "name")] = e.inner;
		}
		return t;
	}
	getGDALNoData() {
		const e = this.fileDirectory.hasTag("GDAL_NODATA") && this.fileDirectory.getValue("GDAL_NODATA");
		return e ? Number(e.substring(0, e.length - 1)) : null;
	}
	getOrigin() {
		const e = this.fileDirectory.getValue("ModelTiepoint"), t = this.fileDirectory.getValue("ModelTransformation");
		if (e && 6 === e.length) return [
			e[3],
			e[4],
			e[5]
		];
		if (t) return [
			t[3],
			t[7],
			t[11]
		];
		throw new Error("The image does not have an affine transformation.");
	}
	getResolution(e = null) {
		const t = this.fileDirectory.getValue("ModelPixelScale"), r = this.fileDirectory.getValue("ModelTransformation");
		if (t) return [
			t[0],
			-t[1],
			t[2]
		];
		if (r) return 0 === r[1] && 0 === r[4] ? [
			r[0],
			-r[5],
			r[10]
		] : [
			Math.sqrt(r[0] * r[0] + r[4] * r[4]),
			-Math.sqrt(r[1] * r[1] + r[5] * r[5]),
			r[10]
		];
		if (e) {
			const [t, r, i] = e.getResolution();
			return [
				t * e.getWidth() / this.getWidth(),
				r * e.getHeight() / this.getHeight(),
				i * e.getWidth() / this.getWidth()
			];
		}
		throw new Error("The image does not have an affine transformation.");
	}
	pixelIsArea() {
		return 1 === this.getGeoKeys()?.GTRasterTypeGeoKey;
	}
	getBoundingBox(e = !1) {
		const t = this.getHeight(), r = this.getWidth(), i = this.fileDirectory.getValue("ModelTransformation");
		if (i && !e) {
			const [e, a, , n, s, o, , l] = i, h = [
				[0, 0],
				[0, t],
				[r, 0],
				[r, t]
			].map(([t, r]) => [n + e * t + a * r, l + s * t + o * r]), g = h.map((e) => e[0]), c = h.map((e) => e[1]);
			return [
				Math.min(...g),
				Math.min(...c),
				Math.max(...g),
				Math.max(...c)
			];
		}
		{
			const e = this.getOrigin(), i = this.getResolution(), a = e[0], n = e[1], s = a + i[0] * r, o = n + i[1] * t;
			return [
				Math.min(a, s),
				Math.min(n, o),
				Math.max(a, s),
				Math.max(n, o)
			];
		}
	}
}, rt = class {
	constructor(e) {
		this._dataView = new DataView(e);
	}
	get buffer() {
		return this._dataView.buffer;
	}
	getUint64(e, t) {
		const r = this.getUint32(e, t), i = this.getUint32(e + 4, t);
		let a;
		if (t) {
			if (a = r + 2 ** 32 * i, !Number.isSafeInteger(a)) throw new Error(`${a} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
			return a;
		}
		if (a = 2 ** 32 * r + i, !Number.isSafeInteger(a)) throw new Error(`${a} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
		return a;
	}
	getInt64(e, t) {
		let r = 0;
		const i = (128 & this._dataView.getUint8(e + (t ? 7 : 0))) > 0;
		let a = !0;
		for (let n = 0; n < 8; n++) {
			let s = this._dataView.getUint8(e + (t ? n : 7 - n));
			i && (a ? 0 !== s && (s = 255 & ~(s - 1), a = !1) : s = 255 & ~s), r += s * 256 ** n;
		}
		return i && (r = -r), r;
	}
	getUint8(e) {
		return this._dataView.getUint8(e);
	}
	getInt8(e) {
		return this._dataView.getInt8(e);
	}
	getUint16(e, t) {
		return this._dataView.getUint16(e, t);
	}
	getInt16(e, t) {
		return this._dataView.getInt16(e, t);
	}
	getUint32(e, t) {
		return this._dataView.getUint32(e, t);
	}
	getInt32(e, t) {
		return this._dataView.getInt32(e, t);
	}
	getFloat16(e, t) {
		return Se(this._dataView, e, t);
	}
	getFloat32(e, t) {
		return this._dataView.getFloat32(e, t);
	}
	getFloat64(e, t) {
		return this._dataView.getFloat64(e, t);
	}
}, it = class {
	constructor(e, t, r, i) {
		this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = r, this._bigTiff = i;
	}
	get sliceOffset() {
		return this._sliceOffset;
	}
	get sliceTop() {
		return this._sliceOffset + this.buffer.byteLength;
	}
	get littleEndian() {
		return this._littleEndian;
	}
	get bigTiff() {
		return this._bigTiff;
	}
	get buffer() {
		return this._dataView.buffer;
	}
	covers(e, t) {
		return this.sliceOffset <= e && this.sliceTop >= e + t;
	}
	readUint8(e) {
		return this._dataView.getUint8(e - this._sliceOffset);
	}
	readInt8(e) {
		return this._dataView.getInt8(e - this._sliceOffset);
	}
	readUint16(e) {
		return this._dataView.getUint16(e - this._sliceOffset, this._littleEndian);
	}
	readInt16(e) {
		return this._dataView.getInt16(e - this._sliceOffset, this._littleEndian);
	}
	readUint32(e) {
		return this._dataView.getUint32(e - this._sliceOffset, this._littleEndian);
	}
	readInt32(e) {
		return this._dataView.getInt32(e - this._sliceOffset, this._littleEndian);
	}
	readFloat32(e) {
		return this._dataView.getFloat32(e - this._sliceOffset, this._littleEndian);
	}
	readFloat64(e) {
		return this._dataView.getFloat64(e - this._sliceOffset, this._littleEndian);
	}
	readUint64(e) {
		const t = this.readUint32(e), r = this.readUint32(e + 4);
		let i;
		if (this._littleEndian) {
			if (i = t + 2 ** 32 * r, !Number.isSafeInteger(i)) throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
			return i;
		}
		if (i = 2 ** 32 * t + r, !Number.isSafeInteger(i)) throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
		return i;
	}
	readInt64(e) {
		let t = 0;
		const r = (128 & this._dataView.getUint8(e + (this._littleEndian ? 7 : 0))) > 0;
		let i = !0;
		for (let a = 0; a < 8; a++) {
			let n = this._dataView.getUint8(e + (this._littleEndian ? a : 7 - a));
			r && (i ? 0 !== n && (n = 255 & ~(n - 1), i = !1) : n = 255 & ~n), t += n * 256 ** a;
		}
		return r && (t = -t), t;
	}
	readOffset(e) {
		return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
	}
};
function at(e, t) {
	switch (e) {
		case Pe.BYTE:
		case Pe.ASCII:
		case Pe.UNDEFINED: return new Uint8Array(t);
		case Pe.SBYTE: return new Int8Array(t);
		case Pe.SHORT: return new Uint16Array(t);
		case Pe.SSHORT: return new Int16Array(t);
		case Pe.LONG:
		case Pe.IFD: return new Uint32Array(t);
		case Pe.SLONG: return new Int32Array(t);
		case Pe.LONG8:
		case Pe.IFD8:
		case Pe.SLONG8: return new Array(t);
		case Pe.RATIONAL: return new Uint32Array(2 * t);
		case Pe.SRATIONAL: return new Int32Array(2 * t);
		case Pe.FLOAT: return new Float32Array(t);
		case Pe.DOUBLE: return new Float64Array(t);
		default: throw new RangeError(`Invalid field type: ${e}`);
	}
}
function nt(e, t) {
	switch (t) {
		case Pe.BYTE:
		case Pe.ASCII:
		case Pe.UNDEFINED: return e.readUint8;
		case Pe.SBYTE: return e.readInt8;
		case Pe.SHORT: return e.readUint16;
		case Pe.SSHORT: return e.readInt16;
		case Pe.LONG:
		case Pe.IFD: return e.readUint32;
		case Pe.SLONG: return e.readInt32;
		case Pe.LONG8:
		case Pe.IFD8: return e.readUint64;
		case Pe.SLONG8: return e.readInt64;
		case Pe.RATIONAL: return e.readUint32;
		case Pe.SRATIONAL: return e.readInt32;
		case Pe.FLOAT: return e.readFloat32;
		case Pe.DOUBLE: return e.readFloat64;
		default: throw new RangeError(`Invalid field type: ${t}`);
	}
}
function st(e = null, t, r, i, a, n, s = !1) {
	const o = Ge(i), l = e || at(i, a), h = i === Pe.RATIONAL || i === Pe.SRATIONAL;
	if (h) for (let g = 0; g < a; g += 2) l[g] = t.call(r, n + g * o), l[g + 1] = t.call(r, n + (g * o + 4));
	else for (let g = 0; g < a; ++g) l[g] = t.call(r, n + g * o);
	return i === Pe.ASCII ? new TextDecoder("utf-8").decode(l) : 1 !== a || s || h ? l : l[0];
}
var ot = class {
	constructor(e, t, r, i, a) {
		this.source = e, this.arrayOffset = t, this.littleEndian = r, this.fieldType = i, this.length = a, this.data = at(i, a), this.itemSize = Ge(i), this.maskBitmap = new Uint8Array(Math.ceil(a / 8)), this.fetchIndexPromises = /* @__PURE__ */ new Map(), this.fullFetchPromise = null;
	}
	async loadAll() {
		return this.fullFetchPromise || (this.fullFetchPromise = this.source.fetch([{
			offset: this.arrayOffset,
			length: this.itemSize * this.length
		}]).then((e) => {
			const t = new it(e[0], this.arrayOffset, !0, !1), r = st(this.data, nt(t, this.fieldType), t, this.fieldType, this.length, this.arrayOffset, !0);
			return this.maskBitmap.fill(255), this.fetchIndexPromises.clear(), r;
		})), this.fullFetchPromise;
	}
	async get(e) {
		if (e < 0 || e >= this.data.length) throw new RangeError(`Index ${e} out of bounds for length ${this.data.length}`);
		const t = Math.floor(e / 8), r = 1 << e % 8, i = this.arrayOffset + e * this.itemSize;
		if (0 === (this.maskBitmap[t] & r)) {
			if (!this.fetchIndexPromises.has(e)) {
				const a = this.source.fetch([{
					offset: i,
					length: this.itemSize
				}]).then((a) => {
					const n = new it(a[0], this.arrayOffset + e * this.itemSize, !0, !1), s = nt(n, this.fieldType).call(n, i);
					return this.data[e] = s, this.maskBitmap[t] |= r, this.fetchIndexPromises.delete(e), s;
				});
				this.fetchIndexPromises.set(e, a);
			}
			return this.fetchIndexPromises.get(e);
		}
		return this.data[e];
	}
}, lt = class {
	constructor(e, t, r, i) {
		this.actualizedFields = e, this.deferredFields = t, this.deferredFieldsBeingResolved = /* @__PURE__ */ new Map(), this.deferredArrays = r, this.nextIFDByteOffset = i;
	}
	hasTag(e) {
		const t = Ne(e);
		return this.actualizedFields.has(t) || this.deferredFields.has(t) || this.deferredArrays.has(t);
	}
	getValue(e) {
		const t = Ne(e);
		if (this.deferredFields.has(t) || this.deferredArrays.has(t)) {
			const e = Re[t]?.name || `Tag${t}`;
			throw new Error(`Field '${e}' (${t}) is deferred. Use loadValue() to load it asynchronously.`);
		}
		if (this.actualizedFields.has(t)) return this.actualizedFields.get(t);
	}
	async loadValue(e) {
		const t = Ne(e);
		if (this.actualizedFields.has(t)) return this.actualizedFields.get(t);
		if (this.deferredFieldsBeingResolved.has(t)) return this.deferredFieldsBeingResolved.get(t);
		const r = this.deferredFields.get(t);
		if (r) {
			this.deferredFields.delete(t);
			const e = (async () => {
				try {
					const e = await r();
					return this.actualizedFields.set(t, e), e;
				} finally {
					this.deferredFieldsBeingResolved.delete(t);
				}
			})();
			return this.deferredFieldsBeingResolved.set(t, e), e;
		}
		const i = this.deferredArrays.get(t);
		return i ? i.loadAll() : void 0;
	}
	async loadValueIndexed(e, t) {
		const r = Ne(e);
		if (this.actualizedFields.has(r)) return this.actualizedFields.get(r)[t];
		if (this.deferredArrays.has(r)) return this.deferredArrays.get(r).get(t);
		if (this.hasTag(r)) {
			const e = await this.loadValue(r);
			if (e && "number" != typeof e) return e[t];
		}
	}
	parseGeoKeyDirectory() {
		const e = this.getValue("GeoKeyDirectory");
		if (!e) return null;
		const t = {};
		for (let r = 4; r <= 4 * e[3]; r += 4) {
			const i = ke[e[r]], a = e[r + 1] || null, n = e[r + 2], s = e[r + 3];
			let o = null;
			if (a) {
				if (o = this.getValue(a), null == o) throw new Error(`Could not get value of geoKey '${i}'.`);
				"string" == typeof o ? o = o.substring(s, s + n - 1) : o.subarray && (o = o.subarray(s, s + n), 1 === n && (o = o[0]));
			} else o = s;
			t[i] = o;
		}
		return t;
	}
	toObject() {
		const e = {};
		for (const [t, r] of this.actualizedFields.entries()) {
			const i = "number" == typeof t ? Re[t] : void 0;
			e[i ? i.name : `Tag${t}`] = r;
		}
		return e;
	}
}, ht = class {
	constructor(e, t, r, i = !1) {
		this.source = e, this.littleEndian = t, this.bigTiff = r, this.eager = i;
	}
	async getSlice(e, t) {
		const r = this.bigTiff ? 4048 : 1024;
		return new it((await this.source.fetch([{
			offset: e,
			length: void 0 !== t ? t : r
		}]))[0], e, this.littleEndian, this.bigTiff);
	}
	async parseFileDirectoryAt(e) {
		const t = this.bigTiff ? 20 : 12, r = this.bigTiff ? 8 : 2;
		let i = await this.getSlice(e);
		const a = this.bigTiff ? i.readUint64(e) : i.readUint16(e), n = a * (t + (this.bigTiff ? 16 : 6));
		i.covers(e, n) || (i = await this.getSlice(e, n));
		const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
		let h = e + (this.bigTiff ? 8 : 2);
		for (let c = 0; c < a; h += t, ++c) {
			const e = i.readUint16(h), t = i.readUint16(h + 2), r = this.bigTiff ? i.readUint64(h + 4) : i.readUint32(h + 4);
			let a = null, n = null, g = null;
			const c = Ge(t), f = h + (this.bigTiff ? 12 : 8), u = Re[e]?.isArray, d = Re[e]?.eager || this.eager;
			if (c * r <= (this.bigTiff ? 8 : 4)) a = st(at(t, r), nt(i, t), i, t, r, f, u);
			else {
				const e = i.readOffset(f), s = Ge(t) * r;
				if (i.covers(e, s)) a = st(at(t, r), nt(i, t), i, t, r, e, u);
				else if (d) {
					const i = await this.getSlice(e, s);
					a = st(at(t, r), nt(i, t), i, t, r, e, u);
				} else u ? g = new ot(this.source, e, this.littleEndian, t, r) : n = async () => {
					const i = await this.getSlice(e, s);
					return st(at(t, r), nt(i, t), i, t, r, e, u);
				};
			}
			null !== a ? s.set(e, a) : null !== n ? o.set(e, n) : null !== g && l.set(e, g);
		}
		return new lt(s, o, l, i.readOffset(e + r + t * a));
	}
};
function gt(e, t, r, i) {
	let a = null, n = null;
	const s = Ge(t);
	switch (t) {
		case Pe.BYTE:
		case Pe.ASCII:
		case Pe.UNDEFINED:
			a = new Uint8Array(r), n = e.readUint8;
			break;
		case Pe.SBYTE:
			a = new Int8Array(r), n = e.readInt8;
			break;
		case Pe.SHORT:
			a = new Uint16Array(r), n = e.readUint16;
			break;
		case Pe.SSHORT:
			a = new Int16Array(r), n = e.readInt16;
			break;
		case Pe.LONG:
		case Pe.IFD:
			a = new Uint32Array(r), n = e.readUint32;
			break;
		case Pe.SLONG:
			a = new Int32Array(r), n = e.readInt32;
			break;
		case Pe.LONG8:
		case Pe.IFD8:
			a = new Array(r), n = e.readUint64;
			break;
		case Pe.SLONG8:
			a = new Array(r), n = e.readInt64;
			break;
		case Pe.RATIONAL:
			a = new Uint32Array(2 * r), n = e.readUint32;
			break;
		case Pe.SRATIONAL:
			a = new Int32Array(2 * r), n = e.readInt32;
			break;
		case Pe.FLOAT:
			a = new Float32Array(r), n = e.readFloat32;
			break;
		case Pe.DOUBLE: a = new Float64Array(r), n = e.readFloat64;
	}
	if (null === a || null === n) throw new RangeError(`Invalid field type: ${t}`);
	if (t !== Pe.RATIONAL && t !== Pe.SRATIONAL) for (let o = 0; o < r; ++o) a[o] = n.call(e, i + o * s);
	else for (let o = 0; o < r; o += 2) a[o] = n.call(e, i + o * s), a[o + 1] = n.call(e, i + (o * s + 4));
	return t === Pe.ASCII ? new TextDecoder("utf-8").decode(a) : a;
}
var ct = class extends Error {
	constructor(e) {
		super(`No image at index ${e}`), this.index = e;
	}
}, ft = class {
	async getImage(e = 0) {
		throw new Error("Not implemented");
	}
	async getImageCount() {
		throw new Error("Not implemented");
	}
	async readRasters(e = {}) {
		const { window: t, width: r, height: i } = e;
		let { resX: a, resY: n, bbox: s } = e;
		const o = await this.getImage();
		let l = o;
		const h = await this.getImageCount(), g = o.getBoundingBox();
		if (t && s) throw new Error("Both \"bbox\" and \"window\" passed.");
		if (r || i) {
			if (t) {
				const [e, r] = o.getOrigin(), [i, a] = o.getResolution();
				s = [
					e + t[0] * i,
					r + t[1] * a,
					e + t[2] * i,
					r + t[3] * a
				];
			}
			const e = s || g;
			if (r) {
				if (a) throw new Error("Both width and resX passed");
				a = (e[2] - e[0]) / r;
			}
			if (i) {
				if (n) throw new Error("Both width and resY passed");
				n = (e[3] - e[1]) / i;
			}
		}
		if (a || n) {
			const e = [];
			for (let t = 0; t < h; ++t) {
				const r = await this.getImage(t), i = r.fileDirectory.getValue("SubfileType"), a = r.fileDirectory.getValue("NewSubfileType");
				(0 === t || 2 === i || 1 & (a || 0)) && e.push(r);
			}
			e.sort((e, t) => e.getWidth() - t.getWidth());
			for (let t = 0; t < e.length; ++t) {
				const r = e[t], i = (g[2] - g[0]) / r.getWidth(), s = (g[3] - g[1]) / r.getHeight();
				if (l = r, a && a > i || n && n > s) break;
			}
		}
		let c = t;
		if (s) {
			const [e, t] = o.getOrigin(), [r, i] = l.getResolution(o);
			c = [
				Math.round((s[0] - e) / r),
				Math.round((s[1] - t) / i),
				Math.round((s[2] - e) / r),
				Math.round((s[3] - t) / i)
			], c = [
				Math.min(c[0], c[2]),
				Math.min(c[1], c[3]),
				Math.max(c[0], c[2]),
				Math.max(c[1], c[3])
			];
		}
		return l.readRasters({
			...e,
			window: c
		});
	}
}, ut = class e extends ft {
	constructor(e, t, r, i, a = {}) {
		super(), this.source = e, this.parser = new ht(e, t, r, !1), this.littleEndian = t, this.bigTiff = r, this.firstIFDOffset = i, this.cache = a.cache || !1, this.ifdRequests = [], this.ghostValues = null;
	}
	async getSlice(e, t) {
		const r = this.bigTiff ? 4048 : 1024;
		return new it((await this.source.fetch([{
			offset: e,
			length: void 0 !== t ? t : r
		}]))[0], e, this.littleEndian, this.bigTiff);
	}
	async requestIFD(e) {
		if (this.ifdRequests[e]) return this.ifdRequests[e];
		if (0 === e) return this.ifdRequests[e] = this.parser.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
		if (!this.ifdRequests[e - 1]) try {
			this.ifdRequests[e - 1] = this.requestIFD(e - 1);
		} catch (t) {
			if (t instanceof ct) throw new ct(e);
			throw t;
		}
		return this.ifdRequests[e] = (async () => {
			const t = this.ifdRequests[e - 1];
			if (!t) throw new Error("Previous IFD request missing");
			const r = await t;
			if (0 === r.nextIFDByteOffset) throw new ct(e);
			return this.parser.parseFileDirectoryAt(r.nextIFDByteOffset);
		})(), this.ifdRequests[e];
	}
	async getImage(e = 0) {
		return new tt(await this.requestIFD(e), this.littleEndian, this.cache, this.source);
	}
	async getImageCount() {
		let e = 0, t = !0;
		for (; t;) try {
			await this.requestIFD(e), ++e;
		} catch (r) {
			if (!(r instanceof ct)) throw r;
			t = !1;
		}
		return e;
	}
	async getGhostValues() {
		const e = this.bigTiff ? 16 : 8;
		if (null !== this.ghostValues) return this.ghostValues;
		let t = await this.getSlice(e, 130);
		if ("GDAL_STRUCTURAL_METADATA_SIZE=" === gt(t, Pe.ASCII, 30, e)) {
			const r = gt(t, Pe.ASCII, 130, e).split("\n")[0], i = Number(r.split("=")[1].split(" ")[0]) + r.length;
			i > 130 && (t = await this.getSlice(e, i));
			const a = gt(t, Pe.ASCII, i, e), n = {};
			a.split("\n").filter((e) => e.length > 0).map((e) => e.split("=")).forEach(([e, t]) => {
				n[e] = t;
			}), this.ghostValues = n;
		}
		return this.ghostValues;
	}
	static async fromSource(t, r, i) {
		const a = (await t.fetch([{
			offset: 0,
			length: 1024
		}], i))[0], n = new rt(a), s = n.getUint16(0, !1);
		let o;
		if (18761 === s) o = !0;
		else {
			if (19789 !== s) throw new TypeError("Invalid byte order value.");
			o = !1;
		}
		const l = n.getUint16(2, o);
		let h;
		if (42 === l) h = !1;
		else {
			if (43 !== l) throw new TypeError("Invalid magic number.");
			if (h = !0, 8 !== n.getUint16(4, o)) throw new Error("Unsupported offset byte-size.");
		}
		const g = h ? n.getUint64(8, o) : n.getUint32(4, o);
		return new e(t, o, h, g, r);
	}
	close() {
		return "function" == typeof this.source.close && this.source.close();
	}
};
function dt(e, t) {
	let r = 1 / 0, i = -1 / 0, a = 0, n = 0;
	for (let s = 0; s < e.length; s++) {
		const o = e[s];
		null != t && o === t || Number.isNaN(o) || (o < r && (r = o), o > i && (i = o), a += o, n++);
	}
	return {
		min: n > 0 ? r : 0,
		max: n > 0 ? i : 0,
		mean: n > 0 ? a / n : 0
	};
}
self.onmessage = async (e) => {
	const { buffer: t, fileName: r } = e.data, i = performance.now();
	try {
		const e = await (await ut.fromArrayBuffer(t)).getImage(), n = e.getWidth(), s = e.getHeight(), o = e.getSamplesPerPixel(), l = e.getGDALNoData();
		let h;
		if (n * s * o > 104857600) {
			const t = Math.min(256, n), i = Math.min(256, s), l = Math.ceil(n / t), g = Math.ceil(s / i), c = l * g, f = n * s, u = [];
			for (let e = 0; e < o; e++) u.push(new Float32Array(f));
			let d = 0;
			for (let h = 0; h < g; h++) for (let g = 0; g < l; g++) {
				const l = g * t, f = h * i, y = Math.min(t, n - l), p = Math.min(i, s - f);
				try {
					const t = await e.readRasters({ window: [
						l,
						f,
						l + y,
						f + p
					] });
					for (let e = 0; e < o; e++) {
						const r = t[e];
						for (let t = 0; t < p; t++) {
							const i = t * y, a = (f + t) * n + l;
							u[e].set(r.subarray(i, i + y), a);
						}
					}
				} catch (a) {}
				d++, d % 50 == 0 && self.postMessage({
					type: "progress",
					fileName: r,
					progress: Math.round(d / c * 100),
					phase: "decoding"
				});
			}
			h = u;
		} else {
			const t = await e.readRasters();
			h = [];
			for (let e = 0; e < o; e++) h.push(new Float32Array(t[e]));
		}
		const g = [];
		for (let t = 0; t < o; t++) g.push(dt(h[t], l));
		const c = Math.round(performance.now() - i), f = h.map((e) => e.buffer);
		self.postMessage({
			type: "complete",
			fileName: r,
			width: n,
			height: s,
			bandCount: o,
			dataType: "Float32",
			data: h,
			nodata: l,
			stats: g,
			elapsed: c
		}, f);
	} catch (a) {
		self.postMessage({
			type: "error",
			fileName: r,
			error: a.message || "TIFF decode failed"
		});
	}
};
export { o as i, je as n, s as r, Ke as t };
