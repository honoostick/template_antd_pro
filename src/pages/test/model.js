const Model = {
  namespace: 'test',
  state: {
    listData: [{
      id: 1,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '产品产品产品产品产品产品产品产品产品产品产品产品产品产品产品',
      date: '2019-09-10',
      tag: '',
      view: 12312,
      like: 9538,
      fav: 32,
    },
    {
      id: 2,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '我的设计',
      date: '2019-09-10',
      tag: '',
      view: 12312,
      like: 9538,
      fav: 12984,
      protect: true,
    },
    {
      id: 3,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '设计294',
      date: '2019-09-10',
      tag: '入围灵犀奖',
      view: 12312,
      like: 9538,
      fav: 39,
    },
    {
      id: 4,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '设计设计',
      date: '2019-09-10',
      tag: '开山之作',
      view: 12312,
      like: 9538,
      fav: 348,
    },
    {
      id: 5,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '设计',
      date: '2019-09-10',
      tag: '平庸作品',
      view: 12312,
      like: 9538,
      fav: 395,
    },
    {
      id: 6,
      pic: 'http://chuantu.xyz/t6/702/1569393948x3752237043.jpg',
      title: '设计',
      date: '2019-09-10',
      tag: '红点奖',
      view: 12312,
      like: 9538,
      fav: 3959,
    }],
  },
  effects: {
    *fetch(_, { call, put }) {
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    testList(state) {
      const list = [...state.listData]
      list[0].name = 1
      return {
        ...state,
        listData: list,
      }
    },
  },
};
export default Model;
