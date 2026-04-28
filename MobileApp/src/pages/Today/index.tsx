import { useState } from 'react'
import { Card, Grid, List, Swiper } from 'antd-mobile'
import {
  ArrowDownCircleOutline,
  CheckCircleFill,
  ClockCircleOutline,
  DownCircleOutline,
  FireFill,
  HeartFill,
  ShopbagOutline,
  TravelOutline,
  UpCircleOutline,
} from 'antd-mobile-icons'
import './index.less'

function Today() {
  const [overviewIndex, setOverviewIndex] = useState(0)
  const isRealtime = overviewIndex === 1

  return (
    <div className='today-page'>
      <div className='today-header'>
        <h1>今日概览</h1>
        <div className={`source-badge ${isRealtime ? 'realtime' : 'estimate'}`}>
          <span>{isRealtime ? <ClockCircleOutline /> : 'f(x)'}</span>
          {isRealtime ? '实时' : '估算'}
        </div>
      </div>

      <Swiper className='overview-swiper' onIndexChange={setOverviewIndex}>
        <Swiper.Item>
          <div className='overview-slide'>
            <Card className='summary-card'>
              <div className='summary-row'>
                <div className='summary-item'>
                  <div className='summary-icon orange'><ShopbagOutline /></div>
                  <div className='summary-value'>626</div>
                  <div className='summary-label'>摄入</div>
                </div>

                <div className='summary-operator'>-</div>

                <div className='summary-item'>
                  <div className='summary-icon red'><FireFill /></div>
                  <div className='summary-value'>1732</div>
                  <div className='summary-label'>消耗</div>
                </div>

                <div className='summary-operator'>=</div>

                <div className='summary-item'>
                  <div className='summary-icon green'><ArrowDownCircleOutline /></div>
                  <div className='summary-value green'>1106</div>
                  <div className='summary-label'>缺口</div>
                </div>
              </div>

              <div className='summary-footer'>
                <div className='summary-left'><CheckCircleFill />还可吃 831 kcal</div>
                <div className='summary-right'>目标缺口 274 kcal</div>
              </div>
            </Card>

            <div className='summary-source'>基于身体数据估算消耗</div>

            <Card className='detail-card'>
              <h3 className='card-title'>今日消耗明细</h3>

              <div className='detail-row'>
                <div className='detail-item'>
                  <div className='detail-icon purple'><HeartFill /></div>
                  <div className='detail-value'>1,259</div>
                  <div className='detail-label'>基础代谢</div>
                </div>

                <div className='detail-item'>
                  <div className='detail-icon green'><TravelOutline /></div>
                  <div className='detail-value'>472</div>
                  <div className='detail-label'>活动消耗(估)</div>
                </div>

                <div className='detail-item'>
                  <div className='detail-icon orange'><FireFill /></div>
                  <div className='detail-value'>1,732</div>
                  <div className='detail-label'>总消耗</div>
                </div>
              </div>
            </Card>
          </div>
        </Swiper.Item>

        <Swiper.Item>
          <div className='overview-slide'>
            <Card className='summary-card'>
              <div className='summary-row'>
                <div className='summary-item'>
                  <div className='summary-icon orange'><ShopbagOutline /></div>
                  <div className='summary-value'>626</div>
                  <div className='summary-label'>摄入</div>
                </div>

                <div className='summary-operator'>-</div>

                <div className='summary-item'>
                  <div className='summary-icon red'><FireFill /></div>
                  <div className='summary-value'>1293</div>
                  <div className='summary-label'>消耗</div>
                </div>

                <div className='summary-operator'>=</div>

                <div className='summary-item'>
                  <div className='summary-icon green'><ArrowDownCircleOutline /></div>
                  <div className='summary-value green'>667</div>
                  <div className='summary-label'>缺口</div>
                </div>
              </div>

              <div className='summary-footer'>
                <div className='summary-left'><CheckCircleFill />还可吃 392 kcal</div>
                <div className='summary-right'>目标缺口 274 kcal</div>
              </div>
            </Card>

            <div className='summary-source'>来自 Apple Watch 实时数据</div>

            <Card className='detail-card'>
              <h3 className='card-title'>今日消耗明细</h3>

              <div className='detail-row'>
                <div className='detail-item'>
                  <div className='detail-icon purple'><HeartFill /></div>
                  <div className='detail-value'>1,259</div>
                  <div className='detail-label'>基础代谢</div>
                </div>

                <div className='detail-item'>
                  <div className='detail-icon green'><ClockCircleOutline /></div>
                  <div className='detail-value'>33</div>
                  <div className='detail-label'>活动消耗</div>
                </div>

                <div className='detail-item'>
                  <div className='detail-icon orange'><FireFill /></div>
                  <div className='detail-value'>1,293</div>
                  <div className='detail-label'>总消耗</div>
                </div>
              </div>
            </Card>
          </div>
        </Swiper.Item>
      </Swiper>

      <h2>营养摄入</h2>

      <Grid columns={3} gap={12} className='nutrition-grid'>
        <Grid.Item>
          <div className='nutrition-card protein'>
            <div className='nutrition-mark'><UpCircleOutline /></div>
            <div className='nutrition-label'>蛋白质</div>
            <div className='nutrition-value'>40.8</div>
            <div className='nutrition-unit'>g</div>
          </div>
        </Grid.Item>

        <Grid.Item>
          <div className='nutrition-card carbs'>
            <div className='nutrition-mark'><DownCircleOutline /></div>
            <div className='nutrition-label'>碳水</div>
            <div className='nutrition-value'>47.8</div>
            <div className='nutrition-unit'>g</div>
          </div>
        </Grid.Item>

        <Grid.Item>
          <div className='nutrition-card fat'>
            <div className='nutrition-mark'><FireFill /></div>
            <div className='nutrition-label'>脂肪</div>
            <div className='nutrition-value'>25.4</div>
            <div className='nutrition-unit'>g</div>
          </div>
        </Grid.Item>
      </Grid>


      <div className='section-header'>
        <h2>今日记录</h2>
        <span>2项</span>
      </div>

      <List className='meal-list'>
        <List.Item>
          <div className='meal-row'>
            <div className='meal-main'>
              <div className='meal-name'>红薯 + 辣椒炒瘦猪肉 + 番茄炒鸡蛋 + 生菜</div>
              <div className='meal-meta'>午餐 · 1:35 PM</div>
            </div>

            <div className='meal-calories'>450 kcal</div>
          </div>
        </List.Item>

        <List.Item>
          <div className='meal-row'>
            <div className='meal-main'>
              <div className='meal-name'>燕麦牛奶 + 鸡蛋</div>
              <div className='meal-meta'>早餐 · 8:20 AM</div>
            </div>

            <div className='meal-calories'>176 kcal</div>
          </div>
        </List.Item>
      </List>
    </div>
  )
}

export default Today
