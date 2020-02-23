import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Icon, Input, Select, Upload, message, Modal } from 'antd';
import testImg from '@/assets/black.png';
import viewImg from '@/assets/view.png';
import likeImg from '@/assets/like.png';
import favImg from '@/assets/fav.png';
import styles from './style.less'

@connect(({ boo }) => boo)
class Page extends Component {
  render() {
    // const { listData } = this.props;
    return (
      <div className={styles.main}>
        111
      </div>
    );
  }
}

export default Page;
