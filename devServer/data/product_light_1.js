/*
 *  demo 用的探照燈
 *
 */

let data = {
	name: {
		text: '節能探照燈',
		useOn: {
			text: '工業用',
			color: 'warning',
		},
	},
	good: [
		{
			title: '價格',
			content: '合理的服務收費',
			color: 'info',
		},
		{
			title: '節能',
			content: '高效能電池',
			color: 'success',
		},
		{
			title: '節能',
			content: '重量輕散熱好',
			color: 'success',
		},
		{
			title: '節能',
			content: '節能80%',
			color: 'success',
		},
		{
			title: '安全',
			content: '無紅紫外線 不傷眼',
			color: 'danger',
		},
		{
			title: '高品質',
			content: '高品質台灣封裝晶片',
			color: 'primary',
		},
		{
			title: '高品質',
			content: '車旅本體堅固不變形',
			color: 'primary',
		},
	],
	img: 'asset/img/demo.png',
	imgBox: [
		{
			url: 'asset/img/demo2.jpg',
			title: '家庭用太陽能板',
			describe: '300X400平方米，高效能太陽能板每年創能3000w',
		},
		{
			url: 'asset/img/demo2.jpg',
			title: '家庭用太陽能板',
			describe: '300X400平方米，高效能太陽能板每年創能3000w',
		},
		{
			url: 'asset/img/demo2.jpg',
			title: '家庭用太陽能板',
			describe: '300X400平方米，高效能太陽能板每年創能3000w',
		},
		{
			url: 'asset/img/demo2.jpg',
			title: '家庭用太陽能板',
			describe: '300X400平方米，高效能太陽能板每年創能3000w',
		},
	],
	describe: {
		title: '節能探照燈說明',
		content: [
			'探照燈在軍事方面的使用開始於19世紀，日俄戰爭時雙方的海軍戰艦都用探照燈於夜間搜尋敵方小型魚雷艇。探照燈也常見於海防岸炮陣地與空防部隊。一次大戰約翰·弗雷德里克·查爾斯·富勒首次使用探照燈製造所謂的「人造月光」來輔助夜戰，二次大戰時也曾使用相同的戰術。',
			'二次大戰時期探照燈曾被大量使用於對抗敵方的夜間空襲。當時的防空炮兵同時使用兩具探照燈，由探照燈的仰角可以用三角函數計算出敵方轟炸機的確實高度，然後用以設定高射砲彈信管，達到最大的效果。探照燈對使用光學式投彈瞄準器的轟炸機也能造成相當程度的干擾。',
			'二次大戰時期通用電氣製造的探照燈使用陀螺儀式的燈架，直徑達152.4公分鍍銠的盤狀凹面鏡，尖峰輸出達8億蠋光的碳電弧光源，專用的15 千瓦的發電機，有效照距可達45到56公里[1]。',
			'由於電子監視設備技術的發展，探照燈的軍事用途日漸減少。現今，多數用於廣告，例如汽車經銷商的促銷活動、電影的首映等。'
		],
	},
	ques: [
		{
			Q: {
				text: '請問您最快能多久出貨?',
				color: 'success',
			},
			A: {
				content: [
					'您好，在訂單成立後，小數量訂購能在當天出貨，大量訂購是狀況而定'
				],
			},
		},
		{
			Q: {
				text: '請問燈泡架損毀該如何處製?',
				color: 'info',
			},
			A: {
				content: [
					'傳統省電燈泡並不耐經常點滅及潮濕，對於需要經常點滅或潮濕的場所（例如：浴室、廁所、陽台），電燈泡較省電燈泡更為適合。白熾燈（包含鹵素燈）的光譜是連續而且平均的，擁有極佳演色性的優點；而螢光燈、LED是離散光譜，演色性低，低演色性光源不但會讓人覺得顏色不好看、對於健康及視力也有害。傳統燈泡還有可調光、耐點滅及無汞的優點。'
				],
			},
		},
		{
			Q: {
				text: '請請問能使用多久，淘汰率為何?',
				color: 'warning',
			},
			A: {
				content: [
					'鹵素燈泡（Halogen lamp），亦稱鎢鹵燈泡，是白熾燈的一種。原理是在燈泡內注入碘或溴等鹵素氣體。在高溫下，蒸發的鎢絲與鹵素進行化學作用，蒸發的鎢會重新凝固在鎢絲上，形成平衡的循環，避免鎢絲過早斷裂。因此鹵素燈泡比白熾燈更長壽。此外，鹵素燈泡亦能以比一般白熾燈更高的溫度運作，它們的亮度及效率亦更高。不過在這溫度下，普通玻璃可能會軟化。',
					'因此鹵素燈泡需要採用熔點更高的熔凝石英或硬的玻璃。而由於石英玻璃不能阻隔紫外線，故此鹵素燈泡通常都而需要另外使用紫外線濾鏡。'
				],
			},
		},
	],
	detail: [
		{
			key: 'small',
			text: '小型',
			img: 'asset/img/demo.png',
			imgText: '小型節能探照燈',
			info: [
				{
					item: '瓦數',
					params: '3w',
				},
				{
					item: '形式',
					params: '倒光柱',
				},
				{
					item: '色溫',
					params: '黃光/白光',
				},
				{
					item: '流明',
					params: '1000LM±3%',
				},
				{
					item: '尺寸',
					params: '160x45mm',
				},
			]
		},
		{
			key: 'mdivKey',
			text: '中型',
			img: 'asset/img/demo.png',
			imgText: '中型節能探照燈',
			info: [
				{
					item: '瓦數',
					params: '6w',
				},
				{
					item: '形式',
					params: '倒光柱2',
				},
				{
					item: '色溫',
					params: '黃光/白光/強光',
				},
				{
					item: '流明',
					params: '1000LM±3%',
				},
				{
					item: '尺寸',
					params: '200x100mm',
				},
			]
		},
		{
			key: 'large',
			text: '大型',
			img: 'asset/img/demo.png',
			imgText: '中型節能探照燈',
			info: [
				{
					item: '瓦數',
					params: '12w',
				},
				{
					item: '形式',
					params: '倒光柱3',
				},
				{
					item: '色溫',
					params: '白光/強光/炙白光',
				},
				{
					item: '流明',
					params: '1000LM±3%',
				},
				{
					item: '尺寸',
					params: '200x100mm',
				},
			]
		},
	]
};

module.exports = data;