var data = [
  { title: '高雄市 綠屋頂補助',
    img: 'http://www.kcg.gov.tw/images/logo.png',
    url: 'http://www.kcg.gov.tw/NewsAgencies_Detail.aspx?n=55FBD506EA78B3AB&ss=67D6DC995F4547E5' },

  { title: '台南市 主題網站 ',
    img: 'http://tainan.carbon.net.tw/savepower/Style/LOGO.png',
    url: 'http://tainan.carbon.net.tw/savepower/Default.aspx' },

  { title: '集合式住宅',
    img: 'http://tainan.carbon.net.tw/savepower/Style/Page_Pic/Page_Logo.png',
    url: 'http://tainan.carbon.net.tw/savepower/savepower_Community_way.aspx' },

  { title: '中小企業 ',
    img: 'http://tainan.carbon.net.tw/savepower/Style/Page_Pic/Page_Logo.png',
    url: 'http://tainan.carbon.net.tw/savepower/savepower_company_way.aspx' },

  { title: '個人家庭 ',
    img: 'http://tainan.carbon.net.tw/savepower/Style/Page_Pic/Page_Logo.png',
    url: 'http://tainan.carbon.net.tw/savepower/savepower_person_way.aspx' },

  { title: '低碳里競賽 ',
    img: 'http://tainan.carbon.net.tw/savepower/Style/Page_Pic/Page_Logo.png',
    url: 'http://tainan.carbon.net.tw/savepower/lowcarbon.aspx' },

  { title: '嘉義縣 主題網站(尚無內容) ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Emblem_of_Chiayi_County.svg/2000px-Emblem_of_Chiayi_County.svg.png',
    url: 'http://www.cyhg.gov.tw/wSite/ct?xItem=9241&ctNode=15106&mp=11' },

  { title: '台中市 網站 (尚無內容) ',
    img: 'http://www.economic.taichung.gov.tw/public/MMO/111010/h1_EconomicDevelopment.png',
    url: 'http://www.economic.taichung.gov.tw/np.asp?ctNode=23040&mp=111015' },

  { title: '新竹市 主題網站 ',
    img: 'http://energy-smart.hccg.gov.tw/img/logo.jpg',
    url: 'http://energy-smart.hccg.gov.tw/news.jsp' },

  { title: '桃園縣 社區節電競賽 ',
    img: 'http://www.tydep.gov.tw//TYDEP/Content/images/header_logo.png',
    url: 'http://www.tydep.gov.tw/TYDEP/Message/Detail/268' },

  { title: '桃園縣 社區、商號、大樓節能診斷服務諮詢',
    img: 'http://www.tydep.gov.tw//TYDEP/Content/images/header_logo.png',
    url: 'http://www.tydep.gov.tw/TYDEP/Message/Detail/178' },

  { title: '節能廠商免費安裝節能設備服務平台 ',
    img: 'http://carbon.tyepb.gov.tw/zh-tw/theme/img/logo/main.png',
    url: 'http://carbon.tyepb.gov.tw/zh-tw/life_430.html' },

  { title: '基隆市 家庭節電抽獎 ',
    img: 'http://www.klepb.gov.tw/img/logo.jpg',
    url: 'http://www.klepb.gov.tw/news/index-1.asp?m1=11&m2=56&gp=&id=3339' },

  { title: '新北市 家庭住宅糾團結電',
    img: 'http://aviation.tydep.gov.tw/TYAN_ADMIN/Files/Link%5C201301%5Clink-12.jpg',
    url: 'http://www.epd.ntpc.gov.tw/web/News?command=showDetail&postId=335685' },

  { title: '服務業「建置智慧雲端電力管理系統」與「實施節能措施」補助',
    img: 'http://www.ntc-powersavingawards.tw/uploads/others/49566_07e9a0a3381ce06d7398212e057e32409.png',
    url: 'http://www.ntc-powersavingawards.tw/news2.php?id=72' },

  { title: '台北市 主題網站 ',
    img: 'http://energy-taipei.ftis.org.tw/image/logo.png',
    url: 'http://energy-taipei.ftis.org.tw/' },

  { title: '臺北市社區照明翻新補助計畫 ',
    img: 'http://energy-taipei.ftis.org.tw/image/logo.png',
    url: 'http://energy-taipei.ftis.org.tw/news_in.aspx?sno=141' },

  // { title: '公司商號或商辦大樓管委會',
  //   url: 'http://www.doed.gov.taipei/public/Attachment/56241574316.pdf' },

  // { title: '社區、里辦公室、機關的台北市節能領導獎 ',
  //   url: 'https://www.ftis.org.tw/savemoney/' },

  { title: '買節能產品  憑發票登錄抽大獎  ',
    img: 'http://www.taipeienergy.taipei/front/images/logo_34.png',
    url: 'http://www.taipeienergy.taipei/front/' },

  { title: '社區節能輔導申請',
    img: 'http://www.dep-greengas.gov.taipei/GIPDSD/xslGip/xslExport/11000L/0904/images/[1]%E7%92%B0%E4%BF%9D%E5%B1%80Logo.jpg',
    url: 'http://www.dep-greengas.gov.taipei/ct.asp?xItem=98592270&CtNode=77355&mp=11000L' },

  { title: '臺北市獎勵旅館業節電計畫',
    img: 'http://energy-taipei.ftis.org.tw/image/logo.png',
    url: 'http://energy-taipei.ftis.org.tw/reward_in.aspx?sno=163' },

  { title: '宜蘭縣 台東縣 2015臺東縣村里民百萬節電獎金爭霸賽',
    img: 'http://www.taitung.gov.tw/images/logo.png',
    url: 'http://www.taitung.gov.tw/News_Content.aspx?n=E4FA0485B2A5071E&sms=E13057BB37942D3F&s=B33FF6BA036A4AB5' },

  { title: '屏東縣 主題網站(暫無內容) ',
    img: 'http://www.pthg.gov.tw/images/logo.png?1433304298',
    url: 'http://www.pthg.gov.tw/cp.aspx?n=68157282E4F292F9' },

  { title: '嘉義市 住戶節電抽獎活動',
    img: 'http://www.cycepb.gov.tw/images/top.gif',
    url: 'http://www.cycepb.gov.tw/messagelist.asp?sno=20150826164700' },

  { title: '購買節能家電補助 ',
    img: 'http://www.cycepb.gov.tw/images/top.gif',
    url: 'http://www.cycepb.gov.tw/newslist.asp?aaa=20150901111157' },

  { title: '雲林縣 彰化縣 彰化縣公寓大廈節能診斷及節電競賽',
    img: 'http://economic.chcg.gov.tw/dep_images/logo/%E5%BB%BA%E8%A8%AD%E8%99%95.png',
    url: 'http://economic.chcg.gov.tw/03bulletin/bulletin02_con.asp?bull_id=194466' },

  { title: '中小企業節能輔導與研習推廣',
    img: 'http://economic.chcg.gov.tw/dep_images/logo/%E5%BB%BA%E8%A8%AD%E8%99%95.png',
    url: 'http://economic.chcg.gov.tw/03bulletin/bulletin02_con.asp?bull_id=191944' },

  { title: '苗栗縣 公寓大樓與服務業的節電輔導',
    img: 'http://thisregion.com/trupl/jl/421395106534.png',
    url: 'http://www.miaoli.gov.tw/economic_development/normalContent.php?frontTitleMenuID=948&forewordID=215804&secureChk=0fa75e1abf2635c8190e6e06aef26121' },

  { title: '新竹縣【補充】台電的節電獎勵方案 中小型高壓用電戶的中小企業，包括商業、製造業節電競賽 ',
    img: 'http://resources.3people.com.tw/res/Images/9efeb6f0-b962-4009-8cd7-75bf151cde8a.jpg',
    url: 'http://www.save-power.com.tw/index04.php' },

  { title: '家庭與小商店的省電抽獎 (需登錄) ',
    img: 'http://resources.3people.com.tw/res/Images/9efeb6f0-b962-4009-8cd7-75bf151cde8a.jpg',
    url: 'http://www.save-power.com.tw/index01.php' }
];

module.exports = data;