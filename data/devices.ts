// 设备数据配置文件

export interface Device {
    name: string;
    image: string;
    specs: string;
    description: string;
    link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
    [categoryName: string]: Device[];
} & {
    //自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 12",
			image: "/images/device/oneplus12.jpg",
			specs: "Snapdragon 8gen3 Black / 16GB + 512GB",
			description: "Never Settle.",
			link: "https://www.oneplus.com/cn/12",
		},
	],
	ROG: [
		{
			name: "Zephyrus G14 2025",
			image: "/images/device/Zephyrus.png",
			specs: "Ryzen AI 9 HX 370 White / 32GB + 1TB",
			description: "Performance, Uncompromised.",
			link: "https://rog.asus.com.cn/laptops/rog-zephyrus/rog-zephyrus-g14-2025/",
		},
	],
	Apple: [
		{
			name: "MacBook Air 13 2020",
			image: "/images/device/MBA-M1.jpg",
			specs: "Apple Silicon M1 Black / 8GB + 256GB",
			description: "Speed of lightness.",
			link: "https://www.apple.com.cn/macbook-air/",
		},
	],
	Microsoft: [
		{
			name: "Surface Pro 3",
			image: "https://surfacetip.com/wp-content/uploads/2016/08/device-surface-pro-3-e1471925568336.png",
			specs: "4GB + 256GB",
			description: "The Original Hybrid.",
			link: "https://support.microsoft.com/zh-cn/surface/surface-pro-3-%E8%A7%84%E6%A0%BC%E5%92%8C%E5%8A%9F%E8%83%BD-4c142a41-134f-f22b-0142-a5cf073b56ee3",
		},
	],
	MOONDROP: [
		{
			name: "Kadenz",
			image: "/images/device/Kadenz.jpg",
			specs: "10mm 动圈单元",
			description: "Tuned to Move",
			link: "https://moondroplab.com/cn/products/kadenz",
		},
		{
			name: "Joker",
			image: "/images/device/Joker.jpg",
			specs: "50mm 动圈单元",
			description: "True to Source.",
			link: "https://moondroplab.com/cn/products/joker",
		},
		{
			name: "Edge",
			image: "/images/device/Edge.jpg",
			specs: "40mm 动圈单元",
			description: "To the Edge.",
			link: "https://moondroplab.com/cn/products/edge",
		},
		{
			name: "Qurak2 MuseDash",
			image: "/images/device/Quark2.avif",
			specs: "7.8mm 动圈单元",
			description: "Cute Tones.",
			link: "https://moondroplab.com/cn/products/quark2",
		},
	],
};
