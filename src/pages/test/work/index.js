import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Icon, Input, Select, Upload, message, Modal } from 'antd';
import moment from 'moment';
import testImg from '@/assets/black.png';
import viewImg from '@/assets/view.png';
import likeImg from '@/assets/like.png';
import favImg from '@/assets/fav.png';
import lockImg from '@/assets/lock.png';
import styles from './style.less'

export const VerifyState = {
  get NO() { return 1; },
  get VERIFYING() { return 2; },
  get REFUSED() { return 3; },
  get PASSED() { return 4; },
}

const Work = ({
  pic,
  name,
  tag,
  viewCount,
  likeCount,
  favCount,
  date,
  isRawDate,
  isProtected,
  verifyState,
}) => {
  let realDate = date;
  if (isRawDate) {
    const days = moment(date).diff(moment(), 'days');
    if (days <= 30) {
      realDate = `${days}天前`;
    }
  }
  return (
    <div className={styles.work}>
      <div className={styles['opt-help1']}>
        <div className={styles['opt-help2']}>
          <div className={styles.opt}>
            <div className={styles['opt-btn']}>编辑</div>
            <div className={styles.line} />
            {verifyState !== VerifyState.REFUSED && <div className={styles['opt-btn']}>分享</div>}
            <div className={styles.line} />
            <div className={styles['opt-btn']}>删除</div>
          </div>
        </div>
      </div>
      <img className={styles.pic} src={pic} alt="" />
      <div className={styles.info}>
        <div className={styles['info-top']}>{name}</div>
        {
          tag ? <div className={styles['info-tag']}>{tag}</div> :
            <div className={styles['info-tag-empty']} />
        }
        <div className={styles['info-mid']}>
          <div>
            <img className={styles['info-icon']} src={viewImg} alt="" />
            <div className={styles['info-count']}>{viewCount}</div>
          </div>
          <div>
            <img className={styles['info-icon']} src={likeImg} alt="" />
            <div className={styles['info-count']}>{likeCount}</div>
          </div>
          <div>
            <img className={styles['info-icon']} src={favImg} alt="" />
            <div className={styles['info-count']}>{favCount}</div>
          </div>
        </div>
        <div className={styles['info-bottom']}>
          <div className={styles.line} />
          <div className={styles['info-date']}>{realDate}</div>
          <div className={styles['info-bottom-right']}>
            {isProtected && <img className={styles['info-icon']} src={lockImg} alt="" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
