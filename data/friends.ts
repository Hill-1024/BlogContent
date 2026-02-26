// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
    {
        id: 1,
        title: "Teru",
        imgurl: "https://avatars.githubusercontent.com/u/59642397?v=4",
        desc: "時雨繋ぎ、時暮灯し",
        siteurl: "https://keqing.moe",
        tags: [],
    },
    {
        id: 2,
        title: "Rkk",
        imgurl: "https://blog.rkk.moe/images/profile.webp",
        desc: "Ricky 的各种日常捏",
        siteurl: "https://blog.rkk.moe/",
        tags: [],
    },
    {
        id: 3,
        title: "GamerNoTitle",
        imgurl:"https://assets.bili33.top/img/AboutMe/logo-mini.png",
        desc: "TECH OTAKUS SAVE THE WORLD",
        siteurl: "https://bili33.top",
        tags: [],
    },
    {
        id: 4,
        title: "xihale",
        imgurl: "https://xihale.top/avatar.jpg",
        desc: "宁肯少些，也要好些",
        siteurl: "https://xihale.top/",
        tags: [],
    }
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	let shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
    //shuffled.push({id: 0,title: "Hill",imgurl: "https://blog.hill-q.com/assets/home/avatar.jpg",desc:"Just Foward",siteurl:"https://blog.hill-q.com",tags: []})
	return shuffled;
}
