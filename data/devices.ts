/**
 * 设备数据配置
 *
 * 外层键名即品牌；每个设备可自由填写 `category` 和 `specs`。
 * 新增自定义规格时，只需在 specs 中追加一项：
 * { label: "接口", value: "USB-C", icon: "material-symbols:usb" }
 *
 * `icon` 使用 Iconify 图标名；不填写时会使用通用信息图标。
 */
export interface DeviceSpec {
	label: string;
	value: string;
	icon?: string;
}

export interface Device {
	name: string;
	image: string;
	category: string;
	description: string;
	link: string;
	specs: DeviceSpec[];
}

export type DeviceCollection = Record<string, Device[]>;

export const devicesData: DeviceCollection = {
	OnePlus: [
		{
			name: "OnePlus 12",
			image: "/images/device/oneplus12.jpg",
			category: "手机",
			description: "Never Settle.",
			link: "https://www.oneplus.com/cn/12",
			specs: [
				{
					label: "SoC",
					value: "Snapdragon 8 Gen 3",
					icon: "material-symbols:memory-alt-rounded",
				},
				{
					label: "内存",
					value: "16GB",
					icon: "material-symbols:memory-rounded",
				},
				{
					label: "存储",
					value: "512GB",
					icon: "material-symbols:storage-rounded",
				},
				{
					label: "配色",
					value: "黑色",
					icon: "material-symbols:palette-outline",
				},
			],
		},
	],
	ROG: [
		{
			name: "Zephyrus G14 2025",
			image: "/images/device/Zephyrus.png",
			category: "电脑",
			description: "Performance, Uncompromised.",
			link: "https://rog.asus.com.cn/laptops/rog-zephyrus/rog-zephyrus-g14-2025/",
			specs: [
				{
					label: "CPU",
					value: "Ryzen AI 9 HX 370",
					icon: "material-symbols:memory-alt-rounded",
				},
				{
					label: "GPU",
					value: "RTX 50 系列",
					icon: "material-symbols:videogame-asset-rounded",
				},
				{
					label: "内存 / 存储",
					value: "32GB / 1TB",
					icon: "material-symbols:storage-rounded",
				},
				{
					label: "OEM",
					value: "ROG · ASUS",
					icon: "material-symbols:laptop-mac",
				},
			],
		},
	],
	Apple: [
		{
			name: "MacBook Air 13 2020",
			image: "/images/device/MBA-M1.jpg",
			category: "电脑",
			description: "Speed of lightness.",
			link: "https://www.apple.com.cn/macbook-air/",
			specs: [
				{
					label: "CPU",
					value: "Apple M1",
					icon: "material-symbols:memory-alt-rounded",
				},
				{
					label: "GPU",
					value: "8-core GPU",
					icon: "material-symbols:videogame-asset-rounded",
				},
				{
					label: "内存 / 存储",
					value: "8GB / 256GB",
					icon: "material-symbols:storage-rounded",
				},
				{
					label: "OEM",
					value: "Apple",
					icon: "simple-icons:apple",
				},
			],
		},
	],
	Microsoft: [
		{
			name: "Surface Pro 3",
			image: "/images/device/surface.png",
			category: "平板电脑",
			description: "The Original Hybrid.",
			link: "https://support.microsoft.com/zh-cn/surface/surface-pro-3-%E8%A7%84%E6%A0%BC%E5%92%8C%E5%8A%9F%E8%83%BD-4c142a41-134f-f22b-0142-a5cf073b56ee3",
			specs: [
				{
					label: "形态",
					value: "二合一平板",
					icon: "material-symbols:tablet-mac",
				},
				{
					label: "内存",
					value: "4GB",
					icon: "material-symbols:memory-rounded",
				},
				{
					label: "存储",
					value: "256GB",
					icon: "material-symbols:storage-rounded",
				},
				{
					label: "OEM",
					value: "Microsoft",
					icon: "simple-icons:microsoft",
				},
			],
		},
	],
	MOONDROP: [
		{
			name: "Kadenz",
			image: "/images/device/Kadenz.jpg",
			category: "耳机",
			description: "Tuned to Move.",
			link: "https://moondroplab.com/cn/products/kadenz",
			specs: [
				{
					label: "类别",
					value: "入耳式有线",
					icon: "material-symbols:earbuds-2-outline-rounded",
				},
				{
					label: "单元类型",
					value: "动圈",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "10mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "品牌",
					value: "MOONDROP",
					icon: "mdi:earbuds-outline",
				},
			],
		},
		{
			name: "Joker",
			image: "/images/device/Joker.jpg",
			category: "耳机",
			description: "True to Source.",
			link: "https://moondroplab.com/cn/products/joker",
			specs: [
				{
					label: "类别",
					value: "头戴式",
					icon: "material-symbols:headphones-rounded",
				},
				{
					label: "单元类型",
					value: "动圈",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "50mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "品牌",
					value: "MOONDROP",
					icon: "material-symbols:headphones-rounded",
				},
			],
		},
		{
			name: "Edge",
			image: "/images/device/Edge.jpg",
			category: "耳机",
			description: "To the Edge.",
			link: "https://moondroplab.com/cn/products/edge",
			specs: [
				{
					label: "类别",
					value: "头戴式",
					icon: "material-symbols:headphones-rounded",
				},
				{
					label: "单元类型",
					value: "动圈",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "40mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "品牌",
					value: "MOONDROP",
					icon: "material-symbols:headphones-rounded",
				},
			],
		},
		{
			name: "Quark2 MuseDash",
			image: "/images/device/Quark2.avif",
			category: "耳机",
			description: "Cute Tones.",
			link: "https://moondroplab.com/cn/products/quark2",
			specs: [
				{
					label: "类别",
					value: "入耳式有线",
					icon: "material-symbols:earbuds-2-outline-rounded",
				},
				{
					label: "单元类型",
					value: "动圈",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "7.8mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "联名",
					value: "Muse Dash",
					icon: "material-symbols:music-note-rounded",
				},
			],
		},
	],
	JBL: [
		{
			name: "Tour Pro 3",
			image: "/images/device/TourPro3.png",
			category: "耳机",
			description: "Dare To Listen.",
			link: "https://www.jbl.com/TOUR-PRO-3.html",
			specs: [
				{
					label: "类别",
					value: "真无线入耳",
					icon: "material-symbols:earbuds-2-outline-rounded",
				},
				{
					label: "单元类型",
					value: "动圈 + 动铁",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "11mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "降噪",
					value: "主动降噪",
					icon: "material-symbols:noise-control-off-rounded",
				},
				{
					label: "品牌",
					value: "JBL",
					icon: "mdi:earbuds-outline",
				},
			],
		},
		{
			name: "TUNE 130NC TWS",
			image: "/images/device/130NC.png",
			category: "耳机",
			description: "Pure Bass.",
			link: "https://www.jbl.com/TUNE130NCTWS-.html",
			specs: [
				{
					label: "类别",
					value: "真无线入耳",
					icon: "material-symbols:earbuds-2-outline-rounded",
				},
				{
					label: "单元类型",
					value: "动圈",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "单元大小",
					value: "10mm",
					icon: "material-symbols:straighten-rounded",
				},
				{
					label: "降噪",
					value: "主动降噪",
					icon: "material-symbols:noise-control-off-rounded",
				},
				{
					label: "品牌",
					value: "JBL",
					icon: "mdi:earbuds-outline",
				},
			],
		},
	],
	QoA: [
		{
			name: "云之境",
			image: "/images/device/qoa.jpg",
			category: "耳机",
			description: "",
			link: "https://qoa-audio.com/",
			specs: [
				{
					label: "类别",
					value: "入耳式有线",
					icon: "material-symbols:earbuds-2-outline-rounded",
				},
				{
					label: "单元类型",
					value: "动圈 + 平板",
					icon: "material-symbols:graphic-eq-rounded",
				},
				{
					label: "品牌",
					value: "Queen of Audio",
					icon: "mdi:earbuds-outline",
				},
			],
		},
	],
};
