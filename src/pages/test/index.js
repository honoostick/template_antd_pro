import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Icon, Input, Select, Upload, message, Modal, Menu, Tabs } from 'antd';
import testImg from '@/assets/black.png';
import viewImg from '@/assets/view.png';
import likeImg from '@/assets/like.png';
import favImg from '@/assets/fav.png';
import styles from './style.less'

import Work from './work';
import Boo from './boo';

@connect(({ test }) => test)
class Page extends Component {
  renderWorks = () => {
    const { listData } = this.props;
    return (
      <div className={styles.worksList}>
        {
          listData && listData.map(
            v => (
              <Work
                key={v.id}
                pic={v.pic}
                name={v.title}
                tag={v.tag}
                viewCount={v.view}
                likeCount={v.like}
                favCount={v.fav}
                date={v.date}
                isProtected={v.protect}
              />
            ))
        }
      </div>
    )
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className={styles.main}>
        <div>
          <Menu className={styles.menu} mode="horizontal" >
            <Menu.Item className={styles.item}>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
          </Menu>
        </div>
        <Tabs>
          <Tabs.TabPane tab="tab1" key="1">1</Tabs.TabPane>
          <Tabs.TabPane tab="tab2" key="2">1</Tabs.TabPane>
          <Tabs.TabPane tab="tab3" key="3">1</Tabs.TabPane>
        </Tabs>
        <div>
          <div>
            <Button onClick={() => {
              dispatch({
                type: 'test/testList',
              })
            }}>改数据</Button>
          </div>
          <div>
            {this.renderWorks()}
            <Boo />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
