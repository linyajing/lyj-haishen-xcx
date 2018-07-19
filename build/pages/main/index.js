
Page({
    data: {
        scroll: {
            src: ''
        },
        nav: [{
           name: '家庭自用' 
        }, {
            name: '高档礼品'
        }, {
            name: '海参知识'
        }, {
            name: '海参食谱' 
        }],
        product: [{
            image: '../../common/images/wx_6.jpg',
            name: '家庭自用',
            price: 388,
            tag: ['高刺', '高发泡率', '高性价比'] 
         }, {
            image: '../../common/images/wx_7.jpg',
            name: '高档礼品',
            price: 588,
            tag: ['纯淡干', '自然', '无添加'] 
         }]
    },
    onLoad () {
        console.log('onLoad');
    },
    onShow () {
        console.log('onShow');
    },
    onReady () {
        console.log('onReady');
    },
    onHide() {
        console.log('onHide');
    },
    onUnload () {
        console.log('onUnload');
    },
    onPullDownRefresh () {
        console.log('下拉刷新');
    },
    onReachBottom () {
        console.log('列表页上拉触底');
    }
});