let appbar = {
	title:  {
		text: '',
		url: '',
	},
	left: {
		dropdown: [
			{
				text: '節能服務',
				content: [
					{ text: '節能裝置', url: '/?page=product&name=name_1', },
					{ text: '節能電路網', url: '', },
					{ text: '居家電路重構', url: '', },
					{ text: '家庭用電監控裝置', url: '', },

					{ text: 'divider', url: '', },

					{ text: '工廠節電燈具', url: '', },
					{ text: '廠房循環系統建置', url: '', },
					{ text: '廠房節電監控', url: '', },
				],
			},
			{
				text: '綠色創能',
				content: [
					{ text: '家用太陽能系統', url: '', },
					{ text: '電路網儲存槽', url: '', },
					{ text: '創能賣回裝置', url: '', },
					{ text: '家用再生能源機制', url: '', },

					{ text: 'divider', url: '', },

					{ text: '廠房太陽能系統', url: '', },
					{ text: '工廠能源再生循環', url: '', },
				],
			},
			{
				text: '智能工程',
				content: [
					{ text: '智能監控系統', url: '', },
					{ text: '智能雲端系統', url: '', },
					{ text: '智能學習系統', url: '', },
					{ text: '家用智能整合', url: '', },
					{ text: '家用智能重構', url: '', },

					{ text: 'divider', url: '', },

					{ text: '廠房智能監控', url: '', },
					{ text: '企業能源智慧管理', url: '', },
				],
			},
		],
		link: [
			{ text: '修繕改裝', url: '/?page=service', },
		],
	},
	right: {
		dropdown: {
			text: '',
			content: [
				{
					text: '',
					url: '',
				}
			],
		},
		link: [
			{
				text: '',
				url: '',
			}
		],
	},
};

module.exports = appbar;