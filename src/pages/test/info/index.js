import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Icon, Input, Select, Upload, message, Modal } from 'antd';
import testImg from '@/assets/black.png';
import viewImg from '@/assets/view.png';
import likeImg from '@/assets/like.png';
import favImg from '@/assets/fav.png';
import styles from './style.less'

@connect(({ userInfo }) => userInfo)
class Page extends Component {
  renderWorks = v => (
    <div className={styles.works} key={v.id}>
      <div className={styles['opt-help1']}>
        <div className={styles['opt-help2']}>
          <div className={styles.opt}>
            <div className={styles['opt-btn']}>编辑</div>
            <div className={styles.line}/>
            <div className={styles['opt-btn']}>分享</div>
            <div className={styles.line}/>
            <div className={styles['opt-btn']}>删除</div>
          </div>
        </div>
      </div>
      <img className={styles.pic} src={testImg} alt="" />
      <div className={styles.info}>
        <div className={styles['info-top']}>作品名称作品名称作品名称</div>
        <div className={styles['info-tags']}>
          <div className={styles['info-tag']}>工业设计</div>
        </div>
        <div className={styles['info-mid']}>
          <div>
            <img className={styles['info-icon']} src={viewImg} alt="" />
            <div className={styles['info-count']}>1938</div>
          </div>
          <div>
            <img className={styles['info-icon']} src={likeImg} alt="" />
            <div className={styles['info-count']}>{v.like}</div>
          </div>
          <div>
            <img className={styles['info-icon']} src={favImg} alt="" />
            <div className={styles['info-count']}>{v.like}</div>
          </div>
        </div>
        <div className={styles['info-bottom']}>
          <div className={styles.line} />
          <div className={styles['info-date']}>18天前</div>
        </div>
      </div>
    </div>
  )

  render() {
    const { listData } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.worksList}>
          {listData && listData.map(v => this.renderWorks(v))}
        </div>
      </div>
    );
  }
}

export default Page;
