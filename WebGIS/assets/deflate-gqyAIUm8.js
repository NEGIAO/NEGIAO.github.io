import { t as e } from "./basedecoder-hqrck8Ml.js";
import { t as r } from "./pako.esm-LYh-a_hW.js";
var s = class extends e {
	decodeBlock(e) {
		return r(new Uint8Array(e)).buffer;
	}
};
export { s as default };
