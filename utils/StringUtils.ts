
export class StringUtils {

	public static capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	public static displayHash(hash: string) {
		const len = hash?.length;
		return hash && `${hash.slice(0,10)}...${hash.slice(len - 8, len)}`
	}

	public static line2Hump(str: string) {
		return str.replace(/\-(\w)/g,
			(all, letter) => letter.toUpperCase());
	}
	public static hump2Line(str: string) {
		return str.replace(/([A-Z])/g,"-$1")
			.toLowerCase().substring(1);
	}

	public static fillData2Str(str: string, data: any, deleteKey = true, re = /{(.+?)}/g) {
		let res = str, match;

		while ((match = re.exec(str)) !== null) {
			res = res.replace(match[0], data[match[1]] + (match[2] || ""))
			if (deleteKey) delete data[match[1]];
		}
		return res;
	}
	// public static fillData2StrInSignText(str, data, deleteKey = true) {
	// 	return this.fillData2Str(str, data, deleteKey, /\${(.+?)}/g)
	// }
	public static fillData2StrInUrl(str: string, data: any, deleteKey: boolean = true) {
		return this.fillData2Str(str, data, deleteKey, /:(.+?)(\/|$|&|\.)/g)
	}

}
